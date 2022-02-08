import { NextPage } from 'next';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Container, Text } from '@nextui-org/react';
import { format } from 'date-fns';
import styled from 'styled-components';

import { cmsClient } from '~/lib/api';
import { Post } from '~/domains/Post';
import { DefaultLayout } from '~/components/parts/layouts/DefaultLayout';
import { DATE_FORMAT } from '~/constants/dateFormat';
import { OgpHead } from '~/components/parts/layouts/OgpHead';
import { PaginationResult } from '~/domains/PaginationResult';

type Props = {
  post: Post;
  morePosts: Post[];
  preview?: boolean;
};

const PostPage: NextPage<Props> = ({ post }) => {
  const router = useRouter();

  if (!router.isFallback && !post?.id) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <DefaultLayout>
      <OgpHead image={`${process.env.NEXT_PUBLIC_ROOT_URL}/api/ogp/post?title=${post.title}`} description={post.title} />
      <Container sm>
        {router.isFallback ? (
          <Text>Loading…</Text>
        ) : (
          <article className="mb-32">
            <Head>
              <title>{post.title}</title>
            </Head>
            <Text h3 css={{ marginBottom: '$2' }}>
              {post.title}
            </Text>
            <Text size={12} transform="uppercase" color="$white">
              公開日：{format(new Date(post.publishedAt), DATE_FORMAT.EXCEPT_SECOND)}
            </Text>
            <Text size={12} transform="uppercase" color="$white" css={{ marginBottom: '$2' }}>
              更新日：{format(new Date(post.updatedAt), DATE_FORMAT.EXCEPT_SECOND)}
            </Text>
            <StyledDiv dangerouslySetInnerHTML={{ __html: post.body }} />
          </article>
        )}
      </Container>
    </DefaultLayout>
  );
};

export default PostPage;

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
      },
    };
  }
  const post = await cmsClient.client.get<Post>({
    endpoint: 'posts',
    contentId: params.slug,
  });

  return {
    props: {
      post,
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
