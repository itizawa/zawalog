'use client';

import './styles.scss';
import { FC } from 'react';

export const Preview: FC<{ contentHtml: string }> = ({ contentHtml }) => {
  return (
    <div
      className="preview border-1 border-slate-700"
      style={{ padding: '16px', borderRadius: '8px' }}
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
};
