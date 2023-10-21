import http from './httpService';
import { apiUrl } from './../config/config';
const forumsubcategoriesEndpoint = apiUrl.url + '/forumsubcategories';


function forumSubCatUrl(id) {
  return `${forumsubcategoriesEndpoint}/${id}`;
}

export function getForumSubCats() {
  return http.get(forumsubcategoriesEndpoint);
}

export function getForumSubCat(Id) {
  return http.get(forumSubCatUrl(Id));
}

export function saveForumSubCat(forumSubCat) {
  //clone
  const body = { ...forumSubCat };
  console.log(body);
  //update
  if (forumSubCat._id) {
    //delete _id
    delete body._id;
    return http.put(forumSubCatUrl(forumSubCat._id), body);
  }

  //add a new forumCat
  return http.post(forumsubcategoriesEndpoint, forumSubCat);
}

//delete forumSubCats
export function deleteForumSubCat(Id) {
  return http.delete(forumSubCatUrl(Id));
}  