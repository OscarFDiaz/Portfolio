import { ScrollDown } from './assets/icons/ScrollDown';
import {
  Navigator,
  SectionAbout,
  SectionMain,
  SectionWorks,
  SectionContact,
} from './layouts';
import 'animate.css';

export const Portfolio = () => {
  return (
    <>
      <header>
        <Navigator className="animate__animated animate__fadeInDown" />
      </header>
      <main>
        <SectionMain className="animate__animated animate__fadeInUp" />
        <SectionAbout className="animate__animated animate__fadeInUp animate__delay-4s" />
        <SectionWorks className="animate__animated animate__fadeInUp animate__delay-4s" />
        <SectionContact className="animate__animated animate__fadeInUp animate__delay-4s" />
        <ScrollDown className={'home__svg'} />
      </main>
    </>
  );
};
