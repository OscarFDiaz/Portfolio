import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../../lang/languages';

export const NavigatorSelect = () => {
  const { i18n } = useTranslation();

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    void i18n.changeLanguage(lang_code);
  };

  return (
    <div className="navigator__select">
      <select
        name="language"
        id="language"
        className="select"
        defaultValue={i18n.language}
        onChange={onChangeLang}
      >
        {LANGUAGES.map(({ code, label }) => (
          <option key={code} value={code} className="select__option">
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};
