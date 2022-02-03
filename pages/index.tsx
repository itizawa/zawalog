import Head from 'next/head';

import Button from '@nextui-org/react/button';
import { getAllPosts } from '../lib/api';
import Post from '../types/post';

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  console.log(allPosts);
  return (
    <>
      <Head>
        <title>zawalog | Top</title>
      </Head>
      Top Page
      <Button>Waiting...</Button>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);

  return {
    props: { allPosts },
  };
};
