// used in topic detail for replying
// post editor is implimented here for rich text

import React, { useState, useEffect, useRef } from "react"
import QuillEditor from "../postEditor/quillEditor"
import ReactHtmlParser from "react-html-parser"
import { getProfile } from "../../../services/authservice"
import { savePost } from "../../../services/posts"

const PostReplyForm = (props) => {
  const convertedMessage = ReactHtmlParser(props.message)
  console.log(convertedMessage, "hello")
  const trimedMessage = props.message.trim()

  const [myPost, setMyPost] = useState({
    reply: "",
    quote:props.quote
  })
  const [original, setOriginal] = useState({
    original: `${props.Post.user?.contactName.first + " " + props.Post.user?.contactName.last} wrote: "${trimedMessage}"`,
  })

  console.log(myPost, "mypost")
  console.log(convertedMessage)

  const updatePost = (content) => {
    let post = { reply: content }
    console.log(post)
    setMyPost(post)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    props.submitForm(e)
    const currentUser = await getProfile()


    if (props.quote==="topic" ) {
      let postData = {
        topicId: props.Post._id,
        narrative: myPost.reply.split('>')[1].split('<')[0],
        user: currentUser._id,
        status:"active"
      }

          await savePost(postData);

{/*      if (ok) {
        props.alertSuccess("Thank You! Your reply posted sucessfully.")
      } else {
        props.alertFailure("Try again! Failed to post the message")
      }*/}
      props.loadPage()

    } else {
 
    
        let postData = {
          topicId: props.Post.topicId._id,
          parentId:props.Post._id ,
          narrative: myPost.reply.split('>')[1].split('<')[0],
          user: currentUser._id,
          status:"active"
        }

            await savePost(postData);
        {/*const {ok} = await savePost(postData)
        if (ok) {
          props.alertSuccess("Thank You! Your reply posted sucessfully.")
        } else {
          props.alertFailure("Try again! Failed to post the message")
        }
      */}
        props.loadPage()
     
    }
  }

  const handleCancel = (e) => {
    props.submitForm(e)
  }
  // function handleCancel(e){
  //     e.preventDefault();
  //     props.submitForm();
  // }

  return (
    <div style={{marginTop:"20px"}} >
      <form class='mt-2'>
        {/* <textarea
          type='textarea'
          name=''
          id='message'
          value={myPost.reply}
          onChange={updatePost}
          placeholder='Your Message'
          cols='100'
          rows='5'
        ></textarea> */}
        {/* RICH TEXT */}
        <div className='d-flex flex-column mt-n2'>
          <p style={{marginBottom:"10px"}} >{original.original}</p>
          <QuillEditor onEditorChange={updatePost} value={myPost.reply} />
        </div>

        {/* RICH TEXT  */}

        <br />
        <div className='mt-n2'>
          <button
            className=' btn btn-outline-secondary btn-sm mr-1'
            type='submit'
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className='btn btn-outline-secondary btn-sm '
            type='submit'
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
        {/* <button type="submit" onClick={e => handleCancel}>Cancel</button>  */}
      </form>
    </div>
  )
}

export default PostReplyForm
