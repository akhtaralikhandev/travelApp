import http from './httpService'; 
import {apiUrl} from './../config/config';
const apiEndpoint = apiUrl.url+'/dunhams';


  function dunhamUrl(id) {
    return `${apiEndpoint}/${id}`;
  }
  
  export function getDunhams() {
    return http.get(apiEndpoint);
  }
  
  export function getDunham(Id) {
    return http.get(dunhamUrl(Id));
  }
  