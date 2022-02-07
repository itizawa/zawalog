/**
 * pathからタイトルを取得する
 * @returns {string}
 */
export const extractTitleFromPath = (path: string) => {
  const array = path.split('/');
  return array[array.length - 1];
};
