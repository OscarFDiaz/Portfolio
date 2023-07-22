import { AboutParagraph, AboutStack, SectionTitle } from '../components/About';

interface Props {
  className: string;
}

export const SectionAbout = ({ className }: Props) => {
  return (
    <section className={`about ${className}`} id="about">
      <SectionTitle title="About" />
      <AboutParagraph />
      <AboutStack />
    </section>
  );
};
