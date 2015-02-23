<?php

// TODO 
// [] Remember to check un filled fields !!!!
// [] Add message to sassis mail.
// [] Add sassis wording
// [] Change headers From:

if (!empty($_POST)) {

	$i = 1;
	$numOfChildren = 0;
	$price = $_POST['price'];
	$message = "Tak for din tilmelding.\n\n";
	$message .= "Du har tilmeldt ";

	foreach ($_POST['workshop'] as $workshop) {

		$j = 1;
		foreach ($workshop as $key => $child) {

			$message .= $child['childname'] . " (". $child['childage'] . " år)";

			if (count($workshop) > $j) {
				$message .= " og ";
			} else {
				$message .= "";
			}

			$j++;
			$numOfChildren++;
		}

		$message .= " til workshop " . $i;

		if (count($workshop) > $i) {
			$message .= ", samt ";
		} else {
			$message .= "\n\n";
		}

		$i++;
	}

	//echo "Besked: " . $_POST['message'] . "\n";
	$message .= "Du har tilmeldt " . $numOfChildren . " børn. Det bliver " . ($numOfChildren * $price) . " kr.\n\n";
	echo $message;

	// Build mail
	$to = $_POST['email'];//"root@localhost.com";
	$subject = 'Test Message';
	//$message = $_POST['message'];
	$headers = "MIME-Version: 1.0\n" ;
	$headers .= "Content-Type: text/plain; charset=\"iso-8859-1\"\n";
	$headers .= "X-Priority: 1 (Highest)\n";
	$headers .= "X-MSMail-Priority: High\n";
	$headers .= "Importance: High\n";
	$headers .= "From: bjarniolsen@gmail.com\r\n";

	// Send mail
	//mail($to, $subject, $message, $headers);

}

//print_r($_POST);
//echo "Email: " . $_POST['email'] . "\n";
//echo "Telefon: " . $_POST['phone'] . "\n";

?>
