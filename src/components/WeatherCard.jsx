import humidityIcon from '../assets/humidity.svg';
import windIcon from '../assets/wind.svg';
import thermometerIcon from '../assets/thermometer.svg';
import sunsetIcon from '../assets/sunset.svg';

const WeatherCard = ({weatherData}) => {
  if(!weatherData) {
    return null;
}
  
const temperature = Math.round(weatherData.current.temp_c);
const humidity = weatherData.current.humidity;
const windSpeed = weatherData.current.wind_kph;
const temperatureApparent = Math.round(weatherData.current.feelslike_c) ;
const locationName = weatherData.location.name + ' , ' + weatherData.location.region + ' , ' + weatherData.location.country;
const weatherDescription = weatherData.current.condition['text'] || "Unavailable";
const date = new Date(weatherData.location.localtime);
const icon = weatherData.current.condition['icon'];
const todayForecast = weatherData.forecast.forecastday[0];
const sunrise = todayForecast.astro.sunrise;
const sunset = todayForecast.astro.sunset;
const formattedDate = date.toLocaleDateString('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
});

  return (
    <div className='w-11/12 md:w-1/2 lg:w-1/3 min-w-[280px] bg-[#9999FF] rounded-3xl shadow-lg p-8 flex flex-col items-center'>
      <h1 className='text-white text-4xl font-semibold mb-3'>{locationName}</h1>
      <p className='text-white mb-12'>{formattedDate}</p>
      <div className='flex flex-row justify-start items-start gap-4'>
        <h2 className='text-white text-6xl font-light'>{temperature}°C</h2>
        <div className='flex flex-col items-center justify-center mb-12'>
          <img 
            src={icon}
            alt='sunny weather'
            className='w-12 h-12 mb-1'
          />
          <p className='text-white text-xl font-semibold'>{weatherDescription}</p>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4 w-full'>
        <div className='bg-[#C4C6FF] flex-1 h-32 rounded-2xl flex flex-col items-center justify-center gap-3'>
          <img 
            src={humidityIcon}
            alt='humidity'
            className='w-8 h-8'
          />
          <div className='flex flex-col items-center'>
            <p className='text-white text-xl font-semibold mb-2'>{humidity}%</p>
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
            <p className='text-white text-xl font-semibold mb-2'>{windSpeed}km/h</p>
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
            <p className='text-white text-xl font-semibold mb-2'>{temperatureApparent}°C</p>
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
                <p className='text-white text-sm font-semibold'>{sunrise}</p>
                <p className='text-white text-xs font-semibold'>Sunrise</p>
              </div>
              <div>
                <p className='text-white text-sm font-semibold'>{sunset}</p>
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
