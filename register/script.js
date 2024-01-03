function register(){
    //alert("new hi");
    // alertdiv.className="alert alert-success d-none";
    var name=document.getElementById("name");
    var mobile=document.getElementById("mobile");
    var email=document.getElementById("email");
    var alertdiv=document.getElementById("alert-div");

    if(name.value.length==0){
        alertdiv.className="alert alert-success d-block";
        t="Please enter the name"
        alertdiv.innerHTML=t;
       
    }else if(email.value.length==0){
        alertdiv.className="alert alert-success d-block";
        alertdiv.innerHTML="Please enter the email";
        
    }else if(mobile.value.length==0 && mobile.value.length==10 ){
        alertdiv.className="alert alert-success d-block";
        alertdiv.innerHTML="Check your mobile number";
        
    }else{
        var form=new FormData;

        form.append("name",name.value);
        form.append("mobile",mobile.value);
        form.append("email",email.value);

        var r=new XMLHttpRequest();

        r.onreadystatechange=function(){
            if(r.readyState==4){
                var t =this.responseText;
                //alert(t);

                if(t=="Success"){
                    alertdiv.className="alert alert-success d-block";
                    t='Registered for the competition';
                    alertdiv.innerHTML=t;
                }else if(t=="Already registered"){
                    alertdiv.className="alert alert-success d-block";
                    t='Already registered for the competition';
                    alertdiv.innerHTML=t;
                }else{
                    alertdiv.className="alert alert-success d-block";
                    t="Check your details";
                    alertdiv.innerHTML=t;
                }
                
            }
        }
        r.open("POST","registrationProcess.php",true);
       
        r.send(form);
    }
}
function order(){
    //alert("order");
    var size=document.getElementById("size").value;
    var email=document.getElementById("order-email").value;
    var alertBox=document.getElementById("alert-div2");

    if(email.length==0){
        
        t='Check your email';
        alertBox.innerHTML=t;
    }else if(size=='empty'){
        t='Select your size';
        alertBox.innerHTML=t;
    }else{
        var form=new FormData;

        form.append("size",size);
        
        form.append("email",email);

        var r=new XMLHttpRequest();

        r.onreadystatechange=function(){
            if(r.readyState==4){
                var t =this.responseText;
                //alert(t);
                if(t=="success"){
                    //alertdiv.className="alert alert-success d-block";
                    t='Your order is placed.Send the payment slip to 0772282335 via whatsapp';
                    alertBox.innerHTML=t;
                }else if(t=="Already ordered"){
                    //alertdiv.className="alert alert-success d-block";
                    t='Already ordered.Send the payment slip to 0772282335 via whatsapp';
                    alertBox.innerHTML=t;
                }else{
                    //alertdiv.className="alert alert-success d-block";
                    t="Check your details";
                    alertBox.innerHTML=t;
                }
                
            }
        }
        r.open("POST","orderProcess.php",true);
       
        r.send(form);
    }


}