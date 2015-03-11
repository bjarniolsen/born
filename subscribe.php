<?php
if (!empty($_POST)) {

	$i = 1;
	$workshopType = "";
	$numOfChildren = 0;
	$price = $_POST['price'];
	$message = "Tak for din tilmelding til Billedkunst for børn v/Sassi Bischoff.\n";
	$message .= "Kulturstationen i Vanløse, spejlsalen\n";
	$message .= "Indgang ved biblioteket\n";
	$message .= "Jernbane Allé 38\n";
	$message .= "2720 Vanløse\n\n";
	$message .= "Du har tilmeldt ";

	$tosassi = "Tilmelding til workshops\n\n";
	$tosassi .= "Email: " . $_POST['email'] . "\n";
	$tosassi .= "Telefon: " . $_POST['phone'] . "\n\n";
	$tosassi .= "Har tilmeldt:\n";

	foreach ($_POST['workshop'] as $index => $workshop) {

		if (isset($_POST['checkbox'][$i])) {

			$j = 1;
			foreach ($workshop as $key => $child) {

				if (!empty($child['childname'])) {

					$message .= $child['childname'] . " (". $child['childage'] . " år)";
					$tosassi .= $child['childname'] . " (". $child['childage'] . " år)";

					if (count($workshop) > $j) {
						$message .= " og ";
						$tosassi .= " og ";
					} else {
						$message .= "";
						$tosassi .= "";
					}

					$j++;
					$numOfChildren++;

				} else {
					echo $message = "error";
					break 2;
				}
			}

			$workshopType = $i === 2 ? "Billedkunsthold 1" : "Workshop " . $i;

			$message .= " til " . $workshopType;
			$tosassi .= " til " . $workshopType;

			if (count($_POST['checkbox']) > $i) {
				$message .= ", samt ";
				$tosassi .= ", samt ";
			} else {
				$message .= ".\n\n";
				$tosassi .= ".\n\n";
			}
		}

		if (count($_POST['workshop']) === $i) {

			//break;

			$message .= "Antal tilmeldinger er " . $numOfChildren . " a " . $price . " kr. Samlet beløb: " . ($numOfChildren * $price) . " kr.\n\n";
			$message .= "Betaling kan ske over mobilpay på tlf: 24873101 eller via kontooverførsel til reg: 3201 Konto: 3201529328.\n";
			$message .= "Mærk din indbetaling med telefonnummer eller mailadresse.\n";
			$message .= "Når din betaling er registreret, er din tilmelding gennemført.\n";
			$message .= "Du modtager en bekræftelse på mail eller sms.\n\n";
			$message .= "I tilfælde af, at holdet ikke kan oprettes ved for få tilmeldte, refunderes din indbetaling.\n";
			$message .= "Husk praktisk tøj som godt må få lidt maling på + evt en drikkedunk og et stykke brød/frugt til pausen.\n\n";
			$message .= "Med Venlig hilsen\n Sassi Bischoff\n";

			echo $message;

			$tosassi .= "Antal tilmeldinger er " . $numOfChildren . " a " . $price . " kr. Samlet beløb: " . ($numOfChildren * $price) . " kr.\n\n";
			$tosassi .= "Personlig besked:\n";
			$tosassi .= "\"" . $_POST['message'] . "\"\n";


			// Build mail
			$to = $_POST['email']; //"root@localhost.com";
			$subject = 'Tak for din tilmelding til Billedkunst for børn v/Sassi Bischoff';
			$message = $message;
			$headers = "MIME-Version: 1.0\n" ;
			$headers .= "Content-Type: text/plain; charset=\"UTF-8\"\n";
			$headers .= "X-Priority: 1 (Highest)\n";
			$headers .= "X-MSMail-Priority: High\n";
			$headers .= "Importance: High\n";
			$headers .= "From: sassibis@hotmail.com\r\n";

			// Send mail
			//mail($to, $subject, $message, $headers);

			// Sassis mail
			//mail("sassibis@hotmail.com", "Tilmelding til workshops", $tosassi, $headers);

		}
		$i++;
	}
}

//print_r($_POST);
?>
