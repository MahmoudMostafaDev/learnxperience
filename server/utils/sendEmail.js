import nodemailer from 'nodemailer';
import generateEmailTemplate from './emailTemplate.js';

export const sendEmail = async (to, subject, courseTitle, courseDescription) => {
  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    const htmlContent = generateEmailTemplate(courseTitle, courseDescription);
    
    let mailOptions = {
      from: process.env.EMAIL_USER,
      to, // Recipient email(s)
      subject,
      html: htmlContent
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
