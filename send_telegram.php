<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $child_name    = strip_tags(trim($_POST["child_name"]));
    $child_surname = strip_tags(trim($_POST["child_surname"]));
    $child_age     = strip_tags(trim($_POST["child_age"]));
    $course        = strip_tags(trim($_POST["course"]));
    $parent_name   = strip_tags(trim($_POST["parent_name"]));
    $phone         = strip_tags(trim($_POST["phone"]));
    $email         = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message       = strip_tags(trim($_POST["message"]));

    if (empty($child_name) || empty($child_surname) || empty($phone) || empty($course)) {
        http_response_code(400);
        echo "Խնդրում ենք լրացնել բոլոր պարտադիր դաշտերը:";
        exit;
    }

    $token = getenv('TELEGRAM_BOT_TOKEN');
    $chat_id = getenv('TELEGRAM_CHAT_ID');

    if (!$token || !$chat_id) {
        http_response_code(500);
        echo "Telegram configuration missing.";
        exit;
    }

    $text = "🚀 *Նոր գրանցում CodeNest*\n\n";
    $text .= "👦 *Երեխա:* $child_name $child_surname\n";
    $text .= "🎂 *Տարիք:* $child_age\n";
    $text .= "📚 *Կուրս:* $course\n\n";
    $text .= "👤 *Ծնող:* $parent_name\n";
    $text .= "📞 *Հեռախոս:* $phone\n";
    if ($email) {
        $text .= "📧 *Email:* $email\n";
    }
    if ($message) {
        $text .= "\n📝 *Լրացուցիչ:* \n$message";
    }

    $url = "https://api.telegram.org/bot$token/sendMessage";
    $data = [
        'chat_id' => $chat_id,
        'text' => $text,
        'parse_mode' => 'Markdown'
    ];

    $options = [
        'http' => [
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data),
        ],
    ];
    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);

    if ($result === FALSE) {
        http_response_code(500);
        echo "Ցավոք, տեղի է ունեցել սխալ հաղորդագրությունն ուղարկելիս:";
    } else {
        http_response_code(200);
        echo "Շնորհակալություն: Ձեր հայտը հաջողությամբ ուղարկվեց:";
    }
} else {
    http_response_code(403);
    echo "Տեղի է ունեցել սխալ դիմումի ուղարկման ժամանակ:";
}
