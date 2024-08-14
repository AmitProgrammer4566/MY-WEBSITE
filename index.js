const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (e.g., HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle contact form submission
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Configure Nodemailer transport
    const transporter = nodemailer.createTransport({
        service: 'gmail', // or another email service
        auth: {
            user: 'dhimankandela001@gmail.com', // Replace with your email
            pass: '@Amit123456@#$'   // Replace with your email password or app password
        }
    });

    const mailOptions = {
        from: email,
        to: 'dhimnankandela001@gmail.com', // Replace with your email
        subject: `Contact Form Submission from ${name}`,
        text: `Message from ${name} (${email}):\n\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send('Error sending email.');
        }
        console.log('Email sent:', info.response);
        res.status(200).send('Thank you for getting in touch! We will get back to you soon.');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
