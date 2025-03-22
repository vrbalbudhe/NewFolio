import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import { FileDown } from "lucide-react";

const WebsiteHeading: React.FC<{}> = () => {
  return (
    <Link href="/">
      <div className="flex gap-2 md:gap-4">
        <p className="text-blue-500 select-none font-semibold text-lg md:text-md">
          VRB
        </p>
        <p className="font-medium select-none -tracking-tighter text-md dark:text-gray-500 text-gray-700">
          Varun Balbudhe
        </p>
      </div>
    </Link>
  );
};

const NavigationLinks: React.FC<{}> = () => {
  return (
    <ul className="flex gap-4 select-none dark:text-white text-gray-700 text-sm -tracking-tighter">
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

const DownloadResume: React.FC<{}> = () => {
  return (
    <div className="px-2 py-1.5 bg-blue-400 rounded-sm shadow-sm cursor-pointer transition-all duration-500">
      <a
        href="/varunbalbudhe_cv.pdf"
        download="varunbalbudhe_cv.pdf"
        className="text-white select-none flex justify-center items-center gap-2"
      >
        Resume
        <span>
          <FileDown size={18} strokeWidth={2} />
        </span>
      </a>
    </div>
  );
};

export default function Navbar() {
  return (
    <div className="w-full h-20 flex justify-center items-center dark:bg-[#00111c] bg-[#ffffff] p-2 md:p-5">
      <div className="w-[90%] flex justify-between items-center">
        <WebsiteHeading />
        <div className="flex justify-center items-center gap-1 md:gap-5">
          <div className="hidden md:block">
            <NavigationLinks />
          </div>
          <DownloadResume />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
