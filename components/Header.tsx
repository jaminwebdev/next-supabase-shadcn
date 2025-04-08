import React from 'react';
import Link from 'next/link';
import SiteLogo from './SiteLogo';
import { UserMenu } from './UserMenu';
import Container from './Container';

function Header() {
  return (
    <header className="py-5 px-10 border-b-1 border-primary">
      <Container extraClasses="flex justify-between items-center max-w-7xl">
        <Link href="/">
          <SiteLogo />
        </Link>
        <UserMenu />
      </Container>
    </header>
  );
}

export default Header;
