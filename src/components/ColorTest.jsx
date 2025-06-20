import React from 'react';
import { useColorMode } from '../App';
import { getActiveColor } from '../utils/colors';

const ColorTest = () => {
  const { colorMode } = useColorMode();
  const activeColor = getActiveColor(colorMode);

  return (
    <div className='p-4 bg-gray-800 rounded-lg'>
      <h3 className='text-white mb-4'>Color Test - Current: {colorMode}</h3>
      <div className='space-y-2'>
        <div className={`text-${activeColor}-400`}>This should be {activeColor} text</div>
        <div className={`border border-${activeColor}-400 p-2 rounded`}>
          This should have {activeColor} border
        </div>
        <div className={`bg-${activeColor}-400/10 p-2 rounded`}>
          This should have {activeColor} background
        </div>
      </div>
    </div>
  );
};

export default ColorTest;
