import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  timeout: 5000, // Set a timeout for requests
  withCredentials: true // If you're using cookies for authentication
});

// Request interceptor for adding auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Response interceptor for handling common errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Response error:", error.response.data);
      if (error.response.status === 401) {
        // Handle unauthorized access
        // e.g., redirect to login page
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Request error:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default {
  placeBid: (itemId, amount) => api.post('/bids/place', { itemId, amount }),
  getUserBids: (userId) => api.get(`/bids/user/${userId}`),
  updateBidStatus: (bidId, status) => api.put(`/bids/update/${bidId}`, { status }),
};