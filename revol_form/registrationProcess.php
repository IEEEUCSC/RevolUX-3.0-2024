<?php 

require "connection.php";
require "SMTP.php";
require "PHPMailer.php";
require "Exception.php";
use PHPMailer\PHPMailer\PHPMailer;

$length_email4=$_POST["length_email4"];

$team=$_POST["team"];
$university=$_POST["university"];

$name1=$_POST["name1"];
$name2=$_POST["name2"];
$name3=$_POST["name3"];
$name4=$_POST["name4"];

$email1=$_POST["email1"];
$email2=$_POST["email2"];
$email3=$_POST["email3"];
$email4=$_POST["email4"];

$mobile1=$_POST["mobile1"];
$mobile2=$_POST["mobile2"];
$mobile3=$_POST["mobile3"];
$mobile4=$_POST["mobile4"];

$rs=Database::search("SELECT * FROM `student` WHERE `team`='".$team."' ");
$rs_num=$rs->num_rows;
 if($rs_num==0){
        if($length_email4==0){
            $emails = array($email1, $email2, $email3);
            $check=Database::search("SELECT * FROM `student` WHERE `email` IN ('".$email1."','".$email2."','".$email3."')");

            $check_num=$check->num_rows;

            if($check_num>0){
                echo("Member or Members already registered in another team");
            }else{
                Database::iud("INSERT INTO `student`(`name`,`email`,`mobile`,`team`,`university`) VALUES 
                ('".$name1."','".$email1."','".$mobile1."','".$team."','".$university."'),
                ('".$name2."','".$email2."','".$mobile2."','".$team."','".$university."'),
                ('".$name3."','".$email3."','".$mobile3."','".$team."','".$university."')
                
                ");
                $size_of_emails=sizeof($emails);

                for($x=0;$x<$size_of_emails;$x++){
                    $mail = new PHPMailer;
                    $mail->IsSMTP();
                    $mail->Host = 'smtp.gmail.com';
                    $mail->SMTPAuth = true;
                    $mail->Username = 'pamalidevanga2002@gmail.com';
                    $mail->Password = '*********';
                    $mail->SMTPSecure = 'ssl';
                    $mail->Port = 465;
                    $mail->setFrom('pamalidevanga2002@gmail.com', 'RevolUX 3.0');
                    $mail->addReplyTo('pamalidevanga2002@gmail.com', 'RevolUX 3.0');
                    $mail->addAddress($emails[$x]);
                    $mail->isHTML(true);
                    $mail->Subject = 'Confirmation of Registration';
                    $bodyContent = '
                    <p>We are thrilled to welcome you to the upcoming Designathon! Your registration has been successfully confirmed, and 
                    we are excited to have you join us for this innovative and inspiring event.</p>
                    
                    <b>What to Expect:</b><br/>
                    <ul>
                        <li>Engaging design challenges</li>
                        <li>Networking opportunities with industry experts</li>
                        <li>Collaborative problem-solving sessions</li>
                        <li>Prizes and recognition for outstanding contributions</li>
                    </ul>
                    
                    <p>
                    Should you have any questions or require further information, please do not hesitate to reach out to us
                    </p>
                    
                    <p>Stay tuned for further updates!</p>
                    ';
                    $mail->Body    = $bodyContent;
                
                    if (!$mail->send()) {
                        echo 'Email sending failed.';
                    } else {
                        echo 'success';
                    }
                
                }
            }


        }else{
            $emails = array($email1, $email2, $email3,$email4);
            $check=Database::search("SELECT * FROM `student` WHERE `email` IN ('".$email1."','".$email2."','".$email3."','".$email4."')");

            $check_num=$check->num_rows;
        
            if($check_num>0){
                echo("Member or Members already registered in another team");
            }else{
                Database::iud("INSERT INTO `student`(`name`,`email`,`mobile`,`team`,`university`) VALUES 
                ('".$name1."','".$email1."','".$mobile1."','".$team."','".$university."'),
                ('".$name2."','".$email2."','".$mobile2."','".$team."','".$university."'),
                ('".$name3."','".$email3."','".$mobile3."','".$team."','".$university."'),
                ('".$name4."','".$email4."','".$mobile4."','".$team."','".$university."')
                ");
                
                $size_of_emails=sizeof($emails);

                for($x=0;$x<$size_of_emails;$x++){
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
                    $mail->addAddress($emails[$x]);
                    $mail->isHTML(true);
                    $mail->Subject = 'Competition Registration';
                    $bodyContent = '
                    <p>We are thrilled to welcome you to the upcoming Designathon! Your registration has been successfully confirmed, and 
                    we are excited to have you join us for this innovative and inspiring event.</p>
                    
                    <b>What to Expect:</b><br/>
                    <ul>
                        <li>Engaging design challenges</li>
                        <li>Networking opportunities with industry experts</li>
                        <li>Collaborative problem-solving sessions</li>
                        <li>Prizes and recognition for outstanding contributions</li>
                    </ul>
                    
                    <p>
                    Should you have any questions or require further information, please do not hesitate to reach out to us
                    </p>
                    
                    <p>Stay tuned for further updates!</p>
                    
                    ';
                    $mail->Body    = $bodyContent;
                
                    if (!$mail->send()) {
                        echo 'Email sending failed.';
                    } else {
                        echo 'success';
                    }
                
                }
            }
        }

    



}else{
     echo("Team name already taken");
}







?>