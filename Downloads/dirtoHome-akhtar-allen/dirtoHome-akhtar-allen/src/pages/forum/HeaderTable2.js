import React, { useState } from "react";
import "./HeaderTable2.css";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import SearchForum from "./SearchForum";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import TopicForm from "../../components/forms/TopicForms";
import { Typography, Snackbar } from "@material-ui/core";
import { saveTopic } from "../../services/posts";
import { Alert } from "@mui/material";
import { saveAttachments } from "../../services/attachments";

const HeaderTable = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // Set the default severity to "success"

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = async (formData) => {
    try {
      const { data } = await saveTopic(formData);

      // upload attachment
      if (formData?.attachments?.length > 0) {
        await saveAttachments(formData.attachments, "topic", data._id);
      }

      // Show a success Snackbar and close the popup
      setSnackbarSeverity("success");
      setSnackbarMessage("Form data submitted successfully.");
      setSnackbarOpen(true);
      closePopup(); // Close the popup on success
    } catch (error) {
      console.error("Error submitting form data:", error);

      // Show an error Snackbar and keep the popup open
      setSnackbarSeverity("error");
      setSnackbarMessage("Error submitting form data.", error);
      setSnackbarOpen(true);
    }
  };

  return (
    <div className="HeaderTables">
      <div className="HeaderTablesDiv1">
        <button className="HeaderTablesDiv1Btn1" onClick={openPopup}>
          <div className="textStyle">Create Topic</div>
          <AddIcon />
        </button>

        <Dialog open={isPopupOpen} onClose={closePopup} maxWidth="lg" fullWidth>
          <div className="popup" style={{ padding: "20px" }}>
            <Typography variant="h4" style={{ margin: 10, padding: 5 }}>
              Create Topic
            </Typography>
            <TopicForm onSubmit={handleSubmit} />
          </div>
        </Dialog>

        <button className="HeaderTablesDiv1Btn">
          <div className="textStyle">All Categories</div>
          <ArrowRightIcon />
        </button>

        <button className="HeaderTablesDiv1Btn">
          <div className="textStyle">All Topics</div>
          <ArrowRightIcon />
        </button>
      </div>

      <div className="HeaderTablesDiv2">
        <div className="HeaderTablesDiv2Text">Recent</div>
        <div className="HeaderTablesDiv2Text">Top</div>
        <div className="HeaderTablesDiv2Btn">
          <div className="catText">Categories</div>
        </div>
        <div className="HeaderTablesDiv2Text">Docs</div>
      </div>

      <div className="HeaderTablesDiv3">
        <SearchForum />
      </div>

      {/* Snackbar to display success or error messages */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000} // Adjust as needed
        onClose={handleSnackbarClose}
      >
        <Alert
          elevation={6}
          variant="filled"
          severity={snackbarSeverity}
          onClose={handleSnackbarClose}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default HeaderTable;
