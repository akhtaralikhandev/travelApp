import http from './httpService'; 
import { apiUrl } from './../config/config';
const apiEndpoint = apiUrl.url+'/amateriamedicas';

  function amateriamedicaUrl(id) {
    return `${apiEndpoint}/${id}`;
  }
  
  export function getMateriamedicas() {
    return http.get(apiEndpoint);
  }
  
  export function getMateriamedica(Id) {
    return http.get(amateriamedicaUrl(Id));
  }
  
