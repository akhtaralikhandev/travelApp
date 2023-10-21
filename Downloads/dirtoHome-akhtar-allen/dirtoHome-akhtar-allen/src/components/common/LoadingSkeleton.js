import Paper from "@material-ui/core/Paper";
import Skeleton from "@mui/material/Skeleton";
import React from "react";

export default function LoadingSkeleton() {
  return (
    <Paper elevation={5} className="px-4 pt-4 card-container pb-4">
      <div className="row">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="col-12 col-md-4 rounded-7">
            <Skeleton variant="rect" height={150} />
          </div>
        ))}
      </div>
    </Paper>
  );
}
