import 'animate.css';

import { ArrowDown } from '../assets/icons/ArrowDown';
import Picture from '../assets/picture.webp';
import Picture2 from '../assets/gradient.png';

import MyPDF from '../assets/cv.pdf';
import { ScrollDown } from '../assets/icons/ScrollDown';

export const SectionMain = () => {
  return (
    <section className="section">
      <div className="section__background">
        <img loading="lazy" src={Picture2} alt="Degradado azul " />
      </div>
      <div className="section__imagetext">
        <picture className="imagetext__picture">
          <img loading="lazy" src={Picture} alt="Portrait of Oscar Diaz " />
        </picture>
        <div className="section__titles">
          <h1 className="section__title">I am Oscar Diaz</h1>
          <div className="section__subtitle">
            <p>#</p>
            <p className="subtitle__subtitles">
              <span className="subtitles__span">Front-end developer</span>
              <span className="subtitles__span">UI Designer</span>
            </p>
          </div>
        </div>
      </div>

      <div className="section__shortabout">
        <p className="shortabout__paragraph">
          Graduated in in <b className="paragraph__b">Computer Engineering</b> from the
          University of Guadalajara.
          <br />
          <br />
          Current focus as <b className="paragraph__b">Front-End Developer</b>, I have
          experience in UI and UX design.
          <br />
          Passionate about creating attractive and functional interfaces that improve the
          user experience.
        </p>
      </div>
      <a
        href={MyPDF}
        title="Download CV"
        className="section__anchor"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download CV
        <ArrowDown />
      </a>
      <ScrollDown />
    </section>
  );
};
