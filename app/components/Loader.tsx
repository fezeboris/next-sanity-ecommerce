import React from "react";

const Loader = () => {
  return (
    <div className="h-full w-full bg-black/20 fixed top-0 left-0 z-10 flex justify-center items-center">
      <div className="flex gap-2">
        <div className="w-5 h-5 rounded-full animate-pulse bg-primary"></div>
        <div className="w-5 h-5 rounded-full animate-pulse bg-primary"></div>
        <div className="w-5 h-5 rounded-full animate-pulse bg-primary"></div>
      </div>
    </div>
  );
};

export default Loader;
