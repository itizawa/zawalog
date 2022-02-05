import { NextUIProvider } from '@nextui-org/react';
import { AppProps } from 'next/app';
import 'ress';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
