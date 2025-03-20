import React from "react";

const SectionHeading = () => {
  return (
    <div className="w-full h-[200px] flex flex-col justify-center items-center bg-[#f7f7ff] gap-2">
      <h1 className="text-5xl md:text-6xl text-left md:text-center font-normal md:font-medium break-words text-gray-700 dark:text-gray-500 tracking-tight">
        Connect With Me!
      </h1>
      <h1 className="text-sm md:text-xl text-left md:text-center font-medium break-words text-gray-500 tracking-tight">
        Fill this form to make a connection!
      </h1>
    </div>
  );
};
export default function page() {
  return (
    <div className="w-full min-h-screen flex justify-center items-start dark:bg-[#00111c] bg-white">
      {SectionHeading()}
    </div>
  );
}
