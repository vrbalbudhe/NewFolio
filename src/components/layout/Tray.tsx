"use client";

import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  GlobeIcon,
  InstagramIcon,
} from "lucide-react";

const Tray = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: LinkedinIcon,
      url: "https://www.linkedin.com/in/yourprofile",
    },
    {
      name: "Instagram",
      icon: InstagramIcon,
      url: "https://www.instagram.com/yourprofile",
    },
    { name: "GitHub", icon: GithubIcon, url: "https://github.com/yourprofile" },
    {
      name: "Twitter",
      icon: TwitterIcon,
      url: "https://twitter.com/yourprofile",
    },
    { name: "Website", icon: GlobeIcon, url: "https://yourwebsite.com" },
  ];

  return (
    <div className="flex justify-center gap-3 dark:bg-[#00111c] mt-5 rounded-xl dark:shadow-lg">
      {socialLinks.map(({ name, icon: Icon, url }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className=" rounded-full text-gray-700 dark:text-gray-500 hover:bg-gray-700 transition-all"
        >
          <Icon size={24} />
        </a>
      ))}
    </div>
  );
};

export default Tray;
