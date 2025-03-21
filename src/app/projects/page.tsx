import ProjectCard from "../../components/projects/ProjectCard";
import ProjectDict from "../../components/projects/ProjectDict";
import React from "react";

const SectionHeading = () => {
  return (
    <div className="w-full h-[200px] md:h-[150px] md:mb-5 flex flex-col justify-center md:justify-end items-start dark:bg-[#00111c] gap-2">
      <p className="text-5xl break-words text-gray-700 dark:text-gray-500 tracking-tight">
        Projects Archives
      </p>
      <h1 className="text-sm md:text-xl text-left md:text-center font-medium break-words text-gray-500 tracking-tight">
        All the Web, App Development and Blockchain Projects
      </h1>
    </div>
  );
};

export default function page() {
  return (
    <div className="w-full min-h-screen dark:bg-[#00111c] bg-white flex flex-col justify-center items-center">
      <div className="w-[90%] min-h-screen bg-inherit items-start flex-wrap flex gap-5 justify-start md:p-5 pt-20 pb-10">
        {SectionHeading()}
        {ProjectDict.map((project, index) => (
          <ProjectCard
            key={index}
            landingImage={project.landingImage}
            uniqueId={project.uniqueId}
            title={project.title}
            info={project.info}
            image={
              project.image.length > 0
                ? typeof project.image[0] === "string"
                  ? project.image[0]
                  : project.image[0].src
                : "https://m.media-amazon.com/images/I/51Jeu+ot7EL._AC_UF1000,1000_QL80_.jpg"
            }
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
}
