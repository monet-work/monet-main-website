"use client";
import React from "react";
import HeroBackground from "./HeroBackground";
import { motion } from "framer-motion";
import { ArrowRightIcon, ChevronRight } from "lucide-react";
import AnimatedShinyText from "../animated/shiny-text";

type Props = {};

function Hero({}: Props) {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };

  return (
    <div className="w-full h-screen relative flex justify-center items-center">
      <div className="flex flex-col absolute z-10 justify-center items-center">
        <AnimatedShinyText className="inline-flex items-center cursor-pointer justify-center  px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Introducing Monet Points</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          animate={{ opacity: 1 }}
          className="scroll-m-20 mt-6 max-w-4xl text-4xl text-center drop-shadow-sm font-semibold leading-[105%] tracking-tight lg:text-7xl"
        >
          Revolutionizing loyalty with
          <span className=" text-yellow-400"> decentralized</span> rewards.
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          variants={variants1}
          className=" leading-[28px] text-center mt-8 text-lg  max-w-lg"
        >
          Monet is a decentralized platform for businesses to manage
          blockchain-based loyalty programs, where customers can earn, redeem,
          and trade points.
        </motion.p>
      </div>
      {/* <HeroBackground /> */}
    </div>
  );
}

export default Hero;
