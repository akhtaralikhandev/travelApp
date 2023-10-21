import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import Comments from "./Comments";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  colorOrange: {
    color: "#fe7a15 !important",
  },
  eyeIcons: {
    fontSize: "18px",
    cursor: "pointer"
  }
});

export default function TopicsAndCommentsTable({ topicsList }) {
  const [isTopicId, setIsTopicId] = useState(null);
  const classes = useStyles();

  const handleOpenComment = (id) => {
    isTopicId === id ? setIsTopicId(null) : setIsTopicId(id);
  };

  return (
    <>
      <h2 className="widget-title">{topicsList?.length}</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell width="75%">Topic</TableCell>
              <TableCell align="center">Replies</TableCell>
              <TableCell align="center">Views</TableCell>
              <TableCell align="center">Comments</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {topicsList.map((topic) => (
              <React.Fragment key={topic._id}>
                <TableRow>
                  <TableCell>
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Box>
                        <Typography>{topic?.narrative}</Typography>
                      </Box>
                      <Box>
                        <Avatar alt="user" src={topic?.user?.imageSrc} />
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <Typography className={classes.colorOrange}>
                      {topic?.comments?.length}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography className={classes.colorOrange}>
                      {topic?.views}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography>
                      <AiOutlineEye
                        className={classes.eyeIcons}
                        onClick={() => handleOpenComment(topic._id)}
                      />
                    </Typography>
                  </TableCell>
                </TableRow>
                {isTopicId === topic._id && topic?.comments.length > 0 && (
                  <Comments comments={topic?.comments} />
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
