const { Router } = require('express');
const notificationRouter = Router();


// Function to send notification (simulated)
function sendNotification() {
    // Simulate sending notification using a notification service like FCM or SNS
    console.log('Notification sent');
};

// Endpoint to handle sending notifications 🔕 POST : notification/send-notification
notificationRouter.post('/send-notification', (req, res) => {
    // Call the function to send the notification
    sendNotification();

    // Send success response to the frontend
    res.status(200).json({ msg: 'Sucessfully notification sent!!👍' });
});

module.exports = notificationRouter;