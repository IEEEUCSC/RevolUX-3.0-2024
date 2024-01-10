function validateNIC(nic) {
    var nicPatternOld = /^[0-9]{9}[vVxX]$/;
    var nicPatternNew = /^[0-9]{12}$/;

    if (nicPatternOld.test(nic) || nicPatternNew.test(nic))
        return true;

    return false;
}

function alertUser(type, desc) {
    var $div = $("<div>", {
        class: "custom-alert " + type + "-alert"
    });
    $div.append("<div class='alert-text'>" + desc + "</div\>")

    var count = $(".custom-alert").length;
    $(".custom-alert").fadeOut(function () {
        $(this).remove();
    });

    $div.hide().delay(count * 200).appendTo("body").fadeIn(function () {
        setTimeout(function () {
            $div.fadeOut(function () {
                $div.remove();
            });
        }, 3000);
    });
}

function validateInput(value, errorMessage) {
    var alertdiv = document.getElementById("alert-div");

    if (value == null || value.length === 0) {
        alertdiv.className = "alert alert-warning d-block";
        alertdiv.innerHTML = errorMessage;
        alertUser("warning", errorMessage);
        return false;
    }

    return true;
}

$(document).ready(function () {
    $("#university").change(function () {
        if ($(this).val() == "other") {
            $("#universityOther").removeClass("d-none");
            $("#universityOther").slideDown();
        } else
            $("#universityOther").slideUp();
    });
});

let last_submit = 1;

function workshop01() {
    var uni = document.getElementById("university");
    var other = document.getElementById("universityOther");
    var name = document.getElementById("name");
    var mobile = document.getElementById("mobile");
    var email = document.getElementById("email");
    var alertdiv = document.getElementById("alert-div");
    var nic = document.getElementById("nic");

    let id_arr = ["university", "name", "mobile", "email", "nic"];
    let err_arr = ["Select your University", "Enter your name", "Mobile is blank", "Enter your email", "Enter your NIC"];
    for (let i = 0; i < id_arr.length; i++) {
        if (!validateInput($("#" + id_arr[i]).val(), err_arr[i]))
            return;
    }

    if (!validateNIC(nic.value) && !validateInput("", "Invalid NIC number"))
        return;

    if (mobile.value.length === 0 || mobile.value.length !== 10) {
        validateInput("", "Mobile number should be 10 digits");
        return;
    }

    let university = document.getElementById("university");

    var form = new FormData;
    if (uni.value == "other") {
        if (!validateInput(other.value, "Enter your University name"))
            return;

        university = other.value;
        form.append("university", other.value);
    } else
        form.append("university", university.value);

    for (let i = 1; i < id_arr.length; i++) {
        form.append(id_arr[i], document.getElementById(id_arr[i]).value);
    }

    form.append("register", "register");

    if (last_submit === 1) {
        last_submit = 0;

        // let url = "http://127.0.0.1/saliya.me.aws/ieeesb/revolux3/workshop01";
        let url = "https://saliya.me/ieeesb/revolux3/workshop01";
        fetch(url, {
            method: "POST",
            body: form,
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === "200") {
                    alertdiv.className = "alert alert-success d-block";
                    alertdiv.innerHTML = data.desc;
                    alertUser("success", data.desc);
                } else if (data.status === "403") {
                    alertdiv.className = "alert alert-danger d-block";
                    alertdiv.innerHTML = data.desc;
                    alertUser("danger", data.desc);
                } else if (data.status === "400") {
                    alertdiv.className = "alert alert-danger d-block";
                    alertdiv.innerHTML = data.desc;
                    alertUser("danger", data.desc);
                } else {
                    alertdiv.className = "alert alert-danger d-block";
                    alertdiv.innerHTML = "Unexpected response from the server";
                    alertUser("danger", "Unexpected response from the server");
                }

                last_submit = 1;
            })
            .catch(error => {
                alertdiv.className = "alert alert-danger d-block";
                alertdiv.innerHTML = "Error occurred during the request. Please try again later.";
                alertUser("danger", "Error occurred during the request. Please try again later.");
                console.error("Error:", error);

                last_submit = 1;
            });
    } else
        alertUser("warning", "Please wait for a moment until the request is processed");

    return
}