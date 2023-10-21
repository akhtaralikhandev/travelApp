//import axios from 'axios';
import http from './httpService'; 
import {apiUrl} from './../config/config';
const apiEndpoint = apiUrl.url+'/beautysalon';

  function userUrl(id) {
    return `${apiEndpoint}/${id}`;
  }
  
  export function getBeautySalons() {
    return http.get(apiEndpoint);
  }
  
  export function getBeautySalonByUser(id) {
    return http.get(`${apiEndpoint}/user/${id}`);
  }

  export function getBeautySalon(userId) {
    return http.get(userUrl(userId));
  }
  