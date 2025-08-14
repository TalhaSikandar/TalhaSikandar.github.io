// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'TalhaSikandar', // Your GitHub org/user name. (This is the only required config)
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
        limit: 6, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['TalhaSikandar/SHA-256', 
          'TalhaSikandar/D3-CNN', 
        ], 
      },
    },
    external : {
      header: 'My Projects',
      projects: [
        {
          title: 'Gas Extraction Optimization – Qult.ai',
          description:
            'At Qult.ai, developed an AI-driven asset-optimization system to optimize plunger lift operations by analyzing real-time well telemetry and historical production data. Leveraging machine learning and time-series forecasting, the solution improves cycle timing, reduces downtime, and extends equipment life, supported by interactive dashboards for performance monitoring.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          
        },
        {
          title: 'Sand Extraction Automation – Qult.ai',
          description:
            'At Qult.ai, built a computer vision-based solution for automating sand removal in oil operations using thermal imaging. The system detects sand build-up through heat pattern anomalies and triggers automated cleaning, improving safety, reducing manual inspections, and preventing equipment failures.',
          
        },
        {
          title: 'Lease Bot – AiBee.pk',
          description:
            'At AiBee.pk, created an AI-powered platform to automate the extraction, summarization, and amendment tracking of complex lease documents. Utilizing advanced NLP and LLMs, the system processes scanned or digital agreements, structures key clauses, and dynamically updates abstracts, significantly reducing manual review time while ensuring accuracy and compliance.',
          
        },
        {
          title: 'Hawk AI – AiBee.pk',
          description:
            'At AiBee.pk, developed a custom computer vision model for detecting impurities on tobacco conveyor belts, combining object detection and segmentation techniques. Integrated with a robotic arm for automated impurity removal, enhancing quality control and reducing manual intervention.',
        },
        {
          title: 'Real-Time Streaming & AI Inference System',
          description:
            'Designed a low-latency video streaming pipeline with integrated AI inference using C++, FFmpeg, HLS, WebRTC, and OpenCV. Optimized for minimal delay, enabling real-time decision-making for computer vision applications.',
        },
        {
          title: 'Autonomous Rover',
          description:
            'Developed a fully functional rover from scratch, handling both hardware and software aspects. Built a custom LiDAR system for obstacle detection and distance measurement, integrated with PWM motor control, sensors, and AI-based navigation algorithms.',
        },
        {
          title: 'Embedded AI on HAT Devices',
          description:
            'Worked with Raspberry Pi and microcontrollers to deploy lightweight deep learning models for edge computing, enabling real-time AI processing directly on resource-constrained devices.',
        },
        {
          title: 'Other Projects',
          description:
            'Developed diverse technical projects, including a Neo4j-inspired graph database in C++, an AI-powered blockchain smart contract auditor for vulnerability detection, a CLI-based torrent client for peer-to-peer file sharing, a C library for dynamic hot reloading of shared modules, and an LMS-based adaptive noise cancellation system with comparative filter analysis.',
        }
      ]
    }
  },
  seo: { title: 'Portfolio of Talha Sikandar', description: '', imageURL: '' },
  social: {
    linkedin: 'talha-sikandar',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '.talhasikandar',
    telegram: '',
    website: 'https://TalhaSikandar.github.io/',
    phone: '',
    email: 'raotalha396@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1OTZcb4kwZUanmQwC4J0OeY5meh92GOcM/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    "Computer Vision",
    "Machine Learning",
    "Deep Learning",
    "Artificial Intelligence",
    "Large Language Models",
    "AI Agents",
    "LangChain",
    "MLOps",
    "Data Engineering",
    "Data Analysis",
    "Web Scraping",
    "Backend Development",
    "FastAPI",
    "Streamlit",
    "Solution Architecture",
    "DevOps",
    "AWS",
    "Azure DevOps",
    "Docker",
    "Git",
    "GitHub",
    "Python",
    "C++",
    "C",
    "Bash",
    "CUDA",
    "Algorithms",
    "Object-Oriented Programming",
    "Neural Networks",
    "Linux",
    "Operating Systems",
    "Assembly",
    "SQL",
    "NoSQL Databases",
    "Neo4j",
    "Raspberry Pi",
    "NVIDIA Jetson",
    "Microcontrollers",
    "Real-Time Processing",
    "Server Management",
    "ESXi",
    "OpenWRT",
    "Router Configurations",
    "GStreamer",
    "FFmpeg",
    "WebRTC",
    "OpenCV",
    "Problem Solving",
    "Project Management",
    "Educational Leadership",
    "Teaching"
],
experiences : [
  {
    company: 'Qult Technologies',
    position: 'AI/ML Engineer (Internship)',
    from: 'June 2025',
    to: 'Present',
    companyLink: 'https://qult.ai'
  },
  {
    company: 'AiBee.pk',
    position: 'AI & Backend Developer (Internship)',
    from: 'January 2025',
    to: 'Present',
    companyLink: 'https://aibee.pk/'
  },
  {
    company: 'Google Developer Student Club - Information Technology University, Pakistan',
    position: 'Dev/Tech Team Lead',
    from: 'October 2024',
    to: 'Present',
    companyLink: 'https://gdg.community.dev/gdg-on-campus-information-technology-university-lahore-pakistan/'
  },
  {
    company: 'Google Developer Student Club - Information Technology University, Pakistan',
    position: 'Vice President',
    from: 'Janunary 2025',
    to: 'August 2025',
    companyLink: 'https://gdg.community.dev/gdg-on-campus-information-technology-university-lahore-pakistan/'
  },
  {
    company: 'Veritus Software',
    position: 'AI Engineer (Internship)',
    from: 'July 2024',
    to: 'August 2025',
    companyLink: ''
  },
  {
    company: 'Information Technology University',
    position: 'Teaching Assistant - Object-Oriented Programming',
    from: 'January 2024',
    to: 'June 2024',
    companyLink: 'https://itu.edu.pk/'
  },
],
  certifications: [
    // {
    //   name: 'Lorem ipsum',
    //   body: 'Lorem ipsum dolor sit amet',
    //   year: 'March 2022',
    //   link: 'https://example.com',
    // },
  ],
  educations: [
    {
      institution: 'Infomation Technoloy University, Lahore',
      degree: 'BS Computer Science',
      from: '2022',
      to: '2026',
    },
    {
      institution: 'Punjab Group of Colleges, Lahore',
      degree: 'F.Sc Pre-Medical',
      from: '2019',
      to: '2021',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'procyon-dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
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
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
      'procyon-dark'
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
