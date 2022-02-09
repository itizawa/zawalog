import { VFC } from 'react';
import { Container, Grid, Text } from '@nextui-org/react';
import { Link } from '~/components/parts/commons/Link';

export const Navigation: VFC = () => {
  return (
    <Container md css={{ py: '$8' }} display="flex" justify="space-between">
      <div>
        <Link href="/">
          <Text color="white" b>
            Zawalog
          </Text>
        </Link>
      </div>
      <Grid css={{ display: 'flex', gap: '$8' }}>
        <Link href="/">
          <Text color="white">Home</Text>
        </Link>
        <Link href="/products">
          <Text color="white">Product</Text>
        </Link>
      </Grid>
    </Container>
  );
};
