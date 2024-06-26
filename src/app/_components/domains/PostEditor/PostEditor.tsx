'use client';

import { Button } from '@nextui-org/react';
import { FC, useCallback, useState } from 'react';
import { Input } from '@nextui-org/input';
import { useRouter } from 'next/navigation';
import { Editor } from '~/app/_components/uiParts/Editor';
import { apiClient } from '~/lib/apiClient';
import { PostPostsSchema } from '~/schema/post';

export const PostEditor: FC = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const onChangeText = (body: string) => {
    setText(body);
  };

  const handleSubmit = useCallback(async () => {
    await apiClient<PostPostsSchema>({
      path: '/api/posts',
      method: 'POST',
      options: {
        body: JSON.stringify({
          title,
          text,
        }),
      },
    }).then((res) => {
      router.push(`/posts/${res.post.id}`);
    });
  }, [router, text, title]);

  return (
    <div className="flex flex-col gap-8">
      <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="タスクのタイトル" />
      <Editor onChange={onChangeText} placeholder="タスクの内容を記入しましょう" />
      <Button onClick={handleSubmit} color="primary">
        保存
      </Button>
    </div>
  );
};
