//import axios from 'axios';
import http from './httpService'; 
import {apiUrl} from './../config/config';
const apiEndpoint = apiUrl.url+'/salon';

  function userUrl(id) {
    return `${apiEndpoint}/${id}`;
  }
  
  export function getSalons() {
    return http.get(apiEndpoint);
  }
  
  export function getSalonByUser(id) {
    return http.get(`${apiEndpoint}/user/${id}`);
  }

  export function getSalon(userId) {
    return http.get(userUrl(userId));
  }
  