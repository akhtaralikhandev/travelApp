//import axios from 'axios';
import http from './httpService'; 
import {apiUrl} from './../config/config';
const apiEndpoint = apiUrl.url+'/company';

  function userUrl(id) {
    return `${apiEndpoint}/${id}`;
  }
  
  export function getCompanies() {
    return http.get(apiEndpoint);
  }
  
  export function getCompanyByUser(id) {
    return http.get(`${apiEndpoint}/user/${id}`);
  }

  export function getCompany(userId) {
    return http.get(userUrl(userId));
  }
  