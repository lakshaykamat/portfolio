"use client"
import { projects } from "../../data";
import framerMotionConfig from "../../lib/framer-motion";
import ProjectCard from "./ProjectCard";
import {motion } from 'framer-motion'

const ProjectPage = () => {

  return (
    <div className="px-6 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
      <h1>Projects</h1>
      
      <motion.div animate="visible" initial="hidden" variants={framerMotionConfig.container} className="flex flex-col gap-8 my-6">
        
        {projects.map((item) => (
          <ProjectCard
            key={item.id}
            githubLink={item.githubLink}
            description={item.description}
            isCompleted={item.isCompleted}
            techStack={item.techStack}
            title={item.title}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectPage;
