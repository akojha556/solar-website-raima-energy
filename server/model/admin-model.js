import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
     username: {
          type: String,
          required: [true, "Please enter a valid username!"],
          trim: true,
          unique: true
     },
     password: {
          type: String,
          required: [true, "Please enter a valid password!"],
          minlength: 6,
     }
});

export default mongoose.model("Admin", adminSchema);