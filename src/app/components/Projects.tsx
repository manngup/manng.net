"use client"

import React from 'react'
import ProjectCard from './ProjectCard'
import { Fade } from "react-awesome-reveal";

const projectsData = [
    {
        id: 1,
        title: "next.js portfolio website",
        description: "project 1 description",
        img: "/images/landscape.jpg",
        tag: ["All", "Web"],
        gitURL: "/",
        launchURL: "/",

    },
    {
        id: 2,
        title: "scratch invaders",
        description: "project 2 description",
        img: "/images/landscape.jpg",
        tag: ["All", "Games"],
        gitURL: "/",
        launchURL: "/",
    },
    {
        id: 3,
        title: "guitar helperer",
        description: "project 3 description",
        img: "/images/landscape.jpg",
        tag: ["All", "Web"],
        gitURL: "/",
        launchURL: "/",
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