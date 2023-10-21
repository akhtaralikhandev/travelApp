import http from './httpService'; 
import {apiUrl} from './../config/config';
const apiEndpoint = apiUrl.url+'/borgers';


  function borgerUrl(id) {
    return `${apiEndpoint}/${id}`;
  }
  
  export function getBorgers() {
    return http.get(apiEndpoint);
  }
  
  export function getBorger(Id) {
    return http.get(borgerUrl(Id));
  }
 
  