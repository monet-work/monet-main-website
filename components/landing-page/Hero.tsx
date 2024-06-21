"use client";
import React from "react";
import HeroBackground from "./HeroBackground";
import { motion } from "framer-motion";

type Props = {};

function Hero({}: Props) {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };

  return (
    <div className="w-full h-screen relative flex justify-center items-center">
      <div className="flex flex-col absolute z-10 justify-center items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="scroll-m-20 max-w-2xl text-4xl text-center drop-shadow-sm font-semibold leading-[102%] tracking-tight lg:text-7xl"
        >
          Revolutionizing loyalty with decentralized rewards.
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          variants={variants1}
          className=" leading-[28px] text-center mt-8 text-lg max-w-lg"
        >
          Monet is a decentralized platform for businesses to manage
          blockchain-based loyalty programs, where customers can earn, redeem,
          and trade points.
        </motion.p>
      </div>
      <HeroBackground />
    </div>
  );
}

export default Hero;
