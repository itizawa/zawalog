import { createTheme, NextUIProvider } from '@nextui-org/react';
import { AppProps } from 'next/app';
import 'ress';

const myDarkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      background: '#111122',
      text: '#eee',
      secondary: '#7856ff',
      selection: '#7856ff',
    },
    letterSpacings: { normal: '0.1em' },
    space: {},
    fonts: {
      sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto','Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
      mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono','DejaVu Sans Mono', 'Bitstream Vera Sans Mono'",
    },
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={myDarkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
