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
import { useHistory } from "react-router-dom";
import "./CategoryIndex.css";
import { Pagination } from "@mui/material";
import Topics from "./topics/Topics";
import { paginate } from "../../utils/paginate";

// Styles..
const useStyles = makeStyles({
  table: {
    width: "48%",
    border: "2px solid transparent",
    marginRight: "4px",
  },
  colorOrange: {
    color: "#fe7a15 !important",
  },
  container: {
    marginTop: "2rem",
    border: "none",
    display: "flex",
  },
});

// Comments of table..
const CommentsTable = ({ categoriesData, latestData }) => {
  console.log(categoriesData);
  console.log(latestData);

  const history = useHistory();
  const classes = useStyles();
  const [topicsData, setTopicsData] = React.useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const sortColumn = { path: "createdAt", order: "asc" };

  const pagesCount = Math.ceil(categoriesData.length / pageSize);

  const opencomment = (id) => {
    history.push(`/forum/${id}`);
  };

  const getDataPgnation = () => {
    const sorted = _.orderBy(
      categoriesData,
      [sortColumn.path],
      [sortColumn.order]
    );
    let nCategory = paginate(sorted, currentPage, pageSize);
    return { data: nCategory };
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  // Returning statement..
  return (
    <Box backgroundColor="red">
      <Box marginLeft="1%">
        <TableContainer className={classes.container} component={Paper}>
          {/* ---- 1st part of table ---- */}
          <Table className={classes.table}>
            <TableHead>
              <TableRow
                style={{
                  borderBottom: "3px solid lightgray",
                  borderLeft: "none",
                }}
              >
                <TableCell
                  width="75%"
                  style={{
                    color: "#a9a9a9",
                    fontWeight: "600",
                    fontSize: "0.7rem",
                  }}
                >
                  Categories
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    color: "#a9a9a9",
                    fontWeight: "600",
                    fontSize: "0.7rem",
                  }}
                >
                  Latest
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {categoriesData.length > 0 &&
                getDataPgnation().data.map((comment, index) => (
                  <TableRow key={comment._id} style={{ height: "140px" }}>
                    <TableCell
                      style={{ borderLeft: `solid 7px ${comment.color}` }}
                    >
                      <Box onClick={() => opencomment(comment._id)}>
                        <Box
                          display="flex"
                          flexDirection="column"
                          justifyContent="space-between"
                          style={{ cursor: "pointer" }}
                        >
                          <Typography variant="h4">{comment.name}</Typography>
                          <Typography variant="body1">
                            {comment.description}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell align="center">
                      <div style={{ color: "lightgray", fontWeight: "600" }}>
                        1/week
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>

          {/* ----- 2nd Part of table ----- */}
          <Table className={classes.table}>
            <TableHead>
              <TableRow
                style={{
                  borderBottom: "3px solid lightgray",
                  borderLeft: "none",
                }}
              >
                <TableCell
                  width="80%"
                  style={{
                    color: "#a9a9a9",
                    fontWeight: "600",
                    fontSize: "0.7rem",
                  }}
                >
                  Topics
                </TableCell>
                <TableCell
                  width="5%"
                  style={{
                    color: "#a9a9a9",
                    fontWeight: "600",
                    fontSize: "0.7rem",
                  }}
                >
                  Views
                </TableCell>
                <TableCell
                  width="15%"
                  style={{
                    color: "#a9a9a9",
                    fontWeight: "600",
                    fontSize: "0.7rem",
                  }}
                >
                  Replies
                </TableCell>
              </TableRow>
            </TableHead>

            {/* ---- Latest Data ---- */}
            <TableBody>
              <Topics latestData={latestData} />
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
    </Box>
  );
};

export default CommentsTable;
