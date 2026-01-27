import cloudinary from "../config/cloudinary.js";
import fs from "fs";

export const uploadToCloudinary = async (localFilePath, folder) => {
     try {
          const uploadResult = await cloudinary.uploader.upload(localFilePath, {
               folder
          });

          //Remove file from localStorage after uploaded to cloudinary
          fs.unlinkSync(localFilePath);

          return uploadResult;
     } catch (error) {
          //Check if exists after error also
          if (fs.existsSync(localFilePath)) {
               fs.unlinkSync(localFilePath);
          };
          throw error;
     }
}