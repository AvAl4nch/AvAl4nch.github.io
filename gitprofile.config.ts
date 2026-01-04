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
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
      ],
    },
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
      'https://cloud.laith-salman.com/s/288oxLx3LPfiPSM', // Empty fileUrl will hide the `Download Resume` button.
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
      company: 'Green Circle',
      position: 'Penetration Tester & AI practitioner',
      from: 'July 2025',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Princess Sumaya University for Technology',
      position: 'Cyber Security Club tech lead',
      from: '2024',
      to: '2025',
      companyLink: '',
    },
    {
      company: 'Princess Sumaya University for Technology',
      position: 'Cyber Security Club Instructor',
      from: 'March 2023',
      to: '2024',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'OSCP',
      body: 'Offensive Security Certified Professional',
      year: 'August 14, 2025',
      link: 'https://credentials.offsec.com/d57727c6-f999-46cb-8750-4aea11e1bbf3#acc.Wmh8GkZC'
    },
    {
      name: 'OSWP',
      body: 'Offensive Security Wireless Professional',
      year: 'November 24, 2025',
      link: 'https://credentials.offsec.com/50c3fd09-5507-4f23-9f71-c0ab8ebb5683#acc.NMvAjKWz'
    },
    {
      name: 'eJPTv2',
      body: 'eLearnSecurity Junior Penetration Tester v2',
      year: 'March 31, 2024',
      link: 'https://certs.ine.com/f56c3e71-94db-4f05-84ea-0e8abe118a09'
    },
    {
      name: 'ICCA',
      body: 'INE Certified Cloud Associate',
      year: 'April 11, 2024',
      link: 'https://certs.ine.com/99fe038a-f4d9-4fe9-a9ef-4f70ee6ec56f#gs.79gbi1'
    },
  ],
  educations: [
    {
      institution: 'Princess Sumaya University for Technology',
      degree: 'Bachelor\'s degree in Cyber Security',
      from: '2021',
      to: '2025',
    },
  ],
  publications: [
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
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: '',

  enablePWA: true,
};

export default CONFIG;
