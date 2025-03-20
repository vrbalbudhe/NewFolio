import React from "react";

export default function ProjectCard() {
  return (
    <div className="w-[400px] h-[500px] bg-white border-2 border-gray-200 shadow-md rounded-md">
      <img
        className="h-1/3 w-full rounded-t-md"
        src="https://thumbs.dreamstime.com/b/web-336869012.jpg"
        alt=""
      />
      <div className="w-full h-2/3 p-5">
        <div className="w-full min-h-full flex flex-col gap-2">
          <h1 className="font-medium text-gray-700">Nxthreads Blogsite</h1>
          <h1 className="font-medium text-sm text-balance text-gray-400">
            BuildError@http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_43e3ffb8._.js:10900:41
            react-stack-bottom-frame@http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js:15839:24
            renderWithHooksAgain@http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js:5526:24
          </h1>
        </div>
        <div>{/* tags */}</div>
      </div>
    </div>
  );
}
