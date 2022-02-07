import { Container, Grid, Text } from '@nextui-org/react';
import Image from 'next/image';
import fetch from 'node-fetch';

import styled from 'styled-components';
import { Post } from '~/domains/Post';

import { DefaultLayout } from '~/components/parts/layouts/DefaultLayout';
import { PostCard } from '~/components/domains/Post';
import { Link } from '~/components/parts/commons/Link';
import { OgpHead } from '~/components/parts/layouts/OgpHead';
import { IMAGE_PATH } from '~/constants/imagePath';

type Props = {
  recentPosts: Post[];
};

const Index = ({ recentPosts }: Props) => {
  return (
    <DefaultLayout>
      <OgpHead title="Zawalog | Top" />
      <Container xs>
        <Text h3>🎉 Welcome to Zawalog 🎉</Text>
        <Image src={IMAGE_PATH.OGP} width={1200} height={630} />
        <Text css={{ my: '$4' }}>Zawalog は、 itizawa のブログ兼アウトプットをまとめる統合サイトです</Text>
        <Grid.Container gap={2}>
          {recentPosts.map((post, index) => {
            return (
              <StyledGrid key={index} xs={12} css={{ px: '0', pb: '0' }}>
                <Link href={`/posts/${post._id}`}>
                  <PostCard post={post} />
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

export const getStaticProps = async () => {
  try {
    const pages = await fetch('https://itizawa-tech.growi.cloud/_api/pages.list?path=/projects/Zawalog/public/&limit=10');
    const result = (await pages.json()) as { pages: Post[] };
    return {
      props: {
        recentPosts: result.pages,
      },
    };
  } catch (error) {
    return {
      props: {
        recentPosts: [],
      },
    };
  }
};
