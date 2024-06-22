import { PostEditor } from '../_components/domains/PostEditor';

export default async function Page() {
  return (
    <div className="max-w-[1024px] mx-auto md:p-[24px] p-[16px]">
      <h1 className="text-2xl font-bold">編集</h1>
      <PostEditor />
    </div>
  );
}
