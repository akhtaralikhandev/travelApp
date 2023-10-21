import React from "react";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";

const LoadingErrorView = () => {
  const Status = useSelector((s) => s.entities.acudata.status);
  return (
    <div className="container">
      <Typography variant="h6">
        <div
          style={
            Status === "loading"
              ? { display: "block", textAlign: "center" }
              : { display: "none" }
          }
        >
          <Typography variant="h5">Loading...</Typography>
          <br />
        </div>

        <div
          style={
            Status === "error"
              ? { display: "block", textAlign: "center" }
              : { display: "none" }
          }
        >
          <Typography variant="h6">
            An Error Occured While Loading Data Check Your Network Connection...
          </Typography>
          <br />
          <br />
        </div>
      </Typography>
    </div>
  );
};

export default LoadingErrorView;
