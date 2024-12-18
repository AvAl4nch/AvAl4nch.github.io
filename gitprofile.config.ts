// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'AvAl4nch', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['AvAl4nch/AvAl4nch.github.io'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
// external: {
//   header: 'My Projects',
//   // To hide the `External Projects` section, keep it empty.
//   projects: [
//     {
//       title: 'Project Name',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
//       imageUrl:
//         'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
//       link: 'https://example.com',
//     },
//     {
//       title: 'Project Name',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
//       imageUrl:
//         'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
//       link: 'https://example.com',
//     },
//   ],
// },
  },
  seo: {
    title: 'Portfolio of Laith Salman',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'laith salman',
    phone: '+962791259512',
    email: 'laith.s4lm4n@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1FaFpOjjc-LT_pPjRzsIBwM7AU8dmqmxv/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'C',
    'Penetration Testing',
    'Networks',
    'SQL',
    'Bash',
    'JavaScript',
    'PHP',
    'Assembly',
    'Kotlin',
  ],
  experiences: [
    {
      company: 'Cyber Security club',
      position: 'Instructor',
      from: 'march 2024',
      to: 'Present',
    },
  ],
  certifications: [
    {
      name: 'EJPTv2',
      body: 'Lorem ipsum dolor sit amet',
      year: 'work in progress',
    },

  ],
  educations: [
    {
      institution: 'Princess Sumaya University for Technology',
      degree: 'Bachelor\'s degree',
      from: '2021',
      to: 'current',
    },
  ],
  publications: [
    {
      // title: 'Hack The Box Curling writeup',
      // conferenceName: 'Hack The Box',
      // authors: 'Laith Salman',
      // link: 'https://medium.com/@laithsalman2522003/curling-is-an-easy-linux-box-created-by-l4mpje-on-hack-the-box-and-was-released-in-2019-10e5d183b9d7',
      // description:
      //   'A simple comprehensive writup that i wrote when i was solving the Curling on Hack The Box..',
    },

  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'laithsalman2522003', // to hide blog section, keep it empty
    limit: 10, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'night',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'night',
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },



  enablePWA: true,
};

export default CONFIG;
