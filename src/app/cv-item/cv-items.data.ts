import { CvItem } from './cv-item';

export const GENERAL = {
  name: "Hallgrímur Davíð Egilsson",
  position: "Computer Scientist",
  description: ""
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
    description: "Compiles & deploys software to Svarmi's drones. Receives source code from developers using rsync's delta-transfer algorithm and then proceeds to compile the code for Svarmi's drones envionment and CPU architecture.",
    tags: ["Python", "CMake", "ROS", "Rsync", "Socket Programming", "Pytest"],
    thumbnail: "build_farm_cropped.jpg",
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
    title: "None",
    subtitle: "None",
    begin: "2007",
    end: "2016",
    description: "None",
    link: "http://www.example.com",
    thumbnail: "DFB-Logo.jpg",
  },
];

export const CONTACT = {
  city: "Reykjavik, Iceland",
  phone: "+354 6918918",
  mail: "hallgrimur1471@gmail.com",
  skype: "", // just the account name
  linkedin: "",
  xing: "",
  github: "https://github.com/hallgrimur1471",
  stackoverflow: "",
  twitter: "", // full url
  facebook: "https://www.facebook.com/profile.php?id=1217500138",
  googleplus: "https://plus.google.com/u/0/111862273071751190587",
  other: [
    // { title: "another web page", link: "http://some.url" }, // example
  ],
};

export const INTERESTS = [
  {
    title:'Playing my Harp',
    subtitle:'1999 — 2018',
    icon:'music_note'
  },
  {
    title:'Flying (Private pilot)',
    subtitle:'',
    icon:'flight'
  },
  {
    title:'Tennis',
    icon:'directions_run'
  },
  {
    title:'Gym',
    subtitle:'',
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
