import axios from "axios";
import { API_BASE_URL } from "../config";

export const fetchApkDownloadUrl = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/app/download-url`);
    if (response.data.success) {
      return response.data.url;
    } else {
      throw new Error("Could not get download link");
    }
  } catch (error) {
    throw new Error(error.response?.data?.message || "Could not get download link");
  }
}; 