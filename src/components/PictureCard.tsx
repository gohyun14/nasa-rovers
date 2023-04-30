import React from "react";

type PictureCardProps = {
  imgSrc: string;
  cameraName: string;
  imageId: number;
};

const PictureCard = ({ imgSrc, cameraName, imageId }: PictureCardProps) => {
  return (
    <div className="group rounded-lg bg-gray-50 shadow-md">
      <div className="flex h-[16rem] w-full items-center justify-center overflow-hidden rounded-t-lg bg-gray-200">
        <img src={imgSrc} className="bg-cover" />
      </div>
      <div className="p-2">
        <h1 className="overflow-hidden text-ellipsis text-lg font-semibold text-gray-800">
          {cameraName}
        </h1>
        <h3 className="mt-3 text-gray-500">Image Number: {imageId}</h3>
      </div>
    </div>
  );
};

export default PictureCard;
