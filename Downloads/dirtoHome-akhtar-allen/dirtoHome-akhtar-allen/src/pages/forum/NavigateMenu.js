import React, { useEffect, useState } from "react";
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
  Breadcrumbs,
} from "@material-ui/core";
//import Image from 'mui-image' module not found ( it is not even being used )
//import avatar from '../../assets/Icons/avatar.png'
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Link, useHistory } from "react-router-dom";
//import HeaderTables1 from "./HeaderTables1";
import "./CategoryIndex.css";
import { Pagination } from "@mui/material";
// import HeaderTable from './HeaderTable';
import HeaderTable2 from "./HeaderTable2";
import moment from "moment";
import Topics from "./topics/Topics";

export default function NavigateMenu() {
  const history = useHistory();

  return (
    <div className="breadcrumbContainer">
      <Breadcrumbs aria-label="breadcrumb">
        {/* ---- Forum ---- */}
        <Link
          underline="hover"
          className="linkStyle"
          onClick={() => history.push("/forum-front1/forums")}
        >
          <Typography color="text.primary" und>
            Forum
          </Typography>
        </Link>

        {/* ---- Category ---- */}
        <Link
          underline="hover"
          className="linkStyle"
          onClick={() => history.push("/forum-front1/forums")}
        >
          <Typography color="text.primary" und>
            Category
          </Typography>
        </Link>

        {/* ---- Topic ---- */}
        <Link
          underline="hover"
          className="linkStyle"
          onClick={() => history.push("/forum-front1/forums")}
        >
          <Typography color="text.primary" und>
            Topic
          </Typography>
        </Link>
      </Breadcrumbs>
    </div>
  );
}
