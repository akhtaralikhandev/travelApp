import React, { useState, useRef } from "react";
import { getProfile } from "../services/authservice";
import QuillEditor from "../pages/forum/postEditor/quillEditor";
import {savePost, saveTopic} from "../services/posts";
import "./CreateTopic.css"
import { useHistory } from "react-router-dom";
import { saveInternalTopic } from "../services/internaltopics";
const   CreateTopic = (props) => {
  // console.log(props.Post)
  const history = useHistory()
  const [editPost, setEditPost] = useState({narrative: ""})
  const [title, setTitle] = useState()

  const editThread = (content) => {
    let postEdit = content
    console.log(content)
    setEditPost({ narrative: postEdit })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const currentUser = await getProfile()
    let topicData ={}
    topicData = { 
      catId: props.category._id,
      narrative: editPost.narrative.split('>')[1].split('<')[0],
      name:title,
      user: currentUser._id,
      status:"active",
      createdAt:"Acupuncture"
    }
    console.log(topicData)
    await saveInternalTopic(topicData);
    setEditPost({title:"" })
    history.push(`/acupunctures/${props.category.name}`);

   // props.loadPage()
  }


  return (
    <div>
      <div class='col-lg-12 ml-2'>
        <div class='row justify-content-center'>
          {/* <div class={ alertMessage.type ? `alert alert-${alertMessage.type}` : `d-hide`} role="alert">
                        {alertMessage.message}
                    </div> */}
          <form>
            <div style={{marginBottom:"10px"  }}>
            <input className="myInput" value={title } onChange={(e)=>{
              setTitle(e.target.value )}} style={{width:"100%" }} placeholder="Topic's title" /> 
            </div>

            <QuillEditor onEditorChange={editThread} value={editPost.narrative } />
            <div className='mt-1'>
              <button
                class='btn btn-outline-secondary btn-sm mr-1'
                type='submit'

                onClick={handleSubmit}
              >
                Submit
              </button>
            
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateTopic
