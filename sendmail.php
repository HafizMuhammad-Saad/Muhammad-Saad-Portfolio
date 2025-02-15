
 <?php 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(
        !empty($_POST['name']) &&
        !empty($_POST['email']) &&
        !empty($_POST['message'])
    ) {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];
        $email = $_POST["email"];
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "Invalid email format";
            exit;
        }
        $mail = new PHPMailer(true);
        try {
            //Server settings
            $mail->isSMTP();
            $mail->Host = 'smtp.example.com'; // Set the SMTP server to send through
            $mail->SMTPAuth = true;
            $mail->Username = 'your_email@example.com'; // SMTP username
            $mail->Password = 'your_password'; // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;

            //Recipients
            $mail->setFrom($email, $name);
            $mail->addAddress('studentsaad41@gmail.com');

            // Content
            $mail->isHTML(false);
            $mail->Subject = 'New Contact Form Submission';
            $mail->Body    = "Name: {$name}\nEmail: {$email}\nMessage: {$message}";

            $mail->send();
            echo 'Message sent successfully!';
        } catch (Exception $e) {
            echo "Failed to send message. Mailer Error: {$mail->ErrorInfo}";
        }
    }
} -->
