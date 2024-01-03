<?php 

require "connection.php";

$email=$_POST["email"];
$size=$_POST["size"];

$srs=Database::search("SELECT * FROM `student` WHERE `email`='".$email."'");
$srs_num=$srs->num_rows;
$trs=Database::search("SELECT * FROM `tshirt` WHERE `email`='".$email."'");
$trs_num=$trs->num_rows;

if($srs_num==0){
    echo ("You are not registered for the competition");
}else{
    if($trs_num==0){
        Database::iud("INSERT INTO `tshirt`(`email`,`size`) VALUES ('".$email."','".$size."')");
        echo("success");
    }else{
        echo ("Already ordered");
    }
    
}





?>