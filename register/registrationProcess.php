<?php 

require "connection.php";
require "SMTP.php";
require "PHPMailer.php";
require "Exception.php";
use PHPMailer\PHPMailer\PHPMailer;

$name=$_POST["name"];
$mobile=$_POST["mobile"];
$email=$_POST["email"];

$rs=Database::search("SELECT * FROM `student` WHERE `name`='".$name."' AND `email`='".$email."' AND `mobile`='".$mobile."'");

$rs_num=$rs->num_rows;
if($rs_num==1){
    echo("Already registered");
}else{
    Database::iud("INSERT INTO `student`(`name`,`mobile`,`email`) VALUES ('".$name."','".$mobile."','".$email."')");
    
    $mail = new PHPMailer;
    $mail->IsSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'pamalidevanga2002@gmail.com';
    $mail->Password = 'cxdgyjfbgesdtxma';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->setFrom('pamalidevanga2002@gmail.com', 'RevolUX 3.0');
    $mail->addReplyTo('pamalidevanga2002@gmail.com', 'RevolUX 3.0');
    $mail->addAddress($email);
    $mail->isHTML(true);
    $mail->Subject = 'Competition registration';
    $bodyContent = '<h3 style="color:black">You have successfully registered for the awareness session.<br/>
                    Date - 07 <sup>th</sup> of January<br/><br/>
                    </h3>
                    <h4 style="color:red;">
                    Registrations for the competition will also be opening on the 7 <sup>th</sup> of January
                    </h4>';
    $mail->Body    = $bodyContent;

    if (!$mail->send()) {
        echo 'Email sending failed.';
    } else {
        echo 'Success';
    }

    
    
    
    
    
    
}


?>