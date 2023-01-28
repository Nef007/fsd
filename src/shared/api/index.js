import axios from "axios";
import { API_URL } from "shared/config";

export const apiInstance = axios.create({
  baseURL: API_URL,
  headers: { Authorization: "Bearer 123456" },
});

//headers: { Authorization: "Bearer " + getToken() },
