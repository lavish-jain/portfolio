/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Lavish's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Lavish Jain Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Lavish Jain",
  logo_name: "Avishlay",
  nickname: "avishlay",
  subTitle:
    "I caught fire coding! Always up for a new challenge, I love building the backbone of systems that make an impact on people's lives.",
  resumeLink:
    "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/lavish-jain",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/lavish-jain-5643a4105/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:lavishrjain1997@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/avishlay",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/avishlay/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //   ],
    // },
    {
      title: "Backend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building efficient, fault-tolerant, highly available and highly scalable systems. using ExpressJS, Flask and Django",
        "⚡ Designing optimal SQL and NoSQL databse systems with caching.",
        "⚡ Also contrbuted to frontend whenever required.",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "vscode-icons:file-type-python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "logos:django",
          style: {
            color: "#092E20",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "logos:flask",
          style: {
            color: "#000000",
          },
        },

        {
          skillName: "Go",
          fontAwesomeClassname: "vscode-icons:file-type-go-gopher",
          style: {
            color: "#00ADD8",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "logos:redis",
          style: {
            color: "#DC382D",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "logos:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "logos:c-plusplus",
          style: {
            color: "#00599C",
          },
        },
      ],
    },
    {
      title: "Cloud and Version Control",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on Google Cloud and Amazon Web Services",
        "⚡ Writing Dockerfiles to build images for microservices and deploying them using AWS ECS and Gitlab CI/CD",
        "⚡ Using Github, Bitbucket and Gitlab for version controlling",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "fa-brands:github",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "Gitlab",
          fontAwesomeClassname: "logos:gitlab",
          style: {
            color: "#FCA121",
          },
        },
        {
          skillName: "Bitbucket",
          fontAwesomeClassname: "logos:bitbucket",
          style: {
            color: "#0052CC",
          },
        },
      ],
    },
    {
      title: "Miscellaneous Tech",
      fileName: "DesignImg",
      skills: [
        "⚡ Always ready to learn and work on a new tech if required",
        "⚡ Expererience in using both Kafka and Pub/Sub ",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Elasticsearch",
          fontAwesomeClassname: "logos:elasticsearch",
          style: {
            color: "#005571",
          },
        },
        {
          skillName: "Google Pub/Sub",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Apache Kafka",
          fontAwesomeClassname: "logos:kafka",
          style: {
            color: "#231F20",
          },
        },
        {
          skillName: "Graylog",
          fontAwesomeClassname: "logos:graylog",
          style: {
            color: "#FF3633",
          },
        },
        {
          skillName: "Ansible",
          fontAwesomeClassname: "vscode-icons:file-type-ansible",
          style: {
            color: "#EE0000",
          },
        },
        {
          skillName: "Rasa",
          fontAwesomeClassname: "carbon:machine-learning-model",
          style: {
            color: "#EE0000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Technology (B.H.U), Varanasi",
      subtitle: "B.Tech. in Chemical Engineering",
      logo_path: "iitbhu_logo.png",
      alt_name: "IIT(BHU), Varanasi",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ Apart from departmental courses, I have done relevant courses in Cryptography and Network Security, C, Ubiquitous Computing and High Performance Computing",
        "⚡ Did a project in Natural Language Processing by building a Second Language Acquisition Model for Duolingo users",
      ],
      website_link: "https://iitbhu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Algorithms and Data Structures",
      subtitle: "- Colt Steele",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-4bcc9761-82f6-4f6a-bd63-5659c094aba9/",
      alt_name: "Udemy",
      color_code: "#8C151599",
    },
    {
      title: "The Complete SQL Bootcamp 2021",
      subtitle: "- Jose Portilla",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-794462c2-85fd-4632-95a6-6c956da962c0/",
      alt_name: "SQL Bootcamp",
      color_code: "#00000099",
    },
    {
      title: "Javascript: Understanding the Weird",
      subtitle: "- Anthony Alicea",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-18a5ada3-597d-4aa7-ab93-de29d3a6896e/",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internships",
  description:
    "I have worked in both Startup Environments and Corporate Setups as a backend heavy full stack developer. I have worked as a Jack of all trades and have been known to pick up and learn new technologies quickly and on the job.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Development Engineer - 2",
          company: "Medibuddy-DocsApp",
          company_url: "https://www.medibuddy.in/",
          logo_path: "logo_medibuddy.png",
          duration: "January 2021 - PRESENT",
          location: "Bengalure, Karnataka",
          description:
            "Working as a Backend heavy full stack developer, I contribute to the Gold Pod in building features which help increase Gold Subscriptions and utilizations across DocsApp and Medibuddy platforms. I have also designed and implemented a system to solve the complex problem of incorrect user attribution and have also integrated both the platforms to BranchIO for tracking user analytics and impact of marketing campaigns.",
          color: "#0879bf",
        },
        {
          title: "Associate Tech. Architect: Software Development",
          company: "Microland Ltd.",
          company_url: "https://www.microland.com/",
          logo_path: "logo_microland.png",
          duration: "July 2019 - January 2021",
          location: "Bengaluru, Karnataka",
          description:
            "Worked with the automation team and helped build an AIOps tool, Intelligeni, for automation in IT Operations. Was responsible for bidirectional integration of intelligeni with ServiceNow, market's leading ITSM tool. Also built an agent-less solution for generating Application and Infrastructure level topologies of systems deployed on Azure and AWS clouds.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Technology Intern",
          company: "Microland Ltd.",
          company_url: "https://www.microland.com/",
          logo_path: "logo_microland.png",
          duration: "May 2018 - July 2018",
          location: "Bengaluru, Maharashtra",
          description:
            "Built a Threat Analytics Dashboard and Executive Security Posture Dashboard for the Infosec team to monitor the compliance of all the systems in the organisation. Built an RBAC model in the dashboard to be used by users of different Departments of the company.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Projects are the places where I try to learn a new technology or work on something that I have never worked on before.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_photo.jpg",
    description:
      "I am available on most social media platforms. You can contact me and I would reply within 24hrs. You can contact me for freelance work, collaboration or job opportunities",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Neelkanth Heights, Sector 8, Ghansoli, Navi Mumbai, Maharashtra - 400701.",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/Yda75we1mDaYMZkMA",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9305297981",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
