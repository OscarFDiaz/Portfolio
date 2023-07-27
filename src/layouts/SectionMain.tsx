import { HomeAbout, HomeGradient, HomeImgText } from '../components/Home';
import { HomeButton } from '../components/Home/HomeButton';
import { SocialIcons } from './SocialIcons';

interface Props {
  className: string;
}

export const SectionMain = ({ className }: Props) => {
  return (
    <section className={`home ${className}`}>
      <HomeGradient
        className={'animate__animated animate__fadeInRight animate__slower'}
      />
      <HomeImgText />
      <HomeAbout />
      <HomeButton className={'animate__animated animate__fadeInUp animate__delay-1s'} />

      <SocialIcons className={'animate__animated animate__fadeInUp animate__delay-1s'} />
    </section>
  );
};
