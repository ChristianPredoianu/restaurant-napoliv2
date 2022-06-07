import Nav from '@/components/nav/Nav';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
}
