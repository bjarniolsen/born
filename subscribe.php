<?php

$workshops = "";

foreach ($_POST['workshop'] as $key => $value) {
	$workshops .= htmlspecialchars($key) . " || " . htmlspecialchars($value)."\n";
}
if(isset($_POST['email'])) {

	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$message = $_POST['message'];

	if(isset($_POST['workshop-1'])) {
		$workshop = $_POST['workshop-1'];
	}

	if(isset($_POST['workshop-2'])) {
		$workshop = $_POST['workshop-2'];
	}

}

//echo print_r($_POST);

echo $workshops;

//echo $workshop , " - " , $email , " - " , $phone , " - " , $message;

?>
