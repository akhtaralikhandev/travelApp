import React, { useState, useRef } from "react";
import QuillEditor from "../postEditor/quillEditor";
import { saveTopic} from "./../../../services/posts";
const EditPost = (props) => {
  // console.log(props.Post)
  const [editPost, setEditPost] = useState({narrative: props.Post.narrative})

  const editThread = (content) => {
    let postEdit = content
    setEditPost({ narrative: postEdit })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  console.log(props)
    let editPostData = { ...props.Post,
      _id: props.Post._id,
      narrative: editPost.narrative.split('>')[1].split('<')[0],
    
    }
        await saveTopic(editPostData);
    props.submitForm(e)
    props.loadPage()
  }

  const handleCancel = (e) => {
    props.submitForm(e)
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

export default EditPost
