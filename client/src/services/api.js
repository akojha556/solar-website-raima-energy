import axios from "axios";

const api = axios.create({
     baseURL: import.meta.env.VITE_API_URL,
     withCredentials: true,
});

let isRedirecting = false;

api.interceptors.response.use(
     (response) => response,
     (error) => {
          if (error.response?.status === 401 && !isRedirecting) {
               isRedirecting = true;
               window.location.href = "/login";
          }
          return Promise.reject(error);
     }
);


export default api;