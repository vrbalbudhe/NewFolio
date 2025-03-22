import React from "react";
import ExploreProjectsCard from "./ExploreProjectsCard";

export default function AboutSection() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center pt-20 pb-20 dark:bg-[#fdfffc] bg-[#f7f7ff]">
      <div className="w-[90%] h-full flex flex-col justify-start items-start gap-10 md:p-5">
        <div className="w-full h-1/2 flex flex-col gap-2">
          <h1 className="text-5xl pointer-events-none  select-none md:text-6xl text-left md:text-center font-normal md:font-medium break-words text-gray-500 tracking-tight">
            Hi, I am{" "}
            <span className="block md:inline-block text-6xl text-gray-700">
              {"  "} Varun{" "}
              <span className="block md:inline-block text-6xl text-gray-700">
                Balbudhe
              </span>
            </span>
          </h1>
          <h1 className="hidden pointer-events-none select-none md:block md:text-xl text-center font-medium break-words text-gray-500 tracking-tight">
            Web Developer | TECH Enthusiast
          </h1>
        </div>
        <div className="w-full flex justify-center items-center flex-col">
          <p className="text-gray-500 pointer-events-none select-none text-md md:text-xl break-words text-pretty text-center font-medium -tracking-tight">
            A passionate computer science student, skilled in
            <span className="text-blue-500 font-semibold">
              {" "}
              web development{" "}
            </span>
            Especially in
            <span className="text-blue-500 font-semibold text-balance">
              {" "}
              MERN{" "}
            </span>
            stack,
            <span className="text-blue-500 font-semibold text-balance">
              {" "}
              NEXT JS{" "}
            </span>
            Building projects that blend creativity and tech, with a keen
            interest in blockchain Technology, I am also having the intrests and
            practicing the
            <span className="text-blue-500 font-semibold text-balance">
              {" "}
              AWS Cloud{" "}
            </span>
            Always exploring new ideas and innovations, solving problems through
            technology.
          </p>
        </div>
        <div className="flex md:flex-row justify-center items-center w-full flex-col gap-2">
          <ExploreProjectsCard
            title="Explore Projects"
            info="Explore my projects about my web development projects "
            link="/projects"
          />
          <ExploreProjectsCard
            title="Explore Blockchain Project"
            info="Explore my projects on Blockchain Foundry and fundme projects "
            link="/projects"
          />
        </div>
      </div>
    </div>
  );
}
