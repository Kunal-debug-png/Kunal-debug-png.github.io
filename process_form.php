<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Email parameters
    $to = "kunalchhablani14@gmail.com"; // Replace with your email address
    $subject = "New Message from Your Website";
    $headers = "From: $name <$email>";
    
    // Compose the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message\n";
    
    // Send email
    if (mail($to, $subject, $email_message, $headers)) {
        echo "Your message has been sent successfully!";
    } else {
        echo "Oops! Something went wrong.";
    }
}
?>
