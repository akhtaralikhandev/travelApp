import React, { useState, useRef } from "react";
import { getProfile } from "../../../services/authservice";
import { saveInternalPost } from "../../../services/internaltopics";
import QuillEditor from "../postEditor/quillEditor";
import {savePost, saveTopic} from "./../../../services/posts";
const ReplyTopic = (props) => {
  // console.log(props.Post)
  const [editPost, setEditPost] = useState({narrative: "",reply:""})

  const editThread = (content) => {
    let postEdit = content
    console.log(content)
    setEditPost({ narrative: postEdit })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()


    const currentUser = await getProfile()
    
    let editPostData ={}
    if(props.reply==="topic")
   {
    editPostData = { 
      topicId: props.Post._id,
      narrative: editPost.narrative.split('>')[1].split('<')[0],
      user: currentUser._id,
      status:"active"
    }
    await savePost(editPostData);
  }
   else{
    editPostData = { 
      topicId: props.Post.topicId._id,
      parentId: props.Post._id,
      narrative: editPost.narrative.split('>')[1].split('<')[0],
      user: currentUser._id,
      status:"active"
    }

        await savePost(editPostData);   }

    props.submitReplyForm(e)
    props.loadPage()
  }

  const handleCancel = (e) => {
    props.submitReplyForm(e)
    e.preventDefault()
  }

  return (
    <div>
      <div class='col-lg-12 ml-2'>
        <div class='row justify-content-center'>
          {/* <div class={ alertMessage.type ? `alert alert-${alertMessage.type}` : `d-hide`} role="alert">
                        {alertMessage.message}
                    </div> */}
          <form>
            <QuillEditor onEditorChange={editThread} value={editPost.narrative } />
            <div className='mt-1'>
              <button
                class='btn btn-outline-secondary btn-sm mr-1'
                type='submit'

                onClick={handleSubmit}
              >
                Submit
              </button>
              <button
                class='btn btn-outline-secondary btn-sm'
                type='submit'
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ReplyTopic
