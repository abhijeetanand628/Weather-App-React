import ForecastCard from './ForecastCard';

const WeatherForecast = ({weatherData}) => {
  if(!weatherData) {
    return null;
  }

  const forecastDays = weatherData.forecast.forecastday;

  return (
    <div className='w-full flex flex-row justify-start md:justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 overflow-x-auto py-4 px-4 md:px-8 scrollbar-hide'>
      {forecastDays.map((day) => {
        // Get the day of the week (e.g., "Tue")
        const date = new Date(day.date);
        const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });

        return (
          <ForecastCard
            key={day.date_epoch}
            day={dayOfWeek}
            icon={day.day.condition.icon}
            temperature={`${Math.round(day.day.maxtemp_c)}°C / ${Math.round(day.day.mintemp_c)}°C`}
          />
        );
      })}
    </div>
  );
};

export default WeatherForecast;
