import CardLables from "./CardLables";
type Props = {
  techStack: Array<String>
  isCompleted: boolean
  githubLink: String
  title: String
  description: String
}
const ProjectCard = (props: Props) => {
  const TECH_STACK = props.techStack.map((item, index) => {
    return (
      <span
        key={index}
        className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded"
      >
        {item}
      </span>
    );
  });
  return (
    <div className="relative flex flex-col overflow-hidden bg-white rounded shadow-lg">
      {props.isCompleted ? CardLables.Completed : CardLables.InProgress}
      <div className="flex-grow px-6 py-4 ">
        <div className="mb-2 text-xl font-bold">{props.title}</div>
        <p className="text-base text-gray-700">{props.description}</p>
      </div>
      <div className="px-6 py-1">{TECH_STACK}</div>
      <div className="px-6 py-4">
        <a
          href={props.githubLink.toString()}
          className="inline-block px-4 py-2 mb-2 mr-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
