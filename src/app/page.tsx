import fs from 'fs';
import path from 'path';
import { Image } from '@nextui-org/image';
import matter from 'gray-matter';
import { Link } from '@nextui-org/react';
import { PostCard } from './_components/domains/PostCard';
import { IMAGE_PATH } from '~/constants/imagePath';

export default async function Page() {
  // contentディレクトリ内のマークダウンファイル一覧を取得
  const postsDirectory = path.join(process.cwd(), 'public/contents');
  const fileNames = fs.readdirSync(postsDirectory);

  // 各ファイルの中身を取得
  const posts = (
    await Promise.all(
      // 各ファイル情報を取得
      fileNames.map(async (fileName) => {
        const filePath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        return {
          slug: fileName.replace('.md', ''),
          title: data.title,
          description: data.description,
        };
      }),
    )
  ).sort((a, b) => (a.slug < b.slug ? 1 : -1));

  return (
    <div className="max-w-[1024px] mx-auto md:p-[24px] p-[16px]">
      <h1 className="text-2xl font-bold">🎉 Welcome to Zawalog 🎉</h1>
      <h2 className="text-1xl mt-[8px] text-slate-50">Zawalog は、 itizawa のアウトプットをまとめるサイトです。</h2>
      <Image src={IMAGE_PATH.OGP} width={1200} height={630} alt="image-ogp-top" className="drop-shadow-sm" />
      <p className="border-b-1 border-slate-400 text-center pb-[8px]">開発日誌</p>
      <div className="flex flex-col gap-4 mt-[16px]">
        {posts.map(({ slug, title, description }) => (
          <Link href={`/posts/${slug}`} key={slug}>
            <PostCard key={slug} title={title} publishedAt={slug} description={description} />
          </Link>
        ))}
      </div>
    </div>
  );
}
