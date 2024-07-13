"use client";

import Image from "next/image";
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import { motion } from "framer-motion";

const images = [
  { src: acmeLogo },
  { src: quantumLogo },
  { src: echoLogo },
  { src: celestialLogo },
  { src: pulseLogo },
  { src: apexLogo },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">
          Trusted and used by millions
        </h2>
        <div className="flex overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))] after:right-0 before:left-0 before:top-0 after:top-0 before:z-10">
          <motion.div
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            className="flex flex-none gap-16 pr-16"
          >
            {images.map(({ src }, index) => (
              <Image
                src={src}
                alt="logo"
                className="flex-none h-8 w-auto"
                key={index}
              />
            ))}
            {images.map(({ src }, index) => (
              <Image
                src={src}
                alt="logo"
                className="flex-none h-8 w-auto"
                key={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
