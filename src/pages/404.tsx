import { NextPage } from 'next';
import Image from 'next/image';

import { Button, Container, Text } from '@nextui-org/react';
import { OgpHead } from '~/components/parts/layouts/OgpHead';
import { DefaultLayout } from '~/components/parts/layouts/DefaultLayout';

import { IMAGE_PATH } from '~/constants/imagePath';
import { Link } from '~/components/parts/commons/Link';

const Page: NextPage = () => {
  return (
    <DefaultLayout>
      <OgpHead title="Zawalog | 404" />
      <Container xs css={{ marginTop: '$10', textAlign: 'center' }}>
        <Text h2>404: Not Found</Text>
        <Image src={IMAGE_PATH.ERROR_404} height={958} width={1000} />
        <Link href="/">
          <Button color="secondary" css={{ fontWeight: 'bold' }}>
            TOPに戻る
          </Button>
        </Link>
      </Container>
    </DefaultLayout>
  );
};

export default Page;
