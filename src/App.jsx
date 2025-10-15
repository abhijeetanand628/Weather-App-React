  import './App.css'
  import WeatherCard from './components/WeatherCard';
  import WeatherForecast from './components/WeatherForecast';
  import AirQualityCard from './components/AirQualityCard';
  import searchIcon from './assets/search.svg';
  import { useState } from 'react';

    function App() {

      const [cityName, setCityName] = useState('');
      const [weatherData, setWeatherData] = useState(null);
      const [forecastData, setForecastData] = useState(null);

      const apiKey = 'a5c0fae4b7fc460080481110251109';

      // async function getWeather(city) {
      //   if(!city)
      //     return;

      //   try {
      //     let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;
      //     let response = await fetch(url);
      //     let data = await response.json();
      //     console.log(data);
      //     setWeatherData(data);
      //   } catch (error) {
      //     console.log("Failed to fetch the data", error);
      //   }
      // }

      async function getForecastWeather(city) {
        if(!city)
          return;

        try {
          let url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=yes&alerts=no`;
          let response = await fetch(url);
          let data = await response.json();
          console.log(data);
          setWeatherData(data);
          setForecastData(data);
        } catch (error) {
          console.log("Failed to fetch the data", error);
        }
      }

      const search = (city) => {
        if(!city)
          return;

        // getWeather(city);
        getForecastWeather(city);
      }

      const enter = (e) => {
        if(e.key === 'Enter')
        {
          search(cityName)
          // getWeather(cityName);
          // forecastWeather(cityName);
        }
      }

      return (
        <>
        <div className='w-full min-h-screen flex flex-col items-center p-2'>
        <div className='pt-8 relative'>
          <input
          type='text'
          placeholder='Enter city name'
          value={cityName}
          onKeyDown={enter}
          onChange={(e) => setCityName(e.target.value)}
          className='bg-[#9999FF] w-11/12 sm:w-96 md:w-[30rem] h-16 rounded-full pl-6 pr-16 py-3 text-white text-lg font-semibold border-none shadow-xl mb-8 placeholder-white placeholder-opacity-80'
          />
          <img 
            src={searchIcon}
            alt='search'
            onClick={() => search(cityName)}
            
            // This is called as inline function it is not that optimised but we can also do in this way...
            // onClick={() => {
            //   getWeather(cityName);
            //   getforecastWeather(cityName);
            // }}

            className='absolute right-10 sm:right-6 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 cursor-pointer'
          />
        </div>
        {weatherData && (
          <>
            <WeatherCard weatherData={weatherData} />
            <div className='w-full flex flex-col items-center gap-2'>
              <WeatherForecast forecastData={forecastData} />
              <AirQualityCard weatherData={weatherData} />
            </div>
          </>
        )}
        </div>
        </>
      )
    }

    export default App

