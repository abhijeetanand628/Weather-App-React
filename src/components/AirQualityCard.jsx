import airQualityIcon from '../assets/air-quality.svg';

const AirQualityCard = ({weatherData}) => {
  if(!weatherData)
    return null;

  const AQI = weatherData.current.air_quality['us-epa-index'];
  // Map US EPA index (1-6) to category label and color
  const aqiMap = {
    1: { label: 'Good', color: 'bg-green-500' },
    2: { label: 'Moderate', color: 'bg-yellow-500' },
    3: { label: 'Unhealthy for Sensitive', color: 'bg-orange-500' },
    4: { label: 'Unhealthy', color: 'bg-red-500' },
    5: { label: 'Very Unhealthy', color: 'bg-purple-600' },
    6: { label: 'Hazardous', color: 'bg-rose-700' },
  };
  const { label: aqiLabel, color: aqiColor } = aqiMap[AQI] || { label: 'Unknown', color: 'bg-gray-500' };

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
        <div className={`${aqiColor} rounded-full px-4 py-2`}>
          <span className='text-white text-sm font-bold'>{aqiLabel}</span>
        </div>
      </div>
      
      {/* Description */}
      <p className='text-white text-sm leading-relaxed'>
        {aqiLabel === 'Good' && 'Air quality is satisfactory, and air pollution poses little or no risk.'}
        {aqiLabel === 'Moderate' && 'Air quality is acceptable; some pollutants may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.'}
        {aqiLabel === 'Unhealthy for Sensitive' && 'Members of sensitive groups may experience health effects. The general public is less likely to be affected.'}
        {aqiLabel === 'Unhealthy' && 'Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.'}
        {aqiLabel === 'Very Unhealthy' && 'Health alert: increased likelihood of adverse effects for the entire population.'}
        {aqiLabel === 'Hazardous' && 'Health warnings of emergency conditions: everyone is more likely to be affected.'}
        {aqiLabel === 'Unknown' && 'Air quality information is unavailable.'}
      </p>
    </div>
  );
};

export default AirQualityCard;
