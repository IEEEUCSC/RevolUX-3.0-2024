function register(){
   
    var alertdiv=document.getElementById("alert-div");
    
    var team =document.getElementById("team1");
    var university=document.getElementById("university");
    
    
    var name1=document.getElementById("name1");
    var email1=document.getElementById("email1");
    var mobile1=document.getElementById("mobile1");

    var name2=document.getElementById("name2");
    var email2=document.getElementById("email2");
    var mobile2=document.getElementById("mobile2");
   
    var name3=document.getElementById("name3");
    var email3=document.getElementById("email3");
    var mobile3=document.getElementById("mobile3");
    
    var name4=document.getElementById("name4");
    var email4=document.getElementById("email4");
    var mobile4=document.getElementById("mobile4");

   
     if(team.value.length==0){
        //alert("team name is blank");
        alertdiv.className="alert alert-success d-block";
        t="Team name is blank";
        alertdiv.innerHTML=t;
     }else if(university.value.length==0){
        
        alertdiv.className="alert alert-success d-block";
        alertdiv.innerHTML="Select your University";
     }else if(name1.value.length==0){
        alertdiv.className="alert alert-success d-block";
        t="One team should comprise of a minimum of 3 members and a maximum of up to 4 members."
        alertdiv.innerHTML=t;
     
    } else if(mobile1.value.length==0 || mobile1.value.length!=10 ){
        alertdiv.className="alert alert-success d-block";
        // alertdiv.innerHTML="Mobile number of the first member is blank / Invalid";
        alertdiv.innerHTML="Mobile number should be of 10 digits";
        
    }else if(email1.value.length==0){
        alertdiv.className="alert alert-success d-block";
        alertdiv.innerHTML="Email of the first member is blank";
        
    }
   else if(name2.value.length==0){
        alertdiv.className="alert alert-success d-block";
         t="One team should comprise of a minimum of 3 members and a maximum of up to 4 members."
         alertdiv.innerHTML=t;
       
    }else if(mobile2.value.length==0 || mobile2.value.length!=10 ){
        alertdiv.className="alert alert-success d-block";
        alertdiv.innerHTML="Mobile number of the second member is blank / Invalid";
       
    }else if(email2.value.length==0){
         alertdiv.className="alert alert-success d-block";
         alertdiv.innerHTML="Email of the second member is blank";
        
    }else if(name3.value.length==0){
         alertdiv.className="alert alert-success d-block";
         t="One team should comprise of a minimum of 3 members and a maximum of up to 4 members."
         alertdiv.innerHTML=t;
       
     }else if(mobile3.value.length==0 || mobile3.value.length!=10 ){
        alertdiv.className="alert alert-success d-block";
        alertdiv.innerHTML="Mobile number of the third member is blank / Invalid";
       
    
    }else if(email3.value.length==0){
         alertdiv.className="alert alert-success d-block";
         alertdiv.innerHTML="Email of the third member is blank";
        
     }else if((name4.value.length!=0 && (email4.value.length==0 || mobile4.value.length==0)) ||(name4.value.length==0 && (email4.value.length!=0 || mobile4.value.length!=0)) ){
         alertdiv.className="alert alert-success d-block";
         alertdiv.innerHTML="Complete the details of the fourth member";

     }else{
        alertdiv.className="alert alert-success d-none";
        var form=new FormData;

         form.append("name1",name1.value);
         form.append("email1",email1.value);
         form.append("mobile1",mobile1.value);

         form.append("name2",name2.value);
        form.append("email2",email2.value);
        form.append("mobile2",mobile2.value);
        
        form.append("name3",name3.value);
        form.append("email3",email3.value);
        form.append("mobile3",mobile3.value);

        form.append("name4",name4.value);
        form.append("email4",email4.value);
        form.append("mobile4",mobile4.value);

        form.append("team",team.value);
        form.append("university",university.value);

        form.append("length_email4",email4.value.length);

        var r=new XMLHttpRequest();

        r.onreadystatechange=function(){
            if(r.readyState==4){
                var t =this.responseText;
                //alert(t);
                if(t=="success"){
                    alertdiv.className="alert alert-success d-block";
                    t='The team registered for the competition';
                    alertdiv.innerHTML=t;
                }else if(t=="Team name already taken"){
                    alertdiv.className="alert alert-success d-block";
                    t='The team name is already taken';
                    alertdiv.innerHTML=t;
                }else if(t=="Member or Members already registered in another team"){
                    alertdiv.className="alert alert-success d-block";
                    t='Member or Members already registered in another team';
                    alertdiv.innerHTML=t;
                }else{
                    alertdiv.className="alert alert-success d-block";
                    t="The team registered for the competition. Check your emails";
                    alertdiv.innerHTML=t;
                }
                
             
                
            }
        }
        r.open("POST","registrationProcess.php",true);
       
        r.send(form);
    }
}


