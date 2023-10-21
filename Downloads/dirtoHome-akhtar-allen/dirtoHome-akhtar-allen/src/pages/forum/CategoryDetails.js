// Displaying all the posts inside The selected Forum
// MainPostForm will provide form for this page
import React, { useState, useEffect } from "react";
import GeneralHeader from "../../components/common/GeneralHeader";
import { useParams, Link } from "react-router-dom";
// import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import AddIcon from '@material-ui/icons/Add';

import "../assets/css/forum/forums.css";

// Pagination
import Pagination from "./forum_components/Pagination";

// QuillEditor is in this component
import MainPostForm from "./forum_components/MainPostForm";

import auth from "../../services/authservice";
import { getUser } from '../../services/users';
import { getPostsData, getPosts, getTopics } from '../../services/posts';
import TopicsOfCatTable from "./CategoryIndexTopics";
import { Box } from "@material-ui/core";
import { getForumCat } from "../../services/forumcategories";

// Forum for component..
const CategoryDetails = () => {
  const [postsResult, setpostsResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const [currentUser, setCurrentUser] = useState([]);
  const [topics,setTopics] = useState([])
  const [category,setCategory] = useState({})
  const { forum_id } = useParams();

  const getTopicsOfCategory = async()=>{
   const topics = await getTopics()
   const comments = await getPosts()
   console.log(topics.data.length)
   const filteredTopics = topics.data.filter( e=> e.catId._id===forum_id)
   let count
   let topicsWithReplies =[]
   filteredTopics.forEach(element => {
    count=0
        
             //   comments.data.forEach(element1 => {
                  
              //      if(element1.topicId._id===element._id) count++
              //    });
              const objet = {element,count}  
              topicsWithReplies.push(objet)
              
            });
            setTopics(topicsWithReplies)

   const category = await getForumCat(forum_id)
   setCategory(category.data)
   }
  useEffect(()=>{
 getTopicsOfCategory()
  },[forum_id])


 






  const getCurrentUser = async () => {
    const user = auth.getProfile();
    if (user) {
      const { data: currentUser } = await getUser(user._id);
      setCurrentUser(currentUser);
    }
  }


 



  // called inside UseEffect to get all the posts
  const fetchPosts = async () => {
    setLoading(true);
    const res = await getTopics();
    let apiGetPosts = res.data.reverse();
    console.log(apiGetPosts, "before filter");
    setpostsResult(apiGetPosts);

 

    setpostsResult(apiGetPosts);
    console.log(postsResult, "i am postsResult");
    console.log(apiGetPosts);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
    getCurrentUser();
  }, []);

  // Get current posts
  console.log(postsResult);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postsResult.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Returning statement..
  return (
    <>
      <div
        style={{
          backgroundColor: "#333F57",
          width: "100%",
          height: "80px",
        }}
      >
        <GeneralHeader />
      </div>
      <Box>
          <TopicsOfCatTable
            category={category}
            latestData={topics}
            countTopics={topics.length}
          />
        </Box>
     

        
      
    </>
  );
};

export default CategoryDetails;
