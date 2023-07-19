import { AboutParagraph, AboutStack, AboutTitle } from '../components/About';

export const SectionAbout = () => {
  return (
    <section className="about" id="about">
      <AboutTitle />
      <AboutParagraph />
      <AboutStack />
    </section>
  );
};
