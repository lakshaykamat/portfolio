"use client";
import { ProjectCardType } from "../../../types";
import Link from "next/link";
import { motion } from "framer-motion";
import framerMotionConfig from "../../../lib/framer-motion";

const Projects = ({ projects }: { projects: ProjectCardType[] }) => {
  return (
    <div className="pb-10 mx-auto lg:px-24">
      <h2>Projects</h2>
      <motion.div
        animate="visible"
        initial="hidden"
        variants={framerMotionConfig.container}
        className="flex flex-col gap-12 justify-evenly lg:flex-row"
      >
        {projects.slice(0, 3).map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            techStack={project.techStack}
            demoLink={project.demoLink}
            description={project.description}
          />
        ))}
      </motion.div>
    </div>
  );
};

const ProjectCard = ({ title, techStack, demoLink, description }) => {
  const TECH_STACK = techStack.map((item, index) => {
    return (
      <span
        key={index}
        className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-400 bg-gray-700 rounded"
      >
        {item}
      </span>
    );
  });
  return (
    <motion.div
      variants={framerMotionConfig.item}
      className="w-full rounded lg:w-1/3 outline outline-zinc-700 outline-1"
    >
      <div className="flex flex-col min-h-full p-6 rounded drop-shadow-2xl bg-slate-800">
        <h3>{title}</h3>
        <div>{TECH_STACK}</div>
        <p className="flex-1">{description}</p>
        <Link href={demoLink} className="text-center btn-indigo">
          Preview
        </Link>
      </div>
    </motion.div>
  );
};

export default Projects;
