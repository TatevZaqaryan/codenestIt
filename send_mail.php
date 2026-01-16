<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Տվյալների ստացում
    $child_name = strip_tags(trim($_POST["child_name"]));
    $child_surname = strip_tags(trim($_POST["child_surname"]));
    $child_age = strip_tags(trim($_POST["child_age"]));
    $course = strip_tags(trim($_POST["course"]));
    $parent_name = strip_tags(trim($_POST["parent_name"]));
    $phone = strip_tags(trim($_POST["phone"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($_POST["message"]));

    // Ստուգում ենք պարտադիր դաշտերը
    if (empty($child_name) || empty($child_surname) || empty($phone) || empty($course)) {
        http_response_code(400);
        echo "Խնդրում ենք լրացնել բոլոր պարտադիր դաշտերը:";
        exit;
    }

    // Նամակի բովանդակություն
    $recipient = "info@codenest.am"; // Փոխեք սա ձեր էլ. հասցեով
    $subject = "Նոր գրանցում: Փորձնական դաս - $child_name $child_surname";
    
    $email_content = "Դուք ունեք նոր գրանցում փորձնական դասի համար:\n\n";
    $email_content .= "Երեխայի անուն: $child_name\n";
    $email_content .= "Ազգանուն: $child_surname\n";
    $email_content .= "Տարիք: $child_age\n";
    $email_content .= "Կուրս: $course\n\n";
    $email_content .= "Ծնողի անուն: $parent_name\n";
    $email_content .= "Հեռախոսահամար: $phone\n";
    $email_content .= "Էլ. հասցե: $email\n\n";
    $email_content .= "Լրացուցիչ տեղեկություն:\n$message\n";

    // Նամակի վերնագրեր
    $email_headers = "From: $parent_name <noreply@codenest.am>\r\n";
    $email_headers .= "Reply-To: $email\r\n";
    $email_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Նամակի ուղարկում
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Շնորհակալություն: Ձեր հայտը հաջողությամբ ուղարկվեց:";
    } else {
        http_response_code(500);
        echo "Ցավոք, տեղի է ունեցել սխալ: Խնդրում ենք փորձել մի փոքր ուշ:";
    }
} else {
    http_response_code(403);
    echo "Տեղի է ունեցել սխալ դիմումի ուղարկման ժամանակ:";
}
?>