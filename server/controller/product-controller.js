import asyncHandler from "express-async-handler";
import Product from "../model/product-model.js";
import slugify from "slugify";
import { uploadToCloudinary } from "../utils/uploadToCloudinary.js";
import { removeLocalFiles } from "../utils/removeLocalFiles.js";
import cloudinary from "../config/cloudinary.js";

//Get all products
export const getProducts = asyncHandler(async (req, res) => {
     const products = await Product.find();
     res.status(200).json(products);
});

//add new products
export const addProduct = asyncHandler(async (req, res) => {
     const files = req.files;

     const { title, shortDesc, overview, applications, benefits, types, idealFor } = req.body;
     // Validate fields
     if (
          !title ||
          !shortDesc ||
          !overview ||
          !applications ||
          !benefits ||
          !types ||
          !idealFor ||
          !files ||
          files.length === 0
     ) {
          removeLocalFiles(files);
          res.status(400);
          throw new Error("All fields required!");
     }

     // Generate slug
     const slug = slugify(title, { lower: true, strict: true });

     // Check duplicate
     const existingProduct = await Product.findOne({ slug });

     if (existingProduct) {
          removeLocalFiles(files);
          res.status(400);
          throw new Error("Product already exists!");
     }

     const result = [];

     //Upload to cloudinary
     for (let i = 0; i < files.length; i++) {
          const response = await uploadToCloudinary(files[i].path, "uploads/products");

          result.push({
               publicId: response.public_id,
               secureUrl: response.secure_url
          });
     }

     //Create product
     const product = await Product.create({
          title,
          slug,
          shortDesc,
          overview,
          idealFor,
          applications: JSON.parse(applications),
          benefits: JSON.parse(benefits),
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
     const { id } = req.params;
     const files = req.files;
     const { title, shortDesc, overview, applications, benefits, types, idealFor } = req.body;

     //Find product
     const product = await Product.findById(id);

     if (!product) {
          removeLocalFiles(files);
          res.status(400);
          throw new Error("Product is not available or has been removed!");
     }

     //If title changed update the slug
     if (title && title !== product.title) {
          const newSlug = slugify(title, { lower: true, strict: true });

          const slugExist = await Product.findOne({ slug: newSlug });

          if (slugExist && slugExist._id.toString() !== id) {
               removeLocalFiles(files);
               res.status(400);
               throw new Error("Product with this title already exists!");
          }

          product.slug = newSlug;
          product.title = title;
     };

     //Update text fields
     product.shortDesc = shortDesc || product.shortDesc;
     product.overview = overview || product.overview;
     product.idealFor = idealFor || product.idealFor;

     if (applications) product.applications = JSON.parse(applications);
     if (benefits) product.benefits = JSON.parse(benefits);
     if (types) product.types = JSON.parse(types);

     if (files && files.length > 0) {

          // delete old cloudinary images
          await cloudinary.uploader.destroy(product.images.main.public_id);
          await cloudinary.uploader.destroy(product.images.secondary.public_id);

          const result = [];

          //Upload new images to cloudinary
          for (let i = 0; i < files.length; i++) {
               const response = await uploadToCloudinary(files[i].path, "uploads/products");
               result.push({
                    publicId: response.public_id,
                    secureUrl: response.secure_url
               });
          }

          product.images = {
               main: {
                    public_id: result[0].publicId,
                    url: result[0].secureUrl
               },
               secondary: {
                    public_id: result[1].publicId,
                    url: result[1].secureUrl
               }
          }
     };

     await product.save();
     res.status(200).json({
          success: true,
          message: "Product updated successfully",
          product
     });
});

//Remove a product
export const removeProduct = asyncHandler(async (req, res) => {
     const { id } = req.params;

     const product = await Product.findById(id);

     if (!product) {
          res.status(400);
          throw new Error("This product isn't available!");
     };

     //Remove imgaes from cloudinary
     await cloudinary.uploader.destroy(product.images.main.public_id);
     await cloudinary.uploader.destroy(product.images.secondary.public_id);

     await product.deleteOne();
     res.status(200).json({ message: `The product with ${id} is removed successfully.` });
});