import React from "react";
import ICCDict from "./ICCDict";
import ICCard from "./ICCard";

const SectionHeading = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-2">
      <h1 className="text-5xl  md:text-6xl pointer-events-none select-none text-left md:text-center font-normal  md:font-medium break-words text-gray-700 dark:text-gray-500 tracking-tight">
        Industry Collaborations
      </h1>
      <h1 className="text-sm pointer-events-none select-none md:text-xl text-center font-medium break-words text-gray-500 tracking-tight">
        All the Industry Projects and Collaborations i have done
      </h1>
    </div>
  );
};

export default function IndusCollabSection() {
  return (
    <div className="w-full min-h-screen pt-20 pb-20 dark:bg-[#00111c] bg-white flex justify-center items-center">
      <div className="w-[90%] min-h-full md:p-5 h-full flex flex-col gap-20 md:gap-20 justify-start items-start">
        {SectionHeading()}
        <div className="w-full h-full flex flex-wrap gap-5 justify-center items-center">
          {ICCDict.map((events, index: number) => (
            <ICCard
              key={index}
              title={events.title}
              info={events.info}
              link={events.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
