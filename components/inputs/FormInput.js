export default function FormInput({
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
}) {
  return (
    <>
      <label htmlFor={label} className='tracking-widest font-bold pt-2'>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required
        className='p-2 mt-2 border border-black'
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
