interface Props {
  className: string;
}

export const Footer = ({ className }: Props) => {
  return (
    <div className={`footer ${className}`}>
      <p className="footer__p">
        <span className="footer__span">#</span>Made with code by me, for me and for
        everyone.
      </p>
      <p className="footer__p footer__p--litle">
        <span className="footer__span">#</span>Pss... try the Konami code 😜
      </p>
    </div>
  );
};
