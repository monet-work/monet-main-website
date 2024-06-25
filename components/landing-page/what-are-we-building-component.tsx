import { motion } from "framer-motion";
import React from "react";

type Props = {
  heading: string;
  text: string;
};

function WhatAreWeBuildingComponent({ heading, text }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full lg:w-1/2 max-w-lg p-2"
    >
      <div className="w-full">
        <h3 className=" font-medium text-2xl text-yellow-400">{heading}</h3>
        <p className="mt-2 ">{text}</p>
      </div>
    </motion.div>
  );
}

export default WhatAreWeBuildingComponent;
