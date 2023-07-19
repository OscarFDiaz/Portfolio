import { ArrowExternal } from '../assets/icons/ArrowExternal';
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
} from '../assets/stackIcons';

export const SectionAbout = () => {
  return (
    <section className="about">
      <h2 className="about__h2">
        <span className="about__span">#</span>About
      </h2>
      <p className="about__paragraph">
        Freelance UI designer and frontend developer based in Guadalajara, Mexico.
        Graduated in Computer Engineering from the University of Guadalajara, where I
        acquired skills in programming, databases, working methodologies, etc. &#10;&#10;
        My passion lies in creating applications with attractive and functional designs,
        my future goal is to work with a company where I can become a senior Front-End
        developer.&#10;&#10; Have developed a personal finance app available on Play Store
        called{'  '}
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
        watching series, movies, reading and playing video games. Find inspiration in
        simple things and believe in balancing work and leisure. Excited for future
        opportunities and open to interesting collaborations. &#10; &#10;
        <b className="about__b">Contact me to create something amazing together!</b>
      </p>

      <div className="stack__container">
        <h2 className="stack__h2">
          <span className="stack__span">#</span>Stack and other
        </h2>
        <div className="about__icons">
          <div className="icons__container">
            <h3 className="icons__h3">Web</h3>
            <div className="icons__web">
              <Html className="icons__svg" />
              <Css className="icons__svg" />
              <Bootstrap className="icons__svg" />
              <Sass className="icons__svg" />
            </div>
          </div>

          <div className="icons__container">
            <h3 className="icons__h3">Languages</h3>
            <div className="icons__web">
              <Js className="icons__svg" />
              <Ts className="icons__svg" />
            </div>
          </div>

          <div className="icons__container">
            <h3 className="icons__h3">Design</h3>
            <div className="icons__web">
              <Photoshop className="icons__svg" />
              <Figma className="icons__svg" />
            </div>
          </div>

          <div className="icons__container">
            <h3 className="icons__h3">Frameworks & libraries</h3>
            <div className="icons__web">
              <React className="icons__svg" />
            </div>
          </div>
          <div className="icons__container">
            <h3 className="icons__h3">Other</h3>
            <div className="icons__web">
              <Git className="icons__svg" />
              <VisualCode className="icons__svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
