import { FC } from 'react';
import { Navigation } from '../../commons/Navigation';

export const DefaultLayout: FC = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};
