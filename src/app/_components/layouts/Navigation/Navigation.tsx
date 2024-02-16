import React, { FC } from 'react';
import { Navbar, NavbarBrand } from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';

export const Navigation: FC = () => {
  return (
    <Navbar isBordered isBlurred={false} position="static">
      <NavbarBrand>
        <Link href="/" color="foreground" className="font-bold">
          Zawalog
        </Link>
      </NavbarBrand>
    </Navbar>
  );
};
