import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsSkype, BsTelephoneFill } from 'react-icons/bs';


const FollowUs = ({socialMediaLinks}) => {

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Follow Us</h2>
          <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl">Stay Connected</p>
          <p className="max-w-xl mt-5 mx-auto text-md text-gray-500">Follow us on social media to stay up-to-date with our latest news and announcements.</p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <a href={socialMediaLinks.twitter}  className="text-gray-400 hover:text-gray-800">
              <span className="sr-only">Twitter</span>
              <FaTwitter className="h-8 w-8 mx-auto" />
            </a>

            <a href={socialMediaLinks.github} className="text-gray-400 hover:text-gray-800">
              <span className="sr-only">Github</span>
              <FaGithub className="h-8 w-8 mx-auto" />
            </a>

            <a href={socialMediaLinks.linkedIn} className="text-gray-400 hover:text-gray-800">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="h-8 w-8 mx-auto" />
            </a>

            <a href={socialMediaLinks.instagram} className="text-gray-400 hover:text-gray-800">
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-8 w-8 mx-auto" />
            </a>

            <a href={socialMediaLinks.facebook} className="text-gray-400 hover:text-gray-800">
              <span className="sr-only">Facebook</span>
              <FaFacebook className="h-8 w-8 mx-auto" />
            </a>

            <a href={socialMediaLinks.skype} className="text-gray-400 hover:text-gray-800">
              <span className="sr-only">Skype</span>
              <BsSkype className="h-8 w-8 mx-auto" />
            </a>

            <a href={`mailto:${socialMediaLinks.mail}`} className="text-gray-400 hover:text-gray-800">
              <span className="sr-only">Mail</span>
              <MdEmail className="h-8 w-8 mx-auto" />
            </a>

            <a href={`tel:${socialMediaLinks.tel}`} className="text-gray-400 hover:text-gray-800">
              <span className="sr-only">Phone</span>
              <BsTelephoneFill className="h-8 w-8 mx-auto" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;