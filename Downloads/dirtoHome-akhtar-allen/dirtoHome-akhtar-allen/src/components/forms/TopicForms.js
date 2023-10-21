import React, { useState, useRef, useEffect } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
} from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import { getForumCats } from "../../services/forumcategories";

const TopicForm = ({ onSubmit }) => {
  const editorRef = useRef(null);

  const [category, setCategory] = useState([]);

  const fetchData = async () => {
    try {
      const cat = await getForumCats();
      setCategory(cat.data);
    } catch (error) {
      console.error("Error fetching category:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [formData, setFormData] = useState({
    user: "",
    title: "",
    catId: [],
    narrative: "",
    tags: "",
    views: 1,
    attachments: [],
    status: "active",
  });

  const [errors, setErrors] = useState({
    title: "",
    catId: "",
    narrative: "",
    tags: "",
  });

  const handleEditorChange = (narrative) => {
    setFormData({ ...formData, narrative });
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const files = Array.from(e.target.files);
      setFormData((prevData) => ({
        ...prevData,
        [name]: [...prevData[name], ...files], // Append the new files to existing ones
      }));
    } else if (name === "catId") {
      // Handle the category field
      const selectedCategory = category.find((cat) => cat._id === value);
      if (selectedCategory) {
        setFormData((prevData) => ({
          ...prevData,
          catId: value,
          user: selectedCategory.user._id,
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          catId: "",
          user: "",
        }));
      }
    } else {
      // Handle other input types
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      title: "",
      catId: "",
      narrative: "",
      tags: "",
    };

    // Validate title field
    if (!formData.title || formData.title.trim() === "") {
      newErrors.title = "Title is required";
    }

    setErrors(newErrors);

    // Return true if there are no errors, indicating the form is valid
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Box p={2} m={2}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          name="title"
          label="Title"
          variant="outlined"
          value={formData.title || ""}
          onChange={handleChange}
          margin="normal"
        />
        {errors.title && <Typography color="error">{errors.title}</Typography>}
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel>Category</InputLabel>
          <Select
            name="catId"
            label="Category"
            value={formData.catId || ""}
            onChange={handleChange}
          >
            {category.map((cat) => (
              <MenuItem key={cat._id} value={cat._id}>
                {cat.name}
              </MenuItem>
            ))}
          </Select>
          {errors.catId && (
            <Typography color="error">{errors.catId}</Typography>
          )}{" "}
        </FormControl>
        <Editor
          apiKey="udlgu0tbzsy7tnvisremhb14os63dl0z2qeq3ecbxs0n9j1t"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>Type Narravtive here...</p>"
          init={{
            branding: false,
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help",
            ],
            toolbar:
              "undo redo | formatselect | " +
              "bold italic backcolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
          onEditorChange={handleEditorChange}
        />
        <TextField
          fullWidth
          name="tags"
          label="Tags"
          variant="outlined"
          value={formData.tags || ""}
          onChange={handleChange}
          margin="normal"
        />
        <input
          type="file"
          name="attachments"
          accept=".jpg, .jpeg, .png, .pdf"
          multiple
          onChange={handleChange}
        />
        <Box mt={2} mb={2}>
          {formData.attachments.length > 0 && (
            <div>
              <Typography variant="subtitle1">Uploaded Files:</Typography>
              <ul>
                {formData.attachments.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            </div>
          )}
        </Box>

        <Button type="submit" variant="contained" color="primary">
          Add Topic
        </Button>
      </form>
    </Box>
  );
};

export default TopicForm;
