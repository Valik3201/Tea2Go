<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $to = "contact@tea2go.com"; 
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";
    $messageBody = "From: $name <$email>\nSubject: $subject\n\n$message";


    $success = mail($to, $subject, $messageBody, $headers);

    if ($success) {
        echo "Message sent successfully";
    } else {
        echo "Message could not be sent";
    }
} else {
    echo "Invalid request";
}
?>
