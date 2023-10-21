import React, { useEffect, useState } from "react";
import CommentsTable from "../components/contact/CommentsTable";
import { getInternalPosts, getInternalTopics } from "../services/internaltopics";
import { CommentData } from "../store/CommentData";

const Comment = (props) => {
  const [commentLists, setCommentLists] = useState([]);

  const getData = async () => {
    if (props.page === "/acupunctures") {
      const topics = await getInternalTopics();
      let comments = await getInternalPosts();
      const filteredTopics = topics.data.filter(
        (e) => e?.catId?._id === props.category?._id
      );
      const filteredComments = comments.data.filter(
        (e) => e?.createdAt === "InternalTopic"
      );

      console.log(topics);
      console.log(filteredTopics);
      console.log(filteredComments);

      filteredTopics.forEach((element) => {
        let f = filteredComments.filter(
          (element1) => element1.topicId._id === element._id
        );
        element.replyComments = f;
      });

      setCommentLists(filteredTopics);
    } else {
      setCommentLists(CommentData);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  console.log("comment")
  console.log(commentLists);
  console.log("comment")
  return (
    <div className="container text-black">
      <div className="comments-wrap">
        <h2 className="widget-title">{commentLists?.length}</h2>
        <div className="title-shape"></div>
        <CommentsTable commentLists={commentLists} />
      </div>
    </div>
  );
};

export default Comment;
