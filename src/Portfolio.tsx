import { ScrollDown } from './assets/icons/ScrollDown';
import { Navigator } from './layouts/Navigator';
import { SectionMain } from './layouts/SectionMain';

export const Portfolio = () => {
  return (
    <>
      <header>
        <Navigator />
      </header>
      <main>
        <SectionMain />
        <ScrollDown className={'section__svg'} />
      </main>
    </>
  );
};
