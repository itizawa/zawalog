import { Button, Link } from '@nextui-org/react';
import { format } from 'date-fns';
import { DATE_FORMAT } from '~/constants/dateFormat';
import { Preview } from '~/app/_components/domains/Preview';
import { apiClient } from '~/lib/apiClient';
import { GetPostSchema } from '~/schema/post';

type Props = { params: { id: string } };
export default async function Page({ params }: Props) {
  const { post } = await apiClient<GetPostSchema>({
    path: `/api/posts/${params.id}`,
    method: 'GET',
    options: { next: { revalidate: 60 } },
  });

  return (
    <div className="max-w-[1024px] mx-auto md:p-[24px] p-[16px]">
      <article className="mb-[32px]">
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <p className="text-slate-50 text-sm mt-[8px]">公開日：{format(post.publishedAt, DATE_FORMAT.EXCEPT_SECOND)}</p>
        <div className="mt-[24px]">
          <Preview body={post.body} />
        </div>
      </article>
      <Link href={`/`}>
        <Button color="secondary">{`<`} Post一覧に戻る</Button>
      </Link>
    </div>
  );
}
