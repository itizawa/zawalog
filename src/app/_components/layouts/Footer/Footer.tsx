import { Link } from '@nextui-org/react';
import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <div className="border-t-1 border-slate-800 drop-shadow-sm">
      <div className="max-w-[1024px] mx-auto p-[24px]">
        <Link href="/" className="text-slate-50 font-bold">
          Zawalog
        </Link>
        <p className="mt-[8px] text-slate-50 text-sm">Copyright © 2022 Itizawa. All Rights Reserved.</p>
      </div>
    </div>
  );
};
