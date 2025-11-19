export const technologies = [
  {
    name: "Cpp",
    icon: "/assets/technos/cpp.png",
  },
  {
    name: "C",
    icon: "/assets/technos/c.png",
  },
  {
    name: "Java",
    icon: "/assets/technos/java.png",
  },
  // {
  //   name: "Python",
  //   icon: "/assets/technos/python.png",
  // },
  {
    name: "Csharp",
    icon: "/assets/technos/csharp.png",
  },
  {
    name: "SpringBoot",
    icon: "/assets/technos/spring.png",
  },
  {
    name: "Node JS",
    icon: "/assets/technos/nodejs.png",
  },
  {
    name: "Angular",
    icon: "/assets/technos/angular.png",
  },
  {
    name: "React JS",
    icon: "/assets/technos/reactjs.png",
  },
  {
    name: "JavaScript",
    icon: "/assets/technos/javascript.png",
  },
  {
    name: "TypeScript",
    icon: "/assets/technos/typescript.png",
  },
  {
    name: "Threejs",
    icon: "/assets/technos/threejs.svg",
  },
  {
    name: "Docker",
    icon: "/assets/technos/docker.png",
  },
];

export const navLinks = [
  {
    id: 1,
    name: 'Accueil',
    href: '#home',
  },
  {
    id: 2,
    name: 'À propos',
    href: '#about',
  },
  {
    id: 3,
    name: 'Expériences',
    href: '#work',
  },
  {
    id: 4,
    name: 'Formation',
    href: '#education',
  },
  {
    id: 5,
    name: 'Projets',
    href: '#projects',
  },
  {
    id: 6,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: "NewsSpectrum - Plateforme d'Analyse Médiatique",
    desc: "NewsSpectrum est un projet de 2ᵉ année, réalisé en groupe de trois, visant à comparer des articles issus de différentes sources médiatiques pour mettre en évidence d'éventuels biais politiques. Le backend en Spring Boot et Java, associé à une base PostgreSQL conteneurisée via Docker, offre une architecture robuste et fiable.",
    subdesc:
      "L'interface, développée avec Angular, TypeScript, HTML et CSS, propose une expérience intuitive incluant recherche avancée et catégorisation par orientation médiatique. Le développement en équipe a été facilité par Git, garantissant une bonne coordination et un suivi propre du code.",
    href: 'https://github.com/Saad-eng-pr/News-Spectrum',
    texture: '/textures/project/news.mp4',
    logo: '/assets/newsSpectrum.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/lighterBlueSpotlight.png',
    tags: [
      {
        id: 1,
        name: 'Spring-boot',
        path: '/assets/technos/spring.png',
      },
      {
        id: 2,
        name: 'Java',
        path: '/assets/technos/java.png',
      },
      {
        id: 3,
        name: 'Angular',
        path: 'assets/technos/angular.png',
      },
      {
        id: 4,
        name: 'TypeScript',
        path: '/assets/technos/typescript.png',
      },
      {
        id: 5,
        name: 'PostgreSql',
        path: '/assets/technos/postgresql.png',
      },
      {
        id: 6,
        name: 'Docker',
        path: '/assets/technos/docker.png',
      },
    ],
  },
  {
    title: 'FilmFinder - API de Recherche de Films',
    desc: "FilmFinder est un projet réalisé en groupe de trois, visant à développer une API RESTful pour rechercher, administrer et paginer des films, avec une validation stricte des données. Le backend en .NET et C# est sécurisé par une authentification JWT, et les données sont stockées dans une base SQLite.",
    subdesc:
      "Le projet inclut aussi une interface web développée avec Blazor, HTML et CSS, offrant une gestion intuitive des films. Le travail en équipe a été coordonné via Git, assurant un versionnement clair et efficace.",
    href: 'https://github.com/Saad-eng-pr/Film-Finder',
    texture: '/textures/project/filmFinder.mp4',
    logo: '/assets/filmFinder.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/purpleSpotlight.png',
    tags: [
      {
        id: 1,
        name: '.Net',
        path: '/assets/technos/dotnet.png',
      },
      {
        id: 2,
        name: 'C#',
        path: 'assets/technos/csharp.png',
      },
      {
        id: 3,
        name: 'Blazor',
        path: '/assets/technos/blazor.png',
      },
      {
        id: 4,
        name: 'Sqlite',
        path: '/assets/technos/sqlite.png',
      },
    ],
  },
  {
    title: 'Pentago - Jeu de Société et IA 1',
    desc: "Pentago fait partie du projet de 1ʳᵉ année, et consistait à développer une intelligence artificielle pour le jeu Pentago en utilisant l'algorithme MINIMAX, combiné à des principes d'apprentissage par renforcement. L'ensemble de la logique de l'IA a été implémenté en C pour garantir de bonnes performances.",
    subdesc:
      "Une interface graphique a également été développée avec SDL/SDL2, permettant de jouer contre l'IA et de visualiser les actions en temps réel. Le projet a été organisé et versionné à l'aide de Git.",
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/pentago.mp4',
    logo: '/assets/pentago.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/brownSpotlight.png',
    tags: [
      {
        id: 1,
        name: 'C',
        path: '/assets/technos/c.png',
      },
      {
        id: 2,
        name: 'SDL',
        path: 'assets/technos/sdl.png',
      },
    ],
  },
  {
    title: 'Roll For It - Jeu de Société et IA 2',
    desc: "Le projet RollForIt consistait à développer une intelligence artificielle pour le jeu Roll for It, en utilisant l'algorithme MCTS (Monte Carlo Tree Search) afin de simuler et analyser différents scénarios de jeu pour prendre des décisions optimales. L'ensemble de la logique de l'IA a été implémenté en C pour garantir des performances efficaces.",
    subdesc:
      "Une interface graphique a également été créée avec SDL/SDL2, permettant de jouer contre l’IA et de visualiser les actions en temps réel. Le projet a été organisé et versionné avec Git.",
    href: 'https://github.com/Saad-eng-pr/Roll-For-It',
    texture: '/textures/project/roll-for-it.mp4',
    logo: '/assets/roll-for-it.png',
    logoStyle: {
      backgroundColor: '#243D22',
      border: '0.2px solid #243D22',
      boxShadow: '0px 0px 60px 0px #243D22',
    },
    spotlight: '/assets/greenSpotlight.png',
    tags: [
      {
        id: 1,
        name: 'C',
        path: '/assets/technos/c.png',
      },
      {
        id: 2,
        name: 'SDL',
        path: 'assets/technos/sdl.png',
      },
    ],
  },
  // {
  //   title: 'Imaginify - AI Photo Manipulation App',
  //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
  //   subdesc:
  //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
  //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
  //   texture: '/textures/project/project5.mp4',
  //   logo: '/assets/project-logo5.png',
  //   logoStyle: {
  //     backgroundColor: '#1C1A43',
  //     border: '0.2px solid #252262',
  //     boxShadow: '0px 0px 60px 0px #635BFF4D',
  //   },
  //   spotlight: '/assets/spotlight5.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    javaPosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 2, 0] : isMobile ? [5, 4, 0] : isTablet ? [10, 4, 0] : [12, 1, 0],
    angularLogoPosition: isSmall ? [4, -1, 0] : isMobile ? [5, 2, 0] : isTablet ? [10, 1, 0] : [12, -2, 0],
    cppPosition: isSmall ? [-5, 2, 0] : isMobile ? [-7, 3, 0] : isTablet ? [-10, 2, 0] : [-12, 1, 0],
    csharpPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-15, -10, -15],
    javascriptPosition: isSmall ? [-5, -1, 0] : isMobile ? [-6, 2, 0] : isTablet ? [-11, -2, 0] : [-12, -3, 0],
    rubiksCubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [12, -8, 0],
    pyraminxPosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [-13, -8, 0],
    skewCubePosition: isSmall ? [3, 2, 0] : isMobile ? [5, 4, 0] : isTablet ? [10, 4, 0] : [13, 4, 0],
    skewedCubePosition: isSmall ? [3, 2, 0] : isMobile ? [5, 4, 0] : isTablet ? [10, 4, 0] : [-13, 4, 0],
    pawnChessPosition: isSmall ? [0, -2, 0] : isMobile ? [1, -3.2, 0] : isTablet ? [2, -3.5, 0] : [15, -5, 0],
    queenChessPosition: isSmall ? [-1.5, -3.2, 0] : isMobile ? [-2.5, -4, 0] : isTablet ? [-4, -4.3, 0] : [-9, 1.5, 0],
    knightChessPosition: isSmall ? [1.5, -3.2, 0] : isMobile ? [2.5, -4, 0] : isTablet ? [4, -4.3, 0] : [8, 2, 0],
    rookChessPosition: isSmall ? [-1, -6, 0] : isMobile ? [-2, -7, 0] : isTablet ? [-3.5, -7.2, 0] : [-22, -12, 0],
  };
};




export const workExperiences = [
  {
    id: 1,
    name: 'Service Université Handicap - UCA (SUH)',
    pos: 'Tuteur académique',
    location: 'Clermont-Ferrand',
    duration: 'Octobre 2025 - Présent',
    title: "Tutorat d'un étudiant à l'ISIMA pour soutenir sa réussite académique, avec des séances dédiées à l'explication du cours et à la correction des exercices et examens, tout en adaptant l'accompagnement à ses besoins.",
    icon: '/assets/uca1.png',
  },
  {
    id: 2,
    name: 'McSport® - Fanzone',
    pos: ' Stage Développeur Web & Assistant Chef de Projet',
    location: 'Île-de-France',
    duration: 'Avril - Aout 2025 (5 mois)',
    title: "Durant mon stage chez McSport, j'ai travaillé comme Développeur Web et Assistant Chef de Projet. J'ai développé des POC en React pour valider des choix techniques, contribué à la conception UX/UI sur Figma, et rédigé la documentation associée. J'ai également assisté le chef de projet dans le suivi des tâches, la coordination, ainsi que dans la rédaction du cahier des charges, ce qui m'a permis de développer mes compétences en développement web et en gestion de projet.",
    icon: '/assets/mcsport.png'
  },
  {
    id: 3,
    name: 'RGIS',
    pos: 'Inventoriste / Auditeur en inventaire',
    location: 'Clermont-Ferrand',
    duration: 'Aout 2024 - Octobre 2024',
    title: "Réalisation d'inventaires pour vérifier et enregistrer les stocks, en assurant la précision des données et le respect des procédures.",
    icon: '/assets/rgis-web-logo.svg',
  },
];

export const parcoursAcademique = [
  {
    id: 1,
    name: "Diplôme d'Ingénieur en Informatique ISIMA",
    school:"ISIMA (Institut Supérieur d'Informatique, de Modélisation et de leurs Applications)",
    speciality: 'Génie logiciel et systèmes informatiques (BAC+5)',
    location: 'Clermont-Ferrand',
    duration: 'Septembre 2023 - Septembre 2026',
    cours: "Cours : C++, C, Java, C#, UML, Sécurité réseaux, Devops, Développement web, Développment mobile, Deep learning, Python",
    icon: '/assets/isima.png',
  },
  {
    id: 2,
    name: 'Classes Préparatoires',
    speciality: 'Mathématiques et Physiques (MP)',
    school : "CPGE Carnot Prépas",
    location: 'MEKNES - Maroc',
    duration: '2019 - 2023',
    icon: '/assets/cpge.png',
  },
  {
    id: 3,
    name: 'Baccalauréat en sciences mathes A',
    speciality: 'Sciences mathématiques A (Option Français) ',
    school : "Etablissement Scolaire Emile Anouar",
    location: 'MEKNES - Maroc',
    duration: 'Juin 2023',
    icon: '/assets/emile.png',
  }
];
