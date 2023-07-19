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
  Ts,
  VisualCode,
} from '../../assets/stackIcons';

interface Props {
  id: number;
  name: string;
  icons: JSX.Element[];
}

export const stackItems: Props[] = [
  {
    id: 1,
    name: 'Web',
    icons: [
      <Html className="icons__svg" />,
      <Css className="icons__svg" />,
      <Bootstrap className="icons__svg" />,
      <Sass className="icons__svg" />,
    ],
  },
  {
    id: 2,
    name: 'Languages',
    icons: [<Js className="icons__svg" />, <Ts className="icons__svg" />],
  },
  {
    id: 3,
    name: 'Design',
    icons: [<Photoshop className="icons__svg" />, <Figma className="icons__svg" />],
  },
  {
    id: 4,
    name: 'Frameworks & libraries',
    icons: [<React className="icons__svg" />],
  },
  {
    id: 5,
    name: 'Other',
    icons: [<Git className="icons__svg" />, <VisualCode className="icons__svg" />],
  },
];
