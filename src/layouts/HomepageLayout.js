import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Meta } from '../components/Meta';

export const HomepageLayout = ({ children }) => (
  <>
    <Meta />

    <Header />

    <main>{children}</main>

    <Footer />
  </>
);
