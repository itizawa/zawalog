import React, { ComponentProps, VFC } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { Link as NextUiLink } from '@nextui-org/react';

type Props = {
  href: NextLinkProps['href'];
  color?: ComponentProps<typeof NextUiLink>['color'];
  target?: string;
  children?: React.ReactNode;
};

export const Link: VFC<Props> = ({ href, color = 'primary', target, children }) => (
  <NextLink href={href} passHref>
    <NextUiLink color={color} target={target || '_self'} rel={target ? 'opener noreferrer' : ''} className="nextui-link">
      {children}
    </NextUiLink>
  </NextLink>
);
