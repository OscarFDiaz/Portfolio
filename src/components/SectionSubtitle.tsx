interface Props {
  title: string;
  style?: React.CSSProperties;
}

export const SectionSubtitle = ({ title, style }: Props) => {
  return (
    <h2 className="sectionsubtitle__h2" style={style}>
      <span className="sectionsubtitle__span">#</span>
      {title}
    </h2>
  );
};
