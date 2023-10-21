import http from './httpService'; 
import {apiUrl} from './../config/config';
const apiEndpoint = apiUrl.url+'/lippes';


  function lippeUrl(id) {
    return `${apiEndpoint}/${id}`;
  }
  
  export function getLippes() {
    return http.get(apiEndpoint);
  }
  
  export function getLippe(Id) {
    return http.get(lippeUrl(Id));
  }
  