import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className='flex flex-col items-center justify-center min-h-[60vh] space-y-6'>
    <div className='text-center'>
      <h1 className='text-6xl font-bold text-red-400'>404</h1>
      <p className='text-xl text-gray-400 mb-8'>Page not found</p>
      <div className='space-y-2'>
        <Link to='/' className='text-red-400 hover:underline'>
          Go to Home
        </Link>
        <br />
        <Link to='/blog' className='text-red-400 hover:underline'>
          View Blog Posts
        </Link>
      </div>
    </div>
  </div>
);

export default NotFound;
