import api from "./api";

export const getAllProducts = async () => {
     const response = await api.get("/api/products");
     return response;
};

export const addProduct = async (formData) => {
     const response = await api.post("/api/products/", formData);
     return response;
};

export const updateProduct = async (id, formData) => {
     const response = await api.put(`/api/products/${id}`, formData);
     return response;
};

export const deleteProduct = async (id) => {
     const response = await api.delete(`/api/products/${id}`);
     return response;
};