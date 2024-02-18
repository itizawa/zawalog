import { FC } from 'react';
import { Card } from '@nextui-org/card';
import { format, parse } from 'date-fns';

import { DATE_FORMAT } from '~/constants/dateFormat';

type Props = {
  title: string;
  publishedAt: string;
  description: string;
};

export const PostCard: FC<Props> = ({ title, publishedAt, description }) => {
  return (
    <Card className="p-4 w-[100%]">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-slate-50 text-sm mt-[8px]">
        公開日：{format(parse(publishedAt, 'yyyyMMddHHmm', new Date()), DATE_FORMAT.EXCEPT_SECOND)}
      </p>
      <p className="text-slate-50 mt-2">{description}</p>
    </Card>
  );
};
