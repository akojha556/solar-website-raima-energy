import asyncHandler from "express-async-handler";
import Product from "../model/product-model.js";
import { uploadToCloudinary } from "../utils/uploadToCloudinary.js";

//Get all products
export const getProducts = asyncHandler(async (req, res) => {
     res.status(200).json({ message: "Get products" });
});

//add new products
export const addProduct = asyncHandler(async (req, res) => {
     const files = req.files;

     if (!files || files.length === 0) {
          res.status(400);
          throw new Error("Only images are allowed.");
     }

     const result = [];

     for (let i = 0; i < files.length; i++) {
          const response = await uploadToCloudinary(files[i].path);
          result.push({
               publicId: response.public_id,
               secureUrl: response.secure_url
          });
     }
     res.status(200).json({ message: "Here is the cloudinary link of photos you uploaded,", result });
});

//update a product
export const updateProduct = asyncHandler(async (req, res) => {
     res.status(200).json({ message: "Update products" });
});

//Remove a product
export const removeProduct = asyncHandler(async (req, res) => {
     res.status(200).json({ message: "Remove products" });
});