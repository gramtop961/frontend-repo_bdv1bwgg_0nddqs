import React from 'react';
import {
  Phone,
  MessageSquare,
  Camera,
  Settings,
  Music,
  Mail,
  Calendar,
  Map,
  ShoppingBag,
  Play,
  Image as ImageIcon,
  Clock,
  Globe,
  FileText,
  Gamepad,
} from 'lucide-react';

const APPS = [
  { name: 'Phone', Icon: Phone, color: 'from-emerald-500 to-teal-500' },
  { name: 'Messages', Icon: MessageSquare, color: 'from-sky-500 to-blue-500' },
  { name: 'Camera', Icon: Camera, color: 'from-purple-500 to-fuchsia-500' },
  { name: 'Settings', Icon: Settings, color: 'from-slate-600 to-slate-800' },
  { name: 'Music', Icon: Music, color: 'from-pink-500 to-rose-500' },
  { name: 'Mail', Icon: Mail, color: 'from-orange-500 to-amber-500' },
  { name: 'Calendar', Icon: Calendar, color: 'from-indigo-500 to-violet-500' },
  { name: 'Maps', Icon: Map, color: 'from-green-500 to-lime-500' },
  { name: 'Store', Icon: ShoppingBag, color: 'from-cyan-500 to-teal-500' },
  { name: 'Play', Icon: Play, color: 'from-red-500 to-rose-600' },
  { name: 'Photos', Icon: ImageIcon, color: 'from-amber-500 to-yellow-500' },
  { name: 'Clock', Icon: Clock, color: 'from-gray-500 to-zinc-600' },
  { name: 'Browser', Icon: Globe, color: 'from-blue-500 to-cyan-500' },
  { name: 'Docs', Icon: FileText, color: 'from-violet-500 to-purple-600' },
  { name: 'Games', Icon: Gamepad, color: 'from-fuchsia-500 to-pink-600' },
];

const AppTile = ({ Icon, name, color, onOpen }) => (
  <button
    onClick={onOpen}
    className="group flex flex-col items-center gap-2 rounded-2xl p-3 transition-transform active:scale-95"
  >
    <div className={`bg-gradient-to-br ${color} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-black/20 group-hover:shadow-xl`}> 
      <Icon size={26} />
    </div>
    <span className="text-white/90 text-xs">{name}</span>
  </button>
);

const AppGrid = () => {
  const [opened, setOpened] = React.useState(null);

  const handleOpen = (name) => {
    setOpened(name);
    const id = setTimeout(() => setOpened(null), 1200);
    return () => clearTimeout(id);
  };

  return (
    <div className="mt-6 grid grid-cols-4 gap-4 px-4">
      {APPS.map(({ name, Icon, color }) => (
        <AppTile key={name} Icon={Icon} name={name} color={color} onOpen={() => handleOpen(name)} />
      ))}
      {opened && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div className="relative z-10 rounded-2xl bg-white/95 px-6 py-4 text-center shadow-xl">
            <div className="text-sm text-zinc-600">Opening</div>
            <div className="text-lg font-semibold">{opened}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppGrid;
