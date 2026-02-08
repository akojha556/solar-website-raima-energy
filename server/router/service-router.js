import express from "express";
import { getServices, getService, createService, updateService, deleteService } from "../controller/service-controller.js";
import { protect } from "../middleware/auth-middleware.js";
import { serviceUpload } from "../middleware/multer.js";

export const serviceRouter = express.Router();

serviceRouter.route("/").get(protect, getServices).post(protect, serviceUpload.array("file", 2), createService);
serviceRouter.route("/:id").get(protect, getService).put(protect, serviceUpload.array("file", 2), updateService).delete(protect, deleteService);