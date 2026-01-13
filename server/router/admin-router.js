import express from "express";
import { loginAdmin, forgetPassword, resetPassword } from "../controller/admin-controller.js";

export const adminRouter = express.Router();

adminRouter.post("/admin-login", loginAdmin);
adminRouter.post("/forget-password", forgetPassword);
adminRouter.post("/reset-password/:token", resetPassword);