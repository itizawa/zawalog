import { VFC } from 'react';
import { Card, Col, Text } from '@nextui-org/react';
import { format } from 'date-fns';
import styled from 'styled-components';

import { Product } from '~/domains/Product';
import { DATE_FORMAT } from '~/constants/dateFormat';

type Props = {
  product: Product;
};

export const ProductCard: VFC<Props> = ({ product }) => {
  return (
    <StyledCard clickable cover css={{ overflow: 'hidden' }} bordered>
      <Card.Body>
        <Card.Image src={product.image || '/'} showSkeleton height="100%" width="100%" alt={`${product.id}-cover`} />
      </Card.Body>
      <Card.Footer
        className="post-card-footer"
        blur
        css={{
          position: 'absolute',
          bgBlur: '#ffffff',
          borderTop: '$borderWeights $light solid rgba(255, 255, 255, 0.2)',
          zIndex: 1,
          bottom: -200,
        }}
      >
        <Col>
          <Text size={24} weight="bold" color="$black">
            {product.title}
          </Text>
          <Text size={12} weight="bold" color="$black">
            🎉 Released: {format(new Date(product.releasedAt), DATE_FORMAT.ONLY_DATE)}
          </Text>
          <Text size={16} weight="bold" color="$black">
            {product.description}
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
