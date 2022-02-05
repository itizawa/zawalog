import Head from 'next/head';

import { Container, Grid, Text } from '@nextui-org/react';
import { getAllPosts } from '~/lib/api';

import { Post } from '~/domains/Post';

import { DefaultLayout } from '~/components/parts/layouts/DefaultLayout';
import { PostCard } from '~/components/domains/Post';

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const [firstPost, ...postsExceptFirst] = allPosts;

  return (
    <DefaultLayout>
      <Head>
        <title>Zawalog | Top</title>
      </Head>
      <Container xs>
        <Text h1>All Post</Text>
        <Grid.Container gap={2}>
          <Grid xs={12}>
            <PostCard post={firstPost} />
          </Grid>
        </Grid.Container>
        <Grid.Container gap={2}>
          {postsExceptFirst.map((post, index) => {
            return (
              <Grid key={index} xs={12} sm={6}>
                <PostCard post={post} />
              </Grid>
            );
          })}
        </Grid.Container>
      </Container>
    </DefaultLayout>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);

  return {
    props: { allPosts },
  };
};
