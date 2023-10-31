const Input = ({ label, type, onChange, value, className = '' }) => {
  return (
    <div className={`flex flex-col ${className}`.trim()}>
      <label className='dark:text-gray-300 text-zinc-900'>
        {label}
        <input
          type={type}
          className='border border-solid outline-0 mt-2 border-zinc-300 dark:border-zinc-800 p-3 rounded-xl dark:bg-Blue-dark w-full'
          onChange={onChange}
          value={value}
        />
      </label>
    </div>
  );
};

export default Input;
