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
    name: 'GasoMX',
    description: {
      es: '⛽ Encuentra gasolina barata en México en tiempo real. Compara precios de Regular, Premium y Diesel en gasolineras cerca de ti.',
      en: '⛽ Find cheap gas in Mexico in real time. Compare Regular, Premium and Diesel prices at nearby stations.',
    },
    img: {
      src: 'https://www.gasomx.app/og-image.jpg',
      alt: 'GasoMX image',
    },
    tags: ['NEXT.JS', 'REACT', 'TS', 'TAILWIND'],
    anchor_live: {
      href: 'https://gasomx.app/',
      title: 'Link to GasoMX',
    },
    anchor_github: {
      href: 'https://github.com/OscarFDiaz',
      title: 'Private repository',
    },
  },
  {
    id: 2,
    name: 'Alcanza',
    description: {
      es: '💳 App de escritorio que lee tus estados de cuenta y te dice si te alcanza para pagar tus tarjetas sin intereses. Tus datos no salen de tu computadora.',
      en: '💳 Desktop app that reads your bank statements and tells you if you can pay your credit cards without interest. Your data never leaves your computer.',
    },
    img: {
      src: 'https://alcanzafinanzas.app/media/og.png',
      alt: 'Alcanza app image',
    },
    tags: ['ELECTRON', 'REACT', 'TS', 'TAILWIND'],
    anchor_live: {
      href: 'https://alcanzafinanzas.app/',
      title: 'Link to Alcanza',
    },
    anchor_github: {
      href: 'https://github.com/OscarFDiaz/alcanza-releases',
      title: 'Link to Github releases',
    },
  },
  {
    id: 3,
    name: 'Flynanz',
    description: {
      es: 'Aplicación móvil, para el control de gastos y manejo de finanzas personales. 💸',
      en: 'Mobile application for expense tracking and personal finance management. 💸',
    },
    img: {
      src: 'https://i.imgur.com/0smO2WW.jpeg',
      alt: 'Flynanz image',
    },
    tags: ['JS', 'CSS', 'HTML', 'Cordova'],
    anchor_live: {
      href: 'https://oscarfdiaz.github.io/Flynanz_Web/',
      title: 'Link to Web',
    },
    anchor_github: {
      href: 'https://github.com/OscarFDiaz/Flynanz_App',
      title: 'Link to Github repository',
    },
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
