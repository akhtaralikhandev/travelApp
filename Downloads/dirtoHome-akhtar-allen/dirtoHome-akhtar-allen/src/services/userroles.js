import { apiUrl } from "./../config/config.json";
import http from "./httpService";
const apiEndpoint = apiUrl + "/userroles";

function userroleUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getUserroles() {
  return http.get(apiEndpoint);
}

export function getUserrole(Id) {
  return http.get(userroleUrl(Id));
}

export function saveUserrole(userrole) {
  //clone
  const body = { ...userrole };
  //update
  if (userrole._id) {
    delete body._id;
    return http.put(userroleUrl(userrole._id), body);
  }

  //add a new userrole
  return http.post(apiEndpoint, userrole);
}

//delete userroles
export function deleteUserrole(Id) {
  return http.delete(userroleUrl(Id));
}
