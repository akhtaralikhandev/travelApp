import React, { useEffect } from "react";
import { UncontrolledCarousel, Card, CardBody, CardTitle } from "reactstrap";
import MateriaMedicaImageList from "../../../store/MateriaMedicaImageList";
import Typography from "@material-ui/core/Typography";

function CommonHomePageArray(props) {
  useEffect(()=>{
console.log(props)
  },[])
  return (
    <>
      <Card
        className="mt-5 whilehover shadow"
        style={{
          minWidth: "200px",
          width: "20em",
          maxWidth: "350px",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <UncontrolledCarousel
          style={{ width: "100%" }}
          indicators="false"
          controls={false}
          items={MateriaMedicaImageList}
        />
        <CardTitle
          style={{ background: "lightgrey", color: "black" }}
          className="m-0 p-2 pl-3"
        >
          <Typography variant="h6">{props.name}</Typography>
        </CardTitle>
        {/* <CardBody></CardBody> */}
      </Card>
    </>
  );
}

export default React.memo(CommonHomePageArray);
