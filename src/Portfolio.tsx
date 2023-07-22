import { ScrollDown } from './assets/icons/ScrollDown';
import { Konami } from './components/Konami/Konami';
import { Matrix } from './components/Konami/Matrix';
import {
  Navigator,
  SectionAbout,
  SectionMain,
  SectionWorks,
  SectionContact,
  Footer,
} from './layouts';
import 'animate.css';

export const Portfolio = () => {
  return (
    <>
      {/* <Matrix /> */}
      <header>
        <Navigator className="animate__animated animate__fadeInDown" />
      </header>
      <main>
        <SectionMain className="animate__animated animate__fadeInUp" />
        <SectionAbout className="animate__animated animate__fadeInUp animate__delay-4s" />
        <SectionWorks className="animate__animated animate__fadeInUp animate__delay-4s" />
        <SectionContact className="animate__animated animate__fadeInUp animate__delay-4s" />
      </main>
      <footer>
        <Footer className="animate__animated animate__fadeInUp animate__delay-4s" />
      </footer>
      <ScrollDown className={'home__svg'} />
      <Konami />
    </>
  );
};
