import { Code, FileJson, Github, Instagram, Linkedin } from "lucide-react";
import React from "react";

const WebsiteAuthorDesignation: React.FC<{}> = () => {
  return (
    <div className="font-medium select-none md:text-left text-center -tracking-tighter text-md dark:text-gray-500 text-gray-800 text-sm">
      ©Made By Varun Balbudhe.
      <span className="block">Web Developer & Tech Enthusiast</span>
    </div>
  );
};

const GeneralInfoContainer: React.FC<{ title: string; info: string }> = ({
  title,
  info,
}) => {
  return (
    <div className="w-fit h-full">
      <p className="font-semibold select-none -tracking-tighter text-center text-md dark:text-gray-500 text-gray-800">
        {title}
      </p>
      <p className="font-medium select-none -tracking-tighter text-sm dark:text-gray-400 text-gray-800">
        {info}
      </p>
    </div>
  );
};

const SocialNavTray: React.FC<{}> = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-semibold select-none text-center -tracking-tighter text-md dark:text-gray-500 text-gray-800">
        Social Connect
      </div>
      <div className="flex text-center gap-3 dark:text-gray-400 font-medium text-sm">
        <p>
          <Instagram strokeWidth={1} />
        </p>
        <p>
          <Linkedin strokeWidth={1} />
        </p>
        <p>
          <Github strokeWidth={1} />
        </p>
        <p>
          <FileJson strokeWidth={1} />
        </p>
      </div>
    </div>
  );
};

export default function Footer() {
  return (
    <div className="w-full h-full md:h-28 pb-10 pt-10 md:pt-0 md:pb-0 dark:bg-[#293241] bg-[#eef1f5] flex justify-center items-center">
      <div className="w-[90%] h-full flex md:flex-row flex-col-reverse justify-between items-center gap-10 md:gap-0">
        <div className="w-full md:w-1/2">
          <WebsiteAuthorDesignation />
        </div>
        <div className="w-full md:w-1/2 flex md:flex-row flex-col justify-center gap-5 md:gap-0 md:justify-between items-center">
          {/* {GeneralInfoContainer("Call", "8329940919")} */}
          <GeneralInfoContainer title="Email" info="varunbalbudhe7@gmail.com" />
          <SocialNavTray />
        </div>
      </div>
    </div>
  );
}
