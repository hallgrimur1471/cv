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
    title: "Build Farm",
    subtitle: "Compile & Deployment server",
    begin: "",
    end: "",
    description: "Compiles & deploys software to Svarmi's drones.\n Receives source code from developers using rsync's delta-transfer algorithm and then proceeds to compile the code for Svarmi's drones envionment and CPU architecture.",
    tags: ["Python", "CMake", "ROS", "Rsync", "Socket Programming", "Pytest"],
    thumbnail: "build-farm-cropped.jpg",
  },
  {
    title: "ROS VPN & DNS",
    subtitle: "Encapsulating Svarmi's network of drones",
    begin: "2017-09",
    end: "",
    description: "The VPN encapsulates our ROS system with AES-256 encryption and the DNS allows our drones and servers to talk to each other using hostnames.",
    tags: ["AWS", "OpenVPN", "Bind9", "Linux", "ROS", "Bash"],
    thumbnail: "vpn_dns_cropped.jpeg",
  },
  {
    title: "GESTOS",
    subtitle: "Svarmi's on-board drone software",
    begin: "",
    end: "2017",
    description: "The soul of Svarmi's drones. Has a state machine, does CV calculations at 100 FPS, communicates to servers, streams data through 4G network connection, etc.",
    tags: ["Linux", "GPU", "ROS", "C++", "Google Test"],
    thumbnail: "racing_drone_cropped.jpg",
  },
  {
    title: "Programming",
    subtitle: "Experiments & mini projects",
    begin: "2010",
    end: "2011",
    description: "Click \"VIEW LINK\" to see them.",
    tags: ["Algorithms", "Cryptography",  "Haskell", "Google Code Jam", "Advent of code", "Machine Learning", "C", "Scheme", "Python", "Projecteuler.net (56 problems)", "Pwnable.kr (6 problems)"],
    link: "https://github.com/hallgrimur1471/programming",
    thumbnail: "computer_science_cropped.jpg",
  },
  {
    title: "Autolock",
    subtitle: "Automatically lock/unlock car by proximity",
    begin: "2016-05",
    end: "2017-05",
    description: "Bluetooth LE signal beacon placed in car. Car remote checks RSSI signal levels to estimate proximity.",
    tags: ["C++", "Bluetooth LE", "RSSI"],
    link: "https://github.com/hallgrimur1471/autolock",
    thumbnail: "remote.jpg",
  },
  {
    title: "Asteroids in 3D",
    subtitle: "Playable in a browser",
    begin: "",
    end: "2010",
    description: "",
    tags: ["Javascript", "WebGL"],
    link: "http://gpm.hu-berlin.de/",
    thumbnail: "asteroids_3d_cropped.png",
  },
  {
    title: "Map Image Marker",
    subtitle: "Automatically places uploaded geo-tagged images on map.",
    begin: "",
    end: "2010",
    description: "",
    tags: ["Exif data", "Javascript", "Node.js", "Leaflet"],
    link: "https://github.com/hallgrimur1471/mim",
    thumbnail: "mapim_cropped.png",
  },
  {
    title: "Gran Turismo Lap-time logger",
    subtitle: "Logs laptimes by analyzing a twitch.tv video stream.",
    begin: "",
    end: "2010",
    description: "",
    tags: ["Image analysis (text recognition, etc.)", "Selenium", "Python"],
    link: "https://github.com/hallgrimur1471/gran_turismo_datalogger",
    thumbnail: "gran_turismo_cropped.jpeg",
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
