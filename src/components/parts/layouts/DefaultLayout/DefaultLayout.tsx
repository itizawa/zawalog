import { FC } from 'react';
import { Navigation } from '~/components/parts/commons/Navigation';

export const DefaultLayout: FC = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};
