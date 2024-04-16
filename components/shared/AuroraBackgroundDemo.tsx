"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import Image from "next/image";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 rounded-2xl"
      >
        <Image
          src="/assets/images/xmen-transformed.png"
          width={700}
          height={700}
          alt="Aurora background demo"
          className="rounded-2xl"
        />
      </motion.div>
    </AuroraBackground>
  );
}
