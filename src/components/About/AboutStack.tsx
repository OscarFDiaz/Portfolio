import { stackItems } from '../../helpers/json/stackItems';

export const AboutStack = () => {
  return (
    <div className="stack__container">
      <h2 className="stack__h2">
        <span className="stack__span">#</span>Stack and other
      </h2>
      <div className="about__icons">
        {stackItems.map((stack) => (
          <div className="icons__container" key={stack.id}>
            <h3 className="icons__h3">{stack.name}</h3>
            <div className="icons__web">{...stack.icons}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
