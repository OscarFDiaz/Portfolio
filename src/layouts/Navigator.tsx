import { NavigatorList } from '../components/NavigatorList';
import { NavigatorName } from '../components/NavigatorName';
import { NavigatorSelect } from '../components/NavigatorSelect';

export const Navigator = () => {
  return (
    <nav className="navigator container">
      <NavigatorName />
      <NavigatorList />
      <NavigatorSelect />
    </nav>
  );
};
