import ReactQuill, { Quill } from "react-quill"
import React from "react"
import "react-quill/dist/quill.snow.css"
import ImageCompress from "quill-image-compress"
Quill.register("modules/imageCompress", ImageCompress)

class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: "" } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)

    this.quillRef = null // Quill instance
    this.reactQuillRef = null
    this.state = { editorHtml: props.value }
  }

  componentDidMount() {
    this.attachQuillRefs()
  }

  componentDidUpdate() {
    this.attachQuillRefs()
  }

  attachQuillRefs = () => {
    if (typeof this.reactQuillRef.getEditor !== "function") return
    this.quillRef = this.reactQuillRef.getEditor()
  }

  // handleChange(value) {
  //   this.setState({ text: value })
  // }

  handleChange(html) {
    console.log(html)
    this.setState({ editorHtml: html})
    if (this.state.editorHtml == this.props.value) {
      return console.log(html)
    }
    var limit = 100
    var quill = this.quillRef
    quill.on("text-change", function (delta, old, source) {
      if (quill.getLength() > limit) {
        quill.deleteText(limit, quill.getLength())
      }
    })
    console.log(this.state.editorHtml)

    this.props.onEditorChange(this.state.editorHtml)
  }

  quillObj = {}
  render() {
    return (
      <ReactQuill
        ref={(el) => {
          this.reactQuillRef = el
        }}

        value={this.state.editorHtml}
        modules={{
          imageCompress: {
            quality: 0.7, // default
            maxWidth: 100, // default
            maxHeight: 100, // default
            imageType: "image/jpeg", // default
            debug: true, // default
          },
          toolbar: {
            container: [
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              ["blockquote"],
              ["bold", "italic", "underline"],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ align: [] }],
              ["link", "image"],
              ["clean"],
              [{ color: [] }],
            ],
            handlers: {
              image: this.imageHandler,
            },
          },
          table: false,
        }}
        placeholder='Add a description of your event'
        onChange={this.handleChange}
      />
    )
  }
}

export default MyComponent
