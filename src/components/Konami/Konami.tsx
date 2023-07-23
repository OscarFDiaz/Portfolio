import { useTranslation } from 'react-i18next';

interface Props {
  className: string;
}

export const Konami = ({ className }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={`konami ${className}`} id="konami_container">
      <canvas
        width={'100%'}
        height={'1000px'}
        id="matrixCanvas"
        className="konami__matrix"
      ></canvas>
      <p className="konami__p">
        <span className="konami__span">#</span>Konami!
      </p>
      <p className="konami__p konami__p--litle">
        <span className="konami__span konami__span--litle">#</span>
        {t('anyKey')}
      </p>
    </div>
  );
};
