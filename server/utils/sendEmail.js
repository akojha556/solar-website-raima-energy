import nodemailer from "nodemailer";

export const sendEmail = async (email, subject, text) => {
     const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          auth: {
               user: process.env.USER_EMAIL,
               pass: process.env.USER_PASS
          }
     });

     try {
          const info = await transporter.sendMail({
               from: process.env.USER_EMAIL,
               to: email,
               subject: subject,
               text: text
          });

          console.log("Email sent:", info.response);
     } catch (error) {
          console.log("Error sending email:", error);
     }
};