import { NextPage } from 'next';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Button, Container, Grid, Text } from '@nextui-org/react';
import { format } from 'date-fns';
import styled from 'styled-components';

import { Post } from '~/domains/Post';
import { PaginationResult } from '~/domains/PaginationResult';

import { cmsClient } from '~/lib/api';

import { DefaultLayout } from '~/components/parts/layouts/DefaultLayout';
import { DATE_FORMAT } from '~/constants/dateFormat';
import { OgpHead } from '~/components/parts/layouts/OgpHead';
import { Tag } from '~/components/parts/commons/Tag';
import { Link } from '~/components/parts/commons/Link';
import { PostCard } from '~/components/domains/Post';

type Props = {
  post: Post;
  otherPosts: Post[];
  morePosts: Post[];
  preview?: boolean;
};

const PostPage: NextPage<Props> = ({ post, otherPosts = [] }) => {
  const router = useRouter();

  if (!router.isFallback && !post?.id) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <DefaultLayout>
      <OgpHead image={`${process.env.NEXT_PUBLIC_ROOT_URL}/api/ogp/post?title=${post.title}`} description={post.title} />
      <Container sm css={{ pt: '$12' }}>
        {router.isFallback ? (
          <Text>Loading…</Text>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{post.title}</title>
              </Head>
              <Text h3 css={{ marginBottom: '$2' }}>
                {post.title}
              </Text>
              <Grid css={{ my: '$2', display: 'flex', gap: '$2' }}>
                {post.tags.map((v) => {
                  return <Tag key={v.id}>{v.name}</Tag>;
                })}
              </Grid>
              <Text size={12} transform="uppercase" color="$white">
                公開日：{format(new Date(post.publishedAt), DATE_FORMAT.EXCEPT_SECOND)}
              </Text>
              <Text size={12} transform="uppercase" color="$white" css={{ marginBottom: '$2' }}>
                更新日：{format(new Date(post.updatedAt), DATE_FORMAT.EXCEPT_SECOND)}
              </Text>
              <StyledDiv dangerouslySetInnerHTML={{ __html: post.body }} />
            </article>
            <Link href={`/posts/list/1`}>
              <Button color="gradient" bordered css={{ marginTop: '$10', fontWeight: 'bold' }}>
                {`<`} Post一覧に戻る
              </Button>
            </Link>
            <Text h3 css={{ mt: '$40', mb: '$4', textAlign: 'center', borderBottom: '$secondary solid 1px', fontWeight: '$bold' }}>
              その他のPost
            </Text>

            <Grid.Container gap={2}>
              {otherPosts.map((post, index) => {
                return (
                  <StyledGrid key={index} xs={12} css={{ px: '0', pb: '0' }}>
                    <Link href={`/posts/${post.id}`}>
                      <PostCard post={post} />
                    </Link>
                  </StyledGrid>
                );
              })}
            </Grid.Container>
          </>
        )}
      </Container>
    </DefaultLayout>
  );
};

export default PostPage;

const StyledGrid = styled(Grid)`
  > .nextui-link {
    width: 100%;
  }
`;

const StyledDiv = styled.div`
  word-break: break-all;

  img {
    width: 100%;
  }

  a {
    color: #89baf7;
  }

  pre {
    padding: 16px;
    background: black;
    code {
      background: black;
    }
  }

  h1 {
    padding-bottom: 5px;
    border-bottom: 2px solid #6f42c1;
  }

  p {
    line-height: 2rem;
  }

  li {
    margin-bottom: 10px;
  }
  iframe {
    width: 100%;
  }
`;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  if (!cmsClient.client) {
    return {
      props: {
        recentPosts: [],
        otherPosts: [],
      },
    };
  }
  const post = await cmsClient.client.get<Post>({
    endpoint: 'posts',
    contentId: params.slug,
  });

  const post1Pagination = await cmsClient.client.get<PaginationResult<Post>>({
    endpoint: 'posts',
    queries: { orders: '-publishedAt', limit: 1 },
  });

  const post2Pagination = await cmsClient.client.get<PaginationResult<Post>>({
    endpoint: 'posts',
    queries: { orders: '-publishedAt', limit: 2, offset: Math.floor((Math.random() * post1Pagination.totalCount) / 2) },
  });

  const post3Pagination = await cmsClient.client.get<PaginationResult<Post>>({
    endpoint: 'posts',
    queries: { orders: '-publishedAt', limit: 2, offset: Math.floor((Math.random() * post1Pagination.totalCount) / 2) },
  });

  return {
    props: {
      post,
      otherPosts: [...post1Pagination.contents, ...post2Pagination.contents, ...post3Pagination.contents],
    },
  };
}

export async function getStaticPaths() {
  if (!cmsClient.client) {
    return {
      paths: [],
      fallback: false,
    };
  }

  const result = await cmsClient.client.get<PaginationResult<Pick<Post, 'id'>>>({
    endpoint: 'posts',
    queries: { fields: 'id' },
  });

  return {
    paths: result.contents.map((post) => {
      return {
        params: {
          slug: post.id,
        },
      };
    }),
    fallback: false,
  };
}
