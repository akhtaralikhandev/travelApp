import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import React from "react";

export default function Tab({ activeTab, setActiveTab, tab }) {
  const localStyle = { margin: "1em 0.2em 0 0.2em", textAlign: "center" };
  const activeStyle = {
    background:
      "radial-gradient(circle closest-side, rgb(0,0,0), rgb(100,100,100))",
    margin: "1em 0.2em 0 0.2em",
    textAlign: "center",
  };

  return (
    <motion.div className="col-lg-5" whileTap={{ scale: 0.8 }}>
      <Paper
        onClick={() => setActiveTab(tab)}
        elevation={activeTab === tab ? 0 : 7}
        style={activeTab === tab ? activeStyle : localStyle}
      >
        <Typography
          style={
            activeTab
              ? { color: "white", textShadow: "1px 1px 10px black" }
              : { color: "rgb(0, 174, 255)" }
          }
          variant="h6"
        >
          {tab}
        </Typography>
      </Paper>
    </motion.div>
  );
}
