import mongoose from "mongoose";

//Common block schema
const commonBlockSchema = mongoose.Schema(
     {
          title: {
               type: String,
               required: true,
               trim: true
          },

          desc: {
               type: String,
               required: true,
               trim: true
          }
     }, { _id: false }
);

//Product schema
const productSchema = mongoose.Schema(
     {
          title: {
               type: String,
               required: [true, "Please enter a title"],
               trim: true,
               unique: true
          },

          slug: {
               type: String,
               required: true,
               unique: true,
               lowercase: true
          },

          images: {
               main: {
                    public_id: { type: String, required: true },
                    url: { type: String, required: true }
               },
               secondary: {
                    public_id: { type: String, required: true },
                    url: { type: String, required: true }
               },
          },

          shortDesc: {
               type: String,
               required: true
          },

          overview: {
               type: String,
               required: true
          },

          applications: [commonBlockSchema],

          benifits: [commonBlockSchema],

          types: [commonBlockSchema],

          idealFor: {
               type: String,
               required: true
          },

          isActive: {
               type: Boolean,
               default: true
          }
     }, { timestamps: true }
);

export default mongoose.model("Product", productSchema);