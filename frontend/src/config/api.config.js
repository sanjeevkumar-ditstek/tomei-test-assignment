import { env } from "./env";

// Read api url from env file
const API_URL = env.API_URL;

// API end points
const API_ENDPOINTS = {
  LOGIN: "/Auth/Login",
  CREATE_ACCOUNT:'/users'
};
export const getApiUrl = (key) => {
  return API_URL + API_ENDPOINTS[key];
};