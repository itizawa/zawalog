import { NextPage } from 'next';

import { Button, Link } from '@nextui-org/react';

const Page: NextPage = () => {
  return (
    <div className="max-w-[1024px] mx-auto md:p-[24px] p-[16px]">
      <h1 className="text-2xl font-bold mb-[32px]">Not Found</h1>
      <Link href="/">
        <Button color="secondary">TOPに戻る</Button>
      </Link>
    </div>
  );
};

export default Page;
