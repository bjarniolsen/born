<?php
if (!empty($_POST)) {

	$i = 1;

	echo "Email: " . $_POST['email'] . "\n";
	echo "Telefon: " . $_POST['phone'] . "\n";

	foreach ($_POST['workshop'] as $workshop) {

		echo "Workshop " . $i . "\n";
		echo "Barnets navn: " . $workshop['childname'] . "\n";
		echo "Barnets alder: " . $workshop['childage'] . "\n";

		$i++;
	}

	echo "Besked: " . $_POST['message'] . "\n";


	$to = $_POST['email'];//"root@localhost.com";
	$subject = 'Test Message';
	$message = $_POST['message'];
	$headers = "MIME-Version: 1.0\n" ;
	$headers .= "Content-Type: text/plain; charset=\"iso-8859-1\"\n";
	$headers .= "X-Priority: 1 (Highest)\n";
	$headers .= "X-MSMail-Priority: High\n";
	$headers .= "Importance: High\n";
	$headers .= "From: bjarniolsen@gmail.com\r\n";

	mail($to, $subject, $message, $headers);

}
?>
