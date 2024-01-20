const nodemailer = require('nodemailer');
const cron = require('node-cron');
require('dotenv').config();

const sendEmail = () => {
  let transporter = createTransport({
    host: process.env.MAIL_HOST,

    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  })

  const lectureTime = '2:20 PM';

  const mailOptions = {
    from: 'herrypoter166@gmail.com',
    to: 'narendrarajput05007@gmail.com',
    subject: `Today's Lecture at ${lectureTime}`,
    text: `This is a reminder that there is a lecture scheduled for today at ${lectureTime}. Don't miss it!`,
  };
}

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});

// Schedule the cron job to run every Friday and Saturday at 2:20 PM
cron.schedule('20 14 * * 5,6', () => {
  // 20: 20 minutes, 14: 2 PM, 5,6: Friday and Saturday
  console.log('Sending email...');
  sendEmail();
});
