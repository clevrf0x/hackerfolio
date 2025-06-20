import React from 'react';
import { ExternalLink } from 'lucide-react';
import Card from './Card';

const CVECard = ({ cve, colorMode, getSeverityColor }) => {
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
        <div className='flex items-center justify-between flex-wrap gap-2'>
          <h3 className='text-xl font-semibold text-white'>{cve.id}</h3>
          <div className='flex items-center space-x-3'>
            <span
              className={`px-3 py-1 rounded-full text-sm border ${getSeverityColor(cve.severity)}`}>
              {cve.severity}
            </span>
            <span className={`text-${activeColor}-400 font-mono font-bold`}>CVSS {cve.score}</span>
          </div>
        </div>
        <h4 className='text-lg text-gray-200'>{cve.title}</h4>
        <p className='text-gray-300'>{cve.description}</p>
        <div className='flex items-center justify-between'>
          <button
            className={`text-${activeColor}-400 hover:text-${activeColor}-300 flex items-center space-x-1`}>
            <span>View Details</span>
            <ExternalLink size={16} />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default CVECard;
