import http from './httpService'; 
import { apiUrl } from './../config/config';
const apiEndpoint = apiUrl.url+'/termofuses';


  function termofuseUrl(id) {
    return `${apiEndpoint}/${id}`;
  }
  
  export function getTermOfUses() {
    return http.get(apiEndpoint);
  }
  
  export function getTermOfUse(Id) {
    return http.get(termofuseUrl(Id));
  }
  
