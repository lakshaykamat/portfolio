import Image from 'next/image';
import { FaAward } from 'react-icons/fa';


const AwardCard = ({ award }) => {
  return (
    <div className="max-w-sm mx-5 my-4 overflow-hidden bg-black rounded-lg shadow-lg md:mx-auto">
      <div className="px-4 py-2">
        <h2 className="text-2xl font-bold text-gray-800 uppercase">{award.title}</h2>
        <p className="mt-1 text-sm text-gray-600">{award.issuer}</p>
        <p className="mt-1 text-sm text-gray-600">{award.date}</p>
      </div>
      <Image height={award.image.height} width={award.image.width} className="object-cover w-full h-64 p-2 mt-2 rounded" src={award.image.src} alt="award" />
      <div className="flex justify-end mx-4 my-2">
        <FaAward className="text-yellow-500" size={25} />
      </div>
    </div>
  );
};

function Certificates({awards}) {
  return (
    <div className="container m-auto my-10">
    <h1 className="mb-10 text-4xl font-bold text-center text-gray-800">Awards and Certificates</h1>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
      {awards.map((award) => (
         <AwardCard key={award.id} award={award} />
      ))}
    </div>
  </div>
  );
}
export default Certificates