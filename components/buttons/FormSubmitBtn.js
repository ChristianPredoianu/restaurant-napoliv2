export default function FormSubmitBtn({ children }) {
  return (
    <button
      type='submit'
      className='block mt-8 bg-black text-gray-200 py-3 rounded-md tracking-widest uppercase hover:bg-gray-800 hover:transition hover:duration-300 hover:translate-y-1'
    >
      {children}
    </button>
  );
}
