import { textVariant } from "@/lib/anims";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React from "react";

type Props = {
  icon: any;
  title: string;
  description: string;
  link: string;
};

function CommunityBar({ icon, title, description, link }: Props) {
  return (
    <div className="w-full lg:w-1/2 p-4 flex flex-wrap">
      <motion.div
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // transition={{ duration: 0.6, delay: 0.3 }}
        initial="hidden"
        whileInView="show"
        variants={textVariant(0.1)}
        className="w-full rounded-3xl p-4 hover:bg-neutral-800 px-6 cursor-pointer border bg-neutral-900"
      >
        <div className="flex justify-between">
          <div className="flex  gap-2">
            {icon}
            <h2 className="text-lg">{title}</h2>
          </div>
          <ArrowUpRight className="w-8 h-8" />
        </div>
        <div>
          <p>{description}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default CommunityBar;
