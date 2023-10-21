import { motion } from "framer-motion";
import React from "react";

const FADE_ANIMATION = {
  initial: { opacity: 0.5 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, delay: 0.5 },
};

export default function Header({subTitle, title}) {
  return (
    <div className="text-center">
      <p className="heading-caption">{subTitle}</p>
      <motion.h1 {...FADE_ANIMATION}>{title}</motion.h1>
      <div className="header-bottom-border"></div>
    </div>
  );
}
