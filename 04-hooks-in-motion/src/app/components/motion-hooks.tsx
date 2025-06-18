"use client";

import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";

const ScrollLinked = () => {
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (val: number) => {
    console.log(val);
  });

const scale = useTransform(scrollY, [600,1000], [1,1.5]); // dummy transform to retain structure

  return (
    <motion.div
      style={{
        scale,
        width: "600px",
        height: "500px",
        backgroundColor: "red",
        margin: "1500px auto",
        borderRadius: "20px",
      }}
    />
  );
};

export default ScrollLinked;
