function validateNIC(nic) {
    var nicPatternOld = /^[0-9]{9}[vVxX]$/;
    var nicPatternNew = /^[0-9]{12}$/;

    if (nicPatternOld.test(nic) || nicPatternNew.test(nic))
        return true;

    return false;
}

function workshop01(){
    //alert("hi");
    var uni=document.getElementById("university");
    var other=document.getElementById("universityOther");
    var name=document.getElementById("name");
    var mobile=document.getElementById("mobile");
    var email=document.getElementById("email");
    var alertdiv=document.getElementById("alert-div");
    var nic=document.getElementById("nic");
    if(uni.value.length==0){
        //alert("hello");
        alertdiv.className="alert alert-success d-block";
        alertdiv.innerHTML="Select your University";
    }
    // else if(uni.value=="other" && other.className=="form-control d-none mt-3"){
    //     //alert("hello2");
    //     other.className="form-control d-block mt-3";
    // }else if(other.className=="form-control d-block mt-3" && other.value.length==0){
    //     //alert("hello3");
    //     alertdiv.className="alert alert-success d-block";
    //     alertdiv.innerHTML="Mention your University";
    
    // }else if(other.value.length!==0){
    //     uni=other;
    //     //alert(uni.value);
    // }
    else if(name.value.length==0){
        alertdiv.className="alert alert-success d-block";
        alertdiv.innerHTML="Enter your name";
    }else if(mobile.value.length!==10|| mobile.value.length==0){
        alertdiv.className="alert alert-success d-block";
        alertdiv.innerHTML="Mobile is blank";
    }else if(email.value.length==0){
        alertdiv.className="alert alert-success d-block";
        alertdiv.innerHTML="Enter your email";
    }else  if (!validateNIC(nic.value) ){
        //return;
        alertdiv.className="alert alert-success d-block";
        alertdiv.innerHTML="Enter your NIC";
    }else{
        //alert("success");
        var form=new FormData;

        form.append("uni",uni.value);
        form.append("name",name.value);
        form.append("mobile",mobile.value);
        form.append("email",email.value);
        form.append("nic",nic.value);





    }

}