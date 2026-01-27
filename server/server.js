import dotenv from "dotenv";
import express from "express";
dotenv.config();
import { connectDB } from "./config/db.js";
import { adminRouter } from "./router/admin-router.js";
import { productRouter } from "./router/product-router.js";
import { serviceRouter } from "./router/service-router.js";
import { errorHandler } from "./middleware/error-middleware.js";
import { connectCloudinary } from "./config/cloudinary.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT || 3000;

await connectDB();
connectCloudinary();
app.get("/", (req, res) => {
     res.status(200).json({ message: "API is running." });
});

app.use("/api/admin", adminRouter);
app.use("/api/products", productRouter);
app.use("/api/services", serviceRouter);

//Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
     console.log(`Server is running at port ${PORT}`);
});