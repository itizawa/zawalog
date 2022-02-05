import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import markdownToHtml from '~/lib/markdownToHtml';
import { getPostBySlug, getAllPosts } from '~/lib/api';
import { Post } from '~/domains/Post';

type Props = {
  post: Post;
  morePosts: Post[];
  preview?: boolean;
};

const PostPage = ({ post }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <p>hoge</p>
    // <Layout preview={preview}>
    //   <Container>
    //     <Header />
    //     {router.isFallback ? (
    //       <PostTitle>Loading…</PostTitle>
    //     ) : (
    //       <>
    //         <article className="mb-32">
    //           <Head>
    //             <title>
    //               {post.title} | Next.js Blog Example with {CMS_NAME}
    //             </title>
    //             <meta property="og:image" content={post.ogImage.url} />
    //           </Head>
    //           <PostHeader title={post.title} coverImage={post.coverImage} date={post.date} author={post.author} />
    //           <PostBody content={post.content} />
    //         </article>
    //       </>
    //     )}
    //   </Container>
    // </Layout>
  );
};

export default PostPage;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'author', 'content', 'ogImage', 'coverImage']);
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
