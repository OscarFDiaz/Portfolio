/* eslint-disable @typescript-eslint/no-floating-promises */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        Home: 'Home',
        About: 'About',
        Works: 'Works',
        Contact: 'Contact',
        graduated: 'Graduated in ',
        career: 'Computer Engineering',
        from: 'from the Universidad de Guadalajara CUCEI.',
        focus1: 'Current focus as ',
        focus: 'Front-end Developer',
        exp: ', I have experience in UI and UX design. {{spacer}} Passionate about creating attractive and functional interfaces that improve the user experience.',
        HomeButton: 'Download CV',
        IAM: 'I am Oscar Diaz',
        SocialLinks: 'Social links',
        toLinkedin: 'Link to my LinkedIn',
        toGithub: 'Link to my Github',
        toTwitter: 'Link to my Twitter',
        toBehance: 'Link to my Behance',
        myApp: 'Link to my App',
        about_p1:
          'Freelance UI designer and frontend developer based in Guadalajara, Mexico. Graduated in Computer Engineering from the Universidad de Guadalajara CUCEI, where I acquired skills in programming, databases, working methodologies, etc. {{spacer}}{{spacer}} My passion lies in creating applications with attractive and functional designs, my future goal is to work with a company where I can become a senior Front-End developer.{{spacer}} {{spacer}}Have developed a personal finance app available on Play Store called ',
        about_p2:
          ' and I continue to work on personal projects. {{spacer}}{{spacer}}In my free time, I enjoy watching series, movies, reading and playing video games. Find inspiration in simple things and believe in balancing work and leisure. Excited for future opportunities and open to interesting collaborations. {{spacer}}{{spacer}}',
        about_contact: 'Contact me to create something amazing together!',
        see_all: 'See all',
        stack_title: 'Stack and other',
        frontend_title: 'Front-end, developer',
        design_title: 'Designs, UI Designer',
        Behance: 'Behance',
        View_More: 'View More',
        Github: 'Github',
        Live: 'Live',
        loveTo: 'Love to hear from you',
        sendMessage: 'Send Message',
        madeWith: 'Made with 💖(code) by me, for me and for everyone.',
        konami: 'Pss... try the Konami code 😜',
      },
    },
    es: {
      translation: {
        Home: 'Inicio',
        About: 'Acerca de',
        Works: 'Trabajos',
        Contact: 'Contacto',
        graduated: 'Egresado de la carrera en  ',
        career: 'Ingeniería Informática',
        from: 'por la Universidad de Guadalajara CUCEI. ',
        focus1: 'Enfoque actual como ',
        focus: 'Desarrollador Front-End',
        exp: ', también tengo experiencia en diseño UI y UX. Me apasiona crear interfaces atractivas y funcionales que mejoren la experiencia del usuario.',
        HomeButton: 'Descargar CV',
        IAM: 'Soy Oscar Diaz',
        SocialLinks: 'Redes sociales',
        toLinkedin: 'Enlace a mi LinkedIn',
        toGithub: 'Enlace a mi Github',
        toTwitter: 'Enlace a mi Twitter',
        toBehance: 'Enlace a mi Behance',
        myApp: 'Enlace a mi Aplicación ',
        about_p1:
          'Diseñador UI y desarrollador Front-end freelance con sede en Guadalajara, México. Graduado de Ingeniería en Informática por la Universidad de Guadalajara, donde adquirí habilidades en programación, bases de datos, metodologías de trabajo, etc. Mi pasión radica en crear aplicaciones con diseños atractivos y funcionales, mi objetivo a futuro es trabajar con una empresa en donde pueda convertirme en un desarrollador senior Front-End.{{spacer}}{{spacer}} He desarrollado una aplicación para finanzas personales disponible en Play Store llamada ',
        about_p2:
          ' y continúo trabajando en proyectos personales. {{spacer}}{{spacer}} En mi tiempo libre, disfruto de ver series, películas, leer y jugar videojuegos. Encuentro inspiración en las cosas simples y creo en el equilibrio entre el trabajo y el ocio. Estoy emocionado por las oportunidades futuras y abierto a colaboraciones interesantes. {{spacer}}{{spacer}}',
        about_contact: '¡Contáctame para crear algo increíble juntos!',
        see_all: 'Ver todo',
        stack_title: 'Tecnologías y otros',
        frontend_title: 'Front-end, desarrollador',
        design_title: 'Diseños, Diseñador UI',
        Behance: 'Behance',
        View_More: 'Ver Más',
        Github: 'Github',
        Live: 'En línea',
        loveTo: 'Me encantaría tener noticias suyas',
        sendMessage: 'Enviar Mensaje',
        madeWith: 'Hecho con 💖(código) por mi, para mi y todos.',
        konami: 'Pss... intenta usar el código Konami 😜',
      },
    },
  },
});

export default i18n;
