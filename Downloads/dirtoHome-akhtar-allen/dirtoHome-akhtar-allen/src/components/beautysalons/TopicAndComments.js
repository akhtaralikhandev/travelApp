import React from "react";
import { useGetInternalPostsQuery } from "../../redux/internalPosts/internalPostsApi";
import { useGetInternalTopicsQuery } from "../../redux/internalTopics/internalTopicsApi";
import TopicsAndCommentsTable from "../common/topicAndComments/TopicsAndCommentsTable";

export default function TopicAndComments(props) {
  const {
    data: internalTopics,
    isLoading: isTopicLoading,
    isError: isTopicError,
  } = useGetInternalTopicsQuery();
  const {
    data: internalPosts,
    isLoading: isPostLoading,
    isError: isPostError,
  } = useGetInternalPostsQuery();

  let content;
  if (isTopicLoading || isPostLoading) {
    content = <h2>Loading...</h2>;
  }

  if (isTopicError || isPostError) {
    content = <h2>Somthing went wrong!</h2>;
  }

  if (!isTopicLoading && !isTopicError && internalTopics.length === 0) {
    content = <h2>Topic empty!</h2>;
  }

  // main ui
  if (
    !isTopicLoading &&
    !isTopicError &&
    internalTopics.length > 0 &&
    !isPostLoading &&
    !isPostError
  ) {
    // filter all Acupuncture topic
    const acupunctureInternalTopic = internalTopics.filter(
      (topic) => topic.createdAt === "Acupuncture"
    );

    // find all comment/post by acupuncture topic id
    const acupunctureInternalTopic_withComments = acupunctureInternalTopic.map(
      (topic) => {
        const comments = internalPosts.filter(
          (post) => post.topicId._id === topic._id
        );

        return { ...topic, comments };
      }
    );

    content = (
      <TopicsAndCommentsTable
        topicsList={acupunctureInternalTopic_withComments}
      />
    );
  }

  return (
    <div className="container text-black">
      <div className="comments-wrap">
        {content}
      </div>
    </div>
  );
}
