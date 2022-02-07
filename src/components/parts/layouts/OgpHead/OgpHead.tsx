import Head from 'next/head';
import { VFC } from 'react';
import { IMAGE_PATH } from '~/constants/imagePath';

type Props = {
  siteName?: string;
  title?: string;
  url?: string;
  image?: string;
  description?: string;
  keywords?: string[];
};

const DESCRIPTION = 'Zawalog は、itizawaのブログ兼アウトプットの統合サイトです';
const KEYWORDS = 'itizawa,個人開発';

export const OgpHead: VFC<Props> = ({ siteName, title, url, image, description, keywords = [] }) => {
  return (
    <Head>
      <title>{title || 'zawalog'}</title>
      <meta name="description" content={description || DESCRIPTION} />
      <meta name="keywords" content={keywords.length > 0 ? keywords?.join(',') : KEYWORDS} />
      <meta property="og:site_name" content={siteName || 'zawalog'} />
      <meta property="og:title" content={title || 'zawalog'} />
      <meta property="og:url" content={url || process.env.NEXT_PUBLIC_ROOT_URL} />
      <meta property="og:image" content={image || `${process.env.NEXT_PUBLIC_ROOT_URL}${IMAGE_PATH.OGP}`} />
      <meta property="og:description" content={description || DESCRIPTION} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || 'zawalog'} />
      <meta name="twitter:image" content={image || `${process.env.NEXT_PUBLIC_ROOT_URL}${IMAGE_PATH.OGP}`} />
      <meta name="twitter:description" content={description || DESCRIPTION} />
    </Head>
  );
};
