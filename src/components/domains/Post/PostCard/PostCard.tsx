import { VFC } from 'react';
import { Card, Col, Text } from '@nextui-org/react';
import { format } from 'date-fns';
import styled from 'styled-components';

import { Post } from '~/domains/Post';
import { DATE_FORMAT } from '~/constants/dateFormat';

type Props = {
  post: Post;
};

export const PostCard: VFC<Props> = ({ post }) => {
  return (
    <StyledCard clickable cover css={{ overflow: 'hidden' }}>
      <Card.Body>
        {/* TODO set ogp for without coverImage */}
        <Card.Image src={post.coverImage || '/'} showSkeleton height="100%" width="100%" alt={`${post}-cover`} />
      </Card.Body>
      <Card.Footer
        className="post-card-footer"
        blur
        css={{
          position: 'absolute',
          bgBlur: '#ffffff',
          borderTop: '$borderWeights $light solid rgba(255, 255, 255, 0.2)',
          zIndex: 1,
          bottom: -100,
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
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  :hover {
    .post-card-footer {
      bottom: 0;
      top: 0;
      transition: all 0.2s ease-out;
    }
  }
`;
