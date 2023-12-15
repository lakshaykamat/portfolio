import { projects } from "../../data";
import ProjectCard from "./ProjectCard";

const ProjectPage = () => {
  return (
      <div className="px-6 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <h1>
          Projects
        </h1>
        <div className="flex flex-col gap-8 my-6">
          {
            projects.map((item)=><ProjectCard key={item.id} githubLink={item.githubLink} description={item.description} isCompleted={item.isCompleted} techStack={item.techStack} title={item.title}/>
            )
          }
        </div>
      </div>
  );
};

export default ProjectPage;
