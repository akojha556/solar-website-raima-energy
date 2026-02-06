import api from "./api";
//Get all products
export const getAllProducts = async () => {
     const response = await api.get("/api/products");
     return response;
};
//Get individual product
export const getProduct = async (id) => {
     const response = await api.get(`/api/products/${id}`);
     return response;
}
//Add pnew product
export const addProduct = async (formData) => {
     const response = await api.post("/api/products", formData);
     return response;
};
//Update product
export const updateProduct = async (id, formData) => {
     const response = await api.put(`/api/products/${id}`, formData);
     return response;
};
//Delete product
export const deleteProduct = async (id) => {
     const response = await api.delete(`/api/products/${id}`);
     return response;
};