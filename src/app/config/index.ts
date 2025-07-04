// Type definitions
interface TeamMember {
  name: string;
  email: string;
  por: string;
  photo?: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
    website?: string;
  };
}

interface HelmTerm {
  term: string;
  team: TeamMember[];
}

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

const helm: HelmTerm[] = [
  {
    term: '2025-2026',
    team: [
      {
        name: 'Sagnik Mandal',
        email: 'sagnik.mandal.mst23@iitbhu.ac.in',
        por: 'Secretary',
        photo: 'https://i.pravatar.cc/300',
        socials: {},
      },
      {
        name: 'Pratham Seth',
        email: 'pratham.seth.cer23@itbhu.ac.in',
        por: 'Joint Secretary',
        photo: 'https://i.pravatar.cc/300',
        socials: {},
      },
      {
        name: 'Sakshi Kumar',
        email: 'sakshi.kumar.cd.eee23@itbhu.ac.in',
        por: 'Joint Secretary',
        photo: 'https://i.pravatar.cc/300',
        socials: {},
      },
      {
        name: 'Aayush Khanna',
        email: 'aayush.khanna.cd.civ23@iitbhu.ac.in',
        por: 'Technical Lead',
        photo: 'https://i.pravatar.cc/300',
        socials: {},
      },
      {
        name: 'Parth Dabas',
        email: 'parth.dabas.cse23@iitbhu.ac.in',
        por: 'Technical Lead',
        photo: 'https://i.pravatar.cc/300',
        socials: {},
      },
      {
        name: 'Yashashwi Singhania',
        email: 'yashashwi.singhania.bce23@itbhu.ac.in',
        por: 'Category Head',
        photo: 'https://i.pravatar.cc/300',
        socials: {},
      },
    ],
  },
  {
    term: '2024-2025',
    team: [
      {
        name: 'Shivansh Bhatnagar',
        email: '',
        por: 'Secretary',
        socials: {},
      },
      {
        name: 'Yuval Goyal',
        email: '',
        por: 'Joint Secretary',
        socials: {},
      },
      {
        name: 'Nikhil Totla',
        email: '',
        por: 'Joint Secretary',
        socials: {},
      },
      {
        name: 'Varun Kolanu',
        email: '',
        por: 'Software Development Group Head',
        socials: {},
      },
      {
        name: 'Jay Vinchhi',
        email: '',
        por: 'Competitive Programming Group Head',
        socials: {},
      },
      {
        name: 'Shashank Shekhar Singh',
        email: '',
        por: 'Intelligence Group Head',
        socials: {},
      },
      {
        name: 'Abhinav Lenka',
        email: '',
        por: 'Infosec Head',
        socials: {},
      },
    ],
  },
];

const projects = [];

interface Achievement {
  title: string;
  level: string;
  description: string;
  year: number;
  isStarred: boolean;
}

const achievements: Achievement[] = [
  {
    title: 'Best Programming Club 2024',
    level: 'University Award',
    description: 'Recognized for outstanding contribution to programming education',
    year: 2024,
    isStarred: true,
  },
  {
    title: 'Hackathon Champions',
    level: 'National Competition',
    description: 'First place in National Inter-University Hackathon',
    year: 2023,
    isStarred: true,
  },
  {
    title: 'Open Source Contribution',
    level: 'GitHub Recognition',
    description: 'Over 1000 contributions to open source projects',
    year: 2023,
    isStarred: true,
  },
  {
    title: 'Community Impact Award',
    level: 'Local Recognition',
    description: 'Acknowledged for significant contributions to the local community',
    year: 2022,
    isStarred: false,
  },
];
export { helm, contactInfo, socialLinks, projects, achievements };
