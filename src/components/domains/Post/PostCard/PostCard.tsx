import { VFC } from 'react';
import { Card, Col, Text } from '@nextui-org/react';
import { format } from 'date-fns';

import { Post } from '~/domains/Post';
import { DATE_FORMAT } from '~/constants/dateFormat';

type Props = {
  post: Post;
};

export const PostCard: VFC<Props> = ({ post }) => {
  return (
    <Card clickable cover>
      <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="$black">
            {post.title}
          </Text>
          <Text size={8} weight="bold" transform="uppercase" color="$black">
            {format(new Date(post.date), DATE_FORMAT.EXCEPT_SECOND)}
          </Text>
        </Col>
      </Card.Header>
      {/* TODO set ogp for without coverImage */}
      <Card.Image src={post.coverImage || '/'} height="auto" width="100%" alt="Card image background" />
    </Card>
  );
};
