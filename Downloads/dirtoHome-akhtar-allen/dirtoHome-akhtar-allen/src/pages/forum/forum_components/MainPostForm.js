// For creating new Post
import React, { useState } from "react";
import QuillEditor from "../postEditor/quillEditor";
import { savePost } from "../../../services/posts";
import auth from "./../../../services/authservice";

const MainPostForm = (props) => {
  const [myThread, setMyThread] = useState({
    title: "",
    message: "This is the initial content of the editor.",
    // because by default tinymce contains this message
    // in case of changing change both places
  });
  const [alertMessage, setAlertMessage] = useState({ type: "", message: "" });

  const updateThread = (e) => {
    e.preventDefault();

    // because of this it will work for both message and title
    let id = e.target.id;

    let value = e.target.value;
    //spread the operator and insert the values
    //let newThread = { ...myThread, [id]: value };
    const newThread = {...myThread};
    newThread[id] = value;
    setMyThread(newThread);
  };

  // it will be set by post editor
  const updateMessage = (value) => {
    //let newThread = { ...myThread, message: value };
    const newThread = {...myThread};
    newThread.message= value;
    setMyThread(newThread);
    console.log(myThread, "myThread");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.getProfile();	
    let url = myThread.title;
    let newURL = url.trim().replace(/\s/g, "-").replace(/\'/g, "");

    if (myThread.message != "" && myThread.title != "") {
      props.submitThread(e);
      const postData = {
        user: user._id,
        forumId: props.forum_id,
        // since data value is myThread , it will give you only title and message not img
        title: myThread.title,
        message: myThread.message,
        slug: newURL,
      };
      try {
      await savePost(postData);
    } catch (ex) {
      if (ex.response.status === 400) alert(ex.response.data);
    }
      props.loadPage();
    } else if (myThread.title != "" && myThread.message == "") {
      alert("message is empty ");
    } else {
      alert("title is empty ");
    }
  };

  const handleSubmit_old = async (e) => {
    e.preventDefault();

    let url = myThread.title;
    let newURL = url.trim().replace(/\s/g, "-").replace(/\'/g, "");

    if (myThread.message != "" && myThread.title != "") {
      props.submitThread(e);
      let walkData = {
        id: localStorage.id,
        forum_id: props.forum_id,
        // since data value is myThread , it will give you only title and message not img
        data: myThread,
        slug: newURL,
        name: localStorage.name,
        // ye localStorage me h confirmed
        img: localStorage.img,
      };

      const apiThread = await fetch("http://localhost:8080/api/newpost", {
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(walkData),
      }).then((result) => result.json());

      if (apiThread.message) {
        setAlertMessage({ type: "success", message: apiThread.message });
        setTimeout(function () {
          setAlertMessage({});
        }, 1000);
      } else {
        setAlertMessage({ type: "danger", message: apiThread.message });
        setTimeout(function () {
          setAlertMessage({});
        }, 1000);
      }
      props.loadPage();
    } else if (myThread.title != "" && myThread.message == "") {
      alert("message is empty ");
    } else {
      alert("title is empty ");
    }
  };




  const handleCancel = (e) => {
    props.submitThread(e);
  };

  return (
    <div class="col-lg-12">
      <div class="row justify-content-center">
        <div
          class={
            alertMessage.type ? `alert alert-${alertMessage.type}` : `d-hide`
          }
          role="alert"
        >
          {alertMessage.message}
        </div>
        <div className="card card-body mb-3">
          <form>
            <div className="form-group">
              <textarea
                className="form-control"
                type="textarea"
                name=""
                id="title"
                value={myThread.title}
                onChange={updateThread}
                placeholder="Title"
                cols="100"
                rows="1"
              ></textarea>
              <br />
              {/* <PostEditor
                updateMessage={updateMessage}
                className='form-control'
                id='message'
              />{" "} */}
              <QuillEditor
                value={myThread.message}
                onEditorChange={updateMessage}
              />
              <br />
              {/* <FileUpload /> */}
              <button
                class="btn btn-secondary btn-sm mr-1  "
                type="submit"
                onClick={handleSubmit}
              >
                Post
              </button>
              <button
                class="btn btn-secondary btn-sm"
                type="submit"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainPostForm;
