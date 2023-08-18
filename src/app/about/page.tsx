import React from "react";
import AboutSection from "./AboutSection";
import FollowSection from "./FollowSection";
import { about } from "../../data";
import { socialMediaLinks } from "../../data";
const AboutPage = () => {
  return (
    <>
      <AboutSection
        para={about.para}
        degree={about.degree}
        image={about.image}
        achievements={about.achievements}
      />
      <FollowSection socialMediaLinks={socialMediaLinks} />
    </>
  );
};

export default AboutPage;
