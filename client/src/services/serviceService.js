import api from "./api";

// Get all services
export const getServices = async () => {
     const response = await api.get("/api/services");
     return response;
};

//Get service count
export const getServiceCount = async () => {
     const response = await api.get("/api/services/count");
     return response;
};

//Get individual service
export const getService = async (id) => {
     const response = await api.get(`/api/services/${id}`);
     return response;
};

//Add new service
export const addService = async (formData) => {
     const response = await api.post("/api/services", formData);
     return response;
};

// Update a service
export const updateService = async (id, formData) => {
     const response = await api.put(`/api/services/${id}`, formData);
     return response;
};

//Delete a service
export const deleteService = async (id) => {
     const response = await api.delete(`/api/services/${id}`);
     return response;
};