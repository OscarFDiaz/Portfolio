interface Props {
  title: string;
}

export const SectionTitle = ({ title }: Props) => {
  return (
    <h2 className="sectiontitle__h2">
      <span className="sectiontitle__span">#</span>
      {title}
    </h2>
  );
};
