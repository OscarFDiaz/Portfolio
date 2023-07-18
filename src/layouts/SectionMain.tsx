import { ScrollDown } from '../assets/icons/ScrollDown';

import { HomeAbout, HomeGradient, HomeImgText } from '../components/Home';
import { HomeButton } from '../components/Home/HomeButton';

export const SectionMain = () => {
  return (
    <section className="section">
      <HomeGradient />
      <HomeImgText />
      <HomeAbout />
      <HomeButton />
      <ScrollDown className={'section__svg'} />
    </section>
  );
};
