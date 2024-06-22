import { Image } from '@nextui-org/image';
import Link from 'next/link';
import { PostCard } from './_components/domains/PostCard';
import { IMAGE_PATH } from '~/constants/imagePath';
import { apiClient } from '~/lib/apiClient';
import { GetPostsSchema } from '~/schema/post';

export default async function Page() {
  const { posts } = await apiClient<GetPostsSchema>({
    path: '/api/posts',
    method: 'GET',
    options: { next: { revalidate: 60 } },
  });

  return (
    <div className="max-w-[1024px] mx-auto md:p-[24px] p-[16px]">
      <h1 className="text-2xl font-bold">🎉 Welcome to Zawalog 🎉</h1>
      <h2 className="text-1xl mt-[8px] text-slate-50">Zawalog は、 itizawa のアウトプットをまとめるサイトです。</h2>
      <Image src={IMAGE_PATH.OGP} width={1200} height={630} alt="image-ogp-top" className="drop-shadow-sm" />
      <p className="border-b-1 border-slate-400 text-center pb-[8px]">開発日誌</p>
      <div className="flex flex-col gap-4 mt-[16px]">
        {posts.map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <PostCard {...post} />
          </Link>
        ))}
      </div>
    </div>
  );
}
