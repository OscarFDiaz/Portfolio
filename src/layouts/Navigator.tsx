import { NavigatorList, NavigatorName, NavigatorSelect } from '../components/Navigator';

export const Navigator = () => {
  return (
    <nav className="navigator">
      <NavigatorName />
      <NavigatorList />
      <NavigatorSelect />
    </nav>
  );
};
