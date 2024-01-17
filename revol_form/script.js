const select = document.getElementById('select');

$(document).ready(function () {
    $("#select").change(function () {
        if ($(this).val() == "3")
            $(".member-4").slideUp();
        else
            $(".member-4").slideDown();
    });
});

function validateInput(value, errorMessage) {
    var alertdiv = document.getElementById("alert-div");

    if (value.length === 0) {
        alertdiv.className = "alert alert-warning d-block";
        alertdiv.innerHTML = errorMessage;
        alertUser("warning", errorMessage);
        return false;
    }
    return true;
}

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

function register() {
    var alertdiv = document.getElementById("alert-div");
    var team = document.getElementById("team1");
    var university = document.getElementById("university");

    if (!validateInput(team.value, "Team name is blank"))
        return;

    if (!validateInput(university.value, "Select your University"))
        return;

    // var nic1 = document.getElementById("nic1");
    // var nic2 = document.getElementById("nic2");
    // var nic3 = document.getElementById("nic3");
    // var nic4 = document.getElementById("nic4");

    for (let i = 1; i <= 3; i++) {
        var name = document.getElementById("name" + i);
        var email = document.getElementById("email" + i);
        var mobile = document.getElementById("mobile" + i);
        var nic = document.getElementById("nic" + i);

        if (!validateInput(name.value, "One team should comprise of a minimum 3 members and a maximum of 4 members.")) {
            return;
        }

        // validate nic
        if (!validateNIC(nic.value) && !validateInput("", "Invalid NIC number"))
            return;

        if (mobile.value.length === 0 || mobile.value.length !== 10) {
            alertdiv.className = "alert alert-warning d-block";
            alertdiv.innerHTML = "Mobile number should be 10 digits";
            alertUser("warning", "Mobile number should be 10 digits");
            return;
        }

        if (!validateInput(email.value, "Email of the member is blank")) {
            return;
        }
    }

    if (Math.max(name4.value.length, email4.value.length, mobile4.value.length, nic4.value.length) > 0
        && Math.min(name4.value.length, email4.value.length, mobile4.value.length, nic4.value.length) === 0) {
        alertdiv.className = "alert alert-warning d-block";
        alertdiv.innerHTML = "Complete the details of the fourth member";
        alertUser("warning", "Complete the details of the fourth member");
        return;
    }

    // if ((name4.value.length !== 0 &&
    //     (email4.value.length === 0 || mobile4.value.length === 0)) ||
    //     (name4.value.length === 0 && (email4.value.length !== 0 || mobile4.value.length !== 0))) {
    //     alertdiv.className = "alert alert-success d-block";
    //     alertdiv.innerHTML = "Complete the details of the fourth member";
    //     return;
    // }

    // ajax
    var form = new FormData();

    for (let i = 1; i <= 4; i++) {
        form.append("name" + i, document.getElementById("name" + i).value);
        form.append("email" + i, document.getElementById("email" + i).value);
        form.append("mobile" + i, document.getElementById("mobile" + i).value);
        form.append("nic" + i, document.getElementById("nic" + i).value);
    }

    form.append("team", team.value);
    form.append("university", university.value);

    form.append("length_email4", email4.value.length);
    // form.append("members", memCount.value);
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
        })
        .catch(error => {
            alertdiv.className = "alert alert-danger d-block";
            alertdiv.innerHTML = "Error occurred during the request. Please try again later.";
            alertUser("danger", "Error occurred during the request. Please try again later.");
            console.error("Error:", error);
        });
}
function order(){
    
    var alertdiv=document.getElementById("alert-div2");
    
    var size =document.getElementById("size");
    var name=document.getElementById("tname");
    
    
    var email=document.getElementById("temail");
    var mobile=document.getElementById("tcnum");
    var address=document.getElementById("tadd");
    if(size.value.length==0){
        alertdiv.className="alert alert-success d-block";
        alertdiv.innerHTML="Select your size";
    
    }else if(name.value.length==0){
        alertdiv.className="alert alert-success d-block";
        alertdiv.innerHTML="Enter your name";
    
    }else if(email.value.length==0){
        alertdiv.className="alert alert-success d-block";
        alertdiv.innerHTML="Enter your email";
    }else if(mobile.value.length==0||mobile.value.length!=10){
        alertdiv.className="alert alert-success d-block";
        alertdiv.innerHTML="Mobile is blank";
    }else if(address.value.length==0){
        alertdiv.className="alert alert-success d-block";
        alertdiv.innerHTML="Enter your address";
    }else{
        alertdiv.className="alert alert-success d-none";
        //alert("success");
        var form=new FormData;
        form.append("size",size.value);
        form.append("name",name.value);
        form.append("email",email.value);
        form.append("mobile",mobile.value);
        form.append("address".address.value);

        var r=new XMLHttpRequest();

        // r.onreadystatechange=function(){
        //     if(r.readyState==4){
                
        //         var t =this.responseText;
        //         alert(t);

        //         if(t=="Already Ordered"){
        //             alertdiv.className="alert alert-success d-block";
        //             alertdiv.innerHTML=t;
        //         }else if("success"){
        //             alertdiv.className="alert alert-success d-block";
        //             alertdiv.innerHTML="Order is placed";
        //         }else{

        //         }
                
                
             
                
        //     }
        // }
        // r.open("POST","orderProcess.php",true);
       
        r.send(form);






    }
    
}