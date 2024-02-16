import { Image } from '@nextui-org/image';
import { IMAGE_PATH } from '~/constants/imagePath';

export default function Page() {
  return (
    <div className="max-w-[1024px] mx-auto md:p-[24px] p-[16px]">
      <h1 className="text-2xl font-bold">🎉 Welcome to Zawalog 🎉</h1>
      <h2 className="text-1xl mt-[8px] text-slate-50 text-sm">Zawalog は、 itizawa のブログ兼アウトプットをまとめる統合サイトです。</h2>
      <Image src={IMAGE_PATH.OGP} width={1200} height={630} alt="image-ogp-top" className="drop-shadow-sm" />
      <p className="border-b-1 border-slate-400 text-center pb-[8px]">開発日誌</p>
    </div>
  );
}
