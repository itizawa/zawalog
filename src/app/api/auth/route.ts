export const GET = () => {
  return new Response('Basic認証が必要です', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Access to the staging site", charset="UTF-8"',
    },
  });
};
