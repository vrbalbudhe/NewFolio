// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import Tray from "@components/layout/Tray";
import Tagline from "./Tagline";

const HeroSectionHeading: React.FC<{}> = () => {
  return (
    <p className="text-5xl break-words pointer-events-none  select-none text-gray-700 dark:text-gray-500 tracking-tight">
      Hi, I am Varun Balbudhe,{" "}
      <span className="block text-2xl text-gray-500 md:text-gray-700 md:text-5xl tracking-tight font-normal">
        A Passionate Web Developer, Cloud Practioner and Blockchain Learner
      </span>
    </p>
  );
};

export default function HeroSection() {
  return (
    <div className="w-full h-[700px] md:h-screen flex dark:bg-[#00111c] bg-white justify-center md:items-center">
      <div className="w-[90%] flex flex-col p-2 md:p-5 gap-3 justify-center items-start h-full">
        {<HeroSectionHeading />}
        <Tray />
        <Tagline />
      </div>
    </div>
  );
}
