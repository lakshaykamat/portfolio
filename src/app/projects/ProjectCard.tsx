const ProjectCard = ({
  title,
  description,
  tags,
  techStack,
  githubLink,
  demoLink,
}) => {
  //Render All Tags
  const TAGS = tags.map((item, index) => {
    return (
      <span
        key={index}
        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >
        #{item}
      </span>
    );
  });
  //Render all TechStack
  const TECH_STACK = techStack.map((item, index) => {
    return (
      <span
        key={index}
        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >
        {item}
      </span>
    );
  });
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">{TAGS}</div>
      <div className="px-6 py-4">{TECH_STACK}</div>
      <div className="px-6 py-4">
        <a
          href={demoLink}
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2 mb-2"
        >
          Live Demo
        </a>
        <a
          href={githubLink}
          className="inline-block bg-gray-500 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full mr-2 mb-2"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
