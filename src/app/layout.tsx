import './globals.css';
import { Providers } from './providers';
import { generateMetadata } from '~/lib/generateMetadata';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

export const metadata = generateMetadata({});
