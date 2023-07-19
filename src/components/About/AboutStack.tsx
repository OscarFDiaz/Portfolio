import { stackItems } from '../../helpers/json/stackItems';
import { SectionSubtitle } from '../SectionSubtitle';

export const AboutStack = () => {
  return (
    <div className="stack__container">
      <SectionSubtitle title="Stack and other" />
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
