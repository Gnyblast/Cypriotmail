<?php
session_start();

$fname = htmlspecialchars($_POST['fname']);
$lname = htmlspecialchars($_POST['lname']);
$email = htmlspecialchars($_POST['email']);
$subject = htmlspecialchars($_POST['subject']);
$msg = htmlspecialchars($_POST['message']);

if(($fname || $lname || $email || $subject || $msg) == "" || (empty($fname) || empty($lname) || empty($email) || empty($subject) || empty($msg))){
	echo "All fields must be filled out.";
} else {
	$fullname = $fname." ".$lname;
	base64_encode($subject);
	 $from="From: $fullname<$email>\r\nReturn-path: $email";
	mail('info@cr8code.co', $subject, $msg, $from);
	echo "Form submitted";
}
?>