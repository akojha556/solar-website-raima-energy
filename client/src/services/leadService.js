import api from "./api";

// Get all leads
export const getLeads = async () => {
     const response = await api.get("/api/leads");
     return response;
};

//Get total lead count
export const getLeadCount = async () => {
     const response = await api.get("/api/leads/count");
     return response;
};

//Get individual lead
export const getLead = async (id) => {
     const response = await api.get(`/api/leads/${id}`);
     return response;
};

//Add new lead
export const addLead = async (data) => {
     const response = await api.post("/api/leads", data);
     return response;
};

//Update lead
export const editLead = async (id, formData) => {
     const response = await api.put(`/api/leads/${id}`, formData);
     return response;
};

//Delete lead
export const removeLead = async (id) => {
     const response = await api.delete(`/api/leads/${id}`);
     return response;
};