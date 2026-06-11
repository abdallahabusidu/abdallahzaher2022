// ── Shared project data ────────────────────────────────────────────────────────

export interface Project {
  index: string;
  title: string;
  stack: string[];
  result: string;
  accent: "amber" | "pink" | "indigo" | "teal";
  href: string | null;
  stars: number | null;
  forks: number | null;
  category:
    | "Creative 3D"
    | "Frontend"
    | "Mobile"
    | "Backend"
    | "Education"
    | "CS"
    | "Hardware"
    | "ML/AI"
    | "Game"
    | "Private";
  isPrivate?: boolean;
}

export const ALL_PROJECTS: Project[] = [
  // ── Creative 3D ─────────────────────────────────────────────────────────────
  {
    index: "01",
    title: "Freelance Creative Portfolio",
    stack: [
      "React",
      "GSAP",
      "Three.js",
      "GLSL",
      "Tailwind",
      "React Three Fiber",
    ],
    result:
      "Elevated Lighthouse performance from 34 → 96 and SEO from 40 → 90. Interactive 3D experiences with 100% best-practices score.",
    accent: "amber",
    href: null,
    stars: null,
    forks: null,
    category: "Creative 3D",
  },
  {
    index: "02",
    title: "Slider With Shader",
    stack: ["React", "Three.js", "GLSL", "GSAP"],
    result:
      "Custom GLSL shader slide transitions achieving 60 FPS. Part of a paid immersive web course with React Three Fiber.",
    accent: "pink",
    href: "https://github.com/abdallahabusidu/SliderWithShaders",
    stars: null,
    forks: null,
    category: "Creative 3D",
  },
  {
    index: "03",
    title: "Center Of Gravity",
    stack: ["HTML", "CSS", "JavaScript", "Cannon.js", "GSAP", "Three.js"],
    result:
      "Physics-driven hero inspired by Noomo Labs with real-time Cannon.js interactions, cross-browser responsive at 60 FPS.",
    accent: "indigo",
    href: "https://github.com/abdallahabusidu/Center-Of-Gravity",
    stars: null,
    forks: null,
    category: "Creative 3D",
  },
  {
    index: "04",
    title: "Apple Website 3D",
    stack: ["JavaScript", "Three.js", "GSAP", "CSS"],
    result:
      "Apple-inspired 3D scroll-driven product landing page. Most starred repo — 59 stars, 5 forks.",
    accent: "teal",
    href: "https://github.com/abdallahabusidu/AppleWebiste3D",
    stars: 59,
    forks: 5,
    category: "Creative 3D",
  },
  {
    index: "05",
    title: "Scroll-Based Animation",
    stack: ["JavaScript", "Three.js", "GSAP"],
    result:
      "Three.js Journey Chapter 20 exercise — scroll-driven 3D scene with section-based camera transitions.",
    accent: "amber",
    href: "https://github.com/abdallahabusidu/20-scroll-based-animation",
    stars: null,
    forks: null,
    category: "Creative 3D",
  },
  {
    index: "06",
    title: "Galaxy Generator",
    stack: ["JavaScript", "Three.js", "WebGL"],
    result:
      "Procedural galaxy generator using Three.js BufferGeometry and custom particle shaders — smooth 60 FPS rendering.",
    accent: "pink",
    href: "https://github.com/abdallahabusidu/19-galaxy-generator",
    stars: null,
    forks: null,
    category: "Creative 3D",
  },
  {
    index: "07",
    title: "Three.js My Name",
    stack: ["JavaScript", "Three.js"],
    result:
      "3D typographic scene built with Three.js TextGeometry — an exercise in creative letter-form and lighting.",
    accent: "teal",
    href: "https://github.com/abdallahabusidu/threejs-my-name",
    stars: 1,
    forks: null,
    category: "Creative 3D",
  },
  {
    index: "08",
    title: "Three.js Lights & Tweaks",
    stack: ["JavaScript", "Three.js", "dat.gui"],
    result:
      "Deep-dive into Three.js lighting models, shadows, and runtime dat.GUI tweaks. Part of the Three.js Journey series.",
    accent: "amber",
    href: "https://github.com/abdallahabusidu/ThreeJSLightsTweaks",
    stars: null,
    forks: null,
    category: "Creative 3D",
  },
  {
    index: "09",
    title: "Motion Blur in WebGL",
    stack: ["TypeScript", "WebGL", "GLSL"],
    result:
      "Post-processing motion blur effect implemented in raw WebGL and TypeScript. MIT-licensed creative experiment.",
    accent: "indigo",
    href: "https://github.com/abdallahabusidu/motion-blur-in-webgl-",
    stars: 1,
    forks: null,
    category: "Creative 3D",
  },
  {
    index: "10",
    title: "Solar System WebGL",
    stack: ["TypeScript", "WebGL"],
    result:
      "Realtime solar system simulation built with WebGL and TypeScript, featuring orbital physics and camera controls.",
    accent: "teal",
    href: "https://github.com/abdallahabusidu/soler-system-with-webgl",
    stars: null,
    forks: null,
    category: "Creative 3D",
  },
  {
    index: "11",
    title: "WebGL Simple Project",
    stack: ["JavaScript", "WebGL"],
    result:
      "Foundation WebGL project demonstrating raw shader programming, VAO/VBO setup, and render loop optimisation.",
    accent: "pink",
    href: "https://github.com/abdallahabusidu/webgl_simple_project",
    stars: 1,
    forks: null,
    category: "Creative 3D",
  },
  {
    index: "12",
    title: "Particles Transition",
    stack: ["JavaScript", "Three.js", "React Three Fiber"],
    result:
      "Particle-based scene transition effect using React Three Fiber — forked and extended with new interaction patterns.",
    accent: "amber",
    href: "https://github.com/abdallahabusidu/particles-transition",
    stars: null,
    forks: null,
    category: "Creative 3D",
  },
  {
    index: "13",
    title: "Simple Portfolio with R3F",
    stack: ["JavaScript", "React Three Fiber", "Three.js"],
    result:
      "Minimal 3D portfolio template built with React Three Fiber — 1 star on GitHub.",
    accent: "teal",
    href: "https://github.com/abdallahabusidu/simple-portfolio-with-r3f",
    stars: 1,
    forks: null,
    category: "Creative 3D",
  },
  {
    index: "14",
    title: "Scroll Animation Portfolio",
    stack: ["JavaScript", "GSAP", "CSS"],
    result:
      "Scroll-driven animation showcase exploring GSAP ScrollTrigger, clip-path reveals, and parallax layering techniques.",
    accent: "pink",
    href: "https://github.com/abdallahabusidu/ScrollAnimationPortfolio",
    stars: null,
    forks: null,
    category: "Creative 3D",
  },
  {
    index: "15",
    title: "Bayt Slider Assessment",
    stack: ["JavaScript", "CSS", "GSAP"],
    result:
      "Technical assessment slider with smooth transitions and responsive layout — 1 star on GitHub.",
    accent: "amber",
    href: "https://github.com/abdallahabusidu/Bayt-slider-assessment",
    stars: 1,
    forks: null,
    category: "Creative 3D",
  },
  {
    index: "16",
    title: "Three.js Arabic",
    stack: ["JavaScript", "Three.js", "WebGL"],
    result:
      "Largest Arabic Three.js educational resource on GitHub — 7 stars, 1 fork, growing developer community.",
    accent: "indigo",
    href: "https://github.com/abdallahabusidu/Threejs_Arabic",
    stars: 7,
    forks: 1,
    category: "Education",
  },

  // ── Frontend ─────────────────────────────────────────────────────────────────
  {
    index: "17",
    title: "Dashboard XYZ",
    stack: ["TypeScript", "React", "Tailwind"],
    result:
      "Production-quality admin dashboard with role-based views, data tables, and modern TypeScript patterns.",
    accent: "indigo",
    href: "https://github.com/abdallahabusidu/DashboardXYZ",
    stars: null,
    forks: null,
    category: "Frontend",
  },
  {
    index: "18",
    title: "Finance Web App",
    stack: ["JavaScript", "React", "CSS"],
    result:
      "Personal finance tracking app with budgeting views, transaction history, and clean data visualisation.",
    accent: "teal",
    href: "https://github.com/abdallahabusidu/finance-web-app",
    stars: null,
    forks: null,
    category: "Frontend",
  },
  {
    index: "19",
    title: "Custom Components Library",
    stack: ["TypeScript", "React"],
    result:
      "Reusable UI system with compound patterns, accessibility-first design, and typed props — 1 star.",
    accent: "amber",
    href: "https://github.com/abdallahabusidu/custom-omponents",
    stars: 1,
    forks: null,
    category: "Frontend",
  },
  {
    index: "20",
    title: "CRUD App",
    stack: ["TypeScript", "React"],
    result:
      "Full CRUD application with optimistic updates, form validation, and clean component architecture in TypeScript.",
    accent: "pink",
    href: "https://github.com/abdallahabusidu/crud-app",
    stars: null,
    forks: null,
    category: "Frontend",
  },
  {
    index: "21",
    title: "Todo List",
    stack: ["JavaScript", "React", "CSS"],
    result:
      "Feature-complete React todo app with local persistence and filter views — 4 stars, 1 fork.",
    accent: "teal",
    href: "https://github.com/abdallahabusidu/todo_list",
    stars: 4,
    forks: 1,
    category: "Frontend",
  },
  {
    index: "22",
    title: "Calendar JS",
    stack: ["TypeScript", "React"],
    result:
      "Customisable calendar component built in TypeScript with event management and month navigation — 2 stars.",
    accent: "amber",
    href: "https://github.com/abdallahabusidu/CalenderJs",
    stars: 2,
    forks: null,
    category: "Frontend",
  },
  {
    index: "23",
    title: "RTK Query App",
    stack: ["TypeScript", "React", "Redux"],
    result:
      "Data-fetching application built with RTK Query demonstrating cache invalidation, pagination, and optimistic updates.",
    accent: "indigo",
    href: "https://github.com/abdallahabusidu/rtkq",
    stars: null,
    forks: null,
    category: "Frontend",
  },
  {
    index: "24",
    title: "Interactive Comments Section",
    stack: ["JavaScript", "React", "CSS"],
    result:
      "Frontend Mentor challenge — full nested comment system with reply, edit, delete, and vote functionality.",
    accent: "pink",
    href: "https://github.com/abdallahabusidu/Interactive-comments-section",
    stars: null,
    forks: null,
    category: "Frontend",
  },
  {
    index: "25",
    title: "Intro Section with Dropdown",
    stack: ["JavaScript", "HTML", "CSS"],
    result:
      "Frontend Mentor challenge — accessible navigation with animated dropdown menus and full mobile responsiveness.",
    accent: "teal",
    href: "https://github.com/abdallahabusidu/intro-section-with-dropdown-navigation-main",
    stars: null,
    forks: null,
    category: "Frontend",
  },
  {
    index: "26",
    title: "Simple Portfolio 2025",
    stack: ["TypeScript", "React", "Tailwind"],
    result:
      "Clean minimal portfolio site built in 2025 with TypeScript and Tailwind, focusing on performance and simplicity.",
    accent: "amber",
    href: "https://github.com/abdallahabusidu/simple-portfolio-2025",
    stars: null,
    forks: null,
    category: "Frontend",
  },
  {
    index: "27",
    title: "Company Website",
    stack: ["TypeScript", "React"],
    result:
      "Corporate website template built in TypeScript — 1 fork on GitHub.",
    accent: "indigo",
    href: "https://github.com/abdallahabusidu/CompenyWebsite",
    stars: null,
    forks: 1,
    category: "Frontend",
  },
  {
    index: "28",
    title: "Instasedo V2",
    stack: ["JavaScript", "React"],
    result:
      "Social media-style application with post creation, feed, and interactions — 1 star on GitHub.",
    accent: "pink",
    href: "https://github.com/abdallahabusidu/instasedo-v2",
    stars: 1,
    forks: null,
    category: "Frontend",
  },
  {
    index: "29",
    title: "Car Store",
    stack: ["JavaScript", "React"],
    result:
      "E-commerce car store interface with product listings, filters, and detail views built in React.",
    accent: "teal",
    href: "https://github.com/abdallahabusidu/car_store",
    stars: null,
    forks: null,
    category: "Frontend",
  },
  {
    index: "30",
    title: "Brainstormy",
    stack: ["JavaScript", "React"],
    result:
      "Brainstorming and idea-organisation web application with drag-and-drop board layout.",
    accent: "amber",
    href: "https://github.com/abdallahabusidu/Brainstormy",
    stars: null,
    forks: null,
    category: "Frontend",
  },
  {
    index: "31",
    title: "Twitter Love Reaction",
    stack: ["HTML", "CSS", "JavaScript"],
    result:
      "Pixel-perfect recreation of Twitter's heart reaction animation — 1 star on GitHub.",
    accent: "pink",
    href: "https://github.com/abdallahabusidu/Twitter-Love-reaction",
    stars: 1,
    forks: null,
    category: "Frontend",
  },
  {
    index: "32",
    title: "Web Calculator",
    stack: ["JavaScript", "HTML", "CSS"],
    result:
      "Fully functional browser calculator with keyboard support and clean minimal design — 1 star.",
    accent: "teal",
    href: "https://github.com/abdallahabusidu/web-calculator",
    stars: 1,
    forks: null,
    category: "Frontend",
  },
  {
    index: "33",
    title: "Timer App",
    stack: ["JavaScript", "HTML", "CSS"],
    result:
      "Countdown and stopwatch timer app with clean UI and smooth animations — 3 stars on GitHub.",
    accent: "amber",
    href: "https://github.com/abdallahabusidu/timer",
    stars: 3,
    forks: null,
    category: "Frontend",
  },
  {
    index: "34",
    title: "Responsive Portfolio Vanilla JS",
    stack: ["JavaScript", "CSS", "HTML"],
    result:
      "Fully responsive portfolio website built with vanilla JavaScript — 2 stars on GitHub.",
    accent: "pink",
    href: "https://github.com/abdallahabusidu/Responsive-Portfolio-Js-vanilla",
    stars: 2,
    forks: null,
    category: "Frontend",
  },
  {
    index: "35",
    title: "Responsive Portfolio Website",
    stack: ["JavaScript", "HTML", "CSS"],
    result:
      "Early portfolio website focusing on responsive design and mobile-first layout — 1 star.",
    accent: "indigo",
    href: "https://github.com/abdallahabusidu/responsive-portfolio-website",
    stars: 1,
    forks: null,
    category: "Frontend",
  },
  {
    index: "36",
    title: "CV Webpage",
    stack: ["HTML", "CSS"],
    result:
      "HTML/CSS resume webpage — an early web project demonstrating semantic markup and print styling.",
    accent: "teal",
    href: "https://github.com/abdallahabusidu/CV-webpage-",
    stars: null,
    forks: null,
    category: "Frontend",
  },
  {
    index: "37",
    title: "Oud Frontend",
    stack: ["JavaScript", "React", "React-Router"],
    result:
      "Spotify-like music streaming service frontend with full playback UI, search, and playlists — 2 stars.",
    accent: "amber",
    href: "https://github.com/abdallahabusidu/oudFrontend",
    stars: 2,
    forks: null,
    category: "Frontend",
  },
  {
    index: "38",
    title: "Instafolio",
    stack: ["JavaScript", "React"],
    result:
      "Instabug coding challenge — fully responsive portfolio web app built with ReactJS — 1 star.",
    accent: "pink",
    href: "https://github.com/abdallahabusidu/Instafolio",
    stars: 1,
    forks: null,
    category: "Frontend",
  },
  {
    index: "39",
    title: "LevelUp E-Learning",
    stack: ["JavaScript", "React"],
    result:
      "E-learning platform interface with course listings, video player, and progress tracking.",
    accent: "teal",
    href: "https://github.com/abdallahabusidu/LevelUp_E-learning",
    stars: null,
    forks: null,
    category: "Frontend",
  },
  {
    index: "40",
    title: "Covid-19 Visualisation",
    stack: ["Vue.js", "Chart.js"],
    result:
      "Real-time COVID-19 data visualisation built with Vue.js and Chart.js, consuming a public REST API.",
    accent: "indigo",
    href: "https://github.com/abdallahabusidu/covid19-visualization",
    stars: null,
    forks: null,
    category: "Frontend",
  },
  {
    index: "41",
    title: "Chat Firebase",
    stack: ["Vue.js", "Firebase"],
    result:
      "Real-time chat application built with Vue.js and Firebase Auth + Realtime Database.",
    accent: "amber",
    href: "https://github.com/abdallahabusidu/chat-firebase",
    stars: null,
    forks: null,
    category: "Frontend",
  },
  {
    index: "42",
    title: "Planner Vue",
    stack: ["Vue.js"],
    result:
      "Task planner built with Vue.js featuring drag-and-drop cards and priority management.",
    accent: "pink",
    href: "https://github.com/abdallahabusidu/planner-vue",
    stars: null,
    forks: null,
    category: "Frontend",
  },
  {
    index: "43",
    title: "Reaction Timer Vue",
    stack: ["Vue.js"],
    result:
      "Human reaction speed test game built with Vue.js, tracking and charting multiple attempts.",
    accent: "teal",
    href: "https://github.com/abdallahabusidu/Reaction_Timer_vue",
    stars: null,
    forks: null,
    category: "Frontend",
  },
  {
    index: "44",
    title: "Music Player",
    stack: ["JavaScript", "HTML", "CSS"],
    result:
      "Browser-based music player with playlist management, progress bar, and animated artwork display.",
    accent: "indigo",
    href: "https://github.com/abdallahabusidu/music-player",
    stars: null,
    forks: null,
    category: "Frontend",
  },

  // ── Mobile ───────────────────────────────────────────────────────────────────
  {
    index: "45",
    title: "Ryde — Ride-Sharing App",
    stack: ["TypeScript", "React Native", "Expo", "NativeWind"],
    result:
      "Full-stack mobile ride-sharing application with real-time maps, booking flows, and driver dashboards.",
    accent: "teal",
    href: "https://github.com/abdallahabusidu/Ryde_JSM",
    stars: null,
    forks: null,
    category: "Mobile",
  },
  {
    index: "46",
    title: "React Native Learning",
    stack: ["JavaScript", "React Native"],
    result:
      "Learning project exploring React Native fundamentals — navigation, state management, and native APIs — 1 star.",
    accent: "amber",
    href: "https://github.com/abdallahabusidu/ReactNative",
    stars: 1,
    forks: null,
    category: "Mobile",
  },
  {
    index: "47",
    title: "Flutter CRUD Users",
    stack: ["Dart", "Flutter"],
    result:
      "Flutter application with full CRUD operations for user management using local state and REST API.",
    accent: "teal",
    href: "https://github.com/abdallahabusidu/CrudUser_Flutter",
    stars: null,
    forks: null,
    category: "Mobile",
  },
  {
    index: "48",
    title: "Flutter Calculator",
    stack: ["Dart", "Flutter"],
    result:
      "Clean and functional calculator application built with Flutter featuring smooth state management.",
    accent: "indigo",
    href: "https://github.com/abdallahabusidu/Calculator_Flutter",
    stars: null,
    forks: null,
    category: "Mobile",
  },
  {
    index: "49",
    title: "Flutter Profile Card",
    stack: ["Dart", "Flutter"],
    result:
      "Responsive Flutter profile card UI with custom theming and widget composition patterns.",
    accent: "amber",
    href: "https://github.com/abdallahabusidu/profile_Card_Flutter",
    stars: null,
    forks: null,
    category: "Mobile",
  },
  {
    index: "50",
    title: "Android Birthday Card",
    stack: ["Java", "Android"],
    result:
      "Android application for sending and displaying birthday greeting cards with custom animations.",
    accent: "pink",
    href: "https://github.com/abdallahabusidu/android-app-happy-birth-card-",
    stars: null,
    forks: null,
    category: "Mobile",
  },

  // ── Backend ──────────────────────────────────────────────────────────────────
  {
    index: "51",
    title: "Auth Backend",
    stack: ["JavaScript", "Node.js", "JWT", "Express"],
    result:
      "Full authentication backend with JWT, bcrypt password hashing, and REST API endpoints. MIT-licensed boilerplate.",
    accent: "indigo",
    href: "https://github.com/abdallahabusidu/auth-backend",
    stars: null,
    forks: null,
    category: "Backend",
  },
  {
    index: "52",
    title: "Bookmark NestJS",
    stack: ["TypeScript", "NestJS", "Prisma"],
    result:
      "RESTful bookmark management API built with NestJS and Prisma — JWT auth, guards, and e2e tests. 1 star.",
    accent: "teal",
    href: "https://github.com/abdallahabusidu/Bookmark-nestjs",
    stars: 1,
    forks: null,
    category: "Backend",
  },
  {
    index: "53",
    title: "Blogs Node.js Website",
    stack: ["JavaScript", "Node.js", "Express", "MongoDB"],
    result:
      "Full-stack blogging platform with EJS templating, MongoDB persistence, and Express routing.",
    accent: "amber",
    href: "https://github.com/abdallahabusidu/Blogs-NodeJs-website",
    stars: null,
    forks: null,
    category: "Backend",
  },

  // ── Education ────────────────────────────────────────────────────────────────
  {
    index: "54",
    title: "JSM Course",
    stack: ["TypeScript", "Next.js"],
    result:
      "JS Mastery private Next.js 15 course exercises and projects — 1 star on GitHub.",
    accent: "pink",
    href: "https://github.com/abdallahabusidu/jsm-course",
    stars: 1,
    forks: null,
    category: "Education",
  },
  {
    index: "55",
    title: "Learn Three.js",
    stack: ["JavaScript", "Three.js"],
    result:
      "Complete Three.js Journey course exercises — 90+ hours of immersive 3D web tutorials. 1 star, MIT licensed.",
    accent: "teal",
    href: "https://github.com/abdallahabusidu/Learn-ThreeJS",
    stars: 1,
    forks: null,
    category: "Education",
  },

  // ── CS ───────────────────────────────────────────────────────────────────────
  {
    index: "56",
    title: "Pathfinding Visualizer",
    stack: ["JavaScript", "BFS", "Dijkstra"],
    result:
      "Interactive graph algorithm visualiser supporting BFS, Dijkstra, and adjacency-matrix traversal — 2 stars.",
    accent: "pink",
    href: "https://github.com/abdallahabusidu/Pathfinding-Visualizer",
    stars: 2,
    forks: null,
    category: "CS",
  },
  {
    index: "57",
    title: "Pattern Search Algorithms",
    stack: ["C++"],
    result:
      "Implementations of Naive, Rabin-Karp, Finite Automata, and KMP string-search algorithms in C++ — 1 fork.",
    accent: "teal",
    href: "https://github.com/abdallahabusidu/PatternSearch-Algorthims",
    stars: null,
    forks: 1,
    category: "CS",
  },
  {
    index: "58",
    title: "OS Project CUFE 2022",
    stack: ["C"],
    result:
      "Operating systems university project from Cairo University — covers scheduling, memory management, and IPC.",
    accent: "amber",
    href: "https://github.com/abdallahabusidu/OS_Project_CUFE2022",
    stars: null,
    forks: null,
    category: "CS",
  },
  {
    index: "59",
    title: "Map-Reduce in Go",
    stack: ["Go"],
    result:
      "MapReduce distributed computing framework implementation in Go for processing large datasets.",
    accent: "indigo",
    href: "https://github.com/abdallahabusidu/Map-Reduce-GOLang",
    stars: null,
    forks: null,
    category: "CS",
  },
  {
    index: "60",
    title: "Recursive Merge Sort C++",
    stack: ["C++"],
    result:
      "Clean recursive merge sort implementation in C++ with time-complexity analysis and test cases.",
    accent: "pink",
    href: "https://github.com/abdallahabusidu/recursive-Merge-Sort-cpp",
    stars: null,
    forks: null,
    category: "CS",
  },
  {
    index: "61",
    title: "LZ77 Compression",
    stack: ["C++"],
    result:
      "LZ77 lossless data compression algorithm implementation in C++ with encode/decode pipeline.",
    accent: "teal",
    href: "https://github.com/abdallahabusidu/LZ77",
    stars: null,
    forks: null,
    category: "CS",
  },
  {
    index: "62",
    title: "Network Simulation",
    stack: ["C++"],
    result:
      "Low-level network simulation project modelling packet routing and protocol behaviour in C++.",
    accent: "amber",
    href: "https://github.com/abdallahabusidu/network",
    stars: null,
    forks: null,
    category: "CS",
  },
  {
    index: "63",
    title: "Codeforces Problems",
    stack: ["C++"],
    result:
      "Collection of competitive programming solutions to Codeforces problems across multiple difficulty ratings.",
    accent: "indigo",
    href: "https://github.com/abdallahabusidu/Code_forces_problems",
    stars: null,
    forks: null,
    category: "CS",
  },
  {
    index: "64",
    title: "Sorting Algorithms C++",
    stack: ["C++"],
    result:
      "C++ implementations of bubble, insertion, selection, merge, quick, and heap sort with benchmarks.",
    accent: "pink",
    href: "https://github.com/abdallahabusidu/Sorting-Algoritms",
    stars: null,
    forks: null,
    category: "CS",
  },
  {
    index: "65",
    title: "Java Introduction Assignment",
    stack: ["Java"],
    result:
      "Cairo University CMP306 Java introduction assignment covering OOP fundamentals and data structures.",
    accent: "teal",
    href: "https://github.com/abdallahabusidu/CMP306-Java-Introduction-Assignment1",
    stars: null,
    forks: null,
    category: "CS",
  },

  // ── ML / AI ──────────────────────────────────────────────────────────────────
  {
    index: "66",
    title: "Learn Machine Learning",
    stack: ["Python", "NumPy"],
    result:
      "Personal summary and exercises from Stanford University's ML course by Andrew Ng — 3 stars, MIT licensed.",
    accent: "amber",
    href: "https://github.com/abdallahabusidu/Learn_Machine_Learining",
    stars: 3,
    forks: null,
    category: "ML/AI",
  },
  {
    index: "67",
    title: "Linear Regression Exercise",
    stack: ["Python"],
    result:
      "Linear regression implementation from scratch in Python exploring gradient descent and cost functions. MIT licensed.",
    accent: "indigo",
    href: "https://github.com/abdallahabusidu/LinearRegressionEX",
    stars: null,
    forks: null,
    category: "ML/AI",
  },
  {
    index: "68",
    title: "Symphony — OMR System",
    stack: ["Python", "OpenCV"],
    result:
      "Optical Music Recognition system that detects and parses musical notation from sheet images — 1 star, 2 forks.",
    accent: "pink",
    href: "https://github.com/abdallahabusidu/Symphony",
    stars: 1,
    forks: 2,
    category: "ML/AI",
  },
  {
    index: "69",
    title: "Image Arithmetic Encoding",
    stack: ["Python"],
    result:
      "Arithmetic coding implementation for image compression — encodes to grayscale and reconstructs with full fidelity.",
    accent: "teal",
    href: "https://github.com/abdallahabusidu/Encoding-decodig-an-image-using-arithmetic-coding",
    stars: null,
    forks: null,
    category: "ML/AI",
  },

  // ── Hardware ─────────────────────────────────────────────────────────────────
  {
    index: "70",
    title: "DCNN — Deep CNN Chip",
    stack: ["VHDL"],
    result:
      "Low-level VHDL chip applying a CNN classifier on grayscale MNIST digits. 6 stars, 4 forks, MIT licensed.",
    accent: "amber",
    href: "https://github.com/abdallahabusidu/DCNN",
    stars: 6,
    forks: 4,
    category: "Hardware",
  },
  {
    index: "71",
    title: "Combinational Multiplier",
    stack: ["Verilog"],
    result:
      "Hardware combinational multiplier designed in Verilog HDL for VLSI implementation.",
    accent: "teal",
    href: "https://github.com/abdallahabusidu/Combinational-Multiplier",
    stars: null,
    forks: null,
    category: "Hardware",
  },
  {
    index: "72",
    title: "Introduction to Verilog",
    stack: ["Verilog"],
    result:
      "Introduction to Verilog for Integrated Circuit Design and VLSI technology — 1 star on GitHub.",
    accent: "indigo",
    href: "https://github.com/abdallahabusidu/CMP305-introduction-Verilog",
    stars: 1,
    forks: null,
    category: "Hardware",
  },
  {
    index: "73",
    title: "Arduino Cake Maker",
    stack: ["C++", "Arduino"],
    result:
      "Arduino automation project for a cake maker machine — motor control and sensor integration.",
    accent: "pink",
    href: "https://github.com/abdallahabusidu/cake_arduino_maker",
    stars: null,
    forks: null,
    category: "Hardware",
  },
  {
    index: "74",
    title: "Arduino Elevator",
    stack: ["C++", "Arduino"],
    result:
      "Arduino-based elevator simulator with floor sensors, motor driver, and LED floor indicators.",
    accent: "amber",
    href: "https://github.com/abdallahabusidu/elevator-in-Arduino-",
    stars: null,
    forks: null,
    category: "Hardware",
  },
  {
    index: "75",
    title: "Fire Fighter Robot",
    stack: ["C++", "Arduino"],
    result:
      "Autonomous fire-fighting robot with flame sensors, water pump, and directional motor control — 1 star.",
    accent: "teal",
    href: "https://github.com/abdallahabusidu/a-fire-fighter-robot-with-arduino",
    stars: 1,
    forks: null,
    category: "Hardware",
  },
  {
    index: "76",
    title: "LED Counter Arduino",
    stack: ["C++", "Arduino"],
    result:
      "21-LED counter using Arduino with binary and decimal display modes and debounced button input.",
    accent: "indigo",
    href: "https://github.com/abdallahabusidu/Logic-design-led-counter-",
    stars: null,
    forks: null,
    category: "Hardware",
  },
  {
    index: "77",
    title: "Arduino Counter",
    stack: ["C++", "Arduino"],
    result:
      "Buttonless counter using Arduino timers and interrupts — exploring hardware counter design patterns.",
    accent: "pink",
    href: "https://github.com/abdallahabusidu/counter-without-buttons-",
    stars: null,
    forks: null,
    category: "Hardware",
  },

  // ── Game ─────────────────────────────────────────────────────────────────────
  {
    index: "78",
    title: "Sky Invaders",
    stack: ["JavaScript", "Canvas"],
    result:
      "Space Invaders–style browser game built with vanilla JavaScript and Canvas API. MIT licensed.",
    accent: "pink",
    href: "https://github.com/abdallahabusidu/sky-invaders-",
    stars: null,
    forks: null,
    category: "Game",
  },
  {
    index: "79",
    title: "Memory Game C#",
    stack: ["C#", ".NET"],
    result:
      "Classic memory card-matching game built with C# and .NET — exploring WinForms UI and game logic.",
    accent: "teal",
    href: "https://github.com/abdallahabusidu/memory_game_C-",
    stars: null,
    forks: null,
    category: "Game",
  },
  {
    index: "80",
    title: "Pacman C#",
    stack: ["C#", ".NET"],
    result:
      "Full Pacman implementation in C# with ghost AI, score system, and level progression.",
    accent: "amber",
    href: "https://github.com/abdallahabusidu/pacman-c-sharp",
    stars: null,
    forks: null,
    category: "Game",
  },
  {
    index: "81",
    title: "Star Wars Game C#",
    stack: ["C#", ".NET"],
    result:
      "Star Wars–themed C# game with enemy spawning, projectile mechanics, and score tracking.",
    accent: "indigo",
    href: "https://github.com/abdallahabusidu/starwars_game_c-",
    stars: null,
    forks: null,
    category: "Game",
  },
  {
    index: "82",
    title: "FIRED OR TIRED",
    stack: ["Assembly x86"],
    result:
      "Two-player Assembly x86 shooting game where each player has a gun and can move and jump. MIT licensed.",
    accent: "pink",
    href: "https://github.com/abdallahabusidu/FIRED-OR-TIRED",
    stars: null,
    forks: null,
    category: "Game",
  },

  // ── Private ──────────────────────────────────────────────────────────────────
  {
    index: "83",
    title: "Eunx Investment Platform",
    stack: ["Next.js", "TypeScript", "Fintech", "Dashboard"],
    result:
      "Enterprise fintech investment platform and admin dashboard built for production at scale. Includes role-based workflows and high-performance UI patterns.",
    accent: "teal",
    href: null,
    stars: null,
    forks: null,
    category: "Private",
    isPrivate: true,
  },
  {
    index: "84",
    title: "Government Storytelling Experience",
    stack: ["React", "Three.js", "GSAP", "Creative Dev"],
    result:
      "Immersive interactive storytelling project delivered for a governmental client in Morocco with advanced motion design and performance optimization.",
    accent: "pink",
    href: null,
    stars: null,
    forks: null,
    category: "Private",
    isPrivate: true,
  },
  {
    index: "85",
    title: "Laundry Operations Dashboard",
    stack: ["React", "TypeScript", "Data Visualization", "Admin"],
    result:
      "Role-based operations dashboard for a US company to manage technicians, requests, and internal service workflows.",
    accent: "indigo",
    href: null,
    stars: null,
    forks: null,
    category: "Private",
    isPrivate: true,
  },
  {
    index: "86",
    title: "Enterprise CX/VX Dashboards",
    stack: ["Next.js", "React", "TypeScript", "B2B"],
    result:
      "Client-experience and operations dashboards built for enterprise product teams with investor-demo readiness and modular architecture.",
    accent: "amber",
    href: null,
    stars: null,
    forks: null,
    category: "Private",
    isPrivate: true,
  },
  {
    index: "87",
    title: "Douoon",
    stack: ["Next.js", "TypeScript", "Design System", "Product"],
    result:
      "Private production platform focused on premium UX journeys, conversion-ready interfaces, and scalable frontend architecture.",
    accent: "indigo",
    href: "https://www.douoon.com",
    stars: null,
    forks: null,
    category: "Frontend",
  },
  {
    index: "88",
    title: "Koapath",
    stack: ["React", "Node.js", "Analytics", "Dashboards"],
    result:
      "Private data-first workflow platform designed for operations teams with high-clarity reporting and streamlined flows.",
    accent: "teal",
    href: "https://www.koapath.com",
    stars: null,
    forks: null,
    category: "Frontend",
  },
  {
    index: "89",
    title: "Koapath Admin",
    stack: ["React", "TypeScript", "Dashboard", "Admin"],
    result:
      "Admin panel for the Koapath platform — role-based access control, team management, and analytics reporting built for internal operations.",
    accent: "indigo",
    href: null,
    stars: null,
    forks: null,
    category: "Private",
    isPrivate: true,
  },
];
