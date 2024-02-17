"use client"

import React from 'react'
import ProjectCard from './ProjectCard'
import { Fade } from "react-awesome-reveal";

const projectsData = [
    {
        id: 1,
        title: "Next.js portfolio website",
        description: "This portfolio page, made with Next.js",
        img: "/images/landscape.jpg",
        tag: ["All", "Web"],
        gitURL: "https://github.com/manngup/manng.net",
        launchURL: "https://manng.net",

    },
    {
        id: 2,
        title: "Scratch Invaders",
        description: "Unity2D game dev project for WSoft Shammy Jam",
        img: "/images/landscape.jpg",
        tag: ["All", "Games"],
        gitURL: "https://github.com/NovaBro/GameJamASTEROID",
        launchURL: "https://malrigus.itch.io/scratch-invaders",
    },
    {
        id: 3,
        title: "Park Swift",
        description: "Ann Arbor parking space rental app currently being made with React Native",
        img: "/images/landscape.jpg",
        tag: ["All", "Web"],
        gitURL: "https://github.com/void-tech-um/park-swift",
        launchURL: "https://github.com/void-tech-um/park-swift",
    },
]

const Projects = () => {
  return (
    <section id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            My Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <Fade triggerOnce fraction={0.25}>
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgURL={project.img}
                        //tags={project}
                        gitURL={project.gitURL}
                        launchURL={project.launchURL}
                    />
                ))}
            </Fade>
        </div>
    </section>
  )
}

export default Projects