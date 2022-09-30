import { Logo } from '../Logo';
import { MaxWidthContainer } from '../MaxWidthContainer';
import { Nav } from '../Nav';

export const Header = () => (
  <header className="sticky bg-white/95 top-0 w-full z-10 shadow-sm">
    <MaxWidthContainer className="space-y-4 flex flex-col items-center justify-center sm:flex-row sm:justify-between sm:space-y-0">
      <Logo />
      <Nav />
    </MaxWidthContainer>
  </header>
);
