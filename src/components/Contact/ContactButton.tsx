import { EmailSend } from '../../assets/icons/EmailSend';

interface Props {
  className?: string;
}

export const ContactButton = ({ className }: Props) => {
  return (
    <a
      className={`contact__anchor ${className ? className : ''}`}
      href={'mailto:oscarfco.da@gmail.com'}
      rel="noopener noreferrer"
      target="_blank"
      title="Send email"
    >
      Send Message
      <EmailSend />
    </a>
  );
};
