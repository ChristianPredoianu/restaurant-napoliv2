import Nav from '@/components/nav/Nav';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function Layout({ children }) {
  return (
    <div className='relative min-h-screen text-zinc-900  dark:bg-dark-mode-blue dark:text-gray-200'>
      <Nav />

      <main className=' relative z-10 '>
        <div className=''>{children}</div>
      </main>
      <ScrollToTop />
    </div>
  );
}
