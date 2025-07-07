import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import Link from "next/link";

interface ProjectCardProps {
  imgURL: string;
  title: string;
  description: string;
  gitURL?: string;
  launchURL?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgURL,
  title,
  description,
  gitURL,
  launchURL,
}) => {
  return (
    <div className="shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-500">
      <div
        className="h-52 md:h-72 rounded-t-lg relative group"
        style={{
          background: `url(${imgURL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay rounded-t-lg items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          {gitURL ? (
            <Link
              href={gitURL}
              target="_blank"
              className="h-14 w-14 mr-2 border-2 rounded-full border-gray-400 hover:border-white relative group/link"
            >
              <GitHubIcon className="h-10 w-10 text-gray-400 cursor-pointer group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </Link>
          ) : (
            <div
              className="h-14 w-14 mr-2 border-2 rounded-full border-gray-700 bg-gray-800 opacity-50 flex items-center justify-center"
              title="No GitHub link available"
            >
              <GitHubIcon className="h-10 w-10 text-gray-700" />
            </div>
          )}
          {launchURL ? (
            <Link
              href={launchURL}
              target="_blank"
              className="h-14 w-14 border-2 rounded-full border-gray-400 hover:border-white relative group/link"
            >
              <LaunchIcon className="h-10 w-10 text-gray-400 cursor-pointer group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </Link>
          ) : (
            <div
              className="h-14 w-14 border-2 rounded-full border-gray-700 bg-gray-800 opacity-50 flex items-center justify-center"
              title="No launch link available"
            >
              <LaunchIcon className="h-10 w-10 text-gray-700" />
            </div>
          )}
        </div>
      </div>
      <div className="text-white rounded-b-lg bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
