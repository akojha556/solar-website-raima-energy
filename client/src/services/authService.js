import api from "./api";

//Login
export const loginAdmin = async (data) => {
     const response = await api.post("/api/admin/admin-login", data);
     return response.data;
};

//Forget password
export const forgetPassword = async (email) => {
     const response = await api.post("/api/admin/forget-password", email);
     return response.data;
};

//Verify reset token
export const verifyResetToken = async (token) => {
     const response = await api.post(`/api/admin/verify-token/${token}`);
     return response.data;
};

//Reset password
export const resetPassword = async (token, password) => {
     const response = await api.post(`/api/admin/reset-password/${token}`, password);
     return response.data;
};