import { forwardRef } from 'react';

export default forwardRef(function Circle(_, ref) {
  return (
    <div
      ref={ref}
      className='fixed bottom-[-12rem] right-[-10rem] w-[24rem] h-[24rem] rounded-full z-10 pointer-events-none opacity-60 blur-3xl animate-[floatGlow_12s_ease-in-out_infinite]'
      style={{
        background:
          'radial-gradient(circle at 30% 30%, rgba(153,27,27,0.95) 0%, rgba(153,27,27,0.5) 35%, rgba(153,27,27,0.2) 60%, transparent 75%)',
      }}
    />
  );
});
