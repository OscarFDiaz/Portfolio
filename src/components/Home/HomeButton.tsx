import { ArrowDown } from '../../assets/icons/ArrowDown';
import MyPDF from '../../assets/cv.pdf';

export const HomeButton = () => {
  return (
    <a
      className="section__anchor"
      href={MyPDF}
      rel="noopener noreferrer"
      target="_blank"
      title="Download CV"
    >
      Download CV
      <ArrowDown />
    </a>
  );
};
