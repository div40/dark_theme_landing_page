"use client";
import { useEffect, useRef } from "react";
import EcosystemIcon from "../assets/icons/ecosystem.svg";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus",
  },
  {
    title: "Secure Data Encryption",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Everything you need
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Enjoy customizable lists, team-work tools and smart tracking all in
            one place. Set tasks, get reminders and see your progress simply and
            quickly.
          </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          {features.map(({ title, description }) => (
            <Feature title={title} description={description} key={title} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Feature = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
  const border = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) return;
      const borderPosition = border.current?.getBoundingClientRect();
      offsetX.set(e.x - borderPosition.x);
      offsetY.set(e.y - borderPosition.y);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [offsetX, offsetY]);
  return (
    <div
      key={title}
      className="relative border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1"
    >
      <motion.div
        ref={border}
        className="absolute inset-0 border-2 border-purple-400 rounded-xl"
        style={{
          maskImage: maskImage,
          WebkitMaskImage: maskImage,
        }}
      ></motion.div>
      <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
        <EcosystemIcon />
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
    </div>
  );
};
