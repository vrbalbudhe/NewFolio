"use client";

import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  GlobeIcon,
  InstagramIcon,
} from "lucide-react";

const Tray: React.FC<{}> = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: LinkedinIcon,
      url: "www.linkedin.com/in/varun-balbudhe-67b516256",
    },
    {
      name: "Instagram",
      icon: InstagramIcon,
      url: "https://www.instagram.com/vruunnn_",
    },
    { name: "GitHub", icon: GithubIcon, url: "https://github.com/vrbalbudhe" },
    // {
    //   name: "Twitter",
    //   icon: TwitterIcon,
    //   url: "https://twitter.com/yourprofile",
    // },
    {
      name: "Website",
      icon: GlobeIcon,
      url: "https://vrbresume.vercel.app/projects",
    },
  ];

  return (
    <div className="flex justify-center gap-3 dark:bg-[#00111c] mt-5 rounded-xl dark:shadow-lg">
      {socialLinks.map(({ name, icon: Icon, url }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className=" rounded-full text-gray-700 dark:text-gray-500 hover:text-gray-500 transition-all"
        >
          <Icon size={24} strokeWidth={1.2} />
        </a>
      ))}
    </div>
  );
};

export default Tray;
