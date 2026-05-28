import Nav from '@/components/nav/Nav';
import ScrollToTop from '@/components/ui/ScrollToTop';
import GlobalBackground from '@/components/layout/GlobalBackground';

export default function Layout({ children }) {
  return (
    <div className='relative min-h-screen text-zinc-900 dark:text-gray-200'>
      {/* GLOBAL BACKGROUND (MUST BE HERE) */}
      <GlobalBackground />

      {/* NAV */}
      <Nav />

      {/* CONTENT */}
      <main className='relative z-10'>{children}</main>

      <ScrollToTop />
    </div>
  );
}
