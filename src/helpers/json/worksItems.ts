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
      es: 'Aplicación movil, para el control de gastos y manejo de finanzas personales. 💸',
      en: 'Mobile application for expense tracking and personal finance management. 💸',
    },
    img: {
      src: 'https://camo.githubusercontent.com/80d27b366c1b176e9d563db049c8a5df70527ae9e085501c238e78e3d5c26e45/68747470733a2f2f692e696d6775722e636f6d2f49524e303576622e706e67',
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
      src: 'https://i.imgur.com/oMrZDLF.png',
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
    name: 'Diario Personal',
    description: {
      es: '📰 Aplicación React para crear un diario personal',
      en: '📰 React application to create a personal diary',
    },
    img: {
      src: 'https://i.imgur.com/qhlxj2f.png',
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
    name: 'AddWatermark',
    description: {
      es: '📷 Permite añadir una marca de agua a una o más imágenes, para descargarlas',
      en: '📷 Allows you to add a watermark to one or more images for downloading.',
    },
    img: {
      src: 'https://i.imgur.com/ibCGp5H.png',
      alt: 'Addwatermark app image',
    },
    tags: ['JSZIP', 'JQUERY', 'HTML', 'CSS'],
    anchor_live: {
      href: 'https://oscarfdiaz.github.io/AddWaterMarkToImage/',
      title: 'Link to online page',
    },
    anchor_github: {
      href: 'https://github.com/OscarFDiaz/AddWaterMarkToImage',
      title: 'Link to Github repository',
    },
  },
];
