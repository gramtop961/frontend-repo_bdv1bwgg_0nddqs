import React from 'react';

function two(n) {
  return n.toString().padStart(2, '0');
}

const ClockWidget = () => {
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const id = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const hours = two(date.getHours());
  const minutes = two(date.getMinutes());
  const weekday = date.toLocaleDateString(undefined, { weekday: 'long' });
  const dayMonth = date.toLocaleDateString(undefined, { month: 'long', day: 'numeric' });

  return (
    <div className="w-full select-none">
      <div className="text-white/95 font-semibold tracking-tight text-6xl leading-none md:text-7xl">
        {hours}
        <span className="text-white/70">:</span>
        {minutes}
      </div>
      <div className="text-white/80 mt-2">{weekday}, {dayMonth}</div>
    </div>
  );
};

export default ClockWidget;
