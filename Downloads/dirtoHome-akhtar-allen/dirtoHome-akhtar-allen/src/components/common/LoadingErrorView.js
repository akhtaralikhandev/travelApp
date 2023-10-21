import React from "react";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";

const LoadingErrorView = () => {
  const status = useSelector((s) => s.entities.acudata.status);
  return (
    <div className="container">
      <Typography variant="h6">
        <div
          className={status === "loading" ? `d-block text-center` : `d-none`}
        >
          <Typography variant="h5">Loading...</Typography>
        </div>

        <div className={status === "error" ? `d-block text-center text-danger` : "d-none"}>
          <Typography variant="h6">
            An Error Occured While Loading Data Check Your Network Connection...
          </Typography>
        </div>
      </Typography>
    </div>
  );
};

export default LoadingErrorView;
