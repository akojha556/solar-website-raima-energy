import mongoose from "mongoose";

const leadSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });

export default mongoose.model("Lead", leadSchema);