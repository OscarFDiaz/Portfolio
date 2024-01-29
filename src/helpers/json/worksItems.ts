interface Props {
  id: number;
  name: string;
  description: {
    [key: string]: string;
  };
  img: {
    src: string;
    alt: string;
  };
  tags: string[];
  anchor_live: {
    href: string;
    title: string;
  };
  anchor_github: {
    href: string;
    title: string;
  };
}

export const worksItems: Props[] = [
  {
    id: 1,
    name: 'Flynanz',
    description: {
      es: 'Aplicación móvil, para el control de gastos y manejo de finanzas personales. 💸',
      en: 'Mobile application for expense tracking and personal finance management. 💸',
    },
    img: {
      src: 'https://camo.githubusercontent.com/752524630c123ede184ae2e53c19328e73b6ad2eaa1cf3c6a3022a9cfadb5308/68747470733a2f2f692e696d6775722e636f6d2f49524e303576622e706e67',
      alt: 'Flynanz image',
    },
    tags: ['JS', 'CSS', 'HTML', 'Cordova'],
    anchor_live: {
      href: 'https://play.google.com/store/apps/details?id=com.oscar.diaz',
      title: 'Link to Playstore',
    },
    anchor_github: {
      href: 'https://github.com/OscarFDiaz/Flynanz_App',
      title: 'Link to Github repository',
    },
  },
  {
    id: 2,
    name: 'MERN Calendar',
    description: {
      es: '📅 Aplicación React para crear un calendario de eventos [MERN]',
      en: '📅 React application to create an event calendar [MERN].',
    },
    img: {
      src: 'https://i.imgur.com/RRGYgCP.png',
      alt: 'MERN app image',
    },
    tags: ['MERN', 'JS', 'AXIOS', 'ROUTERDOM'],
    anchor_live: {
      href: 'https://oscarfdiaz.github.io/mern-calendar/',
      title: 'Link to online page',
    },
    anchor_github: {
      href: 'https://github.com/OscarFDiaz/mern-calendar',
      title: 'Link to Github repository',
    },
  },
  {
    id: 3,
    name: 'Personal Diary',
    description: {
      es: '📰 Aplicación React para crear un diario personal',
      en: '📰 React application to create a personal diary',
    },
    img: {
      src: 'https://i.imgur.com/UzSh2LU.png',
      alt: 'Diario app image',
    },
    tags: ['FIREBASE', 'REDUX', 'MUI', 'REACT'],
    anchor_live: {
      href: 'https://oscarfdiaz.github.io/react-journal-app/',
      title: 'Link to online page',
    },
    anchor_github: {
      href: 'https://github.com/OscarFDiaz/react-journal-app',
      title: 'Link to Github repository',
    },
  },
  {
    id: 4,
    name: 'Tlak!',
    description: {
      es: '🌐 Aprende una palabra en inglés diariamente, con sonido y ejemplos',
      en: '🌐 Learn an English word daily, with sound and examples',
    },
    img: {
      src: 'https://i.imgur.com/dPMVa8b.jpg',
      alt: 'Tlak app image',
    },
    tags: ['TAILWIND', 'ZUSTAND', 'REACT'],
    anchor_live: {
      href: 'https://oscarfdiaz.github.io/TlakApp/',
      title: 'Link to online page',
    },
    anchor_github: {
      href: 'https://github.com/OscarFDiaz/TlakApp',
      title: 'Link to Github repository',
    },
  },
  {
    id: 5,
    name: 'EGEL: Help',
    description: {
      es: '📚👨‍🎓 Ayuda para estudiar el examen Ceneval EGEL Plus INFO',
      en: '📚👨‍🎓 Help to study for the Ceneval EGEL Plus exam INFO',
    },
    img: {
      src: 'https://i.imgur.com/Xl5bPXC.png',
      alt: 'EGEL: Help app image',
    },
    tags: ['REACT', 'SASS', 'CSS', 'animate.css'],
    anchor_live: {
      href: 'https://oscarfdiaz.github.io/EGEL_Help/',
      title: 'Link to online page',
    },
    anchor_github: {
      href: 'https://github.com/OscarFDiaz/EGEL_Help',
      title: 'Link to Github repository',
    },
  },
];
