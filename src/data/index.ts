import codingForMarketers from "./images/awardsAndCertificates/codingformarketers.png";
import html from "./images/awardsAndCertificates/html.png";
import css from "./images/awardsAndCertificates/css.png";
import js from "./images/awardsAndCertificates/javascript.png";
import frontEnd from "./images/awardsAndCertificates/front.png";
import cpp from "./images/awardsAndCertificates/cpp.png";

export const about = {
  image:
    "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
  degree: "Bachelor's Degree in Computer Application from YMCA University",
  para: "I am a skilled web developer with over 5 years of experience in building high-quality websites and applications. I have a background in computer science and a passion for learning and implementing the latest web technologies.",
  achievements: [
    "Won 1st prize in the Web Development competition",
    "Published an article in a popular tech magazine",
    "3 Star Coder at Codechef",
  ],
};
export const awards = [
  {
    id: 1,
    title: "Coding For Marketers",
    issuer: "Sololearn",
    date: "27 December 2021",
    image: codingForMarketers,
  },
  {
    id: 2,
    title: "HTML",
    issuer: "Sololearn",
    date: "26 December 2021",
    image: html,
  },
  {
    id: 3,
    title: "CSS",
    issuer: "Sololearn",
    date: "11 January 2022",
    image: css,
  },
  {
    id: 4,
    title: "javaScript",
    issuer: "Sololearn",
    date: "11 January 2023",
    image: js,
  },
  {
    id: 5,
    title: "Front-end Developement",
    issuer: "Great Learning",
    date: "January 2022",
    image: frontEnd,
  },
  {
    id: 6,
    title: "C++ for Beginners",
    issuer: "Sololearn",
    date: "June 2021",
    image: cpp,
  },
];

const languages = {
  frontEnd: {
    HTML: "HTML",
    CSS: "CSS",
    JS: "JavaScript",
    Tailwind: "TailwindCSS",
    Reactjs: "Reactjs.js",
  },
  backEnd: {
    Nodejs: "Node.js",
    MongoDB: "MongoDB",
  },
};
export const projects = [
  {
    title: "RGB Game",
    description:
      "The color game presents the user with an RGB value and several color options. The user must select the color that matches the RGB value. The game can have multiple levels of difficulty and scoring, and may include a timer or other challenges to keep the user engaged.",
    tags: ["game", "colors"],
    techStack: [
      languages.frontEnd.HTML,
      languages.frontEnd.CSS,
      languages.frontEnd.JS,
      languages.frontEnd.Reactjs,
      languages.frontEnd.Tailwind,
    ],
    githubLink: "https://github.com/lakshaykamat/colorGame",
    demoLink: "https://lakshaykamat.github.io/colorGame/",
  },
  {
    title: "Password Generator",
    description:
      "A password generator project creates strong and customizable passwords for users, with features such as encryption and multi-factor authentication to enhance security. Its purpose is to provide secure passwords for online accounts and data protection.",
    tags: ["password", "conversion", "tools"],
    techStack: [
      languages.frontEnd.HTML,
      languages.frontEnd.CSS,
      languages.frontEnd.JS,
    ],
    githubLink:
      "https://github.com/lakshaykamat/linktree/tree/master/js-project/password-generator",
    demoLink:
      "https://lakshaykamat.github.io/linktree/js-project/password-generator/docs/index.html",
  },
  {
    title: "Current Time",
    description:
      "A current time project displays the current time and may include features such as stopwatch, countdown timer, or time zone converter. Its purpose is to provide users with a convenient and accurate reference for the current time, based on their location or pre-selected timezone.",
    tags: ["time", "productivity"],
    techStack: [
      languages.frontEnd.HTML,
      languages.frontEnd.CSS,
      languages.frontEnd.JS,
    ],
    githubLink:
      "https://github.com/lakshaykamat/linktree/tree/master/js-project/current-time",
    demoLink:
      "https://lakshaykamat.github.io/linktree/js-project/current-time/index.html",
  },
  {
    title: "BMI Calculator",
    description:
      "A BMI calculator project calculates a person's BMI based on their height and weight, and may include features for tracking and managing weight and health. Its purpose is to help individuals monitor and maintain a healthy weight.",
    tags: ["health", "fitness", "tools"],
    techStack: [
      languages.frontEnd.HTML,
      languages.frontEnd.CSS,
      languages.frontEnd.JS,
    ],
    githubLink:
      "https://github.com/lakshaykamat/linktree/tree/master/js-project/bmi-calculator",
    demoLink:
      "https://lakshaykamat.github.io/linktree/js-project/bmi-calculator/index.html",
  },
  {
    title: "Love Calculator",
    description:
      "A BMI calculator project calculates a person's BMI based on their height and weight, and may include features for tracking and managing weight and health. Its purpose is to help individuals monitor and maintain a healthy weight.",
    tags: ["love", "relationship", "tools"],
    techStack: [
      languages.frontEnd.HTML,
      languages.frontEnd.CSS,
      languages.frontEnd.JS,
    ],
    githubLink:
      "https://github.com/lakshaykamat/linktree/tree/master/js-project/love-calc",
    demoLink:
      "https://lakshaykamat.github.io/linktree/js-project/love-calc/docs/index.html",
  },
  {
    title: "No Fap",
    description:
      "The no fap project is an online platform that supports individuals in abstaining from pornography, masturbation, and other addictive sexual behaviors through educational resources, accountability tools, and a supportive community. Its purpose is to help users overcome addiction and improve their overall well-being.",
    tags: ["health", "self-improvement", "tools"],
    techStack: [
      languages.frontEnd.HTML,
      languages.frontEnd.CSS,
      languages.frontEnd.JS,
    ],
    githubLink:
      "https://github.com/lakshaykamat/linktree/tree/master/js-project/nofap",
    demoLink:
      "https://lakshaykamat.github.io/linktree/js-project/nofap/index.html",
  },
  {
    title: "Youtube to MP3",
    description:
      "YouTube to MP3 project converts the audio track of YouTube videos into downloadable MP3 files. Users enter the YouTube video URL and select the desired audio quality. The project can be developed as a standalone software tool or a web-based application for user convenience.",
    tags: ["mp3", "video", "tools"],
    techStack: [
      languages.frontEnd.HTML,
      languages.frontEnd.CSS,
      languages.frontEnd.JS,
    ],
    githubLink:
      "https://github.com/lakshaykamat/linktree/tree/master/js-project/youtube-mp3",
    demoLink:
      "https://lakshaykamat.github.io/linktree/js-project/youtube-mp3/docs/index.html",
  },
  {
    title: "Currency Convertor",
    description:
      "A currency converter project converts one currency to another based on current exchange rates. Its purpose is to provide users with an easy and convenient way to convert currencies for international transactions and travel.",
    tags: ["money", "conversion", "tools"],
    techStack: [
      languages.frontEnd.HTML,
      languages.frontEnd.CSS,
      languages.frontEnd.JS,
    ],
    githubLink:
      "https://github.com/lakshaykamat/linktree/tree/master/js-project/currencyconvertor",
    demoLink:
      "https://lakshaykamat.github.io/linktree/js-project/currencyconvertor/docs/index.html",
  },
  {
    title: "Storage Convertor",
    description:
      "A digital storage converter project converts between different units of digital storage, such as bytes, kilobytes, megabytes, and gigabytes. Its purpose is to provide users with an easy and convenient way to convert digital storage units for data management and storage.",
    tags: ["storage", "conversion", "tools"],
    techStack: [
      languages.frontEnd.HTML,
      languages.frontEnd.CSS,
      languages.frontEnd.JS,
    ],
    githubLink:
      "https://github.com/lakshaykamat/linktree/tree/master/js-project/digital-storage-convertor",
    demoLink:
      "https://lakshaykamat.github.io/linktree/js-project/digital-storage-convertor/index.html",
  },
  {
    title: "Quote Generator",
    description:
      "A quote generator project randomly generates quotes or phrases on a particular topic or theme, with options for customization and sharing. Its purpose is to provide users with inspiration, motivation, or entertainment through a collection of quotes.",
    tags: ["quote", "self-improvement"],
    techStack: [
      languages.frontEnd.HTML,
      languages.frontEnd.CSS,
      languages.frontEnd.JS,
    ],
    githubLink:
      "https://github.com/lakshaykamat/linktree/tree/master/js-project/quote-generator",
    demoLink:
      "https://lakshaykamat.github.io/linktree/js-project/quote-generator/index.html",
  },
  {
    title: "Weather App",
    description:
      "A weather app project provides current and forecasted weather conditions for a particular location or region, with options for customization and receiving weather alerts. Its purpose is to provide users with accurate and up-to-date weather information for planning outdoor activities and travel.",
    tags: ["tools", "productivity"],
    techStack: [
      languages.frontEnd.HTML,
      languages.frontEnd.CSS,
      languages.frontEnd.JS,
    ],
    githubLink:
      "https://github.com/lakshaykamat/linktree/tree/master/js-project/weatherapp",
    demoLink:
      "https://lakshaykamat.github.io/linktree/js-project/weatherapp/index.html",
  },
  {
    title: "Contact Manager",
    description:
      "The Contact Manager project is a software application that helps individuals and organizations manage their contact information. It allows users to add, edit, search, group, and tag contacts. The system has a user-friendly interface, data security, and backup and restore functionality.",
    tags: ["tools", "productivity"],
    techStack: [
      languages.frontEnd.HTML,
      languages.frontEnd.CSS,
      languages.frontEnd.JS,
      languages.frontEnd.Reactjs,
    ],
    githubLink: "https://github.com/lakshaykamat/contact-manager",
    demoLink: "https://lakshaycontacts.netlify.com",
  },
  {
    title: "Wishlist",
    description:
      "The Wishlist project is a web application that allows users to create and manage wishlists. It includes features such as adding items. Users can also browse and follow other users' wishlists. The application has data security measures, backup and restore functionality, and a recommendation engine.",
    tags: ["lifestyle"],
    techStack: [
      languages.frontEnd.HTML,
      languages.frontEnd.CSS,
      languages.frontEnd.JS,
      languages.frontEnd.Reactjs,
    ],
    githubLink: "https://github.com/lakshaykamat/wishlist",
    demoLink: "https://7ongo4-3000.preview.csb.app/",
  },
  {
    title: "Todo List",
    description:
      "The Wishlist project is a web application that allows users to create and manage wishlists. It includes features such as adding items. Users can also browse and follow other users' wishlists. The application has data security measures, backup and restore functionality, and a recommendation engine.",
    tags: ["lifestyle"],
    techStack: [
      languages.frontEnd.HTML,
      languages.frontEnd.CSS,
      languages.frontEnd.JS,
      languages.frontEnd.Reactjs,
    ],
    githubLink: "https://github.com/lakshaykamat/todoappfrontend",
    demoLink: "https://lakshaytodolist.netlify.app/",
  },
  {
    title: "My Notes",
    description:
      "The Wishlist project is a web application that allows users to create and manage wishlists. It includes features such as adding items. Users can also browse and follow other users' wishlists. The application has data security measures, backup and restore functionality, and a recommendation engine.",
    tags: ["lifestyle"],
    techStack: [
      languages.frontEnd.Reactjs,
      languages.backEnd.MongoDB,
      languages.backEnd.Nodejs,
    ],
    githubLink: "https://github.com/lakshaykamat/mynotes-client",
    demoLink: "https://lakshaynotes.netlify.app/",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image:
      "https://i.pinimg.com/736x/6b/f7/d7/6bf7d7592f488f0749534b8db8d5ffd7.jpg",
    auother: "Web Developer",
    quote:
      "I was thoroughly impressed by the work of the web developer. Their attention to detail and expertise in coding made my website a seamless and visually appealing experience. They were easy to communicate with and always delivered on time.",
  },
  {
    id: 2,
    name: "Jane Smith",
    image:
      "https://i.pinimg.com/736x/ba/de/da/badeda3a240f6b34e1df222c00551608.jpg",
    auother: "Graphic Designer",
    quote:
      "The graphic designer exceeded my expectations with their innovative and creative designs. They understood my vision and brought it to life in a way that surpassed what I could have imagined. I highly recommend their work.",
  },
  {
    id: 3,
    name: "Tom Jones",
    image:
      "https://i.pinimg.com/736x/c6/eb/67/c6eb675823ba2e07f4dba9cee7cc2814.jpg",
    auother: "UX Designer",
    quote:
      "The UX designer was a pleasure to work with. They were able to understand my users' needs and create an intuitive and user-friendly interface. Their work made my app much more accessible and enjoyable to use. I highly recommend their services for any UX design needs.",
  },
];

export const socialMediaLinks = {
    twitter:"https://twitter.com/Lakshaykamat",
    github:"https://github.com/lakshaykamat/",
    facebook:"https://www.facebook.com/Thelakshaykamat",
    instagram:"https://www.instagram.com/lakshaykamat.exe/",
    skype:"https://join.skype.com/invite/uFs3pAV4xUMG",
    linkedIn:"https://www.linkedin.com/in/lakshaykamat/",
    mail:"lakshaykamat2048@gmail.com",
    tel:"+919958125355"
}