"use client";
import React from "react";
import Spline from "@splinetool/react-spline/next";
import { motion } from "framer-motion";
import { slideIn, textVariant } from "@/lib/anims";

type Props = {};

function About({}: Props) {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };

  return (
    <div className="w-full h-screen  items-center flex  max-w-7xl">
      <div>
        <motion.h1
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          // transition={{ duration: 0.5 }}
          // variants={textVariant(0.1)}
          variants={slideIn("left", "spring", 0.14, 1)}
          initial="hidden"
          whileInView="show"
          className="scroll-m-20 mt-6 max-w-4xl text-4xl text-left drop-shadow-sm font-medium leading-10 tracking-tight lg:text-7xl"
        >
          About
          <span className=" text-yellow-400"> Monet</span>
        </motion.h1>
        <motion.p
          // initial="hidden"
          // whileInView="visible"
          // transition={{ duration: 0.4, delay: 0.1 }}
          // variants={variants1}
          // variants={textVariant(0.15)}
          variants={slideIn("left", "spring", 0.06, 1)}
          initial="hidden"
          whileInView="show"
          className=" leading-[28px] text-left mt-8 text-lg  max-w-3xl"
        >
          Welcome to the future of loyalty programs. At Monet, we&apos;re
          pioneering a new era of rewards using blockchain technology. Our
          innovative solution empowers businesses and delights customers with
          decentralized $POINTS - the currency of interoperable rewards.
          <br />
          <br />
          By seamlessly integrating with major retail players, we bring
          unparalleled benefits to both businesses and consumers. Our AI-driven
          recommendations ensure that every reward is optimized for maximum
          utility, tailored to meet the unique needs of each user.
        </motion.p>
      </div>
      <motion.div
        className=" w-1/2 "
        variants={slideIn("right", "spring", 0.05, 1)}
        initial="hidden"
        whileInView="show"
      >
        {" "}
        <Spline
          className="w-full "
          scene="https://prod.spline.design/Q4nPk1qtUkqoOFAj/scene.splinecode"
        />
      </motion.div>
    </div>
  );
}

export default About;
