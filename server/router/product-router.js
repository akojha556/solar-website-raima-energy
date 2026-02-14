import express from "express";
import { getProducts, getProductCount, getProduct, addProduct, updateProduct, removeProduct } from "../controller/product-controller.js";
import { protect } from "../middleware/auth-middleware.js";
import { productUpload } from "../middleware/multer.js";

export const productRouter = express.Router();

productRouter.get("/count", protect, getProductCount);
productRouter.route("/").get(getProducts).post(protect, productUpload.array("file", 2), addProduct);
productRouter.route("/:id").get(protect, getProduct).put(protect, productUpload.array("file", 2), updateProduct).delete(protect, removeProduct);