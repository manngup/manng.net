import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import Link from 'next/link';

interface ProjectCardProps {
    imgURL: string;
    title: string;
    description: string;
    gitURL: string;
    launchURL: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgURL, title, description, gitURL, launchURL }) => {
  return (
    <div className="hover:scale-105 transition-all duration-500">
        <div 
            className="h-52 md:h-72 rounded-t-lg relative group"
            style={{ background: `url(${imgURL})`, backgroundSize: "cover"}}
        >
          <div className="overlay rounded-t-lg items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            <Link href={gitURL} className="h-14 w-14 mr-2 border-2 rounded-full border-gray-400 hover:border-white relative group/link">
              <GitHubIcon className="h-10 w-10 text-gray-400 cursor-pointer group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </Link>
            <Link href={launchURL} className="h-14 w-14 border-2 rounded-full border-gray-400 hover:border-white relative group/link">
              <LaunchIcon className="h-10 w-10 text-gray-400 cursor-pointer group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </Link>
            
          </div>
        </div>
        <div className="text-white rounded-b-lg bg-[#181818] py-6 px-4">
            <h5 className="text-xl font-semibold mb-2">{title}</h5>
            <p className="text-gray-400">{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard