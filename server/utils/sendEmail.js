import nodemailer from "nodemailer";

export const sendEmail = async (email, subject, text) => {
     const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
               user: process.env.USER_EMAIL,
               pass: process.env.USER_PASS
          }
     });

     await transporter.sendMail({
          from: process.env.USER_EMAIL,
          to: email,
          subject,
          text
     });
}