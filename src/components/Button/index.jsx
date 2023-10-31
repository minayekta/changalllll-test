const COLORS = {
  blue: 'dark:bg-blue-600 bg-blue-500',
  red: 'dark:bg-re600 bg-red-500',
};

const Button = ({ children, color, type = 'submit', onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${COLORS[color]} text-gray-200 rounded-2xl pt-4 pr-6 pb-4 pl-6 flex flex-row gap-3 items-center justify-center flex-1 h-14 relative select-none`}
    >
      {children}
    </button>
  );
};

export default Button;
