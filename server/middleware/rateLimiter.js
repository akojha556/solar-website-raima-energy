import { rateLimit } from "express-rate-limit";

export const limiter = rateLimit({
     windowMs: 15 * 60 * 1000,
     limit: 5,
     standardHeaders: "draft-8",
     legacyHeaders: false,
     message: {
          message: "Too many requests. Please try again after 15 minutes."
     },
     ipv6Subnet: 56
});