import { ArrowDown } from '../../assets/icons/ArrowDown';
import MyPDF from '../../assets/cv.pdf';

interface Props {
  className: string;
}

export const HomeButton = ({ className }: Props) => {
  return (
    <a
      className={`home__anchor ${className}`}
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
