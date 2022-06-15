import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

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
    <section className="flex flex-col container mx-auto items-center justify-center px-4 py-10 min-h-screen">
      <h1 className="text-2xl">Dagens lunch</h1>
      <form
        className="shadow-3xl py-10 px-4 flex flex-col w-full sm:w-4/5 md:w-3/5 lg:w-1/2 mt-10"
        onSubmit={handleSubmit}
      >
        <label htmlFor="vecka" className="tracking-widest font-bold">
          Vecka:
        </label>
        <input
          type="number"
          placeholder="Vecka"
          required
          className="p-2 mt-2 border border-black"
          name="week"
          value={state.week}
          onChange={handleChange}
        />
        <label htmlFor="Måndag" className="tracking-widest mt-4 font-bold">
          Måndag:
        </label>
        <input
          type="text"
          placeholder="Måndag"
          required
          className="p-2 mt-2 border border-black"
          name="monday"
          value={state.monday}
          onChange={handleChange}
        />
        <label htmlFor="Tisdag" className="tracking-widest mt-4 font-bold">
          Tisdag:
        </label>
        <input
          type="text"
          placeholder="Tisdag"
          required
          className="p-2 mt-2 border border-black"
          name="tuesday"
          value={state.tuesday}
          onChange={handleChange}
        />
        <label htmlFor="Onsdag" className="tracking-widest mt-4 font-bold">
          Onsdag:
        </label>
        <input
          type="text"
          placeholder="Onsdag"
          required
          className="p-2 mt-2 border border-black"
          name="wednesday"
          value={state.wednesday}
          onChange={handleChange}
        />
        <label htmlFor="Torsdag" className="tracking-widest mt-4 font-bold">
          Torsdag:
        </label>
        <input
          type="text"
          placeholder="Torsdag"
          required
          className="p-2 mt-2 border border-black"
          name="thursday"
          value={state.thursday}
          onChange={handleChange}
        />
        <label htmlFor="Fredag" className="tracking-widest mt-4 font-bold">
          Fredag:
        </label>
        <input
          type="text"
          placeholder="Fredag"
          required
          className="p-2 mt-2 border border-black"
          name="friday"
          value={state.friday}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="block mt-8 bg-black text-gray-200 py-3 rounded-md tracking-widest uppercase hover:bg-gray-800 hover:transition hover:duration-300 hover:translate-y-1"
        >
          Lägg upp
        </button>
        {isFormSubmitted && (
          <h2 className="text-xl py-8">
            Du har lagt upp veckans lunch. Kontrollera på hemsidan så att dagens
            lunch stämmer.
          </h2>
        )}
      </form>
      <button
        className="block mt-8 bg-red-500 text-gray-200 p-3 rounded-md tracking-widest uppercase hover:bg-gray-800 hover:transition hover:duration-300 hover:translate-y-1"
        onClick={signOutHandler}
      >
        Logga ut
      </button>
    </section>
  );
}
