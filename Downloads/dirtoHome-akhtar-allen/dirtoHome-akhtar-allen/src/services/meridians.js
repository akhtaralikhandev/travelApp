import http from './httpService'; 
import {apiUrl} from './../config/config';
const apiEndpoint = apiUrl.url+'/meriadians';


  function meriadianUrl(id) {
    return `${apiEndpoint}/${id}`;
  }
  
  export function getMeriadians() {
    return http.get(apiEndpoint);
  }
  
  export function getMeriadian(Id) {
    return http.get(meriadianUrl(Id));
  }
  