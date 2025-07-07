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
        photo: '/team/pratham.jpeg',
        socials: {},
      },
      {
        name: 'Sakshi Kumar',
        email: 'sakshi.kumar.cd.eee23@itbhu.ac.in',
        por: 'Joint Secretary',
        photo: '/team/Sakshi.jpeg',
        socials: {},
      },
      {
        name: 'Aayush Khanna',
        email: 'aayush.khanna.cd.civ23@iitbhu.ac.in',
        por: 'Technical Lead',
        photo: '/team/aayush.jpeg',
        socials: {},
      },
      {
        name: 'Parth Dabas',
        email: 'parth.dabas.cse23@iitbhu.ac.in',
        por: 'Technical Lead',
        photo: '/team/parth.jpeg',
        socials: {},
      },
      {
        name: 'Yashashwi Singhania',
        email: 'yashashwi.singhania.bce23@itbhu.ac.in',
        por: 'Category Head',
        photo: '/team/yashashwi.jpeg',
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
  {
    term: '2023-2024',
    team: [
      {
        name: 'Eshaan Aggarwal',
        email: '',
        por: 'Secretary',
        socials: {},
      },
      {
        name: 'Anshiv Singla',
        email: '',
        por: 'Joint Secretary',
        socials: {},
      },
      {
        name: 'Aakash Sharma',
        email: '',
        por: 'Joint Secretary',
        socials: {},
      },
      {
        name: 'Vaibhav Tripathi',
        email: '',
        por: 'Software Development Group Head',
        socials: {},
      },
      {
        name: 'Vaibhav Khater',
        email: '',
        por: 'Competitive Programming Group Head',
        socials: {},
      },
      {
        name: 'Dhruvi Jain',
        email: '',
        por: 'Intelligence Group Head',
        socials: {},
      },
      {
        name: 'Yash Somalkar',
        email: '',
        por: 'Infosec Head',
        socials: {},
      },
    ],
  },
];

export { helm };