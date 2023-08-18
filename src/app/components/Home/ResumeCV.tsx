import { FaFilePdf } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

function ResumeCV({para}:{para:string}) {
  return (
    <section className="py-16 bg-gray-100 ">
      <div className="container max-w-2xl px-4 m-auto mx-auto md:m-auto">
        <h2 className="mb-4 text-3xl font-semibold">Resume &amp; CV</h2>
        <div className="md:m-0">
          <p className="mb-6">{para}</p>
        </div>
        <div className="flex flex-col items-center justify-center m-2 space-y-4 lg:flex-row lg:space-x-8 lg:space-y-0">
          <a href={'cv.pdf'} download className="flex items-center px-6 py-3 text-gray-700 transition-colors duration-300 ease-in-out bg-white rounded-lg shadow-lg hover:bg-gray-900 hover:text-white hover:font-medium">
            <span className="mr-2"><FaFilePdf /></span>
            <span>Download Resume</span>
          </a>
          <a href="/cv.pdf" download className="flex items-center px-6 py-3 text-gray-700 transition-colors duration-300 ease-in-out bg-white rounded-lg shadow-lg hover:bg-gray-900 hover:text-white hover:font-medium">
            <span className="mr-2"><FaFilePdf /></span>
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
}
export default ResumeCV