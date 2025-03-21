"use client";
import { BookMarked, FileDown, Linkedin, Play, User } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function Tagline() {
  const taglines = [
    "Connect with me on LinkedIn!",
    "Download My Resume",
    "Have Many Projects on MERN Stack",
    "Have Keen Intrests on Learning $ Building Blockchain ",
    "Let's collaborate on projects!",
    "Reach out for networking!",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="text-gray-400 text-xl flex flex-col gap-3 ">
        <div className="flex justify-center items-center gap-3">
          <span className="text-gray-600 inline-block">
            <Play />
          </span>
          <p className="text-gray-600 pointer-events-none select-none">
            {taglines[index]}
          </p>
        </div>
        {index === 0 && (
          <div className="pr-10 pl-4 py-2 rounded-md w-fit bg-blue-700 flex justify-start gap-2 items-center">
            <p>
              <Linkedin color="white" size={20} strokeWidth={1} />
            </p>
            <p className="text-white font-semibold select-none">LinkedIn</p>
          </div>
        )}
        {index === 1 && (
          <div className="px-3 py-2 rounded-md bg-[#2a9d8f] flex justify-between items-center">
            <a
              href="/varunbalbudhe_cv.pdf"
              download="varunbalbudhe_cv.pdf"
              className="text-white text-md w-fit select-none flex justify-center items-center gap-2"
            >
              Download Resume
              <span>
                <FileDown size={18} strokeWidth={2} />
              </span>
            </a>
          </div>
        )}
        {index === 4 && (
          <div className="px-3 py-2 rounded-md border border-gray-200 shadow-sm bg-[#2b2d42] flex justify-between items-center">
            <p className="text-gray-200 text-md select-none">
              Connect With Me!
            </p>
            <p>
              <User color="white" size={20} strokeWidth={0.75} />
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
