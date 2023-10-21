import React, { useState } from "react";
import QuillEditor from "../../pages/forum/postEditor/quillEditor";
import { useCreateInternalTopicMutation } from "../../redux/internalTopics/internalTopicsApi";
import { getProfile } from "../../services/authservice";

const CreateTopicEditor = ({ id, createdAt }) => {
  const [editPost, setEditPost] = useState({ narrative: "", title: "" });
  const [createInternalTopic, { isLoading }] = useCreateInternalTopicMutation();

  const editThread = (content) => {
    setEditPost({ ...editPost, narrative: content });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // current user id
    const {_id: userId} = await getProfile();

    // submit data
    const topicData = {
      catId: id,
      narrative: editPost.narrative.split(">")[1].split("<")[0],
      name: editPost.title,
      user: userId,
      status: "active",
      createdAt,
    };

    // create topic
    createInternalTopic(topicData);
    setEditPost({ narrative: "", title: "" });
  };

  return (
    <div class="col-lg-12 ml-2 mt-5">
      <div class="row justify-content-center">
        <form>
          <div style={{ marginBottom: "10px" }}>
            <input
              value={editPost.title}
              onChange={(e) => {
                setEditPost({ ...editPost, title: e.target.value });
              }}
              style={{ width: "100%" }}
              placeholder="Topic's title"
              className="form-control"
            />
          </div>

          <QuillEditor onEditorChange={editThread} value={editPost.narrative} />
          <div className="mt-1">
            <button
              class="btn btn-outline-secondary btn-sm mr-1"
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTopicEditor;
