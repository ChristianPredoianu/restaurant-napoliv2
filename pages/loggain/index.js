import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext';
import SocialMediaTab from '@/components/ui/SocialMediaTab';

export default function LoggaIn() {
  const router = useRouter();
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await signIn(email, password);
      router.push('/admin');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="min-h-85vh relative flex items-center justify-center overflow-hidden dark:bg-dark-mode-blue dark:text-gray-200">
        <div className="hidden md:block fixed top-40 right-0 z-50">
          <SocialMediaTab />
        </div>
        <section className="container px-2 md:px-8 mx-auto">
          <div className="shadow-3xl mx-auto w-4/5 md:w-3/5 lg:w-1/2 2xl:w-2/5 py-20 sm:py-40 px-5 sm:px-20 bg-amber-700 text-gray-200">
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <label htmlFor="email" className="tracking-widest">
                Email:
              </label>
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                required
                className="p-2 mt-2 shadow-3xl text-black"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email" className="mt-4 tracking-widest">
                Lösenord:
              </label>
              <input
                type="password"
                placeholder="Lösenord"
                minLength="6"
                maxLength="60"
                value={password}
                required
                className="p-2 mt-2 shadow-3xl text-black"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="block mt-8 bg-black text-gray-200 py-3 rounded-md tracking-widest uppercase hover:bg-gray-800 hover:transition hover:duration-300 hover:translate-y-1"
              >
                Logga in
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
