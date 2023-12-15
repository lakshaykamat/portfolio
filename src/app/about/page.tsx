import AboutSection from "./AboutSection";
import FollowSection from "./FollowSection";
import { about } from "../../data";
import { socialMediaLinks } from "../../data";
const AboutPage = () => {
  return (
    <div className="bg-slate-900">
      <AboutSection
        para={about.para}
        degree={about.degree}
        image={about.image}
        achievements={about.achievements}
      />
      <div className="py-16">
        <FollowSection socialMediaLinks={socialMediaLinks} />
      </div>
    </div>
  );
};

export default AboutPage;
