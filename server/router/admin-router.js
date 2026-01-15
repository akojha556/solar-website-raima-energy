import express from "express";
import { loginAdmin, forgetPassword, resetPassword } from "../controller/admin-controller.js";
import { limiter } from "../middleware/rateLimiter.js";

export const adminRouter = express.Router();

adminRouter.post("/admin-login", loginAdmin);
adminRouter.post("/forget-password", limiter, forgetPassword);
adminRouter.post("/reset-password/:token", limiter, resetPassword);