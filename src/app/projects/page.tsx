import ProjectCard from "../../components/projects/ProjectCard";
import React from "react";

const SectionHeading = () => {
  return (
    <div className="w-full h-[200px] flex flex-col justify-center items-center bg-[#f7f7ff] gap-2">
      <h1 className="text-5xl md:text-6xl text-left md:text-center font-normal md:font-medium break-words text-gray-700 dark:text-gray-500 tracking-tight">
        Projects Archives
      </h1>
      <h1 className="text-sm md:text-xl text-left md:text-center font-medium break-words text-gray-500 tracking-tight">
        All the Web, App Development and Blockchain Projects
      </h1>
    </div>
  );
};

export default function page() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col justify-center items-center">
      {SectionHeading()}
      <div className="w-[90%] min-h-screen bg-white items-start flex-wrap flex gap-5 justify-start md:p-5 pt-20 pb-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
