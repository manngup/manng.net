"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { Fade } from "react-awesome-reveal";

const projectsData = [
  {
    id: 1,
    title: "Way of the Cards",
    description:
      "Roguelike card-combat showcase game made in Unity over 6 weeks, placed 4th out of 19 teams",
    img: "/images/projects/Way_of_the_Cards_IMG.png",
    tag: ["All", "Games"], // tag included to add a filtering feature in the future
    launchURL: "https://manngup.itch.io/way-of-the-cards",
  },
  {
    id: 2,
    title: "hum2song",
    description:
      "Prototype web app for processing and converting humming into song snippets",
    img: "/images/projects/hum2song_IMG.png",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "GSGEDM VOD Streaming Site",
    description:
      "Video-On-Demand streaming site currently being made for a local film studio",
    img: "/images/projects/GSGEDM_VOD_Streaming_Site_IMG.png",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Egg Hunt",
    description:
      "Endless runner 3D platforming game where you play as a duck and have to collect eggs",
    img: "/images/projects/Egg_Hunt_IMG.png",
    tag: ["All", "Games"],
    launchURL: "https://manngup.itch.io/egg-hunt",
  },
  {
    id: 5,
    title: "The Legend of Zelda NES Remake",
    description:
      "Remake of The Legend of Zelda for the NES, including a custom bazooka level",
    img: "/images/projects/Zelda_Remake_IMG.png",
    tag: ["All", "Games"],
    launchURL: "https://manngup.itch.io/legend-of-zelda-nes-remake",
  },
  {
    id: 6,
    title: "Roll-a-Chicken",
    description: "Roll a chicken and collect spinning cubes",
    img: "/images/projects/Roll-a-Chicken_IMG.png",
    tag: ["All", "Games"],
    launchURL: "https://manngup.itch.io/roll-a-chicken",
  },
  {
    id: 7,
    title: "Next.js portfolio website",
    description: "This portfolio page, made with Next.js",
    img: "/images/projects/Portfolio_IMG.jpg",
    tag: ["All", "Web"],
    gitURL: "https://github.com/manngup/manng.net",
    launchURL: "https://manng.net",
  },
  {
    id: 8,
    title: "Scratch Invaders",
    description:
      "Space Invaders remake game made with Unity, submitted to WSoft Shammy Jam",
    img: "/images/projects/Scratch_Invaders_IMG.jpg",
    tag: ["All", "Games"],
    launchURL: "https://malrigus.itch.io/scratch-invaders",
  },
  {
    id: 9,
    title: "Park Swift",
    description:
      "Ann Arbor parking space rental app currently being made with React Native",
    img: "/images/projects/Park_Swift_IMG.jpg",
    tag: ["All", "Web"],
    gitURL: "https://github.com/void-tech-um/park-swift",
  },
];

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
  );
};

export default Projects;
