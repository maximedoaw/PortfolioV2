export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Thibault Marlier',
      position: 'Flutter mobile developer',
      img: 'assets/review1.png',
      review:
        "Maxime is a competent full-stack developer, mastering technologies like Firebase, Next.js, and React. He is responsive, motivated, and quickly adapts to project needs. I highly recommend him for his web development skills",
    },
    {
      id: 2,
      name: 'Tchango Louis Miller',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.jpg',
      review:
        'I worked with Maxime Doaw Doaw during his internship and was impressed by his skills in React.js, Node.js, and JavaScript. He is hardworking, determined, and always eager to learn. He has a good grasp of key concepts and can implement effective solutions. I highly recommend him for any web development project. He has great potential, and I am confident he will continue to grow in his career',
    },

  ];
  
  export const myProjects = [
    {
      title: 'IMDB clone - streaming app',
      desc: 'It is a clone of a amazing website call IMDB',
      subdesc: 'I build this app with Next.JS 14 and Taildwind CSS',
      href: 'https://github.com/maximedoaw/IMDBclone.git',
      texture: '/textures/project/project1.PNG',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'Next.js',
          path: '/assets/Nextjs.svg',
        },
        {
          id: 2,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 3,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },

      ],
    },
    {
      title: 'X-clone - Social media app',
      desc: 'It is an social media app similar to X with the feature like post,like and comment',
      subdesc:'This app use Next.JS 14, Taildwind CSS, Recoil for state management and firebase for storage and database',
      href: 'https://x-clone-brown.vercel.app/',
      texture: '/textures/project/project2.PNG',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'Next.js',
          path: '/assets/Nextjs.svg',
        },
        {
          id: 2,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 3,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 4,
          name: 'Recoil',
          path: 'assets/recoil.svg',
        },    
        {
          id: 5,
          name: 'Firebase',
          path: '/assets/firebase.png',
        },
      ],
    },
    {
      title: 'Evently - event app',
      desc: 'Evenly is a modern event web app',
      subdesc:
        'By using Next.js,TypeScript, TailwindCSS and Firebase.',
      href: 'https://github.com/maximedoaw/Evently.git',
      texture: '/textures/project/project3.PNG',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'Next.js',
          path: '/assets/Nextjs.svg',
        },
        {
          id: 2,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 3,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 4,
          name: 'Firebase',
          path: '/assets/firebase.png',
        },

      ],
    },
    {
      title: 'Google clone - search engine',
      desc: 'Google clone is a search engine',
      subdesc:
        'Built with Next.js 14 , Taildwind CSS',
      href: 'https://github.com/maximedoaw/google-search-clone.git',
      texture: '/textures/project/project4.PNG',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'Next.js',
          path: '/assets/Nextjs.svg',
        },
        {
          id: 2,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 3,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Software Engineer',
      pos: 'Independant',
      duration: '2024 - Present',
      title: "I provide scalable websites and web applications using next.js,react,firebase,recoil",
      icon: '/assets/Maxime.jpg',
      animation: 'salute',
    },
    {
      id: 2,
      name: 'Twingo SARL',
      pos: 'Junior web developer',
      duration: '2024 - Present',
      title: "Twingo is a digital service who provide website and network service. I'm worked with react.js,next.js and AppWrite",
      icon: '/assets/Twingo.PNG',
      animation: 'victory',
    },
    {
      id: 3,
      name: 'Mvengineering',
      pos: 'Intern in web development',
      duration: '2023 - 2024',
      title: "I'm learn a fondamental notion of react.js and i built an app using react.js and firebase",
      icon: '/assets/MV.png',
      animation: 'clapping',
    },
  ];