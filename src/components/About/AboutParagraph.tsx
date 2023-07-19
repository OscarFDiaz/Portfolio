import { ArrowExternal } from '../../assets/icons/ArrowExternal';

export const AboutParagraph = () => {
  return (
    <p className="about__paragraph">
      Freelance UI designer and frontend developer based in Guadalajara, Mexico. Graduated
      in Computer Engineering from the University of Guadalajara, where I acquired skills
      in programming, databases, working methodologies, etc. &#10;&#10; My passion lies in
      creating applications with attractive and functional designs, my future goal is to
      work with a company where I can become a senior Front-End developer.&#10;&#10; Have
      developed a personal finance app available on Play Store called{'  '}
      <a
        href="https://play.google.com/store/apps/details?id=com.oscar.diaz"
        title="Playstore link to my app"
        target="_blank"
        rel="noopener noreferrer"
        className="about__anchor"
      >
        Flynanz <ArrowExternal />
      </a>
      {'  '}
      and I continue to work on personal projects. &#10;&#10;In my free time, I enjoy
      watching series, movies, reading and playing video games. Find inspiration in simple
      things and believe in balancing work and leisure. Excited for future opportunities
      and open to interesting collaborations. &#10; &#10;
      <b className="about__b">Contact me to create something amazing together!</b>
    </p>
  );
};
