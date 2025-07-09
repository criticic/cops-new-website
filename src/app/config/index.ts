import { helm } from './helm';
import { achievements } from './achievements';
// Type definitions



const contactInfo = {
  email: 'iitbhu.cops@gmail.com',
  add: 'IIT-BHU Gymkhana, Varanasi, 221005',
};

const socialLinks = {
  insta: 'https://instagram.com/cops.iitbhu',
  linkedin: 'https://www.linkedin.com/company/cops-iitbhu/',
  github: 'https://github.com/COPS-IITBHU',
  youtube: 'https://www.youtube.com/@cops.iitbhu',
  twitter: 'https://x.com/cops_iitbhu',
  hashnode: 'https://blogs.copsiitbhu.co.in/',
};



const projects = [];



const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016];

interface Resource {
  title: string;
  author: string[];
  topics: string[];
  tags: string[];
  vertical: string;
  filePath: string;
}

const resources: Resource[] = [
  {
    title: "CSOC Web Track",
    author: ["COPS SDG"],
    topics: ["Web Development", "Frontend", "Backend"],
    tags: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Node.js", "Express", "MongoDB", "REST APIs", "Authentication"],
    vertical: "SDG",
    filePath: '/mdFiles/web.md'
  },
  {
    title: "CSOC Web3 Track",
    author: ["COPS SDG"],
    topics: ["Blockchain", "Smart Contracts", "DeFi"],
    tags: ["Bitcoin", "Ethereum", "Solidity", "MetaMask", "Remix", "Hardhat", "Cryptography", "ECDSA", "Zero-Knowledge"],
    vertical: "CPG",
    filePath: '/mdFiles/web3.md'
  },
  {
    title: "CSOC Flutter Track",
    author: ["COPS SDG"],
    topics: ["Mobile Development", "Cross-platform", "App Development"],
    tags: ["Flutter", "Dart", "FVM", "Mobile UI", "Cross-platform"],
    vertical: "IG",
    filePath: '/mdFiles/flutter.md'
  },
];

export { resources, years, helm, contactInfo, socialLinks, projects, achievements };
