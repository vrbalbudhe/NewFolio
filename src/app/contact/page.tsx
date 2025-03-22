import ContactCard from "@components/contact/ContactCard";
import React from "react";

const SectionHeading: React.FC<{}> = () => {
  return (
    <div className="w-full min-h-[400px] md:min-h-[200px] md:mb-5 flex flex-col justify-center md:justify-end items-start dark:bg-[#00111c] gap-2">
      <p className="text-5xl select-none break-words text-gray-700 dark:text-gray-500 tracking-tight">
      Connect With Me <br /> And Let's Collaborate Together
      </p>
      <h1 className="text-md md:text-xl select-none text-left md:text-center font-medium break-words text-gray-500 tracking-tight">
        Make A Connection Email Using Below Form
      </h1>
    </div>
  );
};
export default function page() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center dark:bg-[#00111c] bg-white">
      <div className="w-[90%] min-h-fulll flex flex-col justify-start items-start gap-8 md:gap-0 pb-10">
        <SectionHeading />
        <ContactCard />
      </div>
    </div>
  );
}
