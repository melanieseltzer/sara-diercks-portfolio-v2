import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Meta } from '../components/Meta';

export const HomepageLayout = ({ children }) => (
  <>
    <Meta />

    <Header />

    <main className={`px-4 xl:px-0 max-w-5xl mx-auto`}>{children}</main>

    <Footer />
  </>
);
