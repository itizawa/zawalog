import { Metadata } from 'next';
import { IMAGE_PATH } from '~/constants/imagePath';

const DEFAULT_TITLE = 'Zawalog';
const DEFAULT_DESCRIPTION = 'Zawalog は、itizawaのブログ兼アウトプットの統合サイトです。';
const DEFAULT_URL = 'https://blog.wiscro.app/';

type Args = {
  title?: string;
  description?: string;
  url?: string;
  imagePath?: string;
};

export const generateMetadata = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  url = DEFAULT_URL,
  imagePath = `${process.env.NEXT_PUBLIC_ROOT_URL}${IMAGE_PATH.OGP}`,
}: Args): Metadata => {
  return {
    title,
    description,
    openGraph: {
      images: imagePath,
      title,
      description,
      url,
      siteName: 'Zawalog',
      locale: 'ja_JP',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title,
      description,
      site: '@itizawa_pen',
      creator: '@itizawa_pen',
      images: imagePath,
    },
    metadataBase: new URL(process.env.URL ?? 'http://localhost:3000'),
  };
};
