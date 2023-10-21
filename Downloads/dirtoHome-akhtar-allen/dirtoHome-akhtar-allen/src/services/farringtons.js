import http from './httpService'; 
import {apiUrl} from './../config/config';
const apiEndpoint = apiUrl.url+'/farringtons';


  function farringtonUrl(id) {
    return `${apiEndpoint}/${id}`;
  }
  
  export function getFarringtons() {
    return http.get(apiEndpoint);
  }
  
  export function getFarrington(Id) {
    return http.get(farringtonUrl(Id));
  }
  