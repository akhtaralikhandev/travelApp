import React, { useRef, useState } from "react"
import { Editor } from "@tinymce/tinymce-react"

export default function PostEditor({ updateMessage }) {
  const handleEditorChange = (content) => {
    updateMessage(content)
  }

  const editorRef = useRef(null)

  return (
    <>
      <div className='d-flex flex-column mt-n2'>
        <Editor
          apiKey='udlgu0tbzsy7tnvisremhb14os63dl0z2qeq3ecbxs0n9j1t'
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue='<p>This is the initial content of the editor.</p>'
          init={{
            height: 200,
            menubar: false,
            plugins: [
              "advlist autolink lists link  charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
              "image",
            ],
            toolbar:
              "undo redo | formatselect | link image | code" +
              "bold italic backcolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",

            /* we override default upload handler to simulate successful upload*/
            images_upload_handler: function (blobInfo, success, failure) {
              setTimeout(function () {
                /* no matter what you upload, we will turn it into TinyMCE logo :)*/
                success(
                  "http://moxiecode.cachefly.net/tinymce/v9/images/logo.png"
                )
              }, 2000)
            },

            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
          onEditorChange={handleEditorChange}
        />
      </div>
    </>
  )
}
