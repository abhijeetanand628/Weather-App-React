  import './App.css'
  import WeatherCard from './components/WeatherCard';
  import WeatherForecast from './components/WeatherForecast';
  import AirQualityCard from './components/AirQualityCard';
  import searchIcon from './assets/search.svg';

  function App() {

    return (
      <>
      <div className='w-full min-h-screen flex flex-col items-center p-2'>
      <div className='pt-8 relative'>
        <input
        type='text'
        placeholder='Enter city name'
        className='bg-[#9999FF] w-11/12 sm:w-96 md:w-[30rem] h-16 rounded-full pl-6 pr-16 py-3 text-white text-lg font-semibold border-none shadow-xl mb-8 placeholder-white placeholder-opacity-80'
        />
        <img 
          src={searchIcon}
          alt='search'
          className='absolute right-10 sm:right-6 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 cursor-pointer'
        />
      </div>
      <WeatherCard />
      <div className='w-full flex flex-col items-center gap-2'>
        <WeatherForecast />
        <AirQualityCard />
      </div>
      </div>
      </>
    )
  }

  export default App

