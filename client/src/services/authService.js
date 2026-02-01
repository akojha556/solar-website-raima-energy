import api from "./api";

export const loginAdmin = async (data) => {
     const response = await api.post("/api/admin/admin-login", data);
     return response.data;
};