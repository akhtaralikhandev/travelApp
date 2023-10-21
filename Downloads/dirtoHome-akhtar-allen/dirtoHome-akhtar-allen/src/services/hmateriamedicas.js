import http from './httpService'; 
import {apiUrl} from './../config/config';
const apiEndpoint = apiUrl.url+'/hmateriamedicas';


  function hmateriamedicaUrl(id) {
    return `${apiEndpoint}/${id}`;
  }
  
  export function gethMateriamedicas() {
    return http.get(apiEndpoint);
  }
  
  export function gethMateriamedica(Id) {
    return http.get(hmateriamedicaUrl(Id));
  }
  