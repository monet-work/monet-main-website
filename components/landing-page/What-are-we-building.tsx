"use client";
import React from "react";
import TextRevealByWord from "../animated/reveal-text";
import { motion } from "framer-motion";
import { textVariant, textVariant2 } from "@/lib/anims";
import WhatAreWeBuildingComponent from "./what-are-we-building-component";

type Props = {};

function WhatAreWeBuilding({}: Props) {
  return (
    <div className="w-full min-h-screen flex-col  items-center justify-center my-4 flex  max-w-7xl mx-auto">
      <div className="flex flex-col items-center">
        <motion.h1
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          // transition={{ duration: 1 }}
          variants={textVariant(0.1)}
          initial="hidden"
          whileInView="show"
          className="scroll-m-20 mt-6 max-w-4xl text-4xl text-center drop-shadow-sm font-semibold leading-[105%] tracking-tight lg:text-7xl"
        >
          What are we
          <span className=" text-yellow-400"> building?</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          // animate={{ opacity: 1 }}
          className=" leading-[28px] text-center mt-8 text-lg  max-w-lg"
        >
          Monet is a decentralized platform for businesses to manage
          blockchain-based loyalty programs, where customers can earn, redeem,
          and trade points.
        </motion.p>
      </div>
      <div className="flex w-full justify-center gap-16 flex-wrap p-4 mt-16 px-16">
        <WhatAreWeBuildingComponent
          heading="Decentralized $Points"
          text="Say goodbye to limited rewards. $POINTS are the digital currency of choice, designed for seamless use across a diverse range of businesses and platforms. Whether you're shopping, dining, or exploring, your rewards travel with you, unlocking endless possibilities."
        />
        <WhatAreWeBuildingComponent
          heading="L2 Roll-Up Chain"
          text="Our platform operates on an L2 roll-up chain, ensuring lightning-fast transactions and scalable rewards distribution. With our cutting-edge technology, you can enjoy the benefits of blockchain without the wait, making every interaction smooth and effortless."
        />
        <WhatAreWeBuildingComponent
          heading="Oracles and Smart Contracts"
          text="Connecting the worlds of traditional retail and web3, our Oracles make it easy for businesses to join the decentralized revolution. Smart contracts ensure secure transactions, while Oracles bridge the gap, bringing the power of blockchain rewards to your favorite stores."
        />
        <WhatAreWeBuildingComponent
          heading="AI-Based Recommendations"
          text="Personalized rewards, just for you. Our AI algorithms analyze your preferences and behavior to recommend the perfect rewards. Whether it's a discount on your favorite product or an exclusive offer, our platform ensures you get the most value from your rewards."
        />
      </div>
    </div>
  );
}

export default WhatAreWeBuilding;
