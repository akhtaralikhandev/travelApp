import http from './httpService'; 
import {apiUrl} from './../config/config';
const apiEndpoint = apiUrl.url+'/clarkes';


  function clarkeUrl(id) {
    return `${apiEndpoint}/${id}`;
  }
  
  export function getClarkes() {
    return http.get(apiEndpoint);
  }
  
  export function getClarke(Id) {
    return http.get(clarkeUrl(Id));
  }
  