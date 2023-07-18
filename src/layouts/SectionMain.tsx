import { HomeAbout, HomeGradient, HomeImgText } from '../components/Home';
import { HomeButton } from '../components/Home/HomeButton';
import { SocialIcons } from './SocialIcons';

export const SectionMain = () => {
  return (
    <section className="section">
      <HomeGradient />
      <HomeImgText />
      <HomeAbout />
      <HomeButton />

      <SocialIcons />
    </section>
  );
};
