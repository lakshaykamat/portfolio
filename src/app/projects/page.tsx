import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data";

const ProjectPage = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="container max-w-5xl px-4 py-10 mx-auto">
        <h1 className="mb-8 text-3xl font-bold">My Projects</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              techStack={project.techStack}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
