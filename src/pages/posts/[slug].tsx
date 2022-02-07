import { NextPage } from 'next';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Container, Text } from '@nextui-org/react';
import { format } from 'date-fns';
import styled from 'styled-components';

import markdownToHtml from '~/lib/markdownToHtml';
import { getPostBySlug, getAllPosts } from '~/lib/api';
import { Post } from '~/domains/Post';
import { DefaultLayout } from '~/components/parts/layouts/DefaultLayout';
import { DATE_FORMAT } from '~/constants/dateFormat';
import { OgpHead } from '~/components/parts/layouts/OgpHead';
import { extractTitleFromPath } from '~/lib/extractTitleFromPath';

type Props = {
  post: Post;
  morePosts: Post[];
  preview?: boolean;
};

const PostPage: NextPage<Props> = ({ post }) => {
  const router = useRouter();

  if (!router.isFallback && !post?._id) {
    return <ErrorPage statusCode={404} />;
  }

  const title = extractTitleFromPath(post.path);

  return (
    <DefaultLayout>
      <OgpHead
        image={`${process.env.NEXT_PUBLIC_ROOT_URL}/api/ogp/post?title=${extractTitleFromPath(post.path)}`}
        description={extractTitleFromPath(post.path)}
      />
      <Container xs>
        {router.isFallback ? (
          <Text>Loading…</Text>
        ) : (
          <article className="mb-32">
            <Head>
              <title>{title}</title>
            </Head>
            <Text h3>{title}</Text>
            <Text size={18} weight="bold" transform="uppercase" css={{ my: '$2' }}>
              投稿日：{format(new Date(post.createdAt), DATE_FORMAT.EXCEPT_SECOND)}
            </Text>
            {/* <img src={post.coverImage} width="100%" height="auto" alt={`Cover Image for ${post.title}`} /> */}
            <StyledDiv dangerouslySetInnerHTML={{ __html: '' }} />
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
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'author', 'content', 'ogImage', 'coverImage', 'description']);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
