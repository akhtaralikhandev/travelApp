import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";

const LETTER_ANIMATION = {
  initial: { borderRadius: "0" },
  whileTap: { scale: 0.8 },
  drag: true,
  dragConstraints: { top: 0, left: 0, right: 0, bottom: 0 },
};

export default function Character({character, activeFilter, handler}) {
  return (
    <motion.li
      className={character === activeFilter ? "active" : ""}
      onClick={() => handler(character)}
      {...LETTER_ANIMATION}
    >
      <Typography className="text-white" variant="h6">
        <small>{character.toUpperCase()}</small>
      </Typography>
    </motion.li>
  );
}
