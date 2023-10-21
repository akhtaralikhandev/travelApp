import http from './httpService'; 
import {apiUrl} from './../config/config';
const forumcategoriesEndpoint = apiUrl.url+'/forumcategories';


function forumCatUrl(id) {
    return `${forumcategoriesEndpoint}/${id}`;
  }
  
  export function getForumCats() {
    return http.get(forumcategoriesEndpoint);
  }
  
  export function getForumCat(Id) {
  return http.get(forumCatUrl(Id));
  }
  
  export function saveForumCat(forumCat) {
    //clone
    const body = { ...forumCat };
    console.log(body);
   //update
   if (forumCat._id) {
     //delete _id
     delete body._id;
    return http.put(forumCatUrl(forumCat._id),body);
   }
 
   //add a new forumCat
   return http.post(forumcategoriesEndpoint, forumCat);
 }
  
  //delete forumCats
  export function deleteForumCat(Id) {
  return http.delete(forumCatUrl(Id));
  }  