interface Props {
  id: number;
  anchor: {
    href: string;
    title: string;
  };
  name: string;
}

export const navigatorItems: Props[] = [
  {
    id: 1,
    name: 'Home',
    anchor: {
      href: '#home',
      title: 'Link to home section',
    },
  },
  {
    id: 2,
    name: 'About',
    anchor: {
      href: '#about',
      title: 'Link to about section',
    },
  },
  {
    id: 3,
    name: 'Works',
    anchor: {
      href: '#works',
      title: 'Link to works section',
    },
  },
  {
    id: 4,
    name: 'Contact',
    anchor: {
      href: '#contact',
      title: 'Link to contact section',
    },
  },
];
