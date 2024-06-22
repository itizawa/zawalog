'use client';

import { FC } from 'react';
import { Card } from '@nextui-org/card';
import { format } from 'date-fns';
import parse from 'html-react-parser';
import { DATE_FORMAT } from '~/constants/dateFormat';

type Props = {
  title: string;
  publishedAt: Date;
  bodyTeaser: string;
};

export const PostCard: FC<Props> = async ({ title, publishedAt, bodyTeaser }) => {
  return (
    <Card className="p-4 w-[100%]">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-slate-50 text-sm mt-[8px]">公開日：{format(publishedAt, DATE_FORMAT.EXCEPT_SECOND)}</p>
      <p className="text-slate-50 mt-2">{parse(`${bodyTeaser}...`)}</p>
    </Card>
  );
};
