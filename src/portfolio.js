/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Cheng He",
  title: "I'm Cheng He.",
  subTitle: emoji(
    "I am a Full-stack developer with 6 years of full experience and a strong technical background who possesses self-discipline. I am a senior web developer who can play a key role in a sites development to ensure maximum accessibility, customer experience and usability. I am a good team player who thrives on creating engaging creative solutions and has the ability to produce detailed technical specifications from client requirements and do my best to satisfy all clients. Currently I am looking for an opportunity to join a dynamic, ambitious, growing company and forge a career as a first class website developer. Goal-oriented Web and Mobile Developer with strong commitment to collaboration and solutions-oriented problem-solving. Use various web design software to develop customer-focused websites and designs. Committed to high standards of web design, user experience, usability and speed for multiple types of end-users. Successful at maintaining customer satisfaction through effective customer support."
  ),
  resumeLink:
    "https://drive.google.com/file/d/14A9eOJe_4BbNjNcMM63VowMZQp_Oi2C6/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/greencodedev?tab=repositories",
  linkedin: "https://www.linkedin.com/in/cheng-he-344ba8201/",
  gmail: "greencodedev912@gmail.com",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What can I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji( "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications." ),
    emoji( "⚡ Develop back-end APIs for web and mobile applications." ),
    emoji( "⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks." ),
    emoji( "⚡ Integration of third party services such as Firebase/ AWS / Heroku." )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon https://fontawesome.com/icons?d=gallery */

  languageSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],

  softwareSkills: [
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },    
    {
      skillName: "Express.js",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "MDBootstrap",
      fontAwesomeClassname: "fab fa-mdb"
    },
    {
      skillName: "jQuery",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "CodeIgniter",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "WordPress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "GraphQL",
      fontAwesomeClassname: "far fa-hexagon"
    },
    {
      skillName: "Redux",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Apollo",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
  ],

  platformAndToolSkills: [
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Yarn",
      fontAwesomeClassname: "fas fa-tools"
    },
    {
      skillName: "Gulp",
      fontAwesomeClassname: "fab fa-gulp"
    },
    {
      skillName: "Grunt",
      fontAwesomeClassname: "fab fa-grunt"
    },
    {
      skillName: "Jest",
      fontAwesomeClassname: "fab fa-jest"
    },
    {
      skillName: "Mocha",
      fontAwesomeClassname: "fab fa-mocha"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],

  thirdPartySkills: [
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Stripe",
      fontAwesomeClassname: "fab fa-stripe"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Eastern Liaoning University",
      logo: require("./assets/images/university.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2008 - April 2013",
      desc: "",
      descBullets: [
        "Professional development completed in Web development",
        "Majored in Computer science and Programming"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Web Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Mobile App (React Native)",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Freelancer",
      company: "Upwork",
      // companylogo: require("./assets/images/facebookLogo.png"),
      date: "JAN 2020 – NOV 2020",
      desc:
        "",
      descBullets: [
        "I worked as a freelancer at Upwork.com.",
        "Worked on front-end projects using React.js, React Hooks, Redux, Angular, Bootstrap, jQuery, HTML5, CSS3, chart.js, highcharts.js and etc.",
        "Worked on back-end projects using Node.js, Express, GraphQL, MySQL, Mongodb, postgreSQL, laravel php framework, Codeigniter framework.",
        "Worked on mobile hybrid apps using React Native, Redux/Mobx, React Hooks, Java, Swift."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Dalian IT Park",
      // companylogo: require("./assets/images/quoraLogo.png"),
      date: "JAN 2016 – NOV 2019",
      desc: "",
      descBullets: [
        "Optimized and repaired corporate website based on Javascript, PHP, HTML, CSS technology.",
        "Developed landing pages, dashboards and web and mobile applications using React.js, React Native, Angular, Vue, Laravel, Node.js, Express.",
        "Used programming capabilities in PHP, SQL and JavaScript and other libraries as needed.",
        "Created powerful Content Management Systems to serve as interface for client.",
        "Reviewed code to validate structures, assess security and verify browser, device and operating system compatibility.",
        "Created site layout and user interface using HTML and CSS practices.",
        "Mobile hybrid app development using React Native, Redux, Firebase."
      ]
    },
    {
      role: "Intern Developer",
      company: "Dandong Intelligence Network Science and Technology Limited Company",
      // companylogo: require("./assets/images/airbnbLogo.png"),
      date: "DEC 2014 – NOV 2015",
      desc: ""
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/portfolio-1.png"),
      projectName: "Provisn",
      projectDesc: "This platform is Cryptocurrency site that reduces the clutter, unifies sharp design, and brings you direct data + information you need to equip yourself with the tools to understand, navigate, and analyse the crypto market with confidence.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://provisn.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/portfolio-2.png"),
      projectName: "Dinleilighet",
      projectDesc: "This site is Cryptocurrency platform that reduces the clutter, unifies sharp design, and brings you direct data + information you need to equip yourself with the tools to understand, navigate, and analyse the crypto market with confidence.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dinleilighet.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/portfolio-3.png"),
      projectName: "Sharjah Travel",
      projectDesc: "This site is the travel booking site in the United Arab Emirates.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://spend-win-app.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications that I have done!",

  achievementsCards: [
    {
      title: "Certified React",
      subtitle: "Credential ID: d806c6cb0b534d9c98b15d29f013c058",
      image: require("./assets/images/react-certification.PNG"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://app.testdome.com/cert/d806c6cb0b534d9c98b15d29f013c058"
        }
      ]
    },
    {
      title: "Certified Angular",
      subtitle: "Credential ID: 257532443e284de0b61a598db392a5b6",
      image: require("./assets/images/angular-certification.PNG"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://app.testdome.com/cert/257532443e284de0b61a598db392a5b6"
        }
      ]
    },
    {
      title: "Certified HTML/CSS, JavaScript, PHP, and SQL",
      subtitle: "Credential ID: e05320bc5c204c01b63d8842c778745e",
      image: require("./assets/images/web-certification.PNG"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://app.testdome.com/cert/e05320bc5c204c01b63d8842c778745e"
        }
      ]
    },
    {
      title: "Certified JAVASCRIPT WITH JQUERY",
      subtitle: "Credential ID: d6fb040f68a14d7bb7a06fd438997038",
      image: require("./assets/images/js-jquery-certification.PNG"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://app.testdome.com/cert/d6fb040f68a14d7bb7a06fd438997038"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+86-15604252596",
  emailAddress: "greencodedev912@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
