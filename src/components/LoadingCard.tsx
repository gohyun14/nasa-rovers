import React from "react";

const LoadingCard = () => {
  return (
    <div className="rounded-lg border border-gray-400 bg-gray-50 p-3 shadow-md hover:border-red-700 hover:shadow-lg">
      <h1 className="mb-3 h-8 w-1/2 animate-pulse rounded-full bg-gray-500"></h1>
      <div className="mt-1 flex flex-col items-start gap-y-2 text-lg text-gray-700">
        <h2 className="mt-1 h-6 w-4/5 animate-pulse rounded-full bg-gray-500"></h2>
        <h2 className="mt-1 h-6 w-4/5 animate-pulse rounded-full bg-gray-500"></h2>
        <h2 className="mt-1 h-6 w-4/5 animate-pulse rounded-full bg-gray-500"></h2>
        <h2 className="mt-1 h-6 w-4/5 animate-pulse rounded-full bg-gray-500"></h2>
      </div>
    </div>
  );
};

export default LoadingCard;
