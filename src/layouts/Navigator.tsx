import { NavigatorList, NavigatorName, NavigatorSelect } from '../components/Navigator';

export const Navigator = () => {
  return (
    <nav className="navigator" id="home">
      <NavigatorName />
      <NavigatorList />
      <NavigatorSelect />
    </nav>
  );
};
