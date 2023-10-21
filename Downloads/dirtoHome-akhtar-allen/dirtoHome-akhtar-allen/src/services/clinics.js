//import axios from 'axios';
import http from './httpService'; 
import {apiUrl} from './../config/config';
const apiEndpoint = apiUrl.url+'/clinicsolo';

  function userUrl(id) {
    return `${apiEndpoint}/${id}`;
  }
  
  export function getClinics() {
    return http.get(apiEndpoint);
  }
  
  export function getClinicByUser(id) {
    return http.get(`${apiEndpoint}/user/${id}`);
  }

  export function getClinic(userId) {
    return http.get(userUrl(userId));
  }
  