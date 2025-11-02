import React from 'react';
import StatusBar from './components/StatusBar.jsx';
import ClockWidget from './components/ClockWidget.jsx';
import AppGrid from './components/AppGrid.jsx';
import Dock from './components/Dock.jsx';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f1020] via-[#181a2a] to-[#1f1630]">
      {/* Wallpaper glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-[-10%] h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-[-10%] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      {/* Centered phone canvas */}
      <div className="relative mx-auto flex min-h-screen max-w-md flex-col">
        <div className="mt-4" />
        <StatusBar />

        <div className="px-6">
          <ClockWidget />
        </div>

        <AppGrid />

        <div className="mt-auto px-4 pb-8">
          <Dock />
        </div>
      </div>
    </div>
  );
};

export default App;
