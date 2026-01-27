import fs from "fs";

export const removeLocalFiles = (files) => {
     if (!files || !Array.isArray(files)) return;

     files.forEach((file) => {
          if (file.path && fs.existsSync(file.path)) {
               fs.unlinkSync(file.path);
          }
     });
};