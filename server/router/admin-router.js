import express from "express";
import { loginAdmin, logoutAdmin, getMe, forgetPassword, verifyResetToken, resetPassword } from "../controller/admin-controller.js";
import { limiter } from "../middleware/rateLimiter.js";
import { protect } from "../middleware/auth-middleware.js";

export const adminRouter = express.Router();

adminRouter.post("/admin-login", limiter, loginAdmin);
adminRouter.post("/admin-logout", logoutAdmin);
adminRouter.get("/me", protect, getMe);
adminRouter.post("/forget-password", limiter, forgetPassword);
adminRouter.post("/verify-token/:token", limiter, verifyResetToken);
adminRouter.post("/reset-password/:token", limiter, resetPassword);