import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext';
import SocialMediaTab from '@/components/ui/SocialMediaTab';
import FormInput from '@/components/inputs/FormInput';
import FormSubmitBtn from '@/components/buttons/FormSubmitBtn';

export default function LoggaIn() {
  const router = useRouter();
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /*   function onChangeEmail(e) {
    setEmail(e.target.value);
  } */

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
      <div className='min-h-85vh relative flex items-center justify-center overflow-hidden dark:bg-dark-mode-blue dark:text-gray-200'>
        <div className='hidden md:block fixed top-40 right-0 z-50'>
          <SocialMediaTab />
        </div>
        <section className='container px-2 md:px-8 mx-auto'>
          <div className='shadow-3xl mx-auto w-4/5 md:w-3/5 lg:w-1/2 2xl:w-2/5 py-20 sm:py-40 px-5 sm:px-20 bg-amber-700 text-gray-200'>
            <form className='flex flex-col text-black' onSubmit={handleSubmit}>
              <FormInput
                label={'Email'}
                type={'email'}
                placeholder={'Email'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormInput
                label={'Lösenord'}
                type={'password'}
                placeholder={'Lösenord'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormSubmitBtn>Logga In</FormSubmitBtn>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
