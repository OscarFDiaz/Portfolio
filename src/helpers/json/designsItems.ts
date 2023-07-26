interface Props {
  id: number;
  name: string;
  img: {
    src: string;
    alt: string;
  };
  tags: string[];
  anchor_behance: {
    href: string;
    title: string;
  };
}

export const designsItems: Props[] = [
  {
    id: 1,
    name: 'Golf App',
    img: {
      src: 'https://mir-s3-cdn-cf.behance.net/projects/808/d015ca174407805.Y3JvcCw2MDYwLDQ3NDAsMCww.jpg',
      alt: 'Image Golf app',
    },
    tags: ['FIGMA', 'GOLF', 'GOLFING', 'COURSE'],
    anchor_behance: {
      href: 'https://www.behance.net/gallery/174407805/GOLF-APP-APP-UI-DESIGN',
      title: 'Link to golf app design',
    },
  },
  {
    id: 2,
    name: 'Envio Express',
    img: {
      src: 'https://mir-s3-cdn-cf.behance.net/projects/808/b68bf6174406569.Y3JvcCw2MDYwLDQ3NDAsMCww.jpg',
      alt: 'Image envio express',
    },
    tags: ['FIGMA', 'FANCY', 'DELIVERY'],
    anchor_behance: {
      href: 'https://www.behance.net/gallery/174406569/ENVIO-EXPRESS-APP-APP-UI-DESIGN',
      title: 'Link to envio express design',
    },
  },
  {
    id: 3,
    name: 'VIRTECH',
    img: {
      src: 'https://mir-s3-cdn-cf.behance.net/projects/808/b3d4e6176257477.Y3JvcCwyNDI0LDE4OTYsMCww.png',
      alt: 'Image Virtech',
    },
    tags: ['FIGMA', 'REDESING', 'WEB'],
    anchor_behance: {
      href: 'https://www.behance.net/gallery/176257477/VIRTECH-REDESIGN-WEB-UI-DESIGN',
      title: 'Link to VIRTECH design',
    },
  },
  {
    id: 4,
    name: 'Delivery App',
    img: {
      src: 'https://mir-s3-cdn-cf.behance.net/projects/808/1eca04155321609.Y3JvcCwzMTQyLDI0NTgsMCww.jpg',
      alt: 'Image Virtech',
    },
    tags: ['FIGMA', 'DELIVERY', 'FOOD', 'MENU'],
    anchor_behance: {
      href: 'https://www.behance.net/gallery/155321609/DELIVERY-APP-APP-DELIVERY-UI-DESIGN',
      title: 'Link to Virtech delivery app design',
    },
  },
  {
    id: 5,
    name: 'FintechX',
    img: {
      src: 'https://mir-s3-cdn-cf.behance.net/projects/808/010935149120825.Y3JvcCwyMDMwLDE1ODgsMjUsMA.jpg',
      alt: 'Image Fintechx',
    },
    tags: ['FIGMA', 'BANK', 'FINANCE', 'LOANS'],
    anchor_behance: {
      href: 'https://www.behance.net/gallery/149120825/FINTECHX-BANKING-APP-UI-APP-DESIGN',
      title: 'Link to Fintechx banking app design',
    },
  },
];
