interface Props {
  work: {
    tags: string[];
  };
}

export const WorkTags = ({ work }: Props) => (
  <div className="work__tags">
    {work.tags.map((tag, i) => (
      <h5 className="tag__title" key={tag}>
        {i === 0 && <span className="tag__span">#</span>}
        {tag}
        {i !== work.tags.length - 1 && ','}
      </h5>
    ))}
  </div>
);
