import { AppHeader } from './AppHeader';

type Props = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: Props) => {
  return (
    <>
      <AppHeader />
    </>
  );
};
