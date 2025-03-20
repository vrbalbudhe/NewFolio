import React from "react";

interface FoodCardProps {
  title: string;
  info: string;
}

export default function FoodCard({ title, info }: FoodCardProps) {
  return (
    <div className="w-full md:w-[350px] min-h-[200px] bg-[#293241] shadow-md border-none rounded-md border-gray-200 overflow-hidden transition-all duration-500 md:hover:scale-105">
      <div className="p-5 flex flex-col gap-5">
        <h3 className="dark:text-gray-400 text-[#caf0f8] text-3xl font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm font-medium">
          {info.slice(0, 120)}...
        </p>
        <div className="flex justify-between items-center">
          <h1 className="text-sm font-medium cursor-pointer text-blue-200">
            Read More
          </h1>
          <h1 className="text-sm font-medium cursor-pointer text-blue-200">
            Checkout Project
          </h1>
        </div>
      </div>
    </div>
  );
}
