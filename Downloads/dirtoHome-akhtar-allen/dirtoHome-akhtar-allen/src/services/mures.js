import http from './httpService'; 
import {apiUrl} from './../config/config';
const apiEndpoint = apiUrl.url+'/mures';


  function mureUrl(id) {
    return `${apiEndpoint}/${id}`;
  }
  
  export function getMures() {
    return http.get(apiEndpoint);
  }
  
  export function getMure(Id) {
    return http.get(mureUrl(Id));
  }
  