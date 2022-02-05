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
      <Card.Body>
        {/* TODO set ogp for without coverImage */}
        <Card.Image src={post.coverImage || '/'} height="auto" width="100%" alt="Card image background" />
      </Card.Body>
      <Card.Footer
        blur
        css={{
          position: 'absolute',
          bgBlur: '#ffffff',
          borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Col>
          <Text size={10} weight="bold" transform="uppercase" color="$black">
            {post.title}
          </Text>
          <Text size={6} weight="bold" transform="uppercase" color="$black">
            {format(new Date(post.date), DATE_FORMAT.EXCEPT_SECOND)}
          </Text>
        </Col>
      </Card.Footer>
    </Card>
  );
};
