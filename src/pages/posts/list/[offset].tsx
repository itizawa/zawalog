import { GetStaticPaths, NextPage } from 'next';
import ErrorPage from 'next/error';
import { Container, Grid, Pagination, Text } from '@nextui-org/react';

import styled from 'styled-components';

import { useRouter } from 'next/router';
import { cmsClient } from '~/lib/api';
import { Post } from '~/domains/Post';
import { PaginationResult } from '~/domains/PaginationResult';

import { PostCard } from '~/components/domains/Post';
import { DefaultLayout } from '~/components/parts/layouts/DefaultLayout';
import { Link } from '~/components/parts/commons/Link';
import { OgpHead } from '~/components/parts/layouts/OgpHead';

type Props = {
  paginationResult: PaginationResult<Post>;
};

const Index: NextPage<Props> = ({ paginationResult }) => {
  const router = useRouter();

  if (!router.isFallback && !paginationResult) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <DefaultLayout>
      <OgpHead title="Zawalog | Products" />
      <Container sm css={{ mt: '$12', minHeight: '80vh' }}>
        <Text h3 css={{ my: '$4', textAlign: 'center', borderBottom: '$secondary solid 1px', fontWeight: '$bold' }}>
          Posts List
        </Text>

        <Grid.Container gap={2}>
          {paginationResult.contents.map((post, index) => {
            return (
              <StyledGrid key={index} xs={12} css={{ px: '0', pb: '0' }}>
                <Link href={`/posts/${post.id}`}>
                  <PostCard post={post} />
                </Link>
              </StyledGrid>
            );
          })}
        </Grid.Container>
        <Grid.Container css={{ justifyContent: 'center', display: 'flex', py: '$10' }}>
          <Pagination
            shadow
            color="secondary"
            total={Math.ceil(paginationResult.totalCount / paginationResult.limit)}
            initialPage={paginationResult.offset + 1}
            onChange={(page) => router.push(`/posts/list/${page}`)}
          />
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

type Params = {
  params: {
    offset: number;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  if (!cmsClient.client) {
    return {
      props: {
        posts: [],
      },
    };
  }

  try {
    const result = await cmsClient.client.get<PaginationResult<Post>>({
      endpoint: 'posts',
      queries: { orders: '-publishedAt', limit: 10, offset: (params.offset - 1) * 10 },
    });

    return {
      props: {
        paginationResult: result,
      },
    };
  } catch (error) {
    return {
      props: {
        posts: [],
      },
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [...Array(10)].map((_, index) => ({
    params: {
      offset: `${index + 1}`,
    },
  }));

  return { paths, fallback: false };
};
