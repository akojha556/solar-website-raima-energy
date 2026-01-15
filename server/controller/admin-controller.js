import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import Admin from "../model/admin-model.js";
import crypto from "crypto";
import { sendEmail } from "../utils/sendEmail.js";
import jwt from "jsonwebtoken";

//Login Admin
export const loginAdmin = asyncHandler(async (req, res) => {
     const { username, password } = req.body || {};

     //Check if fields are empty ot not!!
     if (!username || !password) {
          res.status(400);
          throw new Error("Field should not be empty!");
     }

     //Validation check
     const admin = await Admin.findOne({ username });

     if (admin && await (bcrypt.compare(password, admin.password))) {
          res.status(200).json({
               _id: admin.id,
               username,
               token: generateToken(admin._id)
          });
     } else {
          res.status(400);
          throw new Error("Unauthorised! Invalid credentials!");
     }
});

//Forget Password
export const forgetPassword = asyncHandler(async (req, res) => {
     const { username } = req.body;
     //Find user using email
     const admin = await Admin.findOne({ username });

     if (!admin) {
          res.status(400);
          throw new Error("Wrong username!");
     }

     //Create token save in db
     const resetToken = crypto.randomBytes(32).toString("hex");
     admin.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
     admin.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
     await admin.save({ validateBeforeSave: false });

     const resetUrl = `http://localhost:3000/api/admin/reset-password/${resetToken}`;

     //Send token using nodemailer
     await sendEmail(
          admin.username,
          "Reset Password.",
          `Click this link to reset your password, with-in 10minutes: ${resetUrl}`
     );

     res.status(200).json({ message: "Check your email and click on the reset link within 10mins to forget your password." });
});

//Reset Password
export const resetPassword = asyncHandler(async (req, res) => {
     const { token } = req.params;
     const { password } = req.body;
     //Hash the token and find the user from db
     const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
     const admin = await Admin.findOne({ resetPasswordToken: hashedToken });

     if (!admin) {
          res.status(400);
          throw new Error("Unauthorised!");
     }

     const expireLinkTime = Date.now();

     if (admin.resetPasswordExpire < expireLinkTime) {
          res.status(400);
          throw new Error("This link is expired! Try again.");
     }

     //Hash the new password
     const saltRound = await bcrypt.genSalt(12);

     admin.password = await bcrypt.hash(password, saltRound);
     admin.resetPasswordToken = undefined;
     admin.resetPasswordExpire = undefined;
     await admin.save();
     res.status(200).json({ message: "Password changed successfully." });
});

//Generate token
const generateToken = (id) => {
     return jwt.sign({ id }, process.env.JWT_SECRET, {
          expiresIn: "1h"
     });
};