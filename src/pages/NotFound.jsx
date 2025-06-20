import React from 'react';
import { Link } from 'react-router-dom';
import { useColorMode } from '../App';
import { getActiveColor } from '../utils/colors';
// import Footer from '../components/Footer';

const NotFound = () => {
  const { colorMode } = useColorMode();
  const activeColor = getActiveColor(colorMode);
  return (
    <main className='grid place-items-center min-h-[75vh] pt-24 pb-16 px-4 w-full'>
      <div className='w-full max-w-md mx-auto text-center flex flex-col gap-4'>
        <div
          className={`text-${activeColor}-400 font-mono font-extrabold text-5xl sm:text-7xl leading-none select-none drop-shadow-lg`}>
          404
        </div>
        <h2 className='text-xl sm:text-2xl font-bold text-white mb-1 mt-1'>Oops! Page not found</h2>
        <p className='text-gray-400 mb-4 text-base sm:text-lg'>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className='flex flex-col sm:flex-row gap-3 justify-center'>
          <Link
            to='/'
            className={`inline-block px-6 py-2 rounded bg-${activeColor}-400/10 border border-${activeColor}-400 text-${activeColor}-400 font-mono font-semibold hover:bg-${activeColor}-400/20 transition-colors duration-150`}>
            Go to Home
          </Link>
          <Link
            to='/blog'
            className={`inline-block px-6 py-2 rounded bg-${activeColor}-400/10 border border-${activeColor}-400 text-${activeColor}-400 font-mono font-semibold hover:bg-${activeColor}-400/20 transition-colors duration-150`}>
            View Blog Posts
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
