"use client";
import Image from "next/image";
import productScreenshot from "../assets/images/app-screen.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const productImage = useRef<HTMLImageElement>(null);

  // offset explanation :
  // start of the image reaches end of the page
  // end of the image reaches end of the page

  const { scrollYProgress } = useScroll({
    target: productImage,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Intuitive Interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet id
            harum iusto. Et, alias a! Minima architecto tempore doloribus quas.
          </p>
        </div>
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "800px",
          }}
        >
          <Image
            ref={productImage}
            src={productScreenshot}
            alt="product screenshot"
            className="mt-14 mx-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};
