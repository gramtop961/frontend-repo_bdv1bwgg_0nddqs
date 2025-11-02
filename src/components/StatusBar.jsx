import React from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';

function formatTime(date) {
  const hrs = date.getHours();
  const mins = date.getMinutes().toString().padStart(2, '0');
  const h12 = ((hrs + 11) % 12) + 1;
  const ampm = hrs >= 12 ? 'PM' : 'AM';
  return `${h12}:${mins} ${ampm}`;
}

const StatusBar = () => {
  const [now, setNow] = React.useState(new Date());

  React.useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center justify-between px-4 py-2 text-xs text-white/90">
      <div className="font-medium tracking-wide">{formatTime(now)}</div>
      <div className="flex items-center gap-2">
        <Signal size={16} />
        <Wifi size={16} />
        <Battery size={16} />
      </div>
    </div>
  );
};

export default StatusBar;
