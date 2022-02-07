import { Container, Grid, Text } from '@nextui-org/react';
import Image from 'next/image';
import { getAllPosts } from '~/lib/api';

import { Post } from '~/domains/Post';

import { DefaultLayout } from '~/components/parts/layouts/DefaultLayout';
import { PostCard } from '~/components/domains/Post';
import { Link } from '~/components/parts/commons/Link';
import { OgpHead } from '~/components/parts/layouts/OgpHead';
import { IMAGE_PATH } from '~/constants/imagePath';

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const [firstPost, ...postsExceptFirst] = allPosts;

  return (
    <DefaultLayout>
      <OgpHead title="Zawalog | Top" />
      <Container xs>
        <Text h3>🎉 Welcome to Zawalog 🎉</Text>
        <Image src={IMAGE_PATH.OGP} width={1200} height={630} />
        <Text css={{ my: '$4' }}>Zawalog は、 itizawa のブログ兼アウトプットをまとめる統合サイトです</Text>
        <Grid.Container gap={2}>
          <Grid xs={12} css={{ padding: '0' }}>
            <Link href={`/posts/${firstPost.slug}`}>
              <PostCard post={firstPost} />
            </Link>
          </Grid>
        </Grid.Container>
        <Grid.Container gap={2}>
          {postsExceptFirst.map((post, index) => {
            return (
              <Grid key={index} xs={12} sm={6} css={{ padding: '0' }}>
                <Link href={`/posts/${post.slug}`}>
                  <PostCard post={post} />
                </Link>
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
  const allPosts = getAllPosts(['title', 'date', 'slug', 'coverImage', 'description']);

  return {
    props: { allPosts },
  };
};
