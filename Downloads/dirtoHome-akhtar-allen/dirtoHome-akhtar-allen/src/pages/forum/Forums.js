// Displaying all the posts inside The selected Forum
// MainPostForm will provide form for this page
import React, { useState, useEffect } from "react";
import GeneralHeader from "../../components/common/GeneralHeader";
import { useParams } from "react-router-dom";
import "../assets/css/forum/forums.css";
import auth from "./../../services/authservice";
import { getUser } from "./../../services/users";
import { getPosts, getTopics } from "./../../services/posts";
import TopicsOfCatTable from "./CategoryIndexTopics";
import { Box } from "@material-ui/core";
import { getForumCat } from "../../services/forumcategories";
import Layout from "../../components/common/Layout";
import NavigateMenu from "./NavigateMenu";
import HeaderTable2 from "./HeaderTable2";

// Forum for component..
const Forums = () => {
  const [postsResult, setpostsResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const [currentUser, setCurrentUser] = useState([]);
  const [topics, setTopics] = useState([]);
  const [category, setCategory] = useState({});
  const { forum_id } = useParams();

  const getTopicsOfCategory = async () => {
    const topics = await getTopics();
    const comments = await getPosts();

    const filteredTopics = topics.data.filter(
      (e) => e?.catId?._id === forum_id
    );
    let count;
    let topicsWithReplies = [];
    filteredTopics.forEach((element) => {
      count = 0;
      comments.data.forEach((element1) => {
        if (element1.topicId._id === element._id) count++;
      });
      const objet = { element, count };
      topicsWithReplies.push(objet);
    });
    setTopics(topicsWithReplies);

    const category = await getForumCat(forum_id);
    setCategory(category.data);
  };
  useEffect(() => {
    getTopicsOfCategory();
  }, [forum_id]);

  const getCurrentUser = async () => {
    const user = auth.getProfile();
    if (user) {
      const { data: currentUser } = await getUser(user._id);
      setCurrentUser(currentUser);
    }
  };

  // called inside UseEffect to get all the posts
  const fetchPosts = async () => {
    setLoading(true);
    const res = await getTopics();
    let apiGetPosts = res.data.reverse();

    setpostsResult(apiGetPosts);
    setpostsResult(apiGetPosts);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
    getCurrentUser();
  }, []);

  // Returning statement..
  return (
    <Layout>
      <Box mt={15} mb={15} className="container">
        <NavigateMenu />
        <HeaderTable2 />
        <TopicsOfCatTable
          category={category}
          latestData={topics}
          countTopics={topics.length}
        />
      </Box>
    </Layout>
  );
};

export default Forums;
