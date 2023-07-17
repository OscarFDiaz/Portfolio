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
    anchor: {
      href: '#home',
      title: 'Link to home section',
    },
    name: 'Home',
  },
  {
    id: 2,
    anchor: {
      href: '#about',
      title: 'Link to about section',
    },
    name: 'About',
  },
  {
    id: 3,
    anchor: {
      href: '#works',
      title: 'Link to works section',
    },
    name: 'Works',
  },
  {
    id: 4,
    anchor: {
      href: '#contact',
      title: 'Link to contact section',
    },
    name: 'Contact',
  },
];
