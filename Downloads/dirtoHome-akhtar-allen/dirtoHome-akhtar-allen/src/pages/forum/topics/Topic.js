import React from "react";
import { Box, TableRow, TableCell } from "@material-ui/core";
import moment from "moment";
import { apiUrl } from "../../../config/config";
import ReactHtmlParser from "react-html-parser";

export default function Topic({ comment, index }) {
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

  return (
    <TableRow style={{ height: "140px" }}>
      <TableCell>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          height="140px"
          boxSizing={"border-box"}
        >
          {/* ---- Content of user and avatar ---- */}
          <div className="d-block">
            <img src={`${comment?.user?.imageSrc}`} className="avatar1" />

            {/* ---- Put the user First and Last name ---- */}
            <p className="text-muted text-capitalize ">
              <span>{comment?.user.contactName.first}</span>
              <span> </span>
              <span>{comment?.user.contactName.last}</span>
            </p>
          </div>

          <Box width="90%">
            <div className="titre1">{comment?.title}</div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "9px",
                  height: "9px",
                  backgroundColor: tags[index % 9],
                }}
              ></div>
              {/* <div dangerouslySetInnerHTML={{ __html: comment?.narrative }} /> */}
              <div>{ReactHtmlParser(comment?.narrative)}</div>
            </div>
            <div>
              {comment?.attachments.map((img) => (
                <img
                  src={`${apiUrl.url}/${img.filePath}`}
                  className="avatar1"
                />
              ))}
            </div>
          </Box>
        </Box>
      </TableCell>
      <TableCell>
        <div>
          <span className="week1">
            {moment(comment?.createdAt).format("ll").split(",")[0]}
          </span>
        </div>
      </TableCell>
    </TableRow>
  );
}
