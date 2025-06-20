import React from 'react';

// This component is hidden but contains all the color classes we need
// to prevent Tailwind from purging them during build
const ColorSafelist = () => {
  return (
    <div className='hidden'>
      {/* Red colors - individual elements */}
      <div className='text-red-400'></div>
      <div className='hover:text-red-300'></div>
      <div className='border-red-400'></div>
      <div className='hover:border-red-400'></div>
      <div className='bg-red-400/10'></div>
      <div className='bg-red-900/40'></div>
      <div className='border-red-400/40'></div>
      <div className='bg-red-800'></div>
      <div className='hover:bg-red-800'></div>
      <div className='group-hover:text-red-400'></div>

      {/* Green colors - individual elements */}
      <div className='text-green-400'></div>
      <div className='hover:text-green-300'></div>
      <div className='border-green-400'></div>
      <div className='hover:border-green-400'></div>
      <div className='bg-green-400/10'></div>
      <div className='bg-green-900/40'></div>
      <div className='border-green-400/40'></div>
      <div className='bg-green-800'></div>
      <div className='hover:bg-green-800'></div>
      <div className='group-hover:text-green-400'></div>

      {/* Blue colors - individual elements */}
      <div className='text-blue-400'></div>
      <div className='hover:text-blue-300'></div>
      <div className='border-blue-400'></div>
      <div className='hover:border-blue-400'></div>
      <div className='bg-blue-400/10'></div>
      <div className='bg-blue-900/40'></div>
      <div className='border-blue-400/40'></div>
      <div className='bg-blue-800'></div>
      <div className='hover:bg-blue-800'></div>
      <div className='group-hover:text-blue-400'></div>

      {/* Purple colors - individual elements */}
      <div className='text-purple-400'></div>
      <div className='hover:text-purple-300'></div>
      <div className='border-purple-400'></div>
      <div className='hover:border-purple-400'></div>
      <div className='bg-purple-400/10'></div>
      <div className='bg-purple-900/40'></div>
      <div className='border-purple-400/40'></div>
      <div className='bg-purple-800'></div>
      <div className='hover:bg-purple-800'></div>
      <div className='group-hover:text-purple-400'></div>

      {/* Orange colors - individual elements */}
      <div className='text-orange-400'></div>
      <div className='hover:text-orange-300'></div>
      <div className='border-orange-400'></div>
      <div className='hover:border-orange-400'></div>
      <div className='bg-orange-400/10'></div>
      <div className='bg-orange-900/40'></div>
      <div className='border-orange-400/40'></div>
      <div className='bg-orange-800'></div>
      <div className='hover:bg-orange-800'></div>
      <div className='group-hover:text-orange-400'></div>

      {/* Yellow colors - individual elements */}
      <div className='text-yellow-400'></div>
      <div className='hover:text-yellow-300'></div>
      <div className='border-yellow-400'></div>
      <div className='hover:border-yellow-400'></div>
      <div className='bg-yellow-400/10'></div>
      <div className='bg-yellow-900/40'></div>
      <div className='border-yellow-400/40'></div>
      <div className='bg-yellow-800'></div>
      <div className='hover:bg-yellow-800'></div>
      <div className='group-hover:text-yellow-400'></div>
    </div>
  );
};

export default ColorSafelist;
