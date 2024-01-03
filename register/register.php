<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script src="https://kit.fontawesome.com/64d58efce2.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="registerStyle.css" />
  <link rel="stylesheet" href="bootstrap.css" />
  <link href="img/favicon.png" rel="icon">
  <title>Register</title>
</head>

<body>
  <div class="container1">
    <div class="forms-container">
      <div class="signin-signup">
        <div class="form1 sign-up-form">

          <div class="card" style="width: 18rem;">
            <img src="./img/tshirt.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
              <div class="input-field" style="width: 100%;">
                <i class="fas fa-envelope"></i>
                <input type="email" placeholder="Email" id="order-email"  style="font-size:10px;"/>
              </div>
              <select class="form-select mt-1" aria-label="Default select example" 
              style="font-size:13px;border-style: solid;width:100%;border-radius:10px;height:6vh;text-align: center;"
              id="size">
                <option selected value="empty" >Select Size</option>
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
              </select>
              <button type="submit" class="btn1 mt-3" style="margin-left: 18%;font-size:15px;" onclick="order();">ORDER</button>
            </div>
          </div>






          <div class="social-media mt-3">
            <div class="alert alert-success" role="alert" style="text-align: center; font-size:15px" id="alert-div2">
              Send the payment slip to 0772282335 via whatsapp
            </div>
          </div>
        </div>
        <div class="form1 sign-in-form">
          <div class="social-media">
            <div class="alert alert-success d-none" role="alert" id="alert-div">
              A simple success alert—check it out!
            </div>
          </div>
          <h2 class="title" style="text-align: center;">REGISTER</h2>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Name" id="name" />
          </div>
          <div class="input-field">
            <i class="fas fa-envelope"></i>
            <input type="email" placeholder="Email" id="email" />
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="text" placeholder="Mobile" id="mobile" />
          </div>
          <button type="submit" class="btn1 solid" onclick="register();">Register</button>


        </div>

      </div>
    </div>

    <div class="panels-container">
      <div class="panel left-panel">
        <div class="content">
          <!-- <h3>DELEGATE T-SHIRT</h3> -->
          <h3>COMPETITION REGISTRATION</h3>
          <p>
          This event would open doors to get exposed to design-related fields that helps to enhance the skills of undergraduates
            and make themselves ready to step to the world of work with confidence.
            <!-- Select your size , make the payment and upload the slip for
            for the mentioned contact number via whatsapp. We are stocked with several sizes -->
            <!-- Be ready to grab yours soon ! Limited Stock available -->
          </p>
          <!-- <button class="btn1 transparent" id="sign-up-btn" disabled>
            
          </button> -->
        </div>
        <img src="img/register.png" class="image" alt="" />
      </div>
      <div class="panel right-panel">
        <div class="content">
          <h3>REGISTER</h3>
          <p>
            This event would open doors to get exposed to design-related fields that helps to enhance the skills of undergraduates
            and make themselves ready to step to the world of work with confidence.
          </p>
          <button class="btn1 transparent" id="sign-in-btn">
            REGISTER
          </button>
        </div>
        <img src="img/register.png" class="image" alt="" />
      </div>
    </div>
  </div>
  <script src="register.js"></script>
  <script src="script.js"></script>
</body>

</html>