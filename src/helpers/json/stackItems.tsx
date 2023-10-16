import {
  Bootstrap,
  Css,
  Figma,
  Git,
  Html,
  Js,
  Photoshop,
  React,
  Sass,
  Tailwind,
  Ts,
  VisualCode,
} from '../../assets/stackIcons';

interface Props {
  id: number;
  name: {
    [key: string]: string;
  };
  icons: JSX.Element[];
}

export const stackItems: Props[] = [
  {
    id: 1,
    name: {
      en: 'Web',
      es: 'Web',
    },
    icons: [
      <Html className="icons__svg" />,
      <Css className="icons__svg" />,
      <Bootstrap className="icons__svg" />,
      <Sass className="icons__svg" />,
      <Tailwind className="icons__svg" />,
    ],
  },
  {
    id: 2,
    name: {
      en: 'Languages',
      es: 'Lenguajes',
    },
    icons: [<Js className="icons__svg" />, <Ts className="icons__svg" />],
  },
  {
    id: 3,
    name: {
      en: 'Design',
      es: 'Diseño',
    },
    icons: [<Photoshop className="icons__svg" />, <Figma className="icons__svg" />],
  },
  {
    id: 4,
    name: {
      en: 'Frameworks & libraries',
      es: 'Frameworks y librerías',
    },
    icons: [<React className="icons__svg" />],
  },
  {
    id: 5,
    name: {
      en: 'Other',
      es: 'Otros',
    },
    icons: [
      <Git className="icons__svg" />,
      <VisualCode className="icons__svg icons__svg--last" />,
    ],
  },
];
