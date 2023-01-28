import { apiInstance } from "shared/api";

const BASE_URL = "/contacts";

export const getContactList = (params) => {
  return apiInstance.get(BASE_URL, { params });
};

export const getContactById = ({ taskId, ...params }) => {
  return apiInstance.get(`${BASE_URL}/${taskId}`, { params });
};
