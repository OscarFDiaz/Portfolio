/* eslint-disable @typescript-eslint/restrict-template-expressions */
interface Props {
  work: {
    src: string;
    alt: string;
  };
  className?: string;
  imgClass?: string;
}

export const WorkPicture = ({ work, className, imgClass }: Props) => {
  return (
    <picture className={`work__picture ${className}`}>
      <img className={`work__image ${imgClass}`} {...work} loading="lazy" />
    </picture>
  );
};
