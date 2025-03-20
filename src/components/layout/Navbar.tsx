import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";

const WebsiteHeading = () => {
  return (
    <Link href="/">
      <div className="flex gap-2 md:gap-4">
        <p className="text-blue-500 font-semibold text-lg md:text-md">VRB</p>
        <p className="font-medium -tracking-tighter text-md dark:text-gray-500 text-gray-700">
          Varun Balbudhe
        </p>
      </div>
    </Link>
  );
};

const NavigationLinks = () => {
  return (
    <ul className="flex gap-4 dark:text-white text-gray-700 text-sm -tracking-tighter">
      <Link href="/">
        <li className="cursor-pointer hover:text-blue-600">Home</li>
      </Link>
      <Link href="/projects">
        <li className="cursor-pointer hover:text-blue-600">Projects</li>
      </Link>
      <Link href="/contact">
        <li className="cursor-pointer hover:text-blue-600">Contact</li>
      </Link>
    </ul>
  );
};

const downloadResume = () => {
  return (
    <div className="px-3 py-1 bg-blue-400 rounded-sm shadow-sm cursor-pointer transition-all duration-500">
      <p className="text-white">Resume</p>
    </div>
  );
};

export default function Navbar() {
  return (
    <div className="w-full h-20 flex justify-center items-center dark:bg-[#00111c] bg-[#ffffff] p-2 md:p-5">
      <div className="w-[90%] flex justify-between items-center">
        {WebsiteHeading()}
        <div className="flex justify-center items-center gap-1 md:gap-5">
          <div className="hidden md:block">{NavigationLinks()}</div>
          {downloadResume()}
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
