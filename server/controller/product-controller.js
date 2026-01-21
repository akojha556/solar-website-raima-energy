import asyncHandler from "express-async-handler";
import Product from "../model/product-model.js";
import slugify from "slugify";
import { uploadToCloudinary } from "../utils/uploadToCloudinary.js";

//Get all products
export const getProducts = asyncHandler(async (req, res) => {
     res.status(200).json({ message: "Get products" });
});

//add new products
export const addProduct = asyncHandler(async (req, res) => {
     const files = req.files;

     const { title, shortDesc, overview, applications, benifits, types, idealFor } = req.body;

     // Validate fields
     if (
          !title ||
          !shortDesc ||
          !overview ||
          !applications ||
          !benifits ||
          !types ||
          !idealFor ||
          !files ||
          files.length === 0
     ) {
          res.status(400);
          throw new Error("All fields required!");
     }

     // Generate slug
     const slug = slugify(title, { lower: true, strict: true });

     // Check duplicate
     const existingProduct = await Product.findOne({ slug });

     if (existingProduct) {
          res.status(400);
          throw new Error("Product already exists!");
     }

     const result = [];

     for (let i = 0; i < files.length; i++) {
          const response = await uploadToCloudinary(files[i].path);
          result.push({
               publicId: response.public_id,
               secureUrl: response.secure_url
          });
     }

     const product = await Product.create({
          title,
          slug,
          shortDesc,
          overview,
          idealFor,
          applications: JSON.parse(applications),
          benifits: JSON.parse(benifits),
          types: JSON.parse(types),
          images: {
               main: {
                    public_id: result[0].publicId,
                    url: result[0].secureUrl
               },
               secondary: {
                    public_id: result[1].publicId,
                    url: result[1].secureUrl
               }
          }
     });
     
     res.status(201).json({
          success: true,
          message: "Product created successfully",
          product
     });
});

//update a product
export const updateProduct = asyncHandler(async (req, res) => {
     res.status(200).json({ message: "Update products" });
});

//Remove a product
export const removeProduct = asyncHandler(async (req, res) => {
     res.status(200).json({ message: "Remove products" });
});