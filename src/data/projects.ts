import { ProjectCardType } from "../types";

const languages = {
    frontEnd: {
      HTML: "HTML",
      CSS: "CSS",
      JS: "JavaScript",
      Tailwind: "Tailwind CSS",
      Reactjs: "ReactJS",
      Nextjs:"NextJS"
    },
    backEnd: {
      Nodejs: "Node.js",
      MongoDB: "MongoDB",
      REST_API:"REST API",
      PassportJS:"Passport JS"
    },
  };

  export const projects:Array<ProjectCardType> = [

    {
      id:1,
      isCompleted:true,
      title: "Password Generator",
      description:
        "   Secure password gen: Encryption & multi-factor auth for robust online protection.",
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
      id:2,
      isCompleted:true,
      title: "Youtube to MP3",
      description:
        "Create a YouTube to MP3 converter with URL input for audio downloads, as software or a web app.",
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
      id:3,
      isCompleted:true,
      title: "Currency Convertor",
      description:
        "Develop a currency converter project for quick and convenient currency conversions using current exchange rates.",
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
      id:4,
      isCompleted:false,
      title: "Snap Note",
      description:
        "Snap Note: Organize and create both public and private notes, neatly sorted into folders for easy management.",
      tags: ["lifestyle"],
      techStack: [
        languages.backEnd.MongoDB,
        languages.backEnd.Nodejs,
        languages.frontEnd.Nextjs,
        languages.backEnd.PassportJS,
        languages.backEnd.REST_API
      ],
      githubLink: "https://github.com/lakshaykamat/snap-note",
      demoLink: null,
    },
    {
      id:5,
      isCompleted:false,
      title: "Brogrammer Blog",
      description:
        "Snap Note: Organize and create both public and private notes, neatly sorted into folders for easy management.",
      tags: ["blog"],
      techStack: [
        languages.backEnd.MongoDB,
        languages.backEnd.Nodejs,
        languages.frontEnd.Nextjs,
        languages.backEnd.REST_API
      ],
      githubLink: "https://github.com/lakshaykamat/brogrammer-blog-client",
      demoLink: null,
    },
  ];


const allProjects = [
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
]  