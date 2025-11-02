import React from 'react';
import { Phone, MessageSquare, Camera, Settings } from 'lucide-react';

const FAVORITES = [
  { name: 'Phone', Icon: Phone },
  { name: 'Messages', Icon: MessageSquare },
  { name: 'Camera', Icon: Camera },
  { name: 'Settings', Icon: Settings },
];

const DockButton = ({ Icon, name }) => (
  <button className="group flex flex-col items-center gap-1">
    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm text-white flex items-center justify-center shadow-lg shadow-black/20 group-active:scale-95 transition-transform">
      <Icon size={22} />
    </div>
    <span className="text-[11px] text-white/90">{name}</span>
  </button>
);

const Dock = () => {
  return (
    <div className="pointer-events-auto mx-auto mt-4 w-full max-w-[20rem] rounded-[22px] bg-white/10 p-2 backdrop-blur-md shadow-2xl">
      <div className="grid grid-cols-4 gap-2">
        {FAVORITES.map(({ name, Icon }) => (
          <DockButton key={name} Icon={Icon} name={name} />
        ))}
      </div>
    </div>
  );
};

export default Dock;
