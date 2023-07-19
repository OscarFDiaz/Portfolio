interface Props {
  work: {
    tags: string[];
  };
}

export const WorkTags = ({ work }: Props) => (
  <div className="work__tags">
    {work.tags.map((tag) => (
      <h5 className="tag__title">
        <span className="tag__span">#</span>
        {tag}
      </h5>
    ))}
  </div>
);
