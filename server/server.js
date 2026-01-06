import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import { adminRouter } from "./router/admin-router.js";
import { errorHandler } from "./middleware/error-middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();

const PORT = process.env.PORT || 3000;

await connectDB();

app.get("/", (req, res) => {
     res.status(200).json({ message: "API is running." });
});

app.use("/api/admin", adminRouter);

//Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
     console.log(`Server is running at port ${PORT}`);
});