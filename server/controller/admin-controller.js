import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import Admin from "../model/admin-model.js";

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
               username
          });
     } else {
          res.status(400);
          throw new Error("Unauthorised! Invalid credentials!");
     }
});

//Forget Password
export const forgetPassword = asyncHandler(async (req, res) => {
     res.status(200).json({ message: "Forget Password" });
});

//Reset Password
export const resetPassword = asyncHandler(async (req, res) => {
     res.status(200).json({ message: "Reset Password" });
});
