import './globals.css';

import { Footer } from './_components/layouts/Footer';
import { Navigation } from '~/app/_components/layouts/Navigation';
import { Providers } from '~/app/providers';
import { generateMetadata } from '~/lib/generateMetadata';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-[100vh] flex flex-col">
        <Navigation />
        <div className="flex-1">
          <Providers>{children}</Providers>
        </div>
        <Footer />
      </body>
    </html>
  );
}

export const metadata = generateMetadata({});
