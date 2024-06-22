'use client';

import './styles.scss';

import { useEffect, useState, FC, useCallback } from 'react';
import { Editor } from './Editor';
import { useDebounce } from '~/libs/useDebounce';

type Props = {
  body?: string;
  placeholder: string;
  onChange: (body: string) => Promise<void>;
};

export const DebounceEditor: FC<Props> = ({ body, placeholder, onChange }) => {
  const [inputText, setInputText] = useState<string>();
  const debouncedInputText = useDebounce({ value: inputText, delay: 200 });

  const handleEditorChange = useCallback(
    async (body: string) => {
      await onChange(body);
    },
    [onChange],
  );

  useEffect(() => {
    debouncedInputText && handleEditorChange(debouncedInputText);
  }, [debouncedInputText, handleEditorChange]);

  return <Editor body={body} placeholder={placeholder} onChange={(body) => setInputText(body)} />;
};
