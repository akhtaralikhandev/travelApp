import http from './httpService'; 
import {apiUrl} from './../config/config';

// EndPoints..
const topicsEndpoint = apiUrl.url+'/internaltopics';
const postsEndpoint = apiUrl.url+'/internalposts';


function postUrl(id) {
  return `${postsEndpoint}/${id}`;
}
  function topicUrl(id) {
    return `${topicsEndpoint}/${id}`;
  }
  export function getInternalPosts(){
    return http.get(postsEndpoint);
  }
  export function getInternalTopics(){
    return http.get(topicsEndpoint);
  }




  export function getInternalPost(Id) {
    return http.get(postUrl(Id));
  }
  export function getInternalTopic(Id) {
    return http.get(topicUrl(Id));
  }
  
  
  export function deleteInternalPost(Id) {
    return http.delete(postUrl(Id));
  }
  
   export function deleteInternalTopic(Id) {
    return http.delete(topicUrl(Id));
  } 

  export function saveInternalPost(post) {
    //clone
    const body = { ...post };
   //update
   if (body._id) {
     //delete _id
     delete body._id;
     return http.put(postUrl(post._id),body);
   }
 
   //add a new post
   return http.post(postsEndpoint, post);
 }

  export function saveInternalTopic(topic) {
    //clone
    const body = { ...topic };
    console.log(body);
   //update
   if (body._id) {
     //delete _id
     delete body._id;
     return http.put(topicUrl(topic._id),body);
   }
 
   //add a new post
   return http.post(topicsEndpoint, topic);
 }