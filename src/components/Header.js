import React, { useContext } from 'react';
import LOGO from '../assets/img/Logo.png';
import { ThemeContext } from '../context/themeContext';
import { MoonIcon, SearchIcon, SunIcon } from './Icons';
function Header() {
  const { setTheme } = useContext(ThemeContext);

  return (
    <>
      <header>
        <div className='grid grid-cols-2 p-4'>
          <div>
            <img src={LOGO} className='w-24' alt='لوگو' />
          </div>

          <div className='flex justify-around align-middle '>
            <div className='relative'>
              <input
                type='text'
                id='simple-search'
                className='rounded-[20px] ps-10 dark:bg-Blue-gray/30 dark:border-Blue-gray border-Blue-gray/20 border border-solid outline-0 p-4 flex flex-row gap-2 items-center justify-end shrink-0 w-[512px] relative'
                placeholder='جستجو کاربر'
                required
              />
              <SearchIcon />
            </div>
            <div className='align-middle rounded-[20px] border border-solid dark:border-Blue-gray dark:bg-Blue-gray/30 border-Blue-gray/20 gap-x-1 flex flex-row items-start justify-start shrink-0 relative'>
              <div
                className='relative rounded-[20px] cursor-pointer select-none p-4'
                onClick={() => setTheme('light')}
              >
                <SunIcon />
              </div>

              <div
                className='relative bg-blue-600 rounded-[20px] cursor-pointer select-none p-4'
                onClick={() => setTheme('dark')}
              >
                <MoonIcon />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
