import { CvItem } from './cv-item';

export const GENERAL = {
  name: "Hallgrímur Davíð Egilsson",
  position: "Computer Scientist",
  description: ""
};

export const CVITEMS: CvItem[] = [
  {
    title: "Svarmi",
    subtitle: "CISO & CSA (Chief Information Security Officer & Chief Software Architect)",
    begin: "autumn 2020",
    end: "",
    description: "Managing development of Myriad. A network of self-chargeable drones deployable to industrial areas for frequent deliveries of processed aerial data.",
    tags: ["AWS", "Kubernetes", "CI/CD", "Agile", "TDD", "GitLab", "Read the Docs", "Python", "Flask", "Bash", "Docker", "OpenVPN", "Bind9"],
    thumbnail: "svarmi_logo.png",
  },
  {
    title: "Svarmi",
    subtitle: "CTO (Chief Technology Officer)",
    begin: "autumn 2018",
    end: "autumn 2020",
    description: "Managing development of Myriad. A network of self-chargeable drones deployable to industrial areas for frequent deliveries of processed aerial data.",
    tags: ["Agile", "AWS", "CI/CD", "TDD", "GitLab", "Read the Docs", "Python", "Bash", "Docker", "OpenVPN", "Bind9"],
    thumbnail: "svarmi_logo.png",
  },
  {
    title: "Svarmi",
    subtitle: "Computer Scientist - DevOps",
    begin: "summer 2017",
    end: "autumn 2018",
    description: "Focusing on Systems Architecture and DevOps for maximum scalability of Myriad.",
    tags: ["AWS", "Docker", "Kubernetes", "OpenVPN", "Bind9", "CI/CD", "TDD", "GitLab", "Python", "Bash", "Read the Docs"],
    thumbnail: "svarmi_logo.png",
  },
  {
    title: "Svarmi",
    subtitle: "Computer Scientist - Engineer",
    begin: "summer 2015",
    end: "summer 2017",
    description: "Working on a proof-of-concept of Myriad.",
    tags: ["Linux", "ROS", "Python", "Bash", "C++", "Ardupilot", "Git", "Jira"],
    link: "https://www.svarmi.is",
    thumbnail: "svarmi_logo.png",
  },
  {
    title: "University of Iceland",
    subtitle: "Teaching assistant - Discrete mathematics",
    begin: "",
    end: "autumn 2016",
    description: "Weekly workshops with computer science students. Grading of homework.",
    tags: ["Basics in discrete mathematics"],
    thumbnail: "hi_logo.jpg",
  },
  {
    title: "University of Iceland",
    subtitle: "Teaching assistant - Computer Science 1A",
    begin: "autumn 2014",
    end: "autumn 2015",
    description: "Weekly workshops with engineering students. Grading of homework.",
    tags: ["Basics in programming"],
    thumbnail: "hi_logo.jpg",
  },
];

export const EDUCATION: CvItem[] = [
  {
    title: "B.Sc. Computer Science",
    subtitle: "University of Iceland",
    begin: "autumn 2016",
    end: "spring 2017",
    description: "",
    tags: ["Analysis of Algorithms", "Theory of Computation", "Discrete Mathematics", "Functional Programming", "Nonlinear Optimization", "Software Development", "Web Programming", "Computer Graphics", "Assembly", "Operating Systems"],
    attachment: "computer_science_bsc.pdf",
    thumbnail: "hi_logo.jpg",
  },
  {
    title: "B.Sc. Mechanical Engineering",
    subtitle: "University of Iceland",
    begin: "autumn 2013",
    end: "spring 2016",
    description: "",
    tags: ["Differential Equations", "Physics", "Probability", "Statistics", "Numerical Analysis", "Linear Algebra", "Control Systems", "Fluid Mechanics", "Chemistry", "Vibrations", "Economics Engineering",  "Microcomputers"],
    attachment: "mechanical_engineering_bsc.pdf",
    thumbnail: "hi_logo.jpg",
  },
  {
    title: "Private Pilot",
    subtitle: "Icelandic civil aviation administration",
    begin: "autumn 2011",
    end: "autumn 2015",
    description: "",
    link: "",
    thumbnail: "icelandic_aviation_administration_cropped.jpg",
    attachment: "private_pilot_licence.pdf",
  },
];

export const CERTIFICATES: CvItem[] = [
  {
    title: "Formula student: Designing and building an electric formula race car",
    subtitle: "Designed and built the wings for the car in a team of three engineering students focusing on aerodynamics.",
    begin: "autumn 2015",
    end: "summer 2016",
    description: "",
    link: "https://www.teamspark.is/vehicles/ts16",
    thumbnail: "fs_logo.jpg",
  },
  {
    title: "University of Iceland's Robot design competition",
    subtitle: "Participating in a team of four engineering students. My team won the competition.",
    begin: "autumn 2014",
    end: "spring 2015",
    description: "",
    link: "https://www.youtube.com/watch?v=aN4tmx8q3lo&t=15m30s",
    thumbnail: "design_competition_cropped.jpg",
  },
  {
    title: "Programming competition",
    subtitle: "Participating in a team of three high school students. My team got second place.",
    begin: "",
    end: "spring 2013",
    description: "",
    thumbnail: "programming_competition_cropped.png",
    attachment: "programming_competition.pdf",
  },
  {
    title: "Youth symphony orchestra of Iceland",
    subtitle: "Played the harp in the orchestral suite \"The Planets\" at the concert hall Harpa.",
    begin: "",
    end: "autumn 2012",
    description: "",
    link: "http://www.tonar.is/news/hallgr%C3%ADmur+t%C3%B3k+%C3%BE%C3%A1tt+%C3%AD+ungsveit+sinf%C3%B3n%C3%ADunnar",
    thumbnail: "youth_orchestra_cropped.png",
  },
  {
    title: "Bassist/Harpist at Glundroði",
    subtitle: "Played in the folk rock band Glundroði. We played at a few venues and did studio recordings.",
    begin: "spring 2012",
    end: "summer 2013",
    description: "",
    thumbnail: "glundrodi_cropped.jpg",
    link: "https://www.youtube.com/watch?v=dZBbcCZiin4",
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
    begin: "spring 2018",
    end: "",
    description: "Compiles & deploys software to Svarmi's drones. Receives source code from developers using rsync's delta-transfer algorithm and then proceeds to compile the code for Svarmi's drones environment and CPU architecture.",
    tags: ["Python", "CMake", "ROS", "Rsync", "Socket Programming", "Pytest"],
    thumbnail: "build_farm_cropped.jpg",
  },
  {
    title: "ROS VPN & DNS",
    subtitle: "Encapsulating Svarmi's network of drones",
    begin: "autumn 2017",
    end: "",
    description: "The VPN encapsulates Svarmi's ROS system with AES-256 encryption and the DNS allows drones and servers to talk to each other using hostnames.",
    tags: ["AWS", "OpenVPN", "Bind9", "Linux", "ROS", "Bash"],
    thumbnail: "vpn_dns_cropped.jpeg",
  },
  {
    title: "GESTOS",
    subtitle: "Svarmi's on-board drone software",
    begin: "summer 2016",
    end: "",
    description: "The soul of Svarmi's drones. Has a state machine, does CV calculations at 100 FPS, communicates to servers, streams data through 4G network connection, etc.",
    tags: ["Linux", "GPU", "ROS", "C++", "Google Test"],
    thumbnail: "racing_drone_cropped.jpg",
  },
  {
    title: "Programming",
    subtitle: "Experiments & mini projects",
    begin: "",
    end: " ",
    description: "",
    tags: ["Algorithms", "Cryptography",  "Haskell", "Google Code Jam", "Advent of code", "Machine Learning", "C", "Scheme", "Python", "Projecteuler.net (56 problems)", "Pwnable.kr (6 problems)"],
    link: "https://github.com/hallgrimur1471/programming",
    thumbnail: "computer_science_cropped.jpg",
  },
  {
    title: "Autolock",
    subtitle: "Automatically lock/unlock car by proximity",
    begin: "",
    end: " ",
    description: "Bluetooth LE signal beacon placed in car. Car remote checks RSSI signal levels to estimate proximity.",
    tags: ["C++", "Bluetooth LE", "RSSI"],
    link: "https://github.com/hallgrimur1471/autolock",
    thumbnail: "remote.jpg",
  },
  {
    title: "Asteroids in 3D",
    subtitle: "Playable in a browser",
    begin: "",
    end: " ",
    description: "",
    tags: ["Javascript", "WebGL"],
    link: "https://github.com/hallgrimur1471/asteroids-3d",
    thumbnail: "asteroids_3d_cropped.png",
  },
  {
    title: "Map Image Marker",
    subtitle: "Automatically places uploaded geo-tagged images on map",
    begin: "",
    end: " ",
    description: "",
    tags: ["Exif data", "Javascript", "Node.js", "Leaflet"],
    link: "https://github.com/hallgrimur1471/mim",
    thumbnail: "mapim_cropped.png",
  },
  {
    title: "Gran Turismo Lap-time logger",
    subtitle: "Logs laptimes by analyzing a twitch.tv video stream",
    begin: "",
    end: " ",
    description: "",
    tags: ["Image analysis (text recognition, etc.)", "Selenium", "Python"],
    link: "https://github.com/hallgrimur1471/gran_turismo_datalogger",
    thumbnail: "gran_turismo_cropped.jpeg",
  },
];


export const VOLUNTEERING: CvItem[] = [
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
    title:'Playing the harp',
    subtitle:'1999 — now',
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
];
