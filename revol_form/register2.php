<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registration</title>
  <link rel="stylesheet" href="bootstrap.css"/>

  <link rel="stylesheet" href="registerStyle.css"/>
  
</head>
<body>
    <div class="container-fluid">
        <div class="mt-5">
        <div class="col-lg-8 offset-lg-2 ">

<div  class="php-email-form">
  <div class="alert alert-success d-none" role="alert" id="alert-div">
    A simple success alert—check it out!
  </div>
  <h2 class="entry-title">
                <a href="blog-single.html">REGISTER</a>
              </h2>
              <h6 style="color: #5ebd61;">For teams with 4 members</h6>
  <div class="form-group mt-3">
    <input type="text" class="form-control" id="team1" placeholder="Team Name" />
  </div>
  <div class="form-group mt-3" >
    <input type="text" class="form-control" id="university" placeholder="University" required>
  </div>
  <div class="row mt-3">
    <div class="col-md-8 form-group">
      <input type="text" name="name" class="form-control" id="name1" placeholder="Member 1" required>
    </div>
    
    <div class="col-md-4 form-group mt-3 mt-md-0">
      <input type="text" class="form-control" name="mobile" id="mobile1" placeholder="Contact Number" required>
    </div>
    <div class="col-md-12 form-group mt-3 mt-md-0">
      <input type="email" class="form-control" name="email" id="email1" placeholder="Email" required>
    </div>
  </div>
  <div class="row">
    <div class="col-md-8 form-group">
      <input type="text" name="name" class="form-control" id="name2" placeholder="Member 2" required>
    </div>
    <div class="col-md-4 form-group mt-3 mt-md-0">
      <input type="text" class="form-control" name="mobile" id="mobile2" placeholder="Contact Number" required>
    </div>
    <div class="col-md-12 form-group mt-3 mt-md-0">
      <input type="email" class="form-control" name="email" id="email2" placeholder="Email" required>
    </div>
    
  </div>
  <div class="row">
    <div class="col-md-8 form-group">
      <input type="text" name="name" class="form-control" id="name3" placeholder="Member 3" required>
    </div>
    <div class="col-md-4 form-group mt-3 mt-md-0">
      <input type="text" class="form-control" name="mobile" id="mobile3" placeholder="Contact Number" required>
    </div>
    <div class="col-md-12 form-group mt-3 mt-md-0">
      <input type="email" class="form-control" name="email" id="email3" placeholder="Email" required>
    </div>
    
  </div>
  <div class="row">
    <div class="col-md-8 form-group">
      <input type="text" name="name" class="form-control" id="name4" placeholder="Member 4" >
    </div>
    <div class="col-md-4 form-group mt-3 mt-md-0">
      <input type="text" class="form-control" name="mobile" id="mobile4" placeholder="Contact Number" required>
    </div>
    <div class="col-md-12 form-group mt-3 mt-md-0">
      <input type="email" class="form-control" name="email" id="email4" placeholder="Email" >
    </div>
    
  </div>
 
  
 
  <div class="text-center" ><button type="submit" onclick="register();">Register</button></div>
</div>

</div>
    </div>
        </div>
    </div>
</body>
</html>