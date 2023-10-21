import http from './httpService'; 
import {apiUrl} from './../config/config';
const apiEndpoint = apiUrl.url+'/allens';


  function allenUrl(id) {
    return `${apiEndpoint}/${id}`;
  }
  
  export function getAllens() {
    return http.get(apiEndpoint);
  }
  
  export function getAllen(Id) {
    return http.get(allenUrl(Id));
  }
  