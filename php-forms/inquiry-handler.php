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
$required_fields = ['name', 'email', 'phone', 'tourPackage', 'travelDate', 'groupSize'];
$errors = [];

foreach ($required_fields as $field) {
    if (empty($input[$field])) {
        $errors[] = ucfirst(str_replace('_', ' ', $field)) . ' is required';
    }
}

// Validate email format
if (!empty($input['email']) && !filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Invalid email format';
}

// Validate group size
if (!empty($input['groupSize']) && (!is_numeric($input['groupSize']) || $input['groupSize'] < 1)) {
    $errors[] = 'Group size must be a positive number';
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
$phone = htmlspecialchars(trim($input['phone']));
$tour_package = htmlspecialchars(trim($input['tourPackage']));
$travel_date = htmlspecialchars(trim($input['travelDate']));
$group_size = intval($input['groupSize']);
$budget = isset($input['budget']) ? htmlspecialchars(trim($input['budget'])) : '';
$special_requests = isset($input['specialRequests']) ? htmlspecialchars(trim($input['specialRequests'])) : '';
$accommodation_preference = isset($input['accommodationPreference']) ? htmlspecialchars(trim($input['accommodationPreference'])) : '';
$dietary_requirements = isset($input['dietaryRequirements']) ? htmlspecialchars(trim($input['dietaryRequirements'])) : '';

// Email configuration
$to = 'bookings@deerparktours-tz.com'; // Replace with your actual booking email
$from = $email;
$reply_to = $email;

// Email subject
$email_subject = 'New Tour Inquiry: ' . $tour_package;

// Email body
$email_body = "
<html>
<head>
    <title>New Tour Inquiry</title>
    <style>
        body { font-family: Arial, sans-serif; }
        .header { background-color: #2c5530; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        table { border-collapse: collapse; width: 100%; margin: 20px 0; }
        td { padding: 10px; border: 1px solid #ddd; }
        .label { background-color: #f5f5f5; font-weight: bold; width: 200px; }
        .priority { background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; margin: 20px 0; border-radius: 5px; }
    </style>
</head>
<body>
    <div class='header'>
        <h2>🦌 New Tour Inquiry - DeerPark Tours</h2>
    </div>
    <div class='content'>
        <div class='priority'>
            <strong>⚡ Priority Inquiry:</strong> Customer is interested in booking <strong>$tour_package</strong> for <strong>$group_size people</strong> on <strong>$travel_date</strong>
        </div>
        
        <h3>Customer Information</h3>
        <table>
            <tr>
                <td class='label'>Name:</td>
                <td>$name</td>
            </tr>
            <tr>
                <td class='label'>Email:</td>
                <td><a href='mailto:$email'>$email</a></td>
            </tr>
            <tr>
                <td class='label'>Phone:</td>
                <td><a href='tel:$phone'>$phone</a></td>
            </tr>
        </table>
        
        <h3>Tour Details</h3>
        <table>
            <tr>
                <td class='label'>Tour Package:</td>
                <td><strong>$tour_package</strong></td>
            </tr>
            <tr>
                <td class='label'>Preferred Travel Date:</td>
                <td><strong>$travel_date</strong></td>
            </tr>
            <tr>
                <td class='label'>Group Size:</td>
                <td><strong>$group_size people</strong></td>
            </tr>";

if ($budget) {
    $email_body .= "
            <tr>
                <td class='label'>Budget Range:</td>
                <td>$budget</td>
            </tr>";
}

if ($accommodation_preference) {
    $email_body .= "
            <tr>
                <td class='label'>Accommodation Preference:</td>
                <td>$accommodation_preference</td>
            </tr>";
}

if ($dietary_requirements) {
    $email_body .= "
            <tr>
                <td class='label'>Dietary Requirements:</td>
                <td>$dietary_requirements</td>
            </tr>";
}

$email_body .= "
        </table>";

if ($special_requests) {
    $email_body .= "
        <h3>Special Requests</h3>
        <div style='background-color: #f8f9fa; padding: 15px; border-left: 4px solid #2c5530; margin: 20px 0;'>
            " . nl2br($special_requests) . "
        </div>";
}

$email_body .= "
        <h3>Submission Details</h3>
        <table>
            <tr>
                <td class='label'>Submitted:</td>
                <td>" . date('Y-m-d H:i:s T') . "</td>
            </tr>
            <tr>
                <td class='label'>IP Address:</td>
                <td>" . $_SERVER['REMOTE_ADDR'] . "</td>
            </tr>
        </table>
        
        <div style='margin-top: 30px; padding: 20px; background-color: #e8f5e8; border-radius: 5px;'>
            <h4>📞 Next Steps:</h4>
            <ul>
                <li>Respond within 2 hours during business hours</li>
                <li>Provide detailed itinerary and pricing</li>
                <li>Schedule a consultation call if needed</li>
                <li>Send booking confirmation form</li>
            </ul>
        </div>
    </div>
</body>
</html>";

// Email headers
$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: ' . $name . ' <' . $from . '>',
    'Reply-To: ' . $reply_to,
    'X-Mailer: PHP/' . phpversion(),
    'X-Priority: 2' // High priority for booking inquiries
];

// Send email
$mail_sent = mail($to, $email_subject, $email_body, implode("\r\n", $headers));

// Send confirmation email to customer
if ($mail_sent) {
    $customer_subject = 'Thank you for your safari inquiry - DeerPark Tours';
    $customer_body = "
    <html>
    <head>
        <title>Safari Inquiry Confirmation</title>
        <style>
            body { font-family: Arial, sans-serif; }
            .header { background-color: #2c5530; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; }
        </style>
    </head>
    <body>
        <div class='header'>
            <h2>🦌 Thank You for Your Safari Inquiry!</h2>
        </div>
        <div class='content'>
            <p>Dear $name,</p>
            
            <p>Thank you for your interest in <strong>$tour_package</strong>! We have received your inquiry and our safari experts will get back to you within 2 hours during business hours.</p>
            
            <h3>Your Inquiry Summary:</h3>
            <ul>
                <li><strong>Tour:</strong> $tour_package</li>
                <li><strong>Travel Date:</strong> $travel_date</li>
                <li><strong>Group Size:</strong> $group_size people</li>
            </ul>
            
            <p>Our team will prepare a detailed itinerary and pricing information tailored to your preferences. In the meantime, feel free to explore our website for more information about Tanzania's incredible wildlife and destinations.</p>
            
            <p>If you have any urgent questions, please don't hesitate to contact us:</p>
            <ul>
                <li><strong>Phone:</strong> +255 123 456 789</li>
                <li><strong>Email:</strong> info@deerparktours.com</li>
                <li><strong>WhatsApp:</strong> +255 123 456 789</li>
            </ul>
            
            <p>We look forward to helping you create unforgettable memories in Tanzania!</p>
            
            <p>Best regards,<br>
            <strong>The DeerPark Tours Team</strong><br>
            Your Gateway to Tanzania's Wilderness</p>
        </div>
    </body>
    </html>";
    
    $customer_headers = [
        'MIME-Version: 1.0',
        'Content-type: text/html; charset=UTF-8',
        'From: DeerPark Tours <bookings@deerparktours.com>',
        'Reply-To: info@deerparktours.com',
        'X-Mailer: PHP/' . phpversion()
    ];
    
    mail($email, $customer_subject, $customer_body, implode("\r\n", $customer_headers));
}

if ($mail_sent) {
    // Log successful submission
    $log_entry = date('Y-m-d H:i:s') . " - Tour inquiry: $tour_package by $name ($email) for $group_size people on $travel_date\n";
    file_put_contents('inquiry_log.txt', $log_entry, FILE_APPEND | LOCK_EX);
    
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for your inquiry! We will contact you within 2 hours with a detailed proposal.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to send inquiry. Please try again later or contact us directly.'
    ]);
}
?>
