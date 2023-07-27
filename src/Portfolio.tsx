import { useState } from 'react';
import { ScrollDown } from './assets/icons/ScrollDown';
import { ScrollTop } from './assets/icons/ScrollTop';
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
  const [onBottom, setOnBottom] = useState<boolean>(false);

  window.onscroll = function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setOnBottom(true);
    } else {
      setOnBottom(false);
    }
  };

  return (
    <>
      <header>
        <Navigator className={'animate__animated animate__fadeInDown'} />
      </header>
      <main>
        <SectionMain className={'animate__animated animate__fadeInUp'} />
        <SectionAbout
          className={'animate__animated animate__fadeInUp animate__delay-2s'}
        />
        <SectionWorks
          className={'animate__animated animate__fadeInUp animate__delay-2s'}
        />
        <SectionContact
          className={'animate__animated animate__fadeInUp animate__delay-2s'}
        />
      </main>
      <footer>
        <Footer className={'animate__animated animate__fadeInUp animate__delay-2s'} />
      </footer>

      {onBottom ? (
        <ScrollTop className={'home__svg animate__animated animate__fadeInRight'} />
      ) : (
        <ScrollDown className={'home__svg animate__animated animate__fadeInRight'} />
      )}
      <Konami className={'animate__animated animate__pulse'} />
    </>
  );
};
