import { VFC } from 'react';
import { Card, Grid, Text } from '@nextui-org/react';
import { format } from 'date-fns';

import { Post } from '~/domains/Post';
import { DATE_FORMAT } from '~/constants/dateFormat';
import { Tag } from '~/components/parts/commons/Tag';

type Props = {
  post: Post;
};

export const PostCard: VFC<Props> = ({ post }) => {
  return (
    <Card clickable css={{ overflow: 'hidden' }} bordered>
      <Text size={24} weight="bold" color="$white">
        {post.title}
      </Text>
      <Grid css={{ p: '0', my: '$2', display: 'flex', gap: '$2' }}>
        {post.tags.map((v) => {
          return <Tag key={v.id}>{v.name}</Tag>;
        })}
      </Grid>
      <Text size={12} transform="uppercase" color="$white">
        公開日：{format(new Date(post.publishedAt), DATE_FORMAT.EXCEPT_SECOND)}
      </Text>
      <Text size={12} transform="uppercase" color="$white">
        更新日：{format(new Date(post.updatedAt), DATE_FORMAT.EXCEPT_SECOND)}
      </Text>
    </Card>
  );
};
