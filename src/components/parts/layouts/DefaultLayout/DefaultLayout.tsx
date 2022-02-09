import { FC } from 'react';
import { Grid } from '@nextui-org/react';
import { Navigation } from '~/components/parts/commons/Navigation';
import { Footer } from '~/components/parts/commons/Footer';

export const DefaultLayout: FC = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Grid css={{ borderTop: '#220760 1px solid', mt: '$20' }}>
        <Footer />
      </Grid>
    </>
  );
};
