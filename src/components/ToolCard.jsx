import React from 'react';
import { ExternalLink, Download, Github } from 'lucide-react';
import Card from './Card';

const ToolCard = ({ tool, colorMode }) => {
  // Define color mapping for different modes
  const getActiveColor = mode => {
    const colorMap = {
      red: 'red',
      green: 'green',
      blue: 'blue',
      purple: 'purple',
      orange: 'orange',
      white: 'white',
    };
    return colorMap[mode] || 'red';
  };

  const activeColor = getActiveColor(colorMode);

  return (
    <Card colorMode={colorMode}>
      <div className='space-y-4'>
        <div className='flex items-center justify-between'>
          <h3 className='text-xl font-semibold text-white'>{tool.name}</h3>
          <div className='flex items-center space-x-2'>
            <span
              className={`px-2 py-1 rounded text-xs ${
                tool.status === 'Active'
                  ? `bg-${activeColor}-400/20 text-${activeColor}-400`
                  : 'bg-yellow-400/20 text-yellow-400'
              }`}>
              {tool.status}
            </span>
            <ExternalLink
              className={`text-gray-400 hover:text-${activeColor}-400 cursor-pointer`}
              size={16}
            />
          </div>
        </div>
        <p className='text-gray-300'>{tool.description}</p>
        <div className='flex items-center justify-between'>
          <span className='text-sm text-gray-400'>{tool.tech}</span>
          <button className={`text-${activeColor}-400 hover:text-${activeColor}-300 text-sm`}>
            View on GitHub
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ToolCard;
