interface Props {
  name: string;
  description?: string;
}

export const WorkInfo = ({ name, description }: Props) => {
  return (
    <div className="work__info">
      <h4 className="work__title">{name}</h4>
      {description !== undefined && <p className="work__paragraph">{description}</p>}
    </div>
  );
};
