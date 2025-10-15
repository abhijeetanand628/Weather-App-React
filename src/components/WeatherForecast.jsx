import ForecastCard from './ForecastCard';
import partlyCloudyIcon from '../assets/partly-cloudy.svg';
import cloudyIcon from '../assets/cloudy.svg';
import rainyIcon from '../assets/rainy.svg';
import sunnyIcon from '../assets/sunny.svg';
import { useState } from 'react';

const WeatherForecast = () => {

  const [day, setDay] = useState('');
  const [temperature, setTemperature] = useState('');
  const [icon, setIcon] = useState('');

  return (
    <div className='w-full flex flex-row justify-start md:justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 overflow-x-auto py-4 px-4 md:px-8 cursor-pointer scrollbar-hide'>
      <ForecastCard day="Tue" icon={partlyCloudyIcon} temperature="22°C" />
      <ForecastCard day="Wed" icon={cloudyIcon} temperature="20°C" />
      <ForecastCard day="Thu" icon={rainyIcon} temperature="16°C" />
      <ForecastCard day="Fri" icon={partlyCloudyIcon} temperature="23°C" />
      <ForecastCard day="Sat" icon={sunnyIcon} temperature="25°C" />
    </div>
  );
};

export default WeatherForecast;
