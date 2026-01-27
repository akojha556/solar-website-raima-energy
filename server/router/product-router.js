import express from "express";
import { getProducts, addProduct, updateProduct, removeProduct } from "../controller/product-controller.js";
import { protect } from "../middleware/auth-middleware.js";
import { productUpload } from "../middleware/multer.js";

export const productRouter = express.Router();

productRouter.route("/").get(protect, getProducts).post(protect, productUpload.array("file", 2), addProduct);
productRouter.route("/:id").put(protect, productUpload.array("file", 2), updateProduct).delete(protect, removeProduct);