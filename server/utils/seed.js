import Product from "../model/product-model.js";

export const insertProducts = async () => {
    try {
        const result = await Product.insertMany(productsData);
        console.log("Products inserted", result);
    } catch (error) {
        console.error(error);
    }
};