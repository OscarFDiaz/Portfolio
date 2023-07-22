import { SectionSubtitle, SectionTitle } from '../components';
import { ContactButton } from '../components/Contact/ContactButton';

interface Props {
  className: string;
}

export const SectionContact = ({ className }: Props) => {
  return (
    <section className={`contact ${className}`} id="contact">
      <SectionTitle title="Contact" />
      <SectionSubtitle title="Love to hear from you" />
      <ContactButton />
    </section>
  );
};
