import { useState, useRef } from 'react';

export default function Nav() {
  const [isModalOpen, setModalOpen] = useState(false);

  const ref = useRef(null);

  return (
    <div className="flex container w-full mx-auto justify-between items-center font-bold text-2xl px-5  py-6">
      <Link href="/">
        <h1 className="h-[3.5rem] flex items-center text-center">Logo</h1>
      </Link>
      <nav className="hidden md:flex space-x-10 items-center"></nav>
      <div className="md:hidden">
        {isModalOpen ? (
          <div
            ref={ref}
            className="bg-[#161B21] border-[1px] border-red-100/20  fixed w-[24rem] right-0 top-0 h-[100vh] transition translate-x-[-1px] rounded-lg  text-white"
          >
            <div className="pt-5 pb-6 px-5">
              <button
                onClick={() => setModalOpen(!isModalOpen)}
                className="-mr-2 float-right mb-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <div className="mt-[5rem] z-10 relative">
                <nav className="grid gap-y-8">
                  {navData.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-black/20 border-[1px] border-gray-500/60"
                    >
                      <h1 className="my-3 ml-3 text-3xl font-bold ">
                        {item.name}
                      </h1>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        ) : (
          <button onClick={() => setModalOpen(!isModalOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="white"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
