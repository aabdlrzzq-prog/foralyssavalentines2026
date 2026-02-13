import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Quote, MailOpen } from 'lucide-react';

const App = () => {
  const [phase, setPhase] = useState('invite');
  const [noButtonPos, setNoButtonPos] = useState({ top: '0px', left: '0px' });
  const [isNoHovered, setIsNoHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const moveNoButton = () => {
    const x = Math.random() * 40 + 30;
    const y = Math.random() * 40 + 30;
    setNoButtonPos({ top: `${y}%`, left: `${x}%` });
    setIsNoHovered(true);
  };

  const handleYes = () => {
    setPhase('accepted');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-[#fdfaf6] text-[#4a3b3b] overflow-x-hidden selection:bg-red-100 relative font-serif">

      {/* Texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Frame */}
      <div className="fixed inset-0 pointer-events-none z-50 border-[6px] md:border-[20px] border-[#8b1e1e]/5">
        <div className="absolute inset-0 border border-[#8b1e1e]/10 m-1 md:m-4"></div>
      </div>

      {phase === 'invite' ? (
        <div className={`relative flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>

          <div className="max-w-3xl relative w-full">

            <div className="mb-6 flex justify-center">
              <div className="p-3 rounded-full bg-white/50 border border-[#8b1e1e]/10 shadow-sm animate-pulse">
                <MailOpen size={18} className="text-[#8b1e1e]/40" />
              </div>
            </div>

            <h2 className="text-[#8b1e1e] uppercase tracking-[0.6em] text-[10px] font-bold mb-4 opacity-60">
              A sincere request for
            </h2>

            <h1 className="text-4xl md:text-7xl font-light mb-8 tracking-tight text-[#2d2424]">
              Alyssa <span className="italic text-[#8b1e1e]">"Twirly Sundae"</span> Chiu
            </h1>

            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="w-16 h-[1px] bg-[#8b1e1e]/20"></div>
              <Sparkles size={14} className="text-[#d4af37]/50" />
              <div className="w-16 h-[1px] bg-[#8b1e1e]/20"></div>
            </div>

            <div className="text-lg md:text-2xl text-[#6e5a5a] mb-12 leading-relaxed max-w-xl mx-auto italic space-y-6">
              <p>
                i know this is a little late, but i didn’t want the day to pass without asking you properly.
              </p>
              <p>
                the time we’ve been spending together lately has honestly meant more to me than you probably realize.
              </p>
              <p>
                so even if it’s a little last minute…
              </p>
              <p className="font-semibold text-[#8b1e1e] text-2xl md:text-4xl">
                will you be my valentine?
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center justify-center relative w-full min-h-[140px]">
              <button
                onClick={handleYes}
                className="px-14 py-5 bg-[#8b1e1e] text-white hover:bg-[#721818] transition-all transform hover:-translate-y-1 shadow-lg uppercase tracking-[0.3em] text-xs font-bold"
              >
                Yes, I'd love to <Heart size={14} className="inline ml-2" />
              </button>

              <button
                onMouseEnter={moveNoButton}
                onClick={moveNoButton}
                style={isNoHovered ? { position: 'fixed', ...noButtonPos } : {}}
                className="px-10 py-5 border border-[#8b1e1e]/30 text-[#8b1e1e] uppercase tracking-[0.2em] text-[10px] font-bold"
              >
                No
              </button>
            </div>

          </div>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto px-6 py-20 z-10">

          <div className="bg-white p-10 md:p-20 shadow-xl border border-[#f0eadd]">

            <div className="mb-12 text-center border-b border-[#f0e0e0] pb-10">
              <Quote className="text-[#f8bbd0] mb-6 mx-auto opacity-50" size={32} strokeWidth={1} />
              <p className="text-[#6e5a5a] italic text-2xl mb-6">
                "Crush mo talaga ako noh?"
              </p>
              <span className="bg-[#8b1e1e] text-white px-6 py-2 uppercase text-sm tracking-[0.2em]">
                oo crush talaga kita
              </span>
            </div>

            <div className="space-y-8 text-lg leading-relaxed text-[#3d3333]">
              <p className="font-semibold text-[#8b1e1e] text-2xl">hey crushh,</p>
              <p>
                thank you for saying yes. i genuinely like you more than i can properly explain.
              </p>
              <p>
                and if ever in the future…
              </p>
              <p className="font-semibold text-[#8b1e1e] text-xl">
                will you keep being my valentine?
              </p>
            </div>

            <footer className="mt-16 pt-10 border-t border-[#f0e0e0] text-center">
              <p className="italic text-2xl mb-3 opacity-70">Sincerely,</p>
              <p className="text-[#8b1e1e] font-bold tracking-[0.3em] uppercase text-sm">
                Abdullah Abdul-Raziq
              </p>
            </footer>

          </div>
        </div>
      )}
    </div>
  );
};

export default App;
