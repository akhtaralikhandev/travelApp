import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles({
  title: {
    fontSize: "15px",
    marginLeft: "16px",
    marginTop: "5px",
  },
  avatar: {
    marginRight: "5px",
  },
});

export default function Comments({ comments }) {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title}>Comments</Typography>
      <TableContainer>
        <Table>
          <TableBody>
            {comments.map((comment) => (
              <TableRow key={comment._id}>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      alt="user"
                      src={comment?.user?.imageSrc}
                      className={classes.avatar}
                    />
                    <Typography>{comment?.narrative}</Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
