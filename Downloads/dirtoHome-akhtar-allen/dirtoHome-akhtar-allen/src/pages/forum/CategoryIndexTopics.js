import React, { useState } from "react";
import _ from "lodash";
import {
  Box,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { useHistory } from "react-router-dom";
import "./categoryTable.css";
import moment from "moment";
import { Pagination } from "@mui/material";
import { getTopic, saveTopic } from "../../services/posts";
import { paginate } from "../../utils/paginate";

const useStyles = makeStyles({
  table: {
    width: "100%",
    border: "2px solid transparent",
    marginRight: "4px",
  },
  colorOrange: {
    color: "#fe7a15 !important",
  },
  container: {
    marginTop: "2rem",
    border: "none",
  },
  avatar2: {
    height: "10px",
    width: "10px",
  },
  container2: {
    border: "none",
  },
});

const TopicsOfCatTable = ({ category, latestData, countTopics }) => {
  const history = useHistory();
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const sortColumn = { path: "createdAt", order: "asc" };
  const pagesCount = Math.ceil(latestData.length / pageSize);

  const opencomment = (id) => {
    history.push(`/forum/${id}`);
  };

  const opencomment1 = async (topicId) => {
    const myTopics = await getTopic(topicId);
    const myTopic = myTopics.data;
    let views = myTopic.views;
    views++;
    myTopic.views = views;
    await saveTopic(myTopic, myTopic.attachments);

    history.push(`/forum/topic/${topicId}`);
  };

  const tags = [
    "red",
    "pink",
    "yellow",
    "lightblue",
    "grey",
    "orange",
    "#6C3483",
    "#76D7C4",
    "#196F3D",
  ];

  const getDataPgnation = () => {
    const sorted = _.orderBy(latestData, [sortColumn.path], [sortColumn.order]);
    let nCategory = paginate(sorted, currentPage, pageSize);
    return { data: nCategory };
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <Box marginLeft="1%">
      <TableContainer className={classes.container} component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow
              style={{
                borderBottom: "3px solid lightgray",
                borderLeft: "none",
              }}
            >
              <TableCell
                width="65%"
                style={{
                  color: "#a9a9a9",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                Category
              </TableCell>
              <TableCell
                align="center"
                style={{
                  color: "#a9a9a9",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                Users
              </TableCell>
              <TableCell
                align="center"
                style={{
                  color: "#a9a9a9",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                Topics
              </TableCell>
              <TableCell
                align="center"
                style={{
                  color: "#a9a9a9",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                Views
              </TableCell>
              <TableCell
                align="center"
                style={{
                  color: "#a9a9a9",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                Replies
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={category._id}>
              <TableCell style={{ borderLeft: `solid 7px ${category.color}` }}>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  style={{ cursor: "pointer" }}
                >
                  <Typography variant="h4">{category.name}</Typography>
                  <Typography variant="body1">
                    {category.description}
                  </Typography>
                </Box>
              </TableCell>

              <TableCell>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  onClick={() => opencomment(category._id)}
                  style={{ cursor: "pointer" }}
                >
                  <Avatar>A</Avatar>

                  <Avatar>A</Avatar>

                  <Avatar>A</Avatar>
                </Box>
              </TableCell>
              <TableCell align="center">
                <div style={{ color: "lightgray", fontWeight: "600" }}>
                  {countTopics}{" "}
                </div>
              </TableCell>

              <TableCell align="center">
                <div style={{ color: "lightgray", fontWeight: "600" }}>75k</div>
              </TableCell>

              <TableCell align="center">
                <div style={{ color: "lightgray", fontWeight: "600" }}>
                  29 min
                </div>
              </TableCell>
            </TableRow>

            {latestData.length > 0 &&
              getDataPgnation().data.map((comment, key) => (
                <TableRow>
                  <TableCell>
                    <Box onClick={() => opencomment1(comment?.element?._id)}>
                      <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        minHeight="100px"
                        height="fit-content"
                      >
                        <div className="boxOfImage">
                          <img
                            src={
                              comment.element.user.imageSrc ||
                              "/assets/img/user/user-12.jpg"
                            }
                            className="avatar1"
                          />
                          <div className="username1">
                            {comment.element.user.contactName.first +
                              " " +
                              comment.element.user.contactName.last}
                          </div>
                        </div>
                        <Box width="90%">
                          <div className="titre1">{comment.element.title}</div>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <div
                              style={{
                                width: "9px",
                                height: "9px",
                                backgroundColor: tags[key % 9],
                                marginRight: "10px",
                              }}
                            >
                              {" "}
                            </div>
                            <span
                              style={{
                                marginLeft: ".25rem",
                                marginRight: ".5rem",
                              }}
                            >
                              {comment.element.narrative}
                            </span>
                          </div>
                        </Box>
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div className="week1">0</div>
                      <span className="week1">
                        {
                          moment(comment.element.createdAn)
                            .format("ll")
                            .split(",")[0]
                        }
                      </span>
                    </div>
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="week1">{comment.element.views}</div>
                      <div className="week1">
                        {comment.element.views != 1 ? "views" : "view"}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="week1">{comment.count}</div>
                      <div className="week1">
                        {comment.count != 1 ? "replies" : "reply"}
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/*--------- Pagination here --------*/}
      <div className="paginationContainer">
        <Pagination
          count={pagesCount}
          page={currentPage}
          color="primary"
          onChange={handlePageChange}
        />
      </div>
    </Box>
  );
};

export default TopicsOfCatTable;
