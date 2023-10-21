// used in topic detail for replying
// post editor is implimented here for rich text

import React, { useState, useEffect, useRef } from "react"
import QuillEditor from "../postEditor/quillEditor"

const MainReplyForm = (props) => {
  const [myPost, setMyPost] = useState({ reply: "" })

  const updatePost = (content) => {
    let post = { reply: content }
    setMyPost(post)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    props.submitForm(e)
    let userId = localStorage.id

    if (myPost.reply != "") {
      let postData = {
        // info of the user making reply
        userId: localStorage.id,
        name: localStorage.name,
        img: localStorage.img,
        // main post on which reply is made
        postId: props.Post._id,
        // content of the reply
        post: myPost,
      }

      const apiReply = await fetch("/api/reply", {
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      }).then((result) => result.json())
      //   console.log(apiReply.message);

      if (apiReply.message) {
        props.alertSuccess("Thank You! Your reply posted sucessfully.")
      } else {
        props.alertFailure("Try again! Failed to post the message")
      }
      props.loadPage()
    } else {
      props.alertFailure("Reply is empty")
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
    <div>
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

export default MainReplyForm
