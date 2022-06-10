import { useState } from 'react';
import SocialMediaTab from '@/components/ui/SocialMediaTab';

export default function LoggaIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email);
    console.log(password);
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden dark:bg-dark-mode-blue dark:text-gray-200">
      <div className="fixed top-20 lg:top-40 right-0 z-50">
        <SocialMediaTab />
      </div>
      <section className="flex justify-center container px-2 md:px-8 mx-auto">
        <div className="shadow-3xl py-20 px-5 sm:py-40 sm:px-20 md:mt-40 bg-amber-700 text-gray-200">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label for="email" className="tracking-widest">
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
            <label for="email" className="mt-4 tracking-widest">
              Lösenord:
            </label>
            <input
              type="password"
              placeholder="Lösenord"
              minlength="6"
              maxlength="60"
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
  );
}
