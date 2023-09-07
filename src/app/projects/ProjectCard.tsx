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
        className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
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
        className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full "
      >
        {item}
      </span>
    );
  });
  return (
    <div className="flex flex-col overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="flex-grow px-6 py-4 ">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p className="text-base text-gray-700">{description}</p>
      </div>
      {/* <div className="px-6 py-1">{TAGS}</div> */}
      <div className="px-6 py-1">{TECH_STACK}</div>
      <div className="px-6 py-4">
        {/* <a
          href={demoLink}
          className="inline-block px-4 py-2 mb-2 mr-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
        >
          Live Demo
        </a>
        {} */}
        <a
          href={githubLink}
          className="inline-block px-4 py-2 mb-2 mr-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
