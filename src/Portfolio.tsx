import { ScrollDown } from './assets/icons/ScrollDown';
import { Konami } from './components/Konami/Konami';
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
        <SectionAbout className="animate__animated animate__fadeInUp animate__delay-3s" />
        <SectionWorks className="animate__animated animate__fadeInUp animate__delay-3s" />
        <SectionContact className="animate__animated animate__fadeInUp animate__delay-3s" />
      </main>
      <footer>
        <Footer className="animate__animated animate__fadeInUp animate__delay-3s" />
      </footer>
      <ScrollDown className={'home__svg'} />
      <Konami className="animate__animated animate__pulse" />
    </>
  );
};
