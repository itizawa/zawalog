import React, { VFC } from 'react';

type Props = {
  title: string;
};

export const PostOgp: VFC<Props> = ({ title }) => {
  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');
    @font-face {
      font-family: 'NotoColorEmoji';
      src: url('https://raw.githack.com/googlei18n/noto-emoji/master/fonts/NotoColorEmoji.ttf') format('truetype');
    }
    html,
    body {
      margin: 0;
      padding: 0;
    }
    .wrapper {
      width: 1200px;
      height: 630px;
      display: flex;
      position: relative;
      align-items: center;
      justify-content: center;
      background-image: ${`url(${process.env.NEXT_PUBLIC_ROOT_URL}/assets/images/ogp.png)`};
      background-size: cover;
      background-position: center center;
      font-family: 'Noto Sans JP', 'NotoColorEmoji', sans-serif;
    }
    .title {
      font-size: 64px;
      line-height: 1.2;
      padding: 10px 80px;
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      word-break: break-all;
      color: #333;
    }
  `;

  return (
    <html>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <body>
        <div className="wrapper">
          <div className="title">{title}</div>
        </div>
      </body>
    </html>
  );
};
