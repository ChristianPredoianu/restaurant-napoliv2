import Nav from '@/components/nav/Nav';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>

      <ScrollToTop />
    </>
  );
}
