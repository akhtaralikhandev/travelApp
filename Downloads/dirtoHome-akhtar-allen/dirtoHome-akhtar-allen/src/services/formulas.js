import http from './httpService'; 
import {apiUrl} from './../config/config';
const apiEndpoint = apiUrl.url+'/formulas';


  function formulaUrl(id) {
    return `${apiEndpoint}/${id}`;
  }
  
  export function getFormulas() {
    return http.get(apiEndpoint);
  }
  
  export function getFormula(Id) {
    return http.get(formulaUrl(Id));
  }
  