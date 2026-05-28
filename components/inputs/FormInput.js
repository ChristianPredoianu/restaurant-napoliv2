export default function FormInput({ label, type, placeholder, name, value, onChange }) {
  return (
    <div className='space-y-2'>
      <label
        htmlFor={label}
        className='
          block
          text-sm
          font-semibold
          tracking-wide

          text-zinc-700
          dark:text-zinc-300
        '
      >
        {label}
      </label>

      <input
        id={label}
        type={type}
        placeholder={placeholder}
        required
        name={name}
        value={value}
        onChange={onChange}
        className='
          w-full

          rounded-2xl

          border border-zinc-300
          dark:border-white/10

          bg-white/80
          dark:bg-white/[0.03]

          px-5 py-4

          text-zinc-900
          dark:text-white

          placeholder:text-zinc-400
          dark:placeholder:text-zinc-500

          backdrop-blur-xl

          outline-none

          transition-all duration-300

          focus:border-red-500/70
          focus:ring-4
          focus:ring-red-500/10
        '
      />
    </div>
  );
}
