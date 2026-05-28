import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext';

import SocialMediaTab from '@/components/ui/SocialMediaTab';
import FormInput from '@/components/inputs/FormInput';

export default function LoggaIn() {
  const router = useRouter();
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      await signIn(email, password);

      router.push('/admin');
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className='
        relative
        flex items-center justify-center
        min-h-screen
        overflow-hidden
      '
    >
      {/* SOCIAL */}
      <div className='hidden md:block fixed top-40 right-0 z-50'>
        <SocialMediaTab />
      </div>

      {/* CARD */}
      <section className='container mx-auto px-4  w-full max-w-md '>
        <div
          className='
            relative overflow-hidden
            rounded-[2rem]
            border border-white/10
            bg-white/5
            dark:bg-white/[0.03]
            backdrop-blur-2xl
            p-8 md:p-10
            shadow-[0_20px_80px_rgba(0,0,0,0.45)]
          '
        >
          {/* subtle glow */}
          <div
            className='
              absolute inset-0 opacity-40
              bg-gradient-to-br
              from-red-500/10
              via-transparent
              to-transparent
              pointer-events-none
            '
          />

          {/* HEADER */}
          <div className='relative text-center'>
            <p
              className='
                text-xs
                uppercase
                tracking-[0.35em]
                text-zinc-400
              '
            >
              Napoli Admin
            </p>

            <h1
              className='
                mt-4
                text-4xl
                font-black
                tracking-tight
                text-zinc-900
                dark:text-white
              '
            >
              Logga In
            </h1>

            <p
              className='
                mt-3
                text-zinc-600
                dark:text-zinc-400
              '
            >
              Logga in för att hantera restaurangen.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className='relative mt-10 space-y-6'>
            <FormInput
              label='Email'
              type='email'
              placeholder='din@email.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <FormInput
              label='Lösenord'
              type='password'
              placeholder='••••••••'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* BUTTON */}
            <button
              type='submit'
              disabled={loading}
              className='
                group
                relative
                w-full
                overflow-hidden
                rounded-2xl
                bg-red-800
                px-6 py-4
                font-semibold
                tracking-wide
                text-white
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-red-700
                hover:shadow-[0_10px_40px_rgba(120,0,0,0.45)]
                disabled:opacity-60
              '
            >
              <span className='relative z-10'>
                {loading ? 'Loggar in...' : 'Logga In'}
              </span>

              {/* hover shine */}
              <div
                className='
                  absolute inset-0
                  translate-x-[-100%]
                  bg-gradient-to-r
                  from-transparent
                  via-white/10
                  to-transparent
                  transition-transform duration-700
                  group-hover:translate-x-[100%]
                '
              />
            </button>
          </form>

          {/* bottom accent */}
          <div
            className='
              absolute bottom-0 left-0
              h-[2px] w-full
              bg-gradient-to-r
              from-transparent
              via-red-500/70
              to-transparent
            '
          />
        </div>
      </section>
    </div>
  );
}
