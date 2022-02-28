<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;
	use PHPMailer\PHPMailer\SMTP;
	require 'phpmailer/src/PHPMailer.php';
	require 'phpmailer/src/SMTP.php';
	require 'phpmailer/src/Exception.php';
$mail = new PHPMailer(true);
    $mail->isSMTP();  
    $mail->CharSet = 'UTF-8';
    $mail->isHTML(true);
    $mail->SMTPAuth   = true;
    $mail->Host       = 'smtp.gmail.com';
    $mail->Username   = 'prowelins@gmail.com';
    $mail->Password   = '';
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('prowelins@gmail.com', 'Wel'); 
	$mail->addAddress('welinsgg@gmail.com');
	$mail->Subject = 'Chocolate Fountain';

$body = '<h1>Заявка с сайта шоколадных фонтанов:</h1>';

if(trim(!empty($_POST['form-contact-name']))){
  $body.='<p><strong>Имя:</strong> '.$_POST['form-contact-name'].'</p>';
}
if(trim(!empty($_POST['form-contact-phone']))){
  $body.='<p><strong>Номер телефон отправителя:</strong> '.$_POST['form-contact-phone'].'</p>';
}

$mail->Body = $body;

//Отправляем
if (!$mail->send()) {
  $message = 'Ошибка отправки данных формы';
} else {
  $message = 'Данные отправлены! Мы скоро свяжемся с вами!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>