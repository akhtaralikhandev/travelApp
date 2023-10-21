import React from "react";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import Paper from "@material-ui/core/Paper";

const Tabs = (props) => {
  const Gstate = useSelector((s) => s.entities.acudata);
  const LocalStyle = { margin: "1em 0.2em 0 0.2em", textAlign: "center" };
  const ActiveStyle = {
    background:
      "radial-gradient( circle closest-side, rgb(0,0,0), rgb(100,100,100)) ",
    margin: "1em 0.2em 0 0.2em",
    textAlign: "center",
  };
  return (
    <div className="container">
      <div
        className="row"
        style={{ marginTop: "-3em", justifyContent: "space-evenly" }}
      >
        <motion.div className="col-lg-5" whileTap={{ scale: 0.8 }}>
          <Paper
            onClick={() => props.handleClick(false)}
            elevation={props.isToggle ? 0 : 7}
            style={props.isToggle ? ActiveStyle : LocalStyle}
          >
            <Typography
              style={
                props.isToggle
                  ? { color: "white", textShadow: "1px 1px 10px black" }
                  : { color: "rgb(0, 174, 255)" }
              }
              variant="h6"
            >
              {Gstate.acudata.tabsheading}
            </Typography>
          </Paper>
        </motion.div>

        <motion.div initial={{}} whileTap={{ scale: 0.8 }} className="col-lg-5">
          <Paper
            onClick={() => props.handleClick(true)}
            elevation={props.isToggle ? 7 : 0}
            style={props.isToggle ? LocalStyle : ActiveStyle}
          >
            <Typography
              style={
                props.isToggle
                  ? {
                      color: "rgb(255, 153, 0)",
                      textShadow: "1px 1px 4px rgb(200,200,200)",
                    }
                  : { color: "white", textShadow: "1px 1px 10px black" }
              }
              variant="h6"
            >
              Topics And Comments
            </Typography>
          </Paper>
        </motion.div>
      </div>
    </div>
  );
};

export default Tabs;

// <div className={ props.isToggle ? "col-lg-6 mycustomtopicinactive" :
// "col-lg-6 mycustomtopicactive"}>

// <motion.div
// whileTap={{ scale: 0.9 }}
// className="mytopicmobile mytopic1"
// style={ props.isToggle ?
//   { background: "rgba(255,255,255,0)" }
//   : { padding: "0.5em" }
// }
// onClick={()=> props.handleClick(false)}>

// <Typography
//    variant="h6"
//    style={ props.isToggle ? {}:  {color: "red"}}>

//    { Gstate.acudata.tabsheading }
// </Typography>

// </motion.div>

// </div>

// <div className={ props.isToggle ? "col-lg-6 mycustomtopicactive" :
// "col-lg-6 mycustomtopicinactive"} >
// <motion.div
// whileTap={{ scale: 0.9 }}
// className="mytopicmobile mytopic1"
// style={ props.isToggle ? {padding:"0.5em"}: {background:"rgba(255,255,255,0)"}}
// onClick={()=> props.handleClick(true)}>

// <Typography
//    variant="h6"
//    style={ props.isToggle ? {color: "red"}: {}}>
//        Topic and Comments
// </Typography>

// </motion.div>
// </div>
