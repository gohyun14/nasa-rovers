import React from "react";

const LoadingPicture = () => {
  return (
    <div className="group rounded-lg bg-gray-100 shadow-md">
      <div className="flex h-[16rem] w-full animate-pulse items-center justify-center overflow-hidden rounded-t-lg bg-gray-500"></div>
      <div className="mt-2 p-2">
        <h1 className="h-7 w-3/4 animate-pulse rounded-full bg-gray-500"></h1>
        <h3 className="mt-6 h-6 w-2/3 animate-pulse rounded-full bg-gray-500"></h3>
      </div>
    </div>
  );
};

export default LoadingPicture;
