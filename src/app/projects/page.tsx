import { projects } from "../../data";
import ProjectCard from "./ProjectCard";

const ProjectPage = () => {
  return (
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-200 sm:text-4xl">
          Projects
        </h1>
        <div className="flex flex-col gap-8 px-4 my-6">
          {
            projects.map((item)=><ProjectCard key={item.id} githubLink={item.githubLink} description={item.description} isCompleted={item.isCompleted} techStack={item.techStack} title={item.title}/>
            )
          }
        </div>
      </div>
  );
};

export default ProjectPage;
