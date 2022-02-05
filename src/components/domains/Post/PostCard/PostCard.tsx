import { VFC } from 'react';
import { Card, Col, Text } from '@nextui-org/react';
import { Post } from '~/domains/Post';

type Props = {
  post: Post;
};

export const PostCard: VFC<Props> = ({ post }) => {
  return (
    <Card clickable cover>
      <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="$text">
            {post.title}
          </Text>
        </Col>
      </Card.Header>
      {/* TODO set ogp for without coverImage */}
      <Card.Image src={post.coverImage || '/'} height={340} width="100%" alt="Card image background" />
    </Card>
  );
};
