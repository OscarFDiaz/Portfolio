import { ScrollDown } from './assets/icons/ScrollDown';
import { Navigator, SectionAbout, SectionMain, SectionWorks } from './layouts';

export const Portfolio = () => {
  return (
    <>
      <header>
        <Navigator />
      </header>
      <main>
        <SectionMain />
        <SectionAbout />
        <ScrollDown className={'section__svg'} />
        <SectionWorks />
      </main>
    </>
  );
};
