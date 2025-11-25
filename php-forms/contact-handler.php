<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$required_fields = ['name', 'email', 'message'];
$errors = [];

foreach ($required_fields as $field) {
    if (empty($input[$field])) {
        $errors[] = ucfirst($field) . ' is required';
    }
}

// Validate email format
if (!empty($input['email']) && !filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Invalid email format';
}

// Return validation errors
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['errors' => $errors]);
    exit();
}

// Sanitize input data
$name = htmlspecialchars(trim($input['name']));
$email = filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL);
$phone = isset($input['phone']) ? htmlspecialchars(trim($input['phone'])) : '';
$subject = isset($input['subject']) ? htmlspecialchars(trim($input['subject'])) : 'Contact Form Submission';
$message = htmlspecialchars(trim($input['message']));
$tour_interest = isset($input['tourInterest']) ? htmlspecialchars(trim($input['tourInterest'])) : '';
$travel_date = isset($input['travelDate']) ? htmlspecialchars(trim($input['travelDate'])) : '';
$group_size = isset($input['groupSize']) ? htmlspecialchars(trim($input['groupSize'])) : '';

// Email configuration
$to = 'info@deerparktours-tz.com'; // Replace with your actual email
$from = $email;
$reply_to = $email;

// Email subject
$email_subject = 'New Contact Form Submission: ' . $subject;

// Email body
$email_body = "
<html>
<head>
    <title>New Contact Form Submission</title>
</head>
<body>
    <h2>New Contact Form Submission</h2>
    <table border='1' cellpadding='10' cellspacing='0' style='border-collapse: collapse; width: 100%;'>
        <tr>
            <td><strong>Name:</strong></td>
            <td>$name</td>
        </tr>
        <tr>
            <td><strong>Email:</strong></td>
            <td>$email</td>
        </tr>
        <tr>
            <td><strong>Phone:</strong></td>
            <td>" . ($phone ?: 'Not provided') . "</td>
        </tr>
        <tr>
            <td><strong>Subject:</strong></td>
            <td>$subject</td>
        </tr>
        <tr>
            <td><strong>Message:</strong></td>
            <td>" . nl2br($message) . "</td>
        </tr>";

if ($tour_interest) {
    $email_body .= "
        <tr>
            <td><strong>Tour Interest:</strong></td>
            <td>$tour_interest</td>
        </tr>";
}

if ($travel_date) {
    $email_body .= "
        <tr>
            <td><strong>Preferred Travel Date:</strong></td>
            <td>$travel_date</td>
        </tr>";
}

if ($group_size) {
    $email_body .= "
        <tr>
            <td><strong>Group Size:</strong></td>
            <td>$group_size</td>
        </tr>";
}

$email_body .= "
        <tr>
            <td><strong>Submitted:</strong></td>
            <td>" . date('Y-m-d H:i:s') . "</td>
        </tr>
    </table>
</body>
</html>";

// Email headers
$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: ' . $name . ' <' . $from . '>',
    'Reply-To: ' . $reply_to,
    'X-Mailer: PHP/' . phpversion()
];

// Send email
$mail_sent = mail($to, $email_subject, $email_body, implode("\r\n", $headers));

if ($mail_sent) {
    // Log successful submission (optional)
    $log_entry = date('Y-m-d H:i:s') . " - Contact form submitted by: $name ($email)\n";
    file_put_contents('contact_log.txt', $log_entry, FILE_APPEND | LOCK_EX);
    
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for your message! We will get back to you soon.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to send message. Please try again later.'
    ]);
}
?>
