import http from './httpService'; 
import {apiUrl} from './../config/config';
const apiEndpoint = apiUrl.url+'/herings';


  function heringUrl(id) {
    return `${apiEndpoint}/${id}`;
  }
  
  export function getHerings() {
    return http.get(apiEndpoint);
  }
  
  export function getHering(Id) {
    return http.get(heringUrl(Id));
  }
  