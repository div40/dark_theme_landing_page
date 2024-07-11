"use client";
import { useState } from "react";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import clsx from "clsx";

const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, sequi!",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, sequi!",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, sequi!",
  },
  {
    question: "Is my data secure?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, sequi!",
  },
];

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      key={question}
      className=" py-7 border-b border-white/30 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <div className={clsx("mt-4", { hidden: !isOpen, "": isOpen === true })}>
        {answer}
      </div>
    </div>
  );
};

export const FAQ = () => {
  return (
    <div className="bg-gradient-to-b from-[#5D2CA8] to-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl sm:max-w-[648px] mx-auto">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordionItem question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
};
