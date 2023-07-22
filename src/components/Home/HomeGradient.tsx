import Gradient from '../../assets/gradient.svg';

interface Props {
  className: string;
}

export const HomeGradient = ({ className }: Props) => {
  return (
    <div className={`home__background ${className}`}>
      <img loading="lazy" src={Gradient} alt="Blue circle gradient" />
    </div>
  );
};
