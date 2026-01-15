import asyncHandler from "express-async-handler";

//Get all products
export const getProducts = asyncHandler(async (req, res) => {
     res.status(200).json({ message: "Get products" });
});

//add new products
export const addProduct = asyncHandler(async (req, res) => {
     res.status(200).json({ message: "Add products" });
});

//update a product
export const updateProduct = asyncHandler(async (req, res) => {
     res.status(200).json({ message: "Update products" });
});

//Remove a product
export const removeProduct = asyncHandler(async (req, res) => {
     res.status(200).json({ message: "Remove products" });
});