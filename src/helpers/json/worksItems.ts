interface Props {
  id: number;
  name: string;
  description: string;
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
    description:
      'Aplicación movil, para el control de gastos y manejo de finanzas personales. 💸',
    img: {
      src: 'https://camo.githubusercontent.com/80d27b366c1b176e9d563db049c8a5df70527ae9e085501c238e78e3d5c26e45/68747470733a2f2f692e696d6775722e636f6d2f49524e303576622e706e67',
      alt: 'Imagen promocional Flynanz',
    },
    tags: ['JS', 'CSS', 'HTML', 'Cordova'],
    anchor_live: {
      href: 'https://play.google.com/store/apps/details?id=com.oscar.diaz',
      title: 'Link a Playstore de la aplicación',
    },
    anchor_github: {
      href: 'https://github.com/OscarFDiaz/Flynanz_App',
      title: 'Link al repositorio de la aplicación',
    },
  },
  {
    id: 2,
    name: 'MERN Calendar',
    description: '📅 Aplicación React para crear un calendario de eventos [MERN]',
    img: {
      src: 'https://i.imgur.com/oMrZDLF.png',
      alt: 'Imagen de la aplicación',
    },
    tags: ['MERN', 'JS', 'AXIOS', 'ROUTERDOM'],
    anchor_live: {
      href: 'https://oscarfdiaz.github.io/mern-calendar/',
      title: 'Link a prueba online',
    },
    anchor_github: {
      href: 'https://github.com/OscarFDiaz/mern-calendar',
      title: 'Link a github del proyecto',
    },
  },
  {
    id: 3,
    name: 'Diario Personal',
    description: '📰 Aplicación React para crear un diario personal',
    img: {
      src: 'https://i.imgur.com/qhlxj2f.png',
      alt: 'Imagen de la aplicación',
    },
    tags: ['FIREBASE', 'REDUX', 'MUI', 'REACT'],
    anchor_live: {
      href: 'https://oscarfdiaz.github.io/react-journal-app/',
      title: 'Link a prueba online',
    },
    anchor_github: {
      href: 'https://github.com/OscarFDiaz/react-journal-app',
      title: 'Link a github del proyecto',
    },
  },
  {
    id: 4,
    name: 'Heroes App',
    description: '🦸‍♀️ Aplicación React de heroes de DC y Marvel',
    img: {
      src: 'https://i.imgur.com/TeZaTFS.png',
      alt: 'Imagen de la aplicación',
    },
    tags: ['BOOTSTRAP', 'ROUTERDOM', 'REACT'],
    anchor_live: {
      href: 'https://oscarfdiaz.github.io/react-heroes-app/',
      title: 'Link a prueba online',
    },
    anchor_github: {
      href: 'https://github.com/OscarFDiaz/react-heroes-app',
      title: 'Link a github del proyecto',
    },
  },
  {
    id: 5,
    name: 'AddWatermark',
    description:
      '📷 Permite añadir una marca de agua a una o más imágenes, para descargarlas',
    img: {
      src: 'https://i.imgur.com/ibCGp5H.png',
      alt: 'Imagen de la aplicación',
    },
    tags: ['JSZIP', 'JQUERY', 'HTML', 'CSS'],
    anchor_live: {
      href: 'https://oscarfdiaz.github.io/AddWaterMarkToImage/',
      title: 'Link a prueba online',
    },
    anchor_github: {
      href: 'https://github.com/OscarFDiaz/AddWaterMarkToImage',
      title: 'Link a github del proyecto',
    },
  },
];
