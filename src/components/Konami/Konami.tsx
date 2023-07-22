interface Props {
  className: string;
}

export const Konami = ({ className }: Props) => {
  return (
    <div className={`konami ${className}`} id="konami_container">
      <canvas
        width={'100%'}
        height={'500px'}
        id="matrixCanvas"
        className="konami__matrix"
      ></canvas>
      <p className="konami__p">
        <span className="konami__span">#</span>Konami!
      </p>
      <p className="konami__p konami__p--litle">
        <span className="konami__span konami__span--litle">#</span>Press any key to leave
      </p>
    </div>
  );
};
