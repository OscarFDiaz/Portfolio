import { Navigator } from './layouts/Navigator';
import { SectionMain } from './layouts/SectionMain';
import { SocialIcons } from './layouts/SocialIcons';

export const Portfolio = () => {
  return (
    <>
      <header>
        <Navigator />
      </header>
      <main>
        <SectionMain />
        <SocialIcons />
      </main>
    </>
  );
};
