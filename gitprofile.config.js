// gitprofile.config.js

const config = {
  github: {
    username: 'kitoster', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['Kits_gitprofile', 'FlagFinder', 'Portfolio', 'Kitoster'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    email: 'kit.oster@csuglobal.edu',
    linkedin: 'kitoster',
    dev: 'kitoster',
    medium: 'kit.oster',
    kaggle: 'kitoster'
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'MySQL',
    'PostgreSQL',
    'Git',
    'Pandas',
    'NumPy',
    'Tableau',
    'Matplotlib & Seaborn'
  ],
  experience: [
    {
      company: 'Kings Creek Country Club',
      position: 'Wellness Administrator',
      from: 'April 2022',
      to: 'Present',
      companyLink: 'https://https://www.kingscreekcountryclub.com/.com',
    },
    {
      company: 'Delaware Technical Community College',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://www.dtcc.edu/our-campuses/georgetown',
    },
  ],
   certifications: [
    {
      name: 'System Administration and IT Infrastructure Services',
      body: 'Google',
      year: 'March 2023',
      link: 'https://coursera.org/share/3c3bcc4f871dd078e8282f6498590b82'
    },
  ], 
  education: [
    {
      institution: 'Colorado State University Global',
      degree: 'Bachelor of Science in Computer Science',
      from: '2021',
      to: '2023',
    },
    {
      institution: 'Delaware Technical Community College',
      degree: 'Associate of Science in Information Technology',
      from: '2018',
      to: '2020',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'National Parks Exploration',
      description:
        'An analysis of National Park data using Jupyter Notebooks.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://nbviewer.org/github/kitoster/ParksExploration-python/blob/main/biodiversity-3.ipynb',
    },
    {
      title: 'Analysis and Prediction of Medical Costs',
      description:
        'Exploration and analysis of medical costs on Kaggle.',
      imageUrl: 'https://imgur.com/a/MZomd1x',
      link: 'https://www.kaggle.com/code/kitoster/visualization-and-prediction/notebook',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'kit.oster', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
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
    defaultTheme: 'garden',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'corporate',
      'dracula',
      'synthwave',
      'retro',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'black',
      'luxury',
      'autumn',
      'business',
      'night',
      'procyon',
    ],

    // Custom theme
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

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
