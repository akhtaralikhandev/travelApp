import http from './httpService'; 
import {apiUrl} from './../config/config';
const apiEndpoint = apiUrl.url+'/nashs';


  function nashUrl(id) {
    return `${apiEndpoint}/${id}`;
  }
  
  export function getNashs() {
    return http.get(apiEndpoint);
  }
  
  export function getNash(Id) {
    return http.get(nashUrl(Id));
  }
  