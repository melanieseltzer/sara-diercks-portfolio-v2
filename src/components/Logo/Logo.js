import Link from 'next/link';

export const Logo = () => (
  <h1>
    <Link href="/" passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>Sara Diercks</a>
    </Link>
    <span /> {/* fancy border thingy */}
  </h1>
);
