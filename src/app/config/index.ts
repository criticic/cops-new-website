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
  position?: number;
  category?: string;
}

const achievements: Achievement[] = [
  {
    title: 'Google Summer of Code 2023',
    level: 'Open Source Fellowship',
    description: '16 students were selected for the prestigious Google Summer of Code program.',
    year: 2023,
    isStarred: true,
    position: 1,
    category: "dev",
  },
  {
    title: 'Summer of Bitcoin 2023',
    level: 'Open Source Fellowship',
    description: '3 students were selected as mentees for the Summer of Bitcoin program.',
    year: 2023,
    isStarred: true,
    position: 2,
    category: "dev",
  },
  {
    title: 'Open Source Contribution',
    level: 'GitHub Recognition',
    description: 'Over 1000 contributions to open source projects',
    year: 2023,
    isStarred: true,
    position: 2,
    category: "dev",
  },
  {
    title: 'Open Source Contribution',
    level: 'GitHub Recognition',
    description: 'Over 1000 contributions to open source projects',
    year: 2023,
    isStarred: true,
    position: 2,
    category: "dev",
  },
  {
    title: 'Open Source Contribution',
    level: 'GitHub Recognition',
    description: 'Over 1000 contributions to open source projects',
    year: 2023,
    isStarred: true,
    position: 2,
    category: "dev",
  },
  {
    title: 'Summer of Reproducibility 2023',
    level: 'Open Source Fellowship',
    description: '2 students were selected as mentees for the Summer of Reproducibility.',
    year: 2023,
    isStarred: false,
  },
  {
    title: 'LFX Mentorship Program 2023 Spring',
    level: 'Open Source Fellowship',
    description: 'Three students were accepted as mentees in the LFX Mentorship Spring 2023.',
    year: 2023,
    isStarred: false,
    category: "dev",
  },
  {
    title: 'Google Summer of Code 2022',
    level: 'Open Source Fellowship',
    description: '24 students were selected, with 3 acting as mentors and 1 as an organization admin.',
    year: 2022,
    isStarred: true,
    category: "dev",
  },
  {
    title: 'Summer of Bitcoin 2022',
    level: 'Open Source Fellowship',
    description: '3 students were selected as mentees under the Summer of Bitcoin program.',
    year: 2022,
    isStarred: true,
    category: "dev",
  },
  {
    title: 'Outreachy 2022',
    level: 'Open Source Fellowship',
    description: 'One student was selected as an Outreachy Fellow for the summer cohort.',
    year: 2022,
    isStarred: false,
    position: 3,
    category: "community"
  },
  {
    title: 'Community Impact Award',
    level: 'Local Recognition',
    description: 'Acknowledged for significant contributions to the local community',
    year: 2022,
    isStarred: false,
    category: "community"
  },
  {
    title: 'Community Impact Award',
    level: 'Local Recognition',
    description: 'Acknowledged for significant contributions to the local community',
    year: 2022,
    isStarred: false,
    position: 3,
  },
  {
    title: 'LFX Mentorship Program Fall 2022',
    level: 'Open Source Fellowship',
    description: 'Two students were accepted as mentees in the LFX Mentorship Fall 2022.',
    year: 2022,
    isStarred: false,
    category: "dev",
  },
  {
    title: 'Google Summer of Code 2021',
    level: 'Open Source Fellowship',
    description: '23 students were selected, making IIT (BHU) the second-highest selected institute globally.',
    year: 2021,
    isStarred: true,
    category: "dev",
  },
   {
    title: '10th Inter IIT Tech Meet',
    level: 'Inter-College Competition',
    description: 'Won two silver medals in the Large Scale System Design and Model Extraction Attack events.',
    year: 2021,
    isStarred: true,
  },
  {
    title: '9th Inter IIT Tech Meet',
    level: 'Inter-College Competition',
    description: 'Won a gold medal in the Network Security Hackathon and a silver medal in the Automatic Headline Generator event.',
    year: 2021,
    isStarred: true,
  },
  {
    title: 'ACM ICPC 2020',
    level: 'Programming Competition',
    description: 'Topped Kanpur-Mathura Regionals, earning a chance for World Finals. 23 teams qualified for regionals.',
    year: 2021,
    isStarred: true,
  },
  {
    title: 'CSAW 2021 Finals',
    level: 'Cybersecurity Competition',
    description: 'Two teams from the club qualified for the Cyber Security Awareness Week (CSAW) finals.',
    year: 2021,
    isStarred: false,
  },
  {
    title: 'Google Summer of Code 2020',
    level: 'Open Source Fellowship',
    description: '10 students were selected, placing IIT (BHU) among the top 10 institutes worldwide.',
    year: 2020,
    isStarred: true,
    category: "dev"
  },
  {
    title: 'ICPC World Finals 2019-2020',
    level: 'Programming Competition',
    description: 'One team from the club qualified for the prestigious ICPC World Finals.',
    year: 2019,
    isStarred: true,
  },
  {
    title: 'Google Summer of Code 2019',
    level: 'Open Source Fellowship',
    description: 'Nine students from the club were selected for the Google Summer of Code program.',
    year: 2019,
    isStarred: true,
    category: "dev",
  },
  {
    title: '7th Inter IIT Tech Meet 2018',
    level: 'Inter-College Competition',
    description: 'Won two bronze medals in the Coding Hackathon and Star Cluster Identifier events.',
    year: 2018,
    isStarred: true,
  },
  {
    title: 'Google Summer of Code 2018',
    level: 'Open Source Fellowship',
    description: 'Seven students from the club were selected for the Google Summer of Code program.',
    year: 2018,
    isStarred: true,
    category: "dev"
  },
  {
    title: 'Third at ICPC Kanpur Regionals 2017',
    level: 'Programming Competition',
    description: 'A team of three secured the third position at the ICPC Kanpur Regionals.',
    year: 2017,
    isStarred: true,
  },
  {
    title: 'Bronze at Inter-IIT Tech Meet 2017',
    level: 'Inter-College Competition',
    description: 'A team of two members won a Bronze Medal in an Inter IIT Event.',
    year: 2017,
    isStarred: true,
  },
  {
    title: 'Winners at GS Quantify 2017',
    level: 'Corporate Competition',
    description: 'A team won the GS Quantify contest by Goldman Sachs, with 6 other teams as Significant Contributors.',
    year: 2017,
    isStarred: true,
  },
];

const years=[2024,2023,2022,2021,2020,2019,2018,2017,2016];

export { years, helm, contactInfo, socialLinks, projects, achievements };
