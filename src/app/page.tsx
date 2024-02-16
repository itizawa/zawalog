export default function () {
  return (
    <p>TBD</p>
    // <DefaultLayout>
    //   <OgpHead title="Zawalog | Top" />
    //   <Container sm css={{ pt: '$12' }}>
    //     <Text h3>🎉 Welcome to Zawalog 🎉</Text>
    //     <Text css={{ my: '$4' }}>Zawalog は、 itizawa のブログ兼アウトプットをまとめる統合サイトです</Text>
    //     <Image src={IMAGE_PATH.OGP} width={1200} height={630} alt="image-ogp-top" />
    //     <Text css={{ my: '$4', textAlign: 'center', borderBottom: '$secondary solid 1px', fontWeight: '$bold' }}>開発日誌</Text>
    //     <Grid.Container gap={2}>
    //       {recentPosts.map((post, index) => {
    //         return (
    //           <StyledGrid key={index} xs={12} css={{ px: '0', pb: '0' }}>
    //             <Link href={`/posts/${post.id}`}>
    //               <PostCard post={post} />
    //             </Link>
    //           </StyledGrid>
    //         );
    //       })}
    //       <Grid css={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
    //         <Link href={`/posts/list/1`}>
    //           <Button color="secondary" css={{ marginTop: '$10', fontWeight: 'bold' }}>
    //             もっと見る
    //           </Button>
    //         </Link>
    //       </Grid>
    //     </Grid.Container>
    //   </Container>
    // </DefaultLayout>
  );
}

// export const getStaticProps = async () => {
//   if (!cmsClient.client) {
//     return {
//       props: {
//         recentPosts: [],
//       },
//     };
//   }
//   try {
//     const result = await cmsClient.client.get<PaginationResult<Post>>({
//       endpoint: 'posts',
//       queries: { orders: '-publishedAt', limit: 100 },
//     });

//     return {
//       props: {
//         recentPosts: result.contents,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         recentPosts: [],
//       },
//     };
//   }
// };
