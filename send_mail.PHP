<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mail = new PHPMailer(true);

    try {
        // Configuration du serveur SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = getenv('EMAIL_USER');
        $mail->Password = getenv('EMAIL_PASS');
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Destinataires
        $mail->setFrom($_POST['email'], $_POST['last-name']);
        $mail->addAddress('votre_email@gmail.com'); // Remplacez par votre email de réception

        // Contenu de l'email
        $mail->isHTML(true);
        $mail->Subject = 'Nouveau message de votre portfolio';
        $mail->Body    = 'Nom: ' . $_POST['last-name'] . '<br>Email: ' . $_POST['email'] . '<br>Message: ' . nl2br($_POST['message']);

        $mail->send();
        echo 'Message envoyé avec succès';
    } catch (Exception $e) {
        echo "Le message n'a pas pu être envoyé. Erreur: {$mail->ErrorInfo}";
    }
}
?>

