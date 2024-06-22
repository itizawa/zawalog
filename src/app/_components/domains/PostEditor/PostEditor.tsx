'use client';

import { FC, useState } from 'react';
import { Editor } from '~/app/_components/uiParts/Editor';

export const PostEditor: FC = () => {
  const [text, setText] = useState('');
  console.log(text);

  const onChangeText = (body: string) => {
    setText(body);
  };
  return <Editor onChange={onChangeText} placeholder="タスクの内容を記入しましょう" />;
};
