import React from "react";

interface EventCardProps {
  title: string;
  location: string;
  info: string;
}

export default function EventCard({ title, location, info }: EventCardProps) {
  return (
    <div className="w-full md:hover:scale-105 transition-all duration-500 flex flex-col dark:bg-[#293241] bg-white md:w-[350px] md:min-h-[250px] shadow-md dark:border-none border rounded-md border-gray-200">
      <div className="h-2/3 p-5 flex flex-col gap-10 md:gap-3">
        <div>
          <p className="dark:text-gray-500 text-[#0077b6] tracking-tight text-3xl font-semibold">
            {title}
          </p>
          <p className="dark:text-gray-400 text-gray-500 tracking-tight text-md font-semibold">
            {location}
          </p>
        </div>
        <p className="dark:text-gray-400 text-gray-600 tracking-tight text-sm md:text-md font-medium">
          {info}{" "}
        </p>
      </div>
    </div>
  );
}
