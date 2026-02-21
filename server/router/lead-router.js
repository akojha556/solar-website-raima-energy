import express from "express";
import { getLeads, getLeadCount, getLead, addLead, editLead, removeLead } from "../controller/lead-controller.js";
import { protect } from "../middleware/auth-middleware.js";

export const leadRouter = express.Router();

leadRouter.get("/count", protect, getLeadCount);
leadRouter.route("/").get(protect, getLeads).post(protect, addLead);
leadRouter.route("/:id").get(protect, getLead).put(protect, editLead).delete(protect, removeLead);