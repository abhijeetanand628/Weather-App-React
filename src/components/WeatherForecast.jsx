import ForecastCard from './ForecastCard';
import partlyCloudyIcon from '../assets/partly-cloudy.svg';
import cloudyIcon from '../assets/cloudy.svg';
import rainyIcon from '../assets/rainy.svg';
import sunnyIcon from '../assets/sunny.svg';

const WeatherForecast = () => {
  return (
    <div className='w-full flex flex-row justify-center gap-4 overflow-x-auto py-4'>
      <ForecastCard day="Tue" icon={partlyCloudyIcon} temperature="22°C" />
      <ForecastCard day="Wed" icon={cloudyIcon} temperature="20°C" />
      <ForecastCard day="Thu" icon={rainyIcon} temperature="16°C" />
      <ForecastCard day="Fri" icon={partlyCloudyIcon} temperature="23°C" />
      <ForecastCard day="Sat" icon={sunnyIcon} temperature="25°C" />
    </div>
  );
};

export default WeatherForecast;
