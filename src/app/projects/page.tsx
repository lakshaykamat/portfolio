import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data";

const ProjectPage = () => {
  const projectsJSX = projects.map((project, index) => {
    return <ProjectCard
      key={index}
      title={project.title}
      description={project.description}
      tags={project.tags}
      techStack={project.techStack}
      githubLink={project.githubLink}
      demoLink={project.demoLink}
    />
  })
  return (
    <div className="bg-gray-100 ">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Projects
        </h2>
        <div className="flex flex-col gap-6 my-6">
          {projectsJSX}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
