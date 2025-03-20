import Link from "next/link";
import React from "react";

interface ProjectExploreType {
  title: string;
  info: string;
  link: string;
}

export default function ExploreProjectsCard({
  title,
  info,
  link,
}: ProjectExploreType) {
  return (
    <Link href={link}>
      <div className="w-full md:w-[300px] min-h-[80px] flex flex-col gap-3 justify-center items-start rounded-md bg-[#fdffff] dark:border-none border-2 border-gray-100 shadow-md dark:bg-[#293241] p-5">
        <p className="text-xl text-gray-700 font-semibold dark:text-gray-300">
          {title}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-500">{info}</p>
      </div>
    </Link>
  );
}
