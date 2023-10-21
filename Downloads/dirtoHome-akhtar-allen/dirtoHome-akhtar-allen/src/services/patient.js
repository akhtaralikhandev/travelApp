import { apiUrl } from "./../config/config";
import http from "./httpService";
const apiEndpoint = apiUrl.url + "/patients";

function patientUrl(id) {
    return `${apiEndpoint}/${id}`;
}

export function getPatients() {
    return http.get(apiEndpoint);
}

export function getPatient(Id) {
    return http.get(patientUrl(Id));
}
