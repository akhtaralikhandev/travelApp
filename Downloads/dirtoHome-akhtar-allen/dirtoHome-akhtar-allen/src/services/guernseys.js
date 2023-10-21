import http from './httpService'; 
import {apiUrl} from './../config/config';
const apiEndpoint = apiUrl.url+'/guernseys';


  function guernseyUrl(id) {
    return `${apiEndpoint}/${id}`;
  }
  
  export function getGuernseys() {
    return http.get(apiEndpoint);
  }
  
  export function getGuernsey(Id) {
    return http.get(guernseyUrl(Id));
  }
  