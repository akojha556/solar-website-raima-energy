import express from "express";
import { getProducts, addProduct, updateProduct, removeProduct } from "../controller/product-controller.js";
import { protect } from "../middleware/auth-middleware.js";
import { productUpload } from "../middleware/multer.js";

export const productRouter = express.Router();

productRouter.get("/", protect, getProducts);
productRouter.post("/add-new-product", protect, productUpload.array("file", 2), addProduct);
productRouter.put("/update-product/:id", protect, updateProduct);
productRouter.delete("/remove-product/:id", protect, removeProduct);