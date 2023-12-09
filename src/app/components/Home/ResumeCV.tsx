import { FaFilePdf } from "react-icons/fa";

function ResumeCV({ para }: { para: string }) {
  const RESUME_LINK = "https://docs.google.com/document/d/1i-cikZsozgMl3G8L8ZyGXLBZm20BG0wILBDahFoHTQU/edit?usp=sharing"
  const RESUME_PUB = "https://docs.google.com/document/d/e/2PACX-1vToHet2cZHMH3tnArW5RtBwGLR1mmPX3Qze8dLs3j7IfUb16kaKi6EmnCAmZsBc1u0dX-lx4928mprB/pub"
  return (
    <section className="py-16 bg-gray-100 ">
      <div className="container max-w-2xl px-4 m-auto mx-auto md:m-auto">
        <h2 className="mb-4 text-3xl font-semibold">Resume &amp; CV</h2>
        <div className="md:m-0">
          <p className="mb-6 text-gray-600">{para}</p>
        </div>
        <div className="flex flex-col items-center justify-center m-2 space-y-4 lg:flex-row lg:space-x-8 lg:space-y-0">
          <a href={RESUME_PUB} target="_blank" className="flex items-center px-6 py-3 text-gray-700 transition-colors duration-300 ease-in-out bg-white rounded shadow-lg hover:bg-gray-900 hover:text-white hover:font-medium">
            <span className="mr-2"><FaFilePdf /></span>
            <span>View Resume</span>
          </a>
          {/* <a href="/cv.pdf" download className="flex items-center px-6 py-3 text-gray-700 transition-colors duration-300 ease-in-out bg-white rounded-lg shadow-lg hover:bg-gray-900 hover:text-white hover:font-medium">
            <span className="mr-2"><FaFilePdf /></span>
            <span>Download CV</span>
          </a> */}


        </div>
        {/* Google Docx embed code */}
        {/* <iframe className="w-full h-96" src="https://docs.google.com/document/d/e/2PACX-1vToHet2cZHMH3tnArW5RtBwGLR1mmPX3Qze8dLs3j7IfUb16kaKi6EmnCAmZsBc1u0dX-lx4928mprB/pub?embedded=true"></iframe> */}
      </div>
    </section>
  );
}
export default ResumeCV