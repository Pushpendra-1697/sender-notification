const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

app.use(cors());
app.get('/', (req, res) => {
    res.status(200).json(`Welcome to Notifications App!! 😒`);
})
app.use('/notification', require('./route/notification.route'));

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});