const ForecastCard = ({ day, icon, temperature }) => {
  return (
    <div className='bg-[#9999FF] rounded-xl p-3 sm:p-4 md:p-5 flex flex-col items-center justify-center gap-1 sm:gap-2 min-w-[95px] sm:min-w-[105px] md:min-w-[115px] h-[85px] sm:h-[95px] md:h-[105px] transition-all hover:scale-105 hover:shadow-lg flex-shrink-0'>
      <p className='text-white text-xs sm:text-sm md:text-base font-semibold'>{day}</p>
      <img 
        src={icon}
        alt={`${day} weather`}
        className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8'
      />
      <p className='text-white text-sm sm:text-base md:text-lg font-semibold'>{temperature}</p>
    </div>
  );
};

export default ForecastCard;
