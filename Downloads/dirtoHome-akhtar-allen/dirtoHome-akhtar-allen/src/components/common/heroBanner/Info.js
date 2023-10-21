import Paper from "@material-ui/core/Paper";
import { motion } from "framer-motion";
import React from "react";

const FADE_ANIMATION = {
  initial: { opacity: 0.5 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, delay: 0.5 },
};

export default function Info({description}) {
  return (
    <motion.div {...FADE_ANIMATION}>
      <Paper elevation={3} className="p-3">
        <p className="mb-3">
          {description}
        </p>
      </Paper>
    </motion.div>
  );
}
