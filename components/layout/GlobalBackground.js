export default function GlobalBackground() {
  return (
    <div className='absolute inset-0 -z-10'>
      <div
        className='
            absolute top-[-200px] left-[-200px]
            w-[600px] h-[600px]
            bg-red-500/10 blur-[140px]
            
          '
      />
      <div
        className='
            absolute bottom-[-200px] right-[-200px]
            w-[600px] h-[600px]
            bg-amber-500/10 blur-[160px]
          '
      />
    </div>
  );
}
