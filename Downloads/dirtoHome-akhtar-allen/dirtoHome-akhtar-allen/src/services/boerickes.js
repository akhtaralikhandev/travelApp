import http from './httpService'; 
import {apiUrl} from './../config/config';
const apiEndpoint = apiUrl.url+'/boerickes';


  function boerickeUrl(id) {
    return `${apiEndpoint}/${id}`;
  }
  
  export function getBoerickes() {
    return http.get(apiEndpoint);
  }
  
  export function getBoericke(Id) {
    return http.get(boerickeUrl(Id));
  }
  
  