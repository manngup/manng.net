import React from 'react'

interface ProjectCardProps {
    imgURL: string;
    title: string;
    description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({imgURL, title, description }) => {
  return (
    <div>
        <div 
            className="h-52 md:h-72"
            style={{ background: `url(${imgURL})`, backgroundSize: "cover"}}
        >
        </div>
        <div className="text-white">
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard