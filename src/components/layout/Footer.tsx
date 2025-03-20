import React from "react";

const WebsiteAuthorDesignation = () => {
  return (
    <div className="font-medium md:text-left text-center -tracking-tighter text-md dark:text-gray-500 text-gray-800 text-sm">
      ©Made By Varun Balbudhe.
      <span className="block">Web Developer & Tech Enthusiast</span>
    </div>
  );
};

const GeneralInfoContainer = (title: string, info: string) => {
  return (
    <div className="w-fit h-full">
      <p className="font-semibold -tracking-tighter text-center text-md dark:text-gray-500 text-gray-800">
        {title}
      </p>
      <p className="font-medium -tracking-tighter text-sm dark:text-gray-400 text-gray-800">
        {info}
      </p>
    </div>
  );
};

const SocialNavTray = () => {
  return (
    <div>
      <div className="font-semibold text-center -tracking-tighter text-md dark:text-gray-500 text-gray-800">
        Social Connect
      </div>
      <div className="flex text-center gap-4 dark:text-gray-400 font-medium text-sm">
        <p>Instagram</p>
        <p>X</p>
        <p>Linkedin</p>
        <p>Email</p>
      </div>
    </div>
  );
};

export default function Footer() {
  return (
    <div className="w-full h-full md:h-28 pb-10 pt-10 md:pt-0 md:pb-0 dark:bg-[#00111c] bg-[#f7f7ff] flex justify-center items-center">
      <div className="w-[90%] h-full flex md:flex-row flex-col-reverse justify-between items-center gap-10 md:gap-0">
        <div className="w-full md:w-1/2">{WebsiteAuthorDesignation()}</div>
        <div className="w-full md:w-1/2 flex md:flex-row flex-col justify-center gap-5 md:gap-0 md:justify-between items-center">
          {/* {GeneralInfoContainer("Call", "8329940919")} */}
          {GeneralInfoContainer("Email", "varunbalbudhe7@gmail.com")}
          {SocialNavTray()}
        </div>
      </div>
    </div>
  );
}
