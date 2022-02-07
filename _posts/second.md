---
title: 'OGPを生成するようにした'
description: '記事のタイトルを元に動的なOGPを生成した'
coverImage: 'https://zawalog.vercel.app/api/ogp/post?title=OGPを生成するようにしました'
date: '2022-02-08T09:00:00'
---

## OGPを生成するようにした

[実装したPR](https://github.com/itizaworld/zawalog/pull/33/files)

```
import * as playwright from 'playwright-aws-lambda';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { PostOgp } from '~/components/domains/Post';

const getOgp = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title } = req.query;
  const viewport = { width: 1200, height: 630 };

  try {
    const browser = await playwright.launchChromium();

    const page = await browser.newPage({ viewport });

    const element = React.createElement(PostOgp, { title: title as string });
    const markup = ReactDOMServer.renderToStaticMarkup(element);
    const html = `<!doctype html>${markup}`;

    await page.setContent(html, { waitUntil: 'load' });

    const image = await page.screenshot({ type: 'png' });
    await browser.close();

    res.setHeader('Cache-Control', 's-maxage=31536000, stale-while-revalidate');

    res.setHeader('Content-Type', 'image/png');

    res.end(image);
  } catch (error) {
    console.error('[Error]: ', error);
    res.status(404).json({ message: 'Cannot render og-image' });
  }
};

export default getOgp;
```

次回、記事をCMSから取得するようにする。