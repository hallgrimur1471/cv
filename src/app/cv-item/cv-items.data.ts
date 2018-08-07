import { CvItem } from './cv-item';

export const GENERAL = {
  name: "Hallgrímur Davíð Egilsson",
  position: "Software Engineer",
  description: "This website shall give you an impression of me and encourage your interest in hiring me. " +
  "Please navigate through the site in order to find out more."
};

export const CVITEMS: CvItem[] = [
  {
    title: "Svarmi",
    subtitle: "Computer Scientist - Engineer",
    begin: "summer 2015",
    end: "summer 2017",
    description: "Working on a proof-of-concept of Myriad. A network of self-chargeable drones deployable to industrial areas for frequent deliveries of processed aerial data.",
    tags: ["Linux", "ROS", "Python", "Bash", "C++", "Ardupilot", "Git", "Jira"],
    link: "https://www.svarmi.is",
    thumbnail: "svarmi_logo.png",
  },
  {
    title: "Svarmi",
    subtitle: "Computer Scientist - DevOps",
    begin: "summer 2017",
    end: "",
    description: "Focusing on Systems Architecture and DevOps for maximum scalability of Myriad.",
    tags: ["AWS", "Docker", "Kubernetes", "OpenVPN", "Bind9", "CI/CD", "TDD", "GitLab", "Python", "Bash", "Read the Docs"],
    link: "https://www.svarmi.is",
    thumbnail: "svarmi_logo.png",
  },
];

export const CERTIFICATES: CvItem[] = [
  {
    title: "Private Pilot",
    subtitle: "Icelandic flight administration",
    begin: "",
    end: "2015-04",
    description: "",
    link: "",
    thumbnail: "intershop.svg",
    attachment: "ISH_Development_Training_2015.pdf",
  },
  {
    title: "B.Sc. Mechanical Engineering",
    subtitle: "University of Iceland",
    begin: "",
    end: "2014-05-12",
    description: "",
    thumbnail: "Git-Logo-2Color.png",
    attachment: "",
  },
  {
    title: "B.Sc. Computer Science",
    subtitle: "University of Iceland",
    begin: "",
    end: "2012-07-02",
    description: "",
    thumbnail: "itil_foundation.png",
    attachment: "ITIL-Zertifikat_2012.pdf",
  },
  {
    title: "Design and building of an electric formula race car",
    subtitle: "University of Iceland",
    begin: "",
    end: "2012-07-02",
    description: "",
    thumbnail: "itil_foundation.png",
    attachment: "ITIL-Zertifikat_2012.pdf",
  },
];

export const EDUCATION: CvItem[] = [
  {
    title: "B.Sc. Mechanical Engineering",
    subtitle: "University of Iceland",
    begin: "2011-10",
    end: "2015-04",
    description: "",
    tags: ["Differential Equations", "Physics", "Probability", "Statistics", "Numerical Analysis", "Linear Algebra", "Control Systems", "Fluid Mechanics", "Chemistry", "Vibrations","Economics Engineering",  "Microcomputers"],
    link: "http://www.tu-berlin.de",
    thumbnail: "TU-Berlin-Logo.png",
  },
  {
    title: "B.Sc. Computer Science",
    subtitle: "University of Iceland",
    begin: "2008-10",
    end: "2011-12",
    description: "",
    tags: ["Analysis of Algorithms", "Theory of Computation", "Discreete Mathematics", "Functional Programming", "Nonlinear Optimization", "Software Development", "Web Programming", "Computer Graphics", "Assembly", "Operating Systems"],
    link: "http://www.tu-berlin.de",
    thumbnail: "TU-Berlin-Logo.png",
  },
];

export const LANGUAGES = [
  // RATE YOURSELF  =>  100% = NATIVE;  80-99% = FLUENT;  60-79% = ADVANCED;  40-59% = INTERMEDIATE;  20-39% = ELEMENTARY;  0-19% = BEGINNER
  { title: "English", level: "97" },
  { title: "Icelandic (native)", level: "98" },
];

export const PROJECTS: CvItem[] = [
  {
    title: "RatS",
    subtitle: "Script for transfering personal movie ratings from one site to another",
    begin: "2017-02",
    end: "",
    description: "This Python project offers an easy way of synchronizing personal movie ratings from one site (e.g. IMDB) to another (e.g. Trakt). " +
    "The script supports 10 sites currently and is constantly expanding.",
    tags: ["Python", "Git", "Docker", "Selenium", "Beautifulsoup", "JSON", "CSV"],
    link: "https://github.com/StegSchreck/RatS",
    thumbnail: "RatS.png",
  },
  {
    title: "AngularCV",
    subtitle: "A simple self-hosted online-CV",
    begin: "2017-09",
    end: "",
    description: "This project was created for the purpose of having a basic online-CV, which anyone can host by themselves. " +
    "This very website is the result of it.",
    tags: ["Angular 4", "Material Design", "GitHub", "CSS", "TypeScript", "JetBrains WebStorm", "AWS", "jsPDF", "npm"],
    link: "https://github.com/StegSchreck/AngularCV",
    thumbnail: "../AngularCV.png",
  },
  {
    title: "Recoding Aviation Hackathon",
    subtitle: "Hackathon for improving the passenger journey for flights",
    begin: "",
    end: "2017-06",
    description: "I participated in this hackathon together with three collegues. " +
    "We develpoed an idea how the passenger can be relieved from stress and anxiety at an airport. " +
    "We called the idea 'Unwait the airport'. Our idea convinced the technical experts of the Munich Airport, which awarded us their partner prize.",
    tags: ["Angular 2", "Material Design", "Git", "NodeJS", "ACI ACRIS Seamless Tavel API", "Express.js", "MongoDB", "twilio"],
    link: "https://github.com/StegSchreck/RecodingAviation",
    thumbnail: "re-coding-avation-ba.png",
  },
  {
    title: "OFM Helper",
    subtitle: "Support for analysis of data in football management browser game 'OFM'",
    begin: "2016-05",
    end: "2017-05",
    description: "OFM is a browser game where you manage a football team. " +
    "The 'OFM Helper' helps the user to analyse the data which emerges from games, trainings, etc. " +
    "We formed a two-man team for developing this project.",
    tags: ["Python", "Django", "Git", "Selenium", "Beautifulsoup", "TDD", "Docker"],
    link: "https://www.ofmhelper.de/",
    thumbnail: "OFM_Helper.png",
  },
  {
    title: "GoOLAP.info",
    subtitle: "Fact search engine",
    begin: "2010",
    end: "2011",
    description: "GoOLAP is a fact search engine, which crawls the web and combines relevant data using natural language processing. " +
    "It is a research project at the DIMA department of TU Berlin. " +
    "I was part of the team which was responsible of the project management. " +
    "Later I did my bachelor thesis about the data persistence layer of the application.",
    tags: ["Project Managemant", "Hadoop", "MySQL", "Mantis"],
    link: "http://goolap.info/",
    thumbnail: "TU_DIMA_GoOLAP.png",
  },
  {
    title: "Global Phenological Monitoring Programm (GPM)",
    subtitle: "Web-application for the Humboldt University",
    begin: "",
    end: "2010",
    description: "The GPM is a global program for monitoring specific plants and analysing their behavior in the context of weather data. " +
    "The web-application was created during a project course at the TU Berlin, which I took part at. ",
    tags: ["Java", "JSF", "JSP", "SVN", "Scrum", "Trac", "Spring", "ant"],
    link: "http://gpm.hu-berlin.de/",
    thumbnail: "Huberlin-logo.png",
  },
];


export const VOLUNTEERING: CvItem[] = [
  {
    title: "DFB cup finals & international matches",
    subtitle: "Admission, visitor services, VIP support, stand-by man, special tasks",
    begin: "2007",
    end: "2016",
    description: "Admission, visitor services, VIP support, stand-by man, special tasks",
    link: "http://www.dfb.de",
    thumbnail: "DFB-Logo.jpg",
  },
  {
    title: "ISTAF & ISTAF Indoor",
    subtitle: "Team lead",
    begin: "2007",
    end: "2016",
    description: "Technical setup, visitor service, security, special tasks, teardown",
    link: "https://www.istaf.de",
    thumbnail: "ISTAF.png",
  },
  {
    title: "UEFA Champions League Finals 2015 Berlin",
    subtitle: "Team lead",
    begin: "",
    end: "2015",
    description: "Team lead visitor service",
    link: "https://www.uefa.com",
    thumbnail: "UEFA_Champions_League-logo.png",
  },
  {
    title: "CEV Champions league Final Four 2015 Berlin",
    subtitle: "Team lead",
    begin: "",
    end: "2015",
    description: "Team lead backstage security",
    link: "http://www.cev.lu/",
    thumbnail: "CEV_Champions_League_logo.png",
  },
  {
    title: "Ruder-Bundesliga",
    subtitle: "Time measurement",
    begin: "2009",
    end: "2015",
    description: "Technical setup and time measurements",
    link: "https://www.ruder-bundesliga.de",
    thumbnail: "Logo-Bundesliga_quer.jpg",
  },
  {
    title: "ULEB Euroleague Final Four 2009 Berlin",
    subtitle: "Team delegate",
    begin: "",
    end: "2009",
    description: "Team delegate of a basketeball team from Siena, Italy",
    link: "http://www.euroleague.net/",
    thumbnail: "ULEB_FinalFour_2009.png",
  },
  {
    title: "Deutsche Ruderjugend im Deutschen Ruderverband",
    subtitle: "Youth trainer and youth leader",
    begin: "2007",
    end: "2014",
    description: "Taking care of young rowers in training camps, recreational rowing tours, camp for visiting the Olympic Games 2012.",
    link: "https://www.ruderjugend.org",
    thumbnail: "DRJ_Logo.jpg",
  },
  {
    title: "FISA World Rowing Junior Championships 2014 Hamburg",
    subtitle: "IT network setup",
    begin: "",
    end: "2014",
    description: "",
    link: "http://www.worldrowing.com/",
    thumbnail: "FISA_JWM_2014.png",
  },
  {
    title: "Hertha BSC",
    subtitle: "Visitor services, special tasks, team lead",
    begin: "2008",
    end: "2011",
    description: "Guiding visitors of home matches in the olympic stadium in Berlin. Lastly, as team lead.",
    link: "http://www.hertha.de/",
    thumbnail: "Hertha_BSC_Logo.svg",
  },
  {
    title: "IAAF World Championships 2009 Berlin",
    subtitle: "Anti-Doping-Chaperone",
    begin: "",
    end: "2009",
    description: "",
    link: "https://www.iaaf.org/",
    thumbnail: "IAAF_2009_in_Berlin.png",
  },
  {
    title: "FIFA World Cup 2006 Germany",
    subtitle: "Visitor service",
    begin: "",
    end: "2006",
    description: "Guiding visitors of the olympic stadium in Berlin.",
    link: "https://www.fifa.com/",
    thumbnail: "fifa_world_cup_2006.gif",
  },
];

export const CONTACT = {
  city: "Berlin, Germany",
  phone: "",
  mail: "sebastian@schreck.berlin",
  skype: "", // just the account name
  linkedin: "https://www.linkedin.com/in/sebastian-schreck-050739131/",
  xing: "https://www.xing.com/profile/Sebastian_Schreck2",
  github: "https://github.com/StegSchreck",
  stackoverflow: "https://stackoverflow.com/users/story/6538600",
  twitter: "https://twitter.com/StegSchreck", // full url
  facebook: "",
  googleplus: "",
  other: [
    // { title: "another web page", link: "http://some.url" }, // example
  ],
};

export const INTERESTS = [
  {
    title:'Rowing',
    subtitle:'2000 — 2013',
    icon:'rowing'
  },
  {
    title:'Photography',
    subtitle:'Pentax K3 DSLR',
    icon:'camera_alt'
  },
  {
    title:'Volunteering in sports',
    subtitle:'2005 — 2016',
    icon:'favorite'
  },
];

export const PUBLICATIONS: CvItem[] = [];

export const TALKS: CvItem[] = [
  {
    title: "Tear down this wall! - Overcoming collaboration obstacles on your DevOps journey",
    subtitle: "60 min. @ DevOpsCon Berlin 2018",
    begin: "",
    end: "2018-05-29",
    description: "The discussion about DevOps is often focusing solely on the tooling aspect: automation, " +
    "continuous integration & delivery; and monitoring. But automation and monitoring will only get you so far on " +
    "your DevOps journey. The first and arguably hardest thing to master in DevOps is getting your work from " +
    "inception into the hands of the customer fast. It requires your engineers to work hand in hand to ensure the " +
    "stability of the software as well as the systems it runs on. We focus on the organizational " +
    "aspects of DevOps: How to measure and improve your team’s effectiveness by reducing silos and silo thinking and " +
    "how to get your engineers to share responsibility - a basis for every successful DevOps transformation.",
    tags: ["DevOps", "culture", "collaboration", "communication", "microservices", "team structure"],
    link: "https://jaxenter.com/devops-interview-schreck-uebel-145573.html",
    thumbnail: "DevOpsCon_2018_Speaker.png",
  },
  {
    title: "Tear down this wall! - Overcoming collaboration obstacles on your DevOps journey",
    subtitle: "45 min. @ code.talks commerce special Berlin 2018",
    begin: "",
    end: "2018-04-13",
    description: "The discussion about DevOps is often focusing solely on the tooling aspect: automation, " +
    "continuous integration & delivery; and monitoring. But automation and monitoring will only get you so far on " +
    "your DevOps journey. The first and arguably hardest thing to master in DevOps is getting your work from " +
    "inception into the hands of the customer fast. It requires your engineers to work hand in hand to ensure the " +
    "stability of the software as well as the systems it runs on. We focus on the organizational " +
    "aspects of DevOps: How to measure and improve your team’s effectiveness by reducing silos and silo thinking and " +
    "how to get your engineers to share responsibility - a basis for every successful DevOps transformation.",
    tags: ["DevOps", "culture", "collaboration", "communication", "microservices"],
    link: "https://www.youtube.com/watch?v=KWw0H__mtxI",
    thumbnail: "code-talks-commerce.png",
  },
];
