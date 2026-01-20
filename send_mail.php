<?php
// 1. Load Composer's autoloader
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Տվյալների ստացում և մաքրում
    $child_name    = strip_tags(trim($_POST["child_name"]));
    $child_surname = strip_tags(trim($_POST["child_surname"]));
    $child_age     = strip_tags(trim($_POST["child_age"]));
    $course        = strip_tags(trim($_POST["course"]));
    $parent_name   = strip_tags(trim($_POST["parent_name"]));
    $phone         = strip_tags(trim($_POST["phone"]));
    $email         = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message       = strip_tags(trim($_POST["message"]));

    // Ստուգում ենք պարտադիր դաշտերը
    if (empty($child_name) || empty($child_surname) || empty($phone) || empty($course)) {
        http_response_code(400);
        echo "Խնդրում ենք լրացնել բոլոր պարտադիր դաշտերը:";
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // --- SMTP Settings ---
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;         // Uncomment for debugging errors

        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';             // Your SMTP server (e.g., smtp.gmail.com)
        $mail->SMTPAuth   = true;
        $mail->Username   = 'gexayrmelkonyan@gmail.com';       // Your email address
        $mail->Password   = '';          // Your app password (not your main password)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;
        $mail->CharSet    = 'UTF-8';                      // Crucial for Armenian characters

        // --- Recipients ---
        $mail->setFrom('noreply@codenest.am', 'CodeNest Website');
	$mail->addAddress('gexo7777@gmail.com');
//        $mail->addAddress('info@codenest.am');            // Recipient email
        $mail->addReplyTo($email, $parent_name);

        // --- Content ---
        $mail->isHTML(false);                             // Set to true if you use HTML tags
        $mail->Subject = "Նոր գրանցում: Փորձնական դաս - $child_name $child_surname";

        $email_content = "Դուք ունեք նոր գրանցում փորձնական դասի համար:\n\n";
        $email_content .= "Երեխայի անուն: $child_name\n";
        $email_content .= "Ազգանուն: $child_surname\n";
        $email_content .= "Տարիք: $child_age\n";
        $email_content .= "Կուրս: $course\n\n";
        $email_content .= "Ծնողի անուն: $parent_name\n";
        $email_content .= "Հեռախոսահամար: $phone\n";
        $email_content .= "Էլ. հասցե: $email\n\n";
        $email_content .= "Լրացուցիչ տեղեկություն:\n$message\n";

        $mail->Body = $email_content;

        $mail->send();
        http_response_code(200);
        echo "Շնորհակալություն: Ձեր հայտը հաջողությամբ ուղարկվեց:";

    } catch (Exception $e) {
        http_response_code(500);
        echo "Ցավոք, տեղի է ունեցել սխալ: Սխալի նկարագրություն: {$mail->ErrorInfo}";
    }

} else {
    http_response_code(403);
    echo "Տեղի է ունեցել սխալ դիմումի ուղարկման ժամանակ:";
}
