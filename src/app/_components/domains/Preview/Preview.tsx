'use client';

import parse from 'html-react-parser';
import './styles.scss';
import { FC } from 'react';

export const Preview: FC<{ body: string }> = ({ body }) => {
  return (
    <div className="preview border-1 border-slate-700" style={{ padding: '16px', borderRadius: '8px' }}>
      {parse(body)}
    </div>
  );
};
