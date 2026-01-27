import multer from "multer";
import path from "path";
import fs from "fs";

const makeStorage = (folder) => {
     return multer.diskStorage({
          destination: (req, file, cb) => {
               const uploadPath = `uploads/${folder}`;
               fs.mkdirSync(uploadPath, { recursive: true });
               cb(null, uploadPath);
          },
          filename: (req, file, cb) => {
               cb(null, Date.now() + "-" + path.extname(file.originalname));
          }
     });
};

const fileFilter = (req, file, cb) => {
     if (file.mimetype.startsWith("image")) {
          cb(null, true);
     } else {
          cb(new Error("Only upload image file type, this type isn't supported!"), false);
     }
};


//Product storage folder
export const productUpload = multer({
     storage: makeStorage("products"),
     limits: { fileSize: 5 * 1024 * 1024 },
     fileFilter
});

//Service storage folder
export const serviceUpload = multer({
     storage: makeStorage("services"),
     limits: { fileSize: 5 * 1024 * 1024 },
     fileFilter
});