import { FC } from 'react';
import { Text } from '@nextui-org/react';

export const Tag: FC = ({ children }) => {
  return (
    <Text
      size={10}
      css={{
        display: 'flex',
        alignItems: 'center',
        width: 'fit-content',
        backgroundColor: '$gray600',
        gap: '$2',
        p: '$2 $3',
        br: '9999px',
        m: '0',
      }}
      b
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
        <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
      </svg>
      {children}
    </Text>
  );
};
