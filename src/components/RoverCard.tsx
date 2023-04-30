import { useState } from "react";
import {
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
  PhotoIcon,
  CameraIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";

type RoverCardProps = {
  name: string;
  landingDate: string;
  launchDate: string;
  totalPhotos: number;
  cameras: string[];
};

const RoverCard = ({
  name,
  landingDate,
  launchDate,
  totalPhotos,
  cameras,
}: RoverCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-lg border border-gray-400 bg-gray-50 p-3 shadow-md hover:border-red-700 hover:shadow-lg">
      <h3 className="mb-3 text-3xl text-gray-800">{name}</h3>
      <div className="flex flex-col items-start gap-y-2 text-lg text-gray-700">
        <div className="flex w-full flex-row items-center gap-x-[6px]">
          <ArrowUpCircleIcon className="h-6 w-6 text-red-700" />
          <p className="">
            <span className="">Launched: </span>
            {launchDate}
          </p>
        </div>
        <div className="flex w-full flex-row items-center gap-x-[6px]">
          <ArrowDownCircleIcon className="h-6 w-6 text-red-700" />
          <p className="">
            <span className="">Landed: </span>
            {landingDate}
          </p>
        </div>
        <div className="flex w-full flex-row items-center gap-x-[6px]">
          <PhotoIcon className="h-6 w-6 text-red-700" />
          <p className="">
            <span className="">Total Photos: </span>
            {totalPhotos}
          </p>
        </div>
        <div
          className="group flex w-full flex-row items-center justify-between hover:cursor-pointer"
          onClick={() => setExpanded((prev) => !prev)}
        >
          <div className="flex flex-row items-center gap-x-[6px]">
            <CameraIcon className="h-6 w-6 text-red-700" />
            <p className="">
              <span className="">Available Cameras: </span>
              {cameras?.length}
            </p>
          </div>

          <ChevronUpIcon
            className={`h-4 w-4 stroke-2 text-gray-400 transition-all duration-200 ease-in-out group-hover:text-red-700 ${
              expanded ? "" : "-rotate-180 transform"
            }`}
          />
        </div>
        {expanded && (
          <motion.ul
            className="ml-1 flex flex-col items-start gap-y-1 text-xs"
            variants={{
              hidden: { opacity: 0, height: 0 },
              visible: {
                opacity: 1,
                height: "auto",
                transition: {
                  opacity: { delay: 0.15 },
                  type: "spring",
                  stiffness: 150,
                  damping: 10,
                  mass: 0.5,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {cameras?.map((name) => (
              <li
                key={name}
                className="rounded-full border border-red-400 bg-red-100 px-2 py-1 text-red-700"
              >
                <p>{name}</p>
              </li>
            ))}
          </motion.ul>
        )}
      </div>
      <Link href={`/browse/${name?.toLowerCase()}`}>
        <motion.button
          type="button"
          className="mt-4 rounded-full bg-red-700 px-3 py-1 text-white hover:bg-red-800"
          whileTap={{
            scale: 0.95,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
            mass: 0.1,
          }}
        >
          View Photos
        </motion.button>
      </Link>
    </div>
  );
};

export default RoverCard;
