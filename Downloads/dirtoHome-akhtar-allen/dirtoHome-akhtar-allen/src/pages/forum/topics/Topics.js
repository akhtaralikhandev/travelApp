import React from "react";
import Topic from "./Topic";

export default function Topics({ latestData }) {
  console.log(latestData);
  let content = null;
  if (latestData.length > 0) {
    content = latestData.map((comment, index) => (
      <Topic key={index} comment={comment} index={index} />
    ));
  }

  return content;
}
