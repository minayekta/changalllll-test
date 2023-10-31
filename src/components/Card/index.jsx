const Card = ({ children }) => {
  return (
    <div className='rounded-3xl border border-solid border-zinc-300 dark:border-zinc-800 p-10 flex flex-col justify-start flex-1 max-w-xl relative shadow-xl'>
      {children}
    </div>
  );
};

export default Card;
