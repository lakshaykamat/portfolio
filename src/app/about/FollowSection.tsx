import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';


const FollowUs = ({socialMediaLinks}) => {

  return (
    <div>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-blue-500 uppercase">Follow Me</h2>
          <p className="mt-1 text-3xl font-extrabold text-gray-200 sm:text-4xl sm:tracking-tight lg:text-5xl">Stay Connected</p>
          <p className="max-w-xl mx-auto mt-5 text-gray-400 text-md">Follow us on social media to stay up-to-date with our latest news and announcements.</p>
        </div>
        <div className="mt-12">
          <div className="flex flex-wrap justify-center gap-20">
            <a href={socialMediaLinks.twitter}  className="text-gray-200 hover:text-gray-400">
              <span className="sr-only">Twitter</span>
              <FaTwitter className="w-8 h-8 mx-auto" />
            </a>

            <a href={socialMediaLinks.github} className="text-gray-200 hover:text-gray-400">
              <span className="sr-only">Github</span>
              <FaGithub className="w-8 h-8 mx-auto" />
            </a>

            <a href={socialMediaLinks.linkedIn} className="text-gray-200 hover:text-gray-400">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="w-8 h-8 mx-auto" />
            </a>
            <a href={socialMediaLinks.whatsApp} className="text-gray-200 hover:text-gray-400">
              <span className="sr-only">WhatsApp</span>
              <BsWhatsapp className="w-8 h-8 mx-auto" />
            </a>

            <a href={`mailto:${socialMediaLinks.mail}`} className="text-gray-200 hover:text-gray-400">
              <span className="sr-only">Mail</span>
              <MdEmail className="w-8 h-8 mx-auto" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;