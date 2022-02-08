import { VFC } from 'react';
import { Card, Text } from '@nextui-org/react';
import { format } from 'date-fns';

import { Post } from '~/domains/Post';
import { DATE_FORMAT } from '~/constants/dateFormat';

type Props = {
  post: Post;
};

export const PostCard: VFC<Props> = ({ post }) => {
  return (
    <Card clickable css={{ overflow: 'hidden' }} bordered>
      <Text size={24} weight="bold" color="$white">
        {post.title}
      </Text>
      <Text size={12} transform="uppercase" color="$white">
        公開日：{format(new Date(post.publishedAt), DATE_FORMAT.EXCEPT_SECOND)}
      </Text>
      <Text size={12} transform="uppercase" color="$white">
        更新日：{format(new Date(post.updatedAt), DATE_FORMAT.EXCEPT_SECOND)}
      </Text>
    </Card>
  );
};
