import axios from 'axios';
import {toast} from 'react-toastify';


//axios.defaults.headers.common['x-auth-token'] = auth.getJwt();


//axios.interceptors.response.use(success,error);
axios.interceptors.response.use(null,error=>{
    //console.log('interceptor called');
   const expectedError = error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
    if(expectedError) {
      if(error.response.status === 403) toast.error('Access Denied');
    }
    if(!expectedError) {
      console.log('Logging Error : ' ,error);
      toast.error('Unexpected error');
    }
  
    return Promise.reject(error);
  });

  function setJwt(jwt) {
 
 axios.defaults.headers.common["x-auth-token"] = jwt;
    //axios.defaults.headers.post['Content-Type'] = 'application/json';
  }
  export default {
      get: axios.get,
      post: axios.post,
      put: axios.put,
      delete: axios.delete,
      setJwt
  };