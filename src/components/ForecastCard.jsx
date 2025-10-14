const ForecastCard = ({ day, icon, temperature }) => {
  return (
    <div className='bg-[#9999FF] rounded-xl p-4 flex flex-col items-center justify-center gap-3 min-w-[80px]'>
      <p className='text-white text-sm font-semibold'>{day}</p>
      <img 
        src={icon}
        alt={`${day} weather`}
        className='w-8 h-8'
      />
      <p className='text-white text-lg font-semibold'>{temperature}</p>
    </div>
  );
};

export default ForecastCard;
