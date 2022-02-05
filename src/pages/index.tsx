import Head from 'next/head';

import Button from '@nextui-org/react/button';
import { getAllPosts } from '~/lib/api';

import { Post } from '~/domains/Post';

import { DefaultLayout } from '~/components/parts/layouts/DefaultLayout';

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  console.log(allPosts);
  return (
    <DefaultLayout>
      <Head>
        <title>zawalog | Top</title>
      </Head>
      Top Page
      <Button>Waiting...</Button>
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
