import { apiUrl } from "./../config/config";
import http from "./httpService";
const apiEndpoint = apiUrl.url + "/reqforappointments";

function reqAppointmentUrl(id) {
    return `${apiEndpoint}/${id}`;
}

export function saveRequestAppointment(appointment) {
    const formData = new FormData();

    //update
    if (appointment._id) {
        const body = { ...appointment };
        delete body._id;
        for (let key in body) {
            formData.append(key, body[key]);
        }

        return http.put(reqAppointmentUrl(appointment._id), body);
    }

    const body = { ...appointment };

    for (let key in body) {
        formData.append(key, body[key]);
    }

    return http.post(apiEndpoint, body);
}
