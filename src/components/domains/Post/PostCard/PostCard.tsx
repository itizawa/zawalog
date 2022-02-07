import { VFC } from 'react';
import { Card, Text } from '@nextui-org/react';
import { format } from 'date-fns';

import { Post } from '~/domains/Post';
import { DATE_FORMAT } from '~/constants/dateFormat';
import { extractTitleFromPath } from '~/lib/extractTitleFromPath';

type Props = {
  post: Post;
};

export const PostCard: VFC<Props> = ({ post }) => {
  return (
    <Card clickable css={{ overflow: 'hidden' }} bordered>
      <Text size={24} weight="bold" color="$white">
        {extractTitleFromPath(post.path)}
      </Text>
      <Text size={12} transform="uppercase" color="$white">
        作成日：{format(new Date(post.createdAt), DATE_FORMAT.EXCEPT_SECOND)}
      </Text>
      <Text size={12} transform="uppercase" color="$white">
        更新日：{format(new Date(post.updatedAt), DATE_FORMAT.EXCEPT_SECOND)}
      </Text>
    </Card>
  );
};
