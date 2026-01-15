import mongoose from "mongoose";

const textBlockSchema = new mongoose.Schema(
     {
          title: {
               type: String,
               required: true,
               trim: true,
          },
          desc: {
               type: String,
               required: true,
               trim: true,
          },
     },
     { _id: false }
);

const imageSchema = new mongoose.Schema(
     {
          url: {
               type: String,
               required: true,
          },
          public_id: {
               type: String,
               required: true,
          },
     },
     { _id: false }
);

const productSchema = new mongoose.Schema(
     {
          title: {
               type: String,
               required: true,
               trim: true,
          },

          slug: {
               type: String,
               required: true,
               unique: true,
               lowercase: true,
          },

          images: {
               main: imageSchema,
               secondary: imageSchema,
          },

          shortDesc: {
               type: String,
               required: true,
               maxlength: 300,
          },

          overview: {
               type: String,
               required: true,
          },

          applications: [textBlockSchema],

          benefits: [textBlockSchema],

          types: [textBlockSchema],

          idealFor: {
               type: String,
               required: true,
          },
     },
     {
          timestamps: true,
     }
);

export default mongoose.model("Product", productSchema);
