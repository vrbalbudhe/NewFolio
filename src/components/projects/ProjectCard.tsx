import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  uniqueId: string;
  title: string;
  info: string;
  image: string | { src: string }[]; // Supports both string and array of objects
  landingImage: string;
  tags: string[];
}

const CardMainSection: React.FC<{ title: string; info: string }> = ({
  title,
  info,
}) => {
  return (
    <div className="w-full min-h-fit flex flex-col gap-5">
      <h1 className="font-semibold text-3xl select-none dark:text-gray-200 text-gray-700">
        {title}
      </h1>
      <p className="font-medium text-sm text-balance select-none dark:text-gray-400 text-gray-600">
        {info}
      </p>
    </div>
  );
};

const CardTagsSection: React.FC<{ tags: string[] }> = ({ tags }) => {
  const visibleTags = tags.slice(0, 3);
  const extraCount = tags.length - 3;

  return (
    <div className="w-full h-fit flex flex-wrap justify-start items-center gap-2">
      {visibleTags.map((tag, index) => (
        <div
          key={index}
          className="w-fit px-3 py-1.5 bg-[#a3bded] dark:bg-[#3a6ea5] rounded-md"
        >
          <p className="text-white font-semibold -tracking-tighter select-none text-sm">{tag}</p>
        </div>
      ))}
      {extraCount > 0 && (
        <div className="w-fit px-3 py-1.5 bg-[#a3bded] dark:bg-[#00111c] rounded-md">
          <p className="text-white font-semibold -tracking-tighter select-none text-sm">+{extraCount} more</p>
        </div>
      )}
    </div>
  );
};

export default function ProjectCard({
  uniqueId,
  title,
  landingImage,
  info,
  image,
  tags,
}: ProjectCardProps) {
  const imageUrl =
    typeof image === "string" ? image : image[0]?.src || "/fallback-image.jpg";

  return (
    <Link href={`/projects/${uniqueId}`} className="no-underline select-none">
      <div
        className={`w-full md:w-[400px] select-none pb-10 min-h-[450px] md:h-[420px] bg-white dark:bg-[#2b2d42] dark:border-none border border-gray-200 shadow-sm rounded-sm overflow-hidden`}
      >
        <Image
          className="rounded-t-sm pointer-events-none h-2/5 select-none object-cover"
          src={imageUrl}
          alt="Project Image"
          width={400}
          height={250}
          priority
        />
        <div className="w-full h-fit flex flex-col justify-between items-center gap-4 p-5">
          <CardMainSection title={title} info={info} />
          <CardTagsSection tags={tags} />
        </div>
      </div>
    </Link>
  );
}
