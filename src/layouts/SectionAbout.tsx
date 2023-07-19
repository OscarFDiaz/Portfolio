import { AboutParagraph, AboutStack, SectionTitle } from '../components/About';

export const SectionAbout = () => {
  return (
    <section className="about" id="about">
      <SectionTitle title="About" />
      <AboutParagraph />
      <AboutStack />
    </section>
  );
};
