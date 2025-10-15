import { useState } from 'react';
import airQualityIcon from '../assets/air-quality.svg';

const AirQualityCard = ({weatherData}) => {
  if(!weatherData)
    return null;

  const AQI = weatherData.current.air_quality['us-epa-index'];

  return (
    <div className='w-11/12 md:w-1/2 lg:w-1/3 min-w-[280px] bg-gradient-to-r from-[#9999FF] to-[#C4C6FF] rounded-3xl shadow-lg p-8 flex flex-col'>
      {/* Header */}
      <div className='flex items-center gap-3 mb-6'>
        <img 
          src={airQualityIcon}
          alt='air quality'
          className='w-8 h-8'
        />
        <h2 className='text-white text-2xl font-bold'>Air Quality</h2>
      </div>
      
      {/* Air Quality Index */}
      <div className='flex items-center justify-between mb-4'>
        <div className='text-white text-6xl font-bold'>{AQI}</div>
        <div className='bg-green-500 rounded-full px-4 py-2'>
          <span className='text-white text-sm font-bold'>Good</span>
        </div>
      </div>
      
      {/* Description */}
      <p className='text-white text-sm leading-relaxed'>
        Air quality is satisfactory, and air pollution poses little or no risk.
      </p>
    </div>
  );
};

export default AirQualityCard;
