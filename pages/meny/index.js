import { useRef } from 'react';
import SocialMediaTab from '@/components/ui/SocialMediaTab';
import MenuCard from '@/components/cards/MenuCard';

export default function Meny() {
  const socialMediaTabRef = useRef(null);

  return (
    <div className="relative  overflow-hidden dark:bg-dark-mode-blue dark:text-gray-200">
      <div className="absolute top-10rem lg:top-40 right-0 z-50">
        <SocialMediaTab ref={socialMediaTabRef} />
      </div>

      <section className="min-h-screen mt-40 lg:mt-0 relative container px-2 mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <MenuCard heading={'Pizzor'} />
      </section>
    </div>
  );
}
