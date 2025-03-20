import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";

const WebsiteHeading = () => {
  return (
    <div className="flex gap-4">
      <p className="text-blue-500 font-semibold text-md">VRB</p>
      <p className="font-medium -tracking-tighter text-md dark:text-gray-500 text-gray-700">
        Varun Balbudhe
      </p>
    </div>
  );
};

const NavigationLinks = () => {
  return (
    <ul className="flex gap-4 dark:text-white text-gray-700 text-sm -tracking-tighter">
      <Link href="/">
        <li className="cursor-pointer hover:text-blue-600">Home</li>
      </Link>
      <Link href="/projects">
        <li className="cursor-pointer hover:text-blue-600">Project</li>
      </Link>
      <Link href="/about">
        <li className="cursor-pointer hover:text-blue-600">About</li>
      </Link>
      <Link href="/contact">
        <li className="cursor-pointer hover:text-blue-600">Contact</li>
      </Link>
    </ul>
  );
};

export default function Navbar() {
  return (
    <div className="w-full h-20 flex justify-center items-center dark:bg-[#00111c] bg-[#ffffff] p-2 md:p-5">
      <div className="w-[90%] flex justify-between items-center">
        {WebsiteHeading()}
        <div className="flex justify-center items-center gap-5">
          <div className="hidden md:block">{NavigationLinks()}</div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
