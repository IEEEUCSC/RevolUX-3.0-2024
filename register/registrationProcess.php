<?php 

require "connection.php";
require "SMTP.php";
require "PHPMailer.php";
require "Exception.php";
use PHPMailer\PHPMailer\PHPMailer;

$name1=$_POST["name1"];
$name2=$_POST["name2"];
$name3=$_POST["name3"];
$name4=$_POST["name4"];


$email1=$_POST["email1"];
$email2=$_POST["email1"];
$email3=$_POST["email1"];
$email4=$_POST["email1"];

$team=$_POST["team"];
$university=$_POST["university"];

$rs=Database::search("SELECT * FROM `student` WHERE (`name`='".$name1."' AND `email`='".$email1."') OR
(`name`='".$name2."' AND `email`='".$email2."') OR
(`name`='".$name3."' AND `email`='".$email3."') OR
(`name`='".$name4."' AND `email`='".$email4."') ");
$rs_num=$rs->num_rows;
if($rs_num>=1){
    echo("Already registered");
}else{
    $team_name=Database::search("SELECT * FROM `team` WHERE `name`='".$team."'");
    $team_name_rs=$team_name->num_rows;

    if($team_name_rs!=1){
        Database::iud("INSERT INTO `team`(`name`,`university`) VALUES ('".$team."','".$university."'");
        $team_id=Database::search("SELECT * FROM `team` WHERE `name`='".$team."' AND `university`='".$university."'");
        $team_id_data=$team_id->fetch_assoc();
        if(empty($name4)){
            $Database::iud("INSERT INTO `student`(`name`,`email`,`team_id`) VALUES 
            ('".$name1."','".$email1."','".$team_id_data["id"]."'),
            ('".$name2."','".$email2."','".$team_id_data["id"]."'),
            ('".$name3."','".$email3."','".$team_id_data["id"]."')");
        }else{
            $Database::iud("INSERT INTO `student`(`name`,`email`,`team_id`) VALUES 
            ('".$name1."','".$email1."','".$team_id_data["id"]."'),
            ('".$name2."','".$email2."','".$team_id_data["id"]."'),
            ('".$name3."','".$email3."','".$team_id_data["id"]."'),
            ('".$name4."','".$email4."','".$team_id_data["id"]."')");
        }
        
    
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
        $mail->addAddress($email1,$email2,$email3,$email4);
        $mail->isHTML(true);
        $mail->Subject = 'Competition registration';
        $bodyContent = '<h3 style="color:black">You have successfully registered for the competition.<br/></h3>
                            <table>
                                <tr>
                                    <td>1st workshop - Physical</td>
                                    <td>&nbsp;&nbsp;&nbsp;</td>
                                    <td>January 13, 2024</td>
                                    
                                </tr>
                                <tr>
                                    <td>2nd workshop - Virtual</td>
                                    <td>&nbsp;&nbsp;&nbsp;</td>
                                    <td>January 20, 2024</td>
                                    
                                </tr>
                                <tr>
                                    <td>Initial Design Submission Opening</td>
                                    <td>&nbsp;&nbsp;&nbsp;</td>
                                    <td>January 24, 2024</td>
                                    
                                </tr>
                                <tr>
                                    <td>Initial Design Submission Closing</td>
                                    <td>&nbsp;&nbsp;&nbsp;</td>
                                    <td>January 28, 2024</td>
                                    
                                </tr>
                                <tr>
                                    <td>3rd workshop - Physical</td>
                                    <td>&nbsp;&nbsp;&nbsp;</td>
                                    <td>February 10, 2024</td>
                                    
                                </tr>
                                <tr>
                                    <td>Designathon</td>
                                    <td>&nbsp;&nbsp;&nbsp;</td>
                                    <td>February 17, 2024</td>
                                    
                                </tr>
                            
                            </table>
                            
    
                       ';
        $mail->Body    = $bodyContent;
    
        if (!$mail->send()) {
            echo 'Email sending failed.';
        } else {
            echo 'Success';
        }
    

    }else{
        echo (" Team name is already taken");
    }

   
    
    
    
    
    
    
}


?>