import React from "react";
import Tray from "@components/layout/Tray";

const HeroSectionHeading = () => {
  return (
    <p className="text-5xl break-words text-gray-500 tracking-tight">
      Hi, I am Varun Balbudhe,{" "}
      <span className="block text-3xl md:text-5xl tracking-tight font-normal">
        A Passionate Web Developer, Cloud Practioner and Blockchain Learner
      </span>
    </p>
  );
};

export default function HeroSection() {
  return (
    <div className="w-full h-[700px] md:h-screen flex dark:bg-[#00111c] bg-white justify-center md:items-center">
      <div className="w-[90%] flex flex-col p-2 md:p-5 justify-center items-start h-full">
        {HeroSectionHeading()}
        {/* {TaglineChange()} */}
        <Tray />
      </div>
    </div>
  );
}
