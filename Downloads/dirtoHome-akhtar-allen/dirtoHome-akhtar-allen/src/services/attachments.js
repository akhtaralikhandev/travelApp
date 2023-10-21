import { apiUrl } from "../config/config";
import http from "./httpService";
const apiEndpoint = apiUrl.url + "/attachments";

export const saveAttachments = async (files, type, id, onUploadProgress) => {
  const formData = new FormData();
  for (let x = 0; x < files.length; x++) {
    formData.append("attachments", files[x]);
  }
  formData.append("type", type);
  await http.put(apiEndpoint + "/" + id, formData, { onUploadProgress });
};

export const deleteAttachments = async (filePath, id, type) => {
  await http.delete(apiEndpoint + "/" + id + "/" + type + "/" + filePath);
};
