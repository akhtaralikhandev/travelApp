import http from "./httpService";
import { apiUrl } from "./../config/config";
import jwtDecode from "jwt-decode";
const apiEndpoint = apiUrl.url + "/auth";
http.setJwt(getJwt());
//axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');

// login a user
export async function login(username, password) {
  const { data: jwt } = await http.post(apiEndpoint, { username, password });
  localStorage.setItem("token", jwt);
}

//after registration
export function loginWithJwt(jwt) {
  localStorage.setItem("token", jwt);
}

// logout
export function logout() {
  localStorage.removeItem("token");
}

//  current user
export function getProfile() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

// get token
export function getJwt() {
  return localStorage.getItem("token");
}

export default {
  login,
  logout,
  getProfile,
  loginWithJwt,
  getJwt,
};
