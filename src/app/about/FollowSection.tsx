import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsSkype, BsTelephoneFill, BsWhatsapp } from 'react-icons/bs';


const FollowUs = ({socialMediaLinks}) => {

  return (
    <div className="py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">Follow Us</h2>
          <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl">Stay Connected</p>
          <p className="max-w-xl mx-auto mt-5 text-gray-500 text-md">Follow us on social media to stay up-to-date with our latest news and announcements.</p>
        </div>
        <div className="mt-12">
          <div className="flex items-center justify-center gap-20">
            <a href={socialMediaLinks.twitter}  className="text-gray-400 hover:text-gray-800">
              <span className="sr-only">Twitter</span>
              <FaTwitter className="w-8 h-8 mx-auto" />
            </a>

            <a href={socialMediaLinks.github} className="text-gray-400 hover:text-gray-800">
              <span className="sr-only">Github</span>
              <FaGithub className="w-8 h-8 mx-auto" />
            </a>

            <a href={socialMediaLinks.linkedIn} className="text-gray-400 hover:text-gray-800">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="w-8 h-8 mx-auto" />
            </a>
            <a href={socialMediaLinks.whatsApp} className="text-gray-400 hover:text-gray-800">
              <span className="sr-only">WhatsApp</span>
              <BsWhatsapp className="w-8 h-8 mx-auto" />
            </a>

            {/* <a href={socialMediaLinks.instagram} className="text-gray-400 hover:text-gray-800">
              <span className="sr-only">Instagram</span>
              <FaInstagram className="w-8 h-8 mx-auto" />
            </a> */}

            {/* <a href={socialMediaLinks.facebook} className="text-gray-400 hover:text-gray-800">
              <span className="sr-only">Facebook</span>
              <FaFacebook className="w-8 h-8 mx-auto" />
            </a> */}

            {/* <a href={socialMediaLinks.skype} className="text-gray-400 hover:text-gray-800">
              <span className="sr-only">Skype</span>
              <BsSkype className="w-8 h-8 mx-auto" />
            </a> */}

            <a href={`mailto:${socialMediaLinks.mail}`} className="text-gray-400 hover:text-gray-800">
              <span className="sr-only">Mail</span>
              <MdEmail className="w-8 h-8 mx-auto" />
            </a>

            {/* <a href={`tel:${socialMediaLinks.tel}`} className="text-gray-400 hover:text-gray-800">
              <span className="sr-only">Phone</span>
              <BsTelephoneFill className="w-8 h-8 mx-auto" />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;