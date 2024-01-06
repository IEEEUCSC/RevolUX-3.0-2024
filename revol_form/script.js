function validateInput(value, errorMessage) {
    var alertdiv = document.getElementById("alert-div");

    if (value.length === 0) {
        alertdiv.className = "alert alert-success d-block";
        alertdiv.innerHTML = errorMessage;
        return false;
    }
    return true;
}

function register() {
    var alertdiv = document.getElementById("alert-div");
    var team = document.getElementById("team1");
    var university = document.getElementById("university");

    if (!validateInput(team.value, "Team name is blank"))
        return;

    if (!validateInput(university.value, "Select your University"))
        return;

    for (let i = 1; i <= 3; i++) {
        var name = document.getElementById("name" + i);
        var email = document.getElementById("email" + i);
        var mobile = document.getElementById("mobile" + i);

        if (!validateInput(name.value, "One team should comprise of minimum of 3 members and a maximum of 4 members.")) {
            return;
        }

        if (mobile.value.length === 0 || mobile.value.length !== 10) {
            alertdiv.className = "alert alert-success d-block";
            alertdiv.innerHTML = "Mobile number should be 10 digits";
            return;
        }

        if (!validateInput(email.value, "Email of the member is blank")) {
            return;
        }
    }

    if ((name4.value.length !== 0 && (email4.value.length === 0 || mobile4.value.length === 0)) || (name4.value.length === 0 && (email4.value.length !== 0 || mobile4.value.length !== 0))) {
        alertdiv.className = "alert alert-success d-block";
        alertdiv.innerHTML = "Complete the details of the fourth member";
        return;
    }

    // ajax
    var form = new FormData();
    var form = new FormData();

    form.append("name1", name1.value);
    form.append("email1", email1.value);
    form.append("mobile1", mobile1.value);

    form.append("name2", name2.value);
    form.append("email2", email2.value);
    form.append("mobile2", mobile2.value);

    form.append("name3", name3.value);
    form.append("email3", email3.value);
    form.append("mobile3", mobile3.value);

    form.append("name4", name4.value);
    form.append("email4", email4.value);
    form.append("mobile4", mobile4.value);

    form.append("team", team.value);
    form.append("university", university.value);

    form.append("length_email4",email4.value.length);
    form.append("register", "register");

    // fetch("registrationProcess", {
    // let url = "http://127.0.0.1/saliya.me.aws/ieeesb/revolux3/";
    let url = "https://saliya.me/ieeesb/revolux3/";
    fetch(url, {
        method: "POST",
        body: form,
    })
        .then(response => response.json())
        .then(data => {
            if (data.status === "200") {
                alertdiv.className = "alert alert-success d-block";
                alertdiv.innerHTML = data.desc;
            } else if (data.status === "403") {
                alertdiv.className = "alert alert-danger d-block";
                alertdiv.innerHTML = data.desc;
            } else if (data.status === "400") {
                alertdiv.className = "alert alert-danger d-block";
                alertdiv.innerHTML = data.desc;
            } else {
                alertdiv.className = "alert alert-danger d-block";
                alertdiv.innerHTML = "Unexpected response from the server";
            }
        })
        .catch(error => {
            alertdiv.className = "alert alert-danger d-block";
            alertdiv.innerHTML = "Error occurred during the request. Please try again later.";
            console.error("Error:", error);
        });
}
