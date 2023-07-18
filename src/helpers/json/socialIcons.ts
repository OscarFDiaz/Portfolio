interface Props {
  id: number;
  anchor: {
    href: string;
    title: string;
  };
  name: string;
}

// export const socialIcons = [
//   {
//     id: 1,
//     name: 'behance',
//     anchor: {
//       src: `../assets/socialIcons/behance.svg`,
//       alt: 'Behance Icon',
//     },
//     anchor_active: {
//       src: '../assets/socialIcons/behance_active.svg',
//       alt: 'Bootstrap Icon Active',
//     },
//   },
// ];
export const socialIcons = [
  {
    id: 1,
    name: 'behance',
    anchor: {
      src: `/socialIcons/behance.svg`,
      alt: 'Behance Icon',
    },
    anchor_active: {
      src: '/socialIcons/behance_active.svg',
      alt: 'Bootstrap Icon Active',
    },
  },
];
