import http from './httpService'; 
import {apiUrl} from './../config/config';
const apiEndpoint = apiUrl.url+'/hahnemanns';


  function hahnemannUrl(id) {
    return `${apiEndpoint}/${id}`;
  }
  
  export function getHahnemanns() {
    return http.get(apiEndpoint);
  }
  
  export function getHahnemann(Id) {
    return http.get(hahnemannUrl(Id));
  }
  