import { ScrollDown } from '../assets/icons/ScrollDown';

import { HomeAbout, HomeGradient, HomeImgText } from '../components/Home';

export const SectionMain = () => {
  return (
    <section className="section" id="home">
      <HomeGradient />
      <HomeImgText />
      <HomeAbout />
      <ScrollDown className={'section__svg'} />
    </section>
  );
};
