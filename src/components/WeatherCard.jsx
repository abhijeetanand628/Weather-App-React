import sunnyIcon from '../assets/sunny.svg';
import humidityIcon from '../assets/humidity.svg';
import windIcon from '../assets/wind.svg';
import thermometerIcon from '../assets/thermometer.svg';
import sunsetIcon from '../assets/sunset.svg';

const WeatherCard = () => {
  return (
    <div className='w-11/12 md:w-1/2 lg:w-1/3 h-144 min-w-[280px] bg-[#9999FF] rounded-3xl shadow-lg p-8 flex flex-col items-center'>
      <h1 className='text-white text-4xl font-semibold'>New York</h1>
      <p className='text-white mb-12'>Monday, June 15</p>
      <div className='flex flex-row justify-start items-start gap-4'>
        <h2 className='text-white text-6xl font-light'>24°C</h2>
        <div className='flex flex-col items-center justify-center mb-12'>
          <img 
            src={sunnyIcon}
            alt='sunny weather'
            className='w-12 h-12 mb-1'
          />
          <p className='text-white text-xl font-semibold'>Sunny</p>
        </div>
      </div>
      <div className='flex flex-row gap-4 w-full'>
        <div className='bg-[#C4C6FF] flex-1 h-32 rounded-2xl flex flex-col items-center justify-center gap-3'>
          <img 
            src={humidityIcon}
            alt='humidity'
            className='w-8 h-8'
          />
          <div className='flex flex-col items-center'>
            <p className='text-white text-xl font-semibold mb-2'>78%</p>
            <p className='text-white'>Humidity</p>
          </div>
        </div>
        <div className='bg-[#C4C6FF] flex-1 h-32 rounded-2xl flex flex-col items-center justify-center gap-3'>
          <img 
            src={windIcon}
            alt='wind speed'
            className='w-6 h-6'
          />
          <div className='flex flex-col items-center'>
            <p className='text-white text-xl font-semibold mb-2'>5.2km/h</p>
            <p className='text-white'>Wind Speed</p>
          </div>
        </div>
      </div>
      <div className='flex flex-row gap-4 w-full mt-4'>
        <div className='bg-[#C4C6FF] flex-1 h-32 rounded-2xl flex flex-col items-center justify-center gap-3'>
          <img 
            src={thermometerIcon}
            alt='feels like temperature'
            className='w-8 h-8'
          />
          <div className='flex flex-col items-center'>
            <p className='text-white text-xl font-semibold mb-2'>26°C</p>
            <p className='text-white'>Feels Like</p>
          </div>
        </div>
        <div className='bg-[#C4C6FF] flex-1 h-32 rounded-2xl flex flex-col items-center justify-center gap-2'>
          <img 
            src={sunsetIcon}
            alt='sunrise sunset'
            className='w-8 h-8'
          />
          <div className='flex flex-col items-center'>
            <div className='flex flex-row gap-4 text-center'>
              <div>
                <p className='text-white text-sm font-semibold'>5:42 AM</p>
                <p className='text-white text-xs font-semibold'>Sunrise</p>
              </div>
              <div>
                <p className='text-white text-sm font-semibold'>6:32 PM</p>
                <p className='text-white text-xs font-semibold'>Sunset</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
