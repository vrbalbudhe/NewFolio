"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ProjectDict from "../../../components/projects/ProjectDict";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { CircleSmall, Flag, SquareArrowOutUpRight } from "lucide-react";

type Project = {
  uniqueId: string;
  title: string;
  info: string;
  landingImage: string;
  tags: string[];
  features: string[];
  image: string[] | StaticImageData[];
  InstitutionName: string;
  githubRepo: string;
  website: string;
};

export default function ProjectPage() {
  const [data, setData] = useState<Project | null>(null);
  const { id } = useParams() as { id: string };

  useEffect(() => {
    if (id) {
      const project = ProjectDict.find((project) => project.uniqueId === id);
      setData(project || null);
    }
  }, [id]);

  if (!data) {
    return (
      <div className="w-full min-h-screen flex flex-col justify-center items-center gap-2 dark:bg-[#00111c] bg-white">
        <p className="text-gray-500 text-sm">
          Project With ID{" "}
          <span className="dark:text-gray-200 text-gray-700">{id}</span> not
          found
        </p>
        <Link href="/">
          <div className="px-2 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-md cursor-pointer">
            <p>Return To Home</p>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center dark:bg-[#00111c] bg-white">
      <div className="w-[90%] min-h-screen flex flex-col justify-start items-start p-4">
        {/* Project Card Heading */}
        <ProjectHeading title={data.title} info={data.info} />

        {/* GitHub & Website Links */}
        <ProjectInfoLinks githubRepo={data.githubRepo} website={data.website} />

        {/* Tags Section */}
        <CardTagsSection tags={data.tags} />

        <ProjectFeatures features={data.features} />

        {/* Image Section */}
        <CardImageSection
          images={data.image.length > 0 ? data.image : ["/default-image.jpg"]}
        />
      </div>
    </div>
  );
}

const ProjectFeatures: React.FC<{ features: string[] }> = ({ features }) => {
  return (
    <ul className="pt-5">
      {features.map((feature, index) => (
        <li
          key={index}
          className="text-gray-700 dark:text-gray-500 -tracking-tight text-md font-medium flex justify-start items-center gap-2"
        >
          <span className="dark:text-gray-500 text-gray-700 inline-block">
            <CircleSmall size={20} />
          </span>
          {feature}
        </li>
      ))}
    </ul>
  );
};

const ProjectHeading: React.FC<{ title: string; info: string }> = ({
  title,
  info,
}) => {
  return (
    <div className="w-full min-h-fit pt-10 pb-10 flex flex-col justify-center items-start gap-2">
      <h1 className="font-medium tracking-tight text-6xl text-gray-500 dark:text-gray-400">
        {title}
      </h1>
      <h1 className="font-medium tracking-tighter text-xl text-gray-600">
        {info}
      </h1>
    </div>
  );
};

const CardTagsSection: React.FC<{ tags: string[] }> = ({ tags }) => {
  return (
    <div className="w-full h-fit flex flex-wrap justify-start items-center gap-2">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="w-fit px-2 py-1 bg-gray-800 dark:bg-[#293241] rounded-sm"
        >
          <p className="text-gray-300 dark:text-gray-100 -tracking-tight text-sm">
            {tag}
          </p>
        </div>
      ))}
    </div>
  );
};

const CardImageSection: React.FC<{ images: (string | StaticImageData)[] }> = ({
  images,
}) => {
  return (
    <div className="w-full pt-10 pb-10 flex flex-wrap gap-2">
      {images.map((image, index) => (
        <Image
          key={index}
          className="h-auto w-auto rounded-sm object-cover"
          src={typeof image === "string" ? image : image.src}
          alt={`Project Image ${index + 1}`}
          width={300}
          height={200}
          priority
        />
      ))}
    </div>
  );
};

const ProjectInfoLinks: React.FC<{ githubRepo: string; website: string }> = ({
  githubRepo,
  website,
}) => {
  return (
    <div className="flex flex-col gap-2 pb-5">
      <a
        href={githubRepo}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm font-medium dark:text-gray-400 text-gray-700 underline cursor-pointer"
      >
        <Flag size={14} strokeWidth={2} color="white" />
        GitHub Repository
      </a>

      {website && website !== "null" && (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium dark:text-gray-400 text-gray-700 underline cursor-pointer"
        >
          <SquareArrowOutUpRight size={14} strokeWidth={1} color="white" />
          Visit Website
        </a>
      )}
    </div>
  );
};
