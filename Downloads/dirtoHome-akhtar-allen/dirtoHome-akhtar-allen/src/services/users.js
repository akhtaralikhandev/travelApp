//import axios from 'axios';
import http from "./httpService";
import { apiUrl } from "./../config/config";

const apiEndpoint = apiUrl.url + "/users";

// export async function getUsers(){
// const response = await http.get("http://localhost:4500/api/users");
// return response;
//   }
function userUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export async function recoverUser(email, username) {
  return await http.post(`${apiEndpoint}/recover`, {
    email: email,
    username: username
  });
}

export function getUsers() {
  return http.get(apiEndpoint);
}

export function getUser(userId) {
  return http.get(userUrl(userId));
}
// one extra param: imageSrc
export async function saveUser(user) {
  const formData = new FormData();
  //update
  if (user._id) {
    //clone user and delete _id
    const body = { ...user };
    delete body._id;
    for (let key in body) {
      formData.append(key, body[key]);
    }
    //formData.append("imageSrc", imageSrc);
    return await http.put(userUrl(user._id), formData);
  }
  const body = { ...user };

  for (let key in body) {
    formData.append(key, body[key]);
  }
  // for (var key of formData.entries()) {
  //   console.log(key[0] + ", " + key[1]);
  // }
  //formData.append("imageSrc", imageSrc);
  //add a new user

  await http.post(apiEndpoint, formData);
}

//delete users
export function deleteUser(userId) {
  return http.delete(userUrl(userId));
}

export default {
  recoverUser,
  getUser,
  getUsers,
  saveUser,
  deleteUser,
};
