import { memo } from 'react';

const Divider = () => {
  return (
    <hr className='w-full h-px border border-solid dark:border-blue-900/20 border-blue-300/20 my-6' />
  );
};

export default memo(Divider);
