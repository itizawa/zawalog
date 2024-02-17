import fs from 'fs';
import path from 'path';

import { Button, Link } from '@nextui-org/react';
import { format, parse } from 'date-fns';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import { DATE_FORMAT } from '~/constants/dateFormat';
import { Preview } from '~/app/_components/domains/Preview';

type Props = { params: { slug: string } };
export default async function Page({ params }: Props) {
  // URLのパラメータから該当するファイル名を取得 (今回は hello-world)
  const { slug } = params;
  const filePath = path.join(process.cwd(), '/public/contents', `${slug}.md`);

  // ファイルの中身を取得
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await unified().use(remarkParse).use(remarkHtml).process(content);
  const contentHtml = processedContent.toString(); // 記事の本文をHTMLに変換

  return (
    <div className="max-w-[1024px] mx-auto md:p-[24px] p-[16px]">
      <article className="mb-[32px]">
        <h1 className="text-2xl font-bold">{data.title}</h1>
        <p className="text-slate-50 text-sm mt-[8px]">公開日：{format(parse(slug, 'yyyyMMddHHmm', new Date()), DATE_FORMAT.EXCEPT_SECOND)}</p>
        <div className="mt-[24px]">
          <Preview contentHtml={contentHtml} />
        </div>
      </article>
      <Link href={`/`}>
        <Button color="secondary">{`<`} Post一覧に戻る</Button>
      </Link>
    </div>
  );
}
