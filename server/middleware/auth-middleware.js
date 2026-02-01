import jwt from "jsonwebtoken";
import Admin from "../model/admin-model.js";
import asyncHandler from "express-async-handler";

export const protect = asyncHandler(async (req, res, next) => {
     const token = req.cookies.token;

     try {
          //Decode payloan
          const decode = jwt.verify(token, process.env.JWT_SECRET);

          //Get the admin
          req.admin = await Admin.findById(decode.id).select("-password");

          next();
     } catch (error) {
          res.status(401);
          throw new Error("Unauthorised! Please login.");
     }

     if (!token) {
          res.status(401);
          throw new Error("Unauthorised! No Token!");
     }
});