import { useTranslation } from 'react-i18next';
import { stackItems } from '../../helpers/json/stackItems';
import i18n from '../../lang/i18n';
import { SectionSubtitle } from '../SectionSubtitle';

export const AboutStack = () => {
  const lang: string = i18n.language || 'en';
  const { t } = useTranslation();
  return (
    <div className="stack__container">
      <SectionSubtitle title={t('stack_title')} />
      <div className="about__icons">
        {stackItems.map((stack) => (
          <div className="icons__container" key={stack.id}>
            <h3 className="icons__h3">{stack.name[lang]}</h3>
            <div className="icons__web">{...stack.icons}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
