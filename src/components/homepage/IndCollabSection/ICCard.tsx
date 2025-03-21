import Link from "next/link";
import React from "react";

interface FoodCardProps {
  title: string;
  info: string;
  link: string;
}

export default function FoodCard({ title, info, link }: FoodCardProps) {
  return (
    <div className="w-full md:w-[350px] min-h-[200px] bg-white dark:bg-[#293241] shadow-md border dark:border-none rounded-md border-gray-200 overflow-hidden transition-all duration-500 md:hover:scale-105">
      <div className="p-5 flex flex-col gap-5">
        <h3 className="text-[#0077b6] pointer-events-none select-none dark:text-[#caf0f8] text-3xl font-semibold">
          {title}
        </h3>
        <p className="text-gray-500 text-sm pointer-events-none select-none font-medium">
          {info.slice(0, 120)}...
        </p>
        <div className="flex justify-between items-center">
          <h1 className="text-sm font-medium select-none cursor-pointer text-blue-400 dark:text-blue-200">
            Read More
          </h1>
          <Link href={link}>
            <h1 className="text-sm font-medium select-none cursor-pointer text-blue-400 dark:text-blue-200">
              Checkout Project
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
