import { Container, Grid, Text } from '@nextui-org/react';

import styled from 'styled-components';

import { DefaultLayout } from '~/components/parts/layouts/DefaultLayout';
import { Link } from '~/components/parts/commons/Link';
import { OgpHead } from '~/components/parts/layouts/OgpHead';
import { Product } from '~/domains/Product';
import { ProductCard } from '~/components/domains/Product';
import { IMAGE_PATH } from '~/constants/imagePath';

const products = [
  new Product({
    id: 'zawalog',
    title: 'Zawalog',
    url: 'https://www.itizaworld.com/',
    image: IMAGE_PATH.OGP,
    description: 'Zawalog は、 itizawa のブログ兼アウトプットをまとめる統合サイトです。',
    releasedAt: '2022/02/10',
  }),
  new Product({
    id: 'proeco',
    title: 'Proeco',
    url: 'https://www.proeco.app/ja',
    image: IMAGE_PATH.PROECO_OGP,
    description:
      'Proeco は、プロダクト開発を加速させるSlack連携型プラットフォームです。個人やチームでのプロダクト開発を応援する機能や集客の動線を提供します。',
    releasedAt: '2022/01/17',
  }),
  new Product({
    id: 'webev',
    title: 'Webev',
    url: 'https://www.webev.cloud/ja',
    image: IMAGE_PATH.WEBEV_OGP,
    description: 'Webev は、誰でも使えるブックマークマネージャーです！URL を入力して保存するだけで Web ページを管理できます。',
    releasedAt: '2021/05/16',
  }),
];

const Index = () => {
  return (
    <DefaultLayout>
      <OgpHead title="Zawalog | Products" />
      <Container sm css={{ mt: '$12', minHeight: '80vh' }}>
        <Text h3 css={{ my: '$4', textAlign: 'center', borderBottom: '$secondary solid 1px', fontWeight: '$bold' }}>
          Products List
        </Text>
        <Grid.Container gap={2}>
          {products.map((product, index) => {
            return (
              <StyledGrid key={index} xs={12} sm={6} css={{ pb: '0' }}>
                <Link href={product.url} target="__blank">
                  <ProductCard product={product} />
                </Link>
              </StyledGrid>
            );
          })}
        </Grid.Container>
      </Container>
    </DefaultLayout>
  );
};

const StyledGrid = styled(Grid)`
  > .nextui-link {
    width: 100%;
  }
`;

export default Index;
