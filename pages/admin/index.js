import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import FormInput from '@/components/inputs/FormInput';
import FormSubmitBtn from '@/components/buttons/FormSubmitBtn';

export default function Inloggad() {
  const router = useRouter();

  const [state, setState] = useState({
    week: '',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  function handleChange(e) {
    const value = e.target.value;

    setState({
      ...state,
      [e.target.name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const db = getDatabase();

    set(ref(db, 'week'), { week: state.week });

    set(ref(db, 'days'), {
      id1: { day: 'Måndag', lunch: state.monday },
      id2: { day: 'Tisdag', lunch: state.tuesday },
      id3: { day: 'Onsdag', lunch: state.wednesday },
      id4: { day: 'Torsdag', lunch: state.thursday },
      id5: { day: 'Fredag', lunch: state.friday },
    });

    setIsFormSubmitted(true);
    clearInputs();
  }

  function clearInputs() {
    setState({
      week: '',
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
    });
  }

  function signOutHandler() {
    const auth = getAuth();

    signOut(auth).then(() => {
      router.push('/dagenslunch');
    });
  }

  useEffect(() => {
    const messageTimer = setTimeout(() => setIsFormSubmitted(false), 3000);

    return () => clearTimeout(messageTimer);
  });

  return (
    <section className='flex flex-col container mx-auto items-center justify-center px-4 py-10 min-h-screen'>
      <h1 className='text-2xl'>Dagens lunch</h1>
      <form
        className='shadow-3xl py-10 px-4 flex flex-col w-full sm:w-4/5 md:w-3/5 lg:w-1/2 mt-10'
        onSubmit={handleSubmit}
      >
        <FormInput
          label={'Vecka'}
          type={'number'}
          placeholder={'Vecka'}
          name={'week'}
          value={state.week}
          onChange={handleChange}
        />
        <FormInput
          label={'Måndag'}
          type={'text'}
          placeholder={'Måndag'}
          name={'monday'}
          value={state.monday}
          onChange={handleChange}
        />
        <FormInput
          label={'Tisdag'}
          type={'text'}
          placeholder={'Tisdag'}
          name={'tuesday'}
          value={state.tuesday}
          onChange={handleChange}
        />
        <FormInput
          label={'Onsdag'}
          type={'text'}
          placeholder={'Onsdag'}
          name={'wednesday'}
          value={state.wednesday}
          onChange={handleChange}
        />
        <FormInput
          label={'Torsdag'}
          type={'text'}
          placeholder={'Torsdag'}
          name={'thursday'}
          value={state.thursday}
          onChange={handleChange}
        />
        <FormInput
          label={'Fredag'}
          type={'text'}
          placeholder={'Fredag'}
          name={'friday'}
          value={state.friday}
          onChange={handleChange}
        />
        <FormSubmitBtn>Lägg Upp</FormSubmitBtn>
        {isFormSubmitted && (
          <h2 className='text-xl py-8'>
            Du har lagt upp veckans lunch. Kontrollera på hemsidan så att dagens
            lunch stämmer.
          </h2>
        )}
      </form>
      <button
        className='block mt-8 bg-red-500 text-gray-200 p-3 rounded-md tracking-widest uppercase hover:bg-gray-800 hover:transition hover:duration-300 hover:translate-y-1'
        onClick={signOutHandler}
      >
        Logga ut
      </button>
    </section>
  );
}
