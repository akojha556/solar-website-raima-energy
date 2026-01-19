import multer from "multer";

const storage = multer.diskStorage({
     destination: (req, file, cb) => {
          cb(null, "product-images");
     },
     filename: (req, file, cb) => {
          cb(null, Date.now() + "-" + file.originalname);
     }
});

const fileFilter = (req, file, cb) => {
     if (file.mimetype.startsWith("image")) {
          cb(null, true);
     } else {
          cb(new Error("Only upload image file type, this type isn't supported!"), false);
     }
};

export const productUpload = multer({
     storage,
     limits: { fileSize: 5 * 1024 * 1024 },
     fileFilter
});