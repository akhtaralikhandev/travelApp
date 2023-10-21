import http from './httpService'; 
import {apiUrl} from './../config/config';
const repliesEndpoint = apiUrl.url+'/replies';


  function replyUrl(id) {
    return `${repliesEndpoint}/${id}`;
  }
  
  export function getReplies(postId) {
    return http.get(`${repliesEndpoint}/post/${postId}`);
  }
  
  export function getReply(Id) {
    return http.get(replyUrl(Id));
  }
  
  export function saveReply(reply) {
    //clone
    const body = { ...reply };
    console.log(body);
   //update
   if (reply._id) {
     //delete _id
     delete body._id;
     return http.put(replyUrl(reply._id),body);
   }
 
   //add a new action
   return http.post(repliesEndpoint, reply);
 }
  
  //delete actions
  export function deleteReply(Id) {
    return http.delete(replyUrl(Id));
  }  