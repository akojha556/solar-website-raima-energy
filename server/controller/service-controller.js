import asyncHandler from "express-async-handler";
import Service from "../model/service-model.js";
import { removeLocalFiles } from "../utils/removeLocalFiles.js";
import slugify from "slugify";
import productModel from "../model/product-model.js";
import { uploadToCloudinary } from "../utils/uploadToCloudinary.js";
import cloudinary from "../config/cloudinary.js";

//Get all services
export const getServices = asyncHandler(async (req, res) => {
     const services = await Service.find();
     res.status(200).json(services);
});

//Get individual service
export const getService = asyncHandler(async (req, res) => {
     const { id } = req.params;
     const service = await Service.findById(id);

     if (!service) {
          res.status(400);
          throw new Error("This service is already removed or not available with us.");
     };

     res.status(200).json({
          status: success,
          message: `The service with id:${service._id} is`,
          service
     });
});

//Create a service
export const createService = asyncHandler(async (req, res) => {
     const files = req.files;
     const { title, shortDesc, overview, options, useCases, benefits, idealFor } = req.body;

     //Validate field
     if (
          !title ||
          !shortDesc ||
          !overview ||
          !options ||
          !useCases ||
          !benefits ||
          !idealFor ||
          !files ||
          files.length === 0
     ) {
          removeLocalFiles(files);
          res.status(400);
          throw new Error("Field must be valid!");
     }

     const slug = slugify(title, {
          lower: true,
          strict: true
     });

     //Check if already exist
     const existingService = await productModel.findOne({ slug });

     if (existingService) {
          removeLocalFiles(files);
          res.status(400);
          throw new Error("This service is already available!");
     }

     const result = [];

     //Get cloudinary images
     for (let i = 0; i < files.length; i++) {
          const response = await uploadToCloudinary(files[i].path, "uploads/services");
          result.push({
               publicId: response.public_id,
               secureUrl: response.secure_url
          });
     }

     //Create service
     const service = await Service.create({
          title,
          slug,
          shortDesc,
          overview,
          idealFor,
          options: JSON.parse(options),
          useCases: JSON.parse(useCases),
          benefits: JSON.parse(benefits),
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

     res.status(200).json({
          success: true,
          message: "New service created successfully",
          service
     });
});

//Update service
export const updateService = asyncHandler(async (req, res) => {
     const { id } = req.params;
     const files = req.files;
     const { title, shortDesc, overview, options, useCases, benefits, idealFor } = req.body;

     //Find service
     const service = await Service.findById(id);
     if (!service) {
          removeLocalFiles(files);
          res.status(400);
          throw new Error("This service is not availoable or might be removed!");
     }

     if (title && title !== service.title) {
          const newSlug = slugify(title, {
               lower: true,
               strict: true
          });

          //Check is this slug or title already available in DB
          const existsSlug = await Service.findOne({ slug: newSlug });

          if (existsSlug && existsSlug._id.toString() !== id) {
               removeLocalFiles(files);
               res.status(400);
               throw new Error("This service with similar name is already available in the DB.");
          }

          service.title = title;
          service.slug = newSlug;
     };

     //Update other text fields
     service.shortDesc = shortDesc || service.shortDesc;
     service.overview = overview || service.overview;
     service.idealFor = idealFor || service.idealFor;
     if (options) service.options = JSON.parse(options);
     if (useCases) service.useCases = JSON.parse(useCases);
     if (benefits) service.benefits = JSON.parse(benefits);

     if (files && files.length > 0) {
          // delete old cloudinary images
          await cloudinary.uploader.destroy(service.images.main.public_id);
          await cloudinary.uploader.destroy(service.images.secondary.public_id);

          //Upload new images to cloudinary
          const result = [];

          for (let i = 0; i < files.length; i++) {
               const response = await uploadToCloudinary(files[i].path, "uploads/services");
               result.push({
                    publicId: response.public_id,
                    secureUrl: response.secure_url
               });
          };

          service.images = {
               main: {
                    public_id: result[0].publicId,
                    url: result[0].secureUrl
               },
               secondary: {
                    public_id: result[1].publicId,
                    url: result[1].secureUrl
               }
          };
     }

     await service.save();

     res.status(200).json({
          success: true,
          message: "Service updated successfully",
          service
     });
});

//Delete a services
export const deleteService = asyncHandler(async (req, res) => {
     const { id } = req.params;
     const service = await Service.findById(id);

     if (!service) {
          res.status(400);
          throw new Error("This service is not available or has been removed.");
     };

     //If service there remove cloudinary images first
     await cloudinary.uploader.destroy(service.images.main.public_id);
     await cloudinary.uploader.destroy(service.images.secondary.public_id);

     await service.deleteOne();
     res.status(200).json({ message: `The service with ${id} is removed successfully.` });
});