import { useTranslation } from 'react-i18next';
import { navigatorItems } from '../../helpers/json/navigatorItems';

export const NavigatorListItem = () => {
  const menuItems = navigatorItems;

  const { t } = useTranslation();
  return (
    <>
      {menuItems.map((item) => (
        <li className="list__item" key={item.id}>
          <a {...item.anchor} className="item__anchor">
            <span className="anchor__hash">#</span>
            {t(item.name)}
          </a>
        </li>
      ))}
    </>
  );
};
