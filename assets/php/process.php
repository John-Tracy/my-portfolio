<?php
// collects info from ajax post
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];
// email info
$EmailTo = "johnmtracy133@gmail.com";
$Subject = "New Message from Portfolio Website";
// prepare email body
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";

$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";

$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

// sends email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);



if($success){
	echo "success";
}else{
	echo "invalid";
}



?>