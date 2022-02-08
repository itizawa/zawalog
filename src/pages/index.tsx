import { Container, Grid, Text } from '@nextui-org/react';
import Image from 'next/image';

import styled from 'styled-components';

import { PaginationResult } from '~/domains/PaginationResult';
import { Post } from '~/domains/Post';

import { cmsClient } from '~/lib/api';

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
                <Link href={`/posts/${post.id}`}>
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
    const result = await cmsClient.get<PaginationResult<Post>>({
      endpoint: 'posts',
      queries: { orders: '-publishedAt', limit: 100 },
    });

    return {
      props: {
        recentPosts: result.contents,
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
