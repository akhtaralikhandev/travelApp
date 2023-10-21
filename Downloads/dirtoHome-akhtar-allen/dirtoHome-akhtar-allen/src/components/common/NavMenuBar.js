import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link } from "react-router-dom";

const NavMenuBar = ({ pathSegments }) => {
  return (
    <div
      className="breadcrumb"
      style={{
        display: "flex",
        alignItems: "center",
        background: "rgba(245,245,245,0.8)",
      }}
    >
      <Link to="/">
        <Typography
          variant="h6"
          style={{
            fontSize: "14px",
            margin: "auto 1em",
          }}
        >
          Home
        </Typography>
      </Link>
      /
      <Link to={`/${pathSegments[0]}`}>
        <Typography
          variant="h6"
          style={{
            fontSize: "14px",
            margin: "auto 1em",
          }}
        >
          {pathSegments[0].charAt(0).toUpperCase() + pathSegments[0].slice(1)}
        </Typography>
      </Link>
      /
      <Typography
        variant="h6"
        style={{
          fontSize: "14px",
          margin: "auto 1em",
        }}
      >
        {pathSegments[1]}
      </Typography>
    </div>
  );
};

export default NavMenuBar;
