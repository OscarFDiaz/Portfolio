import { NavigatorList, NavigatorName, NavigatorSelect } from '../components/Navigator';

interface Props {
  className: string;
}

export const Navigator = ({ className }: Props) => {
  return (
    <nav className={`navigator ${className}`} id="home">
      <NavigatorName />
      <NavigatorList />
      <NavigatorSelect />
    </nav>
  );
};
