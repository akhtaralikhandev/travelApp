import React, { useState } from "react"
import { savePost } from "../../../services/posts"
import QuillEditor from "../postEditor/quillEditor"

const EditReplyForm = (props) => {
  const [editReply, setEditReply] = useState({ message: props.reply.narrative })

  const handleEdit = (content) => {
    let userEdit = content
    setEditReply({ message: userEdit })
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault()
    let editReplyData = { ...props.reply,
     // _id: props.reply._id,
      narrative: editReply.message.split('>')[1].split('<')[0],
    }
        await savePost(editReplyData);
    props.submitReply(e)
    props.loadPage()
  }

  const handleEditCancel = (e) => {
    props.submitReply(e)
  }

  return (
    <div class='col-lg-12 ml-2 mt-4'>
      <div class='row'>
        <form>
          <QuillEditor onEditorChange={handleEdit} value={editReply.message} />

          <br />

          <button
            class='btn btn-outline-secondary btn-sm mr-1'
            type='submit'
            onClick={handleEditSubmit}
          >
            Submit
          </button>
          <button
            class='btn btn-outline-secondary btn-sm '
            type='submit'
            onClick={handleEditCancel}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditReplyForm
