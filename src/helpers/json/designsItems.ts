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
      alt: 'Imagen del diseño Golf app',
    },
    tags: ['FIGMA', 'GOLF', 'GOLFING', 'COURSE'],
    anchor_behance: {
      href: 'https://www.behance.net/gallery/174407805/GOLF-APP-APP-UI-DESIGN',
      title: 'Link al diseño de golf app',
    },
  },
  {
    id: 2,
    name: 'Envio Express',
    img: {
      src: 'https://mir-s3-cdn-cf.behance.net/projects/808/b68bf6174406569.Y3JvcCw2MDYwLDQ3NDAsMCww.jpg',
      alt: 'Imagen del diseño de envio express',
    },
    tags: ['FIGMA', 'FANCY', 'DELIVERY'],
    anchor_behance: {
      href: 'https://www.behance.net/gallery/174406569/ENVIO-EXPRESS-APP-APP-UI-DESIGN',
      title: 'Link al diseño de envio express',
    },
  },
  {
    id: 3,
    name: 'AIRGRO',
    img: {
      src: 'https://mir-s3-cdn-cf.behance.net/projects/808/c66881172646759.Y3JvcCw2MDYwLDQ3NDAsMCww.jpg',
      alt: 'Imagen del diseño de AIRGRO',
    },
    tags: ['FIGMA', 'ECOMMERCE', 'STORE'],
    anchor_behance: {
      href: 'https://www.behance.net/gallery/172646759/AIRGRO-APP-UI-DESIGN',
      title: 'Link al diseño de AIRGRO',
    },
  },
  {
    id: 4,
    name: 'Delivery App',
    img: {
      src: 'https://mir-s3-cdn-cf.behance.net/projects/808/1eca04155321609.Y3JvcCwzMTQyLDI0NTgsMCww.jpg',
      alt: 'Imagen del diseño de Virtech',
    },
    tags: ['FIGMA', 'DELIVERY', 'FOOD', 'MENU'],
    anchor_behance: {
      href: 'https://www.behance.net/gallery/155321609/DELIVERY-APP-APP-DELIVERY-UI-DESIGN',
      title: 'Link al diseño de Virtech delivery app',
    },
  },
  {
    id: 5,
    name: 'FintechX',
    img: {
      src: 'https://mir-s3-cdn-cf.behance.net/projects/808/010935149120825.Y3JvcCwyMDMwLDE1ODgsMjUsMA.jpg',
      alt: 'Imagen del diseño de Fintechx',
    },
    tags: ['FIGMA', 'BANK', 'FINANCE', 'LOANS'],
    anchor_behance: {
      href: 'https://www.behance.net/gallery/149120825/FINTECHX-BANKING-APP-UI-APP-DESIGN',
      title: 'Link al diseño de Fintechx banking app',
    },
  },
];
