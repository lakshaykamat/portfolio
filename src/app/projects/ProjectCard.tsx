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
        className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-400 bg-gray-700 rounded"
      >
        {item}
      </span>
    );
  });
  return (
    <div className="relative flex-col overflow-hidden rounded shadow-lg bg-slate-800">
      {props.isCompleted ? CardLables.Completed : CardLables.InProgress}
      <div className="flex-grow px-6 py-4 ">
        <h3 className="mb-2 text-xl font-bold text-gray-300">{props.title}</h3>
        <p className="text-base text-gray-400">{props.description}</p>
      </div>
      <div className="px-6 py-1">{TECH_STACK}</div>
      <div className="px-6 py-4">
        <a
          href={props.githubLink.toString()}
          className="btn-indigo"
        >
          Source Code
        </a>
        {/* <a
          href={props.githubLink.toString()}
          className="inline-block px-4 py-2 mb-2 mr-2 font-bold text-black bg-white rounded hover:bg-blue-700"
        >
          Source Code
        </a> */}
      </div>
    </div>
  );
};
export default ProjectCard;
