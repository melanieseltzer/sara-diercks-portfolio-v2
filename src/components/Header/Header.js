import { Logo } from '../Logo';
import { Nav } from '../Nav';

export const Header = () => (
  <header className="py-4 bg-white/95 text-black sticky top-0 w-full z-10 shadow-lg">
    <div className="px-4 xl:px-0 max-w-5xl mx-auto h-full space-y-2 flex flex-col items-center justify-center sm:flex-row sm:justify-between sm:h-20 sm:space-y-0">
      <Logo />
      <Nav />
    </div>
  </header>
);
