import mongoose from "mongoose";
import { stringify } from "querystring";

const blockSchema = mongoose.Schema({
     title: {
          type: String,
          required: true
     },
     desc: {
          type: String,
          required: true
     }
}, { _id: false });

const serviceSchema = mongoose.Schema({
     title: {
          type: String,
          required: [true, "Please enter a title."],
          trim: true,
          unique: true
     },
     slug: {
          type: String,
          required: true,
          lowercase: true,
          unique: true
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
     idealFor: {
          type: String,
          required: true
     },
     options: [blockSchema],
     useCases: [blockSchema],
     benefits: [blockSchema],
}, { timestamps: true });

export default mongoose.model("Service", serviceSchema);