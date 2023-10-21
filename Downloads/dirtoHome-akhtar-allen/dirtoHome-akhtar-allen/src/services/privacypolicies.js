import http from "./httpService";
import { apiUrl } from "./../config/config";
const apiEndpoint = apiUrl.url + "/privacypolicies";
console.log(apiEndpoint);

function privacypolicyUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getPrivacyPolicies() {
  return http.get(apiEndpoint);
}

export function getPrivacyPolicy(Id) {
  return http.get(privacypolicyUrl(Id));
}

export function savePrivacyPolicy(privacypolicy) {
  //clone
  const body = { ...privacypolicy };
  //update
  if (privacypolicy._id) {
    delete body._id;
    return http.put(privacypolicyUrl(privacypolicy._id), body);
  }

  //add a new privacypolicie
  return http.post(apiEndpoint, privacypolicy);
}

//delete privacypolicies
export function deletePrivacyPolicy(Id) {
  return http.delete(privacypolicyUrl(Id));
}
