import React from "react";
import EventCard from "./EventCard";
import EventsDict from "./EventsDicts";

const SectionHeading = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-2">
      <h1 className="text-5xl md:text-6xl text-left md:text-center font-normal md:font-medium break-words text-gray-700 dark:text-gray-500 tracking-tight">
        Highlighted Events
      </h1>
      <h1 className="text-sm md:text-xl text-left md:text-center font-medium break-words text-gray-500 tracking-tight">
        All the Hackathons and Tech Events i had Witnesed!
      </h1>
    </div>
  );
};

export default function EventSection() {
  return (
    <div className="w-full min-h-screen pb-20 pt-20 flex flex-col gap-20 justify-center items-center dark:bg-[#00111c] bg-white">
      <div className="w-[90%] h-full flex flex-col gap-20 justify-start items-start md:p-5">
        {SectionHeading()}
        <div className="w-full h-full flex flex-wrap gap-5 justify-center items-center">
          {EventsDict.map((events, index: number) => (
            <EventCard
              key={index}
              title={events.title}
              location={events.location}
              info={events.info}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
