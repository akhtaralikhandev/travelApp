import Typography from "@material-ui/core/Typography";
import React from "react";
import { Card, CardTitle, UncontrolledCarousel } from "reactstrap";
import MateriaMedicaImageList from "../../store/MateriaMedicaImageList";

function Carousel(props) {
  return (
    <>
      <Card
        className="mt-4 whilehover shadow w-100"
        style={{
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <UncontrolledCarousel
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
          indicators={false}
          controls={false}
          items={MateriaMedicaImageList}
        />
        <CardTitle
          style={{ background: "lightgrey", color: "black" }}
          className="m-0 p-2 pl-3"
        >
          <Typography variant="h6">{props.name}</Typography>
        </CardTitle>
      </Card>
    </>
  );
}

export default React.memo(Carousel);