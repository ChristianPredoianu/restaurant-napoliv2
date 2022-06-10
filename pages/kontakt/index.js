import Image from 'next/image';
import SocialMediaTab from '@/components/ui/SocialMediaTab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import PhoneImg from '@/assets/images/hamburger3.png';
export default function Kontakt() {
  const openHoursData = [
    { days: 'Mån-tors', summer: '11:00-22:00', winter: '11:00-21:00' },
    { days: 'Fre-Lör', summer: '11:00-23:00', winter: '11:00-22:00' },
    { days: 'Sön', summer: '11:00-22:00', winter: '11:00-21:00' },
  ];

  const openHours = openHoursData.map((openHour) => (
    <>
      <p className="border-b border-amber-600 py-1 md:text-2xl">
        {openHour.days}
      </p>
      <div className="flex justify-between">
        <p className="py-2 md:text-xl">{openHour.summer}</p>
        <p className="py-2 md:text-xl">{openHour.winter}</p>
      </div>
    </>
  ));

  return (
    <div className="relative overflow-hidden dark:bg-dark-mode-blue dark:text-gray-200">
      <div className="fixed top-20 lg:top-40 right-0 z-50">
        <SocialMediaTab />
      </div>
      <section className="min-h-screen mt-24 md:mt-0 relative container px-2 md:px-8 mx-auto flex flex-col md:flex-row md:justify-between md:items-center ">
        <div className="w-full py-10 px-4 lg:px-16 md:w-1/2 lg:w-1/2 md:flex md:flex-col md:justify-center md:order-1 md:h-screen">
          <h1 className="text-3xl text-amber-600">Napoli</h1>
          <p className="mt-2 text-xl">
            Vi ordnar allt från den lilla festen till studentbjudning, företags
            eller födelsedagsfester. Kom in med dina önskemål så ordnar vi
            resten.
          </p>
          <p className="text-xl text-amber-600 font-bold mt-2">
            Välkomna önskar Napoli med personal!
          </p>
        </div>
        <div className="relative z-10 bg-black text-gray-200 md:text-black md:bg-transparent w-full py-10 px-4 md:px-8 lg:px-16 md:w-3/5 lg:w-1/2 md:flex md:flex-col md:justify-center  md:h-screen">
          <h2 className="text-2xl italic tracking-wider md:text-4xl">
            Öppettider
          </h2>
          <h3 className="mt-2 text-amber-600 md:text-md">
            Dagarna och timmarna som vi har öppet
          </h3>

          <div className="flex justify-between py-2 text-xl">
            <p>Sommar</p>
            <p>Vinter</p>
          </div>
          {openHours}

          <div className="flex items-center justify-between mt-4 md:text-xl">
            <p>Ring oss på</p>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="text-amber-600 mr-2" />
              <p className="font-bold">0454-917 01</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:absolute md:-bottom-0 md:-right-48 lg:-right-60 2xl:-right-72 w-full">
          <Image
            src={PhoneImg}
            alt="girl eating pizza"
            width={400}
            height={350}
            priority
          />
        </div>
      </section>
    </div>
  );
}
