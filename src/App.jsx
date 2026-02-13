import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Quote, MailOpen } from 'lucide-react';

const App = () => {
  const [phase, setPhase] = useState('invite'); // 'invite' | 'accepted'
  const [noButtonPos, setNoButtonPos] = useState({ top: '0px', left: '0px' });
  const [isNoHovered, setIsNoHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const moveNoButton = () => {
    // Optimized for iPhone 15 Pro Max screen ratios
    // Keeps the button within a safe central "play area" to avoid edges/notches
    const x = Math.random() * 40 + 30; // 30% to 70% of width
    const y = Math.random() * 40 + 30; // 30% to 70% of height
    setNoButtonPos({ top: `${y}%`, left: `${x}%` });
    setIsNoHovered(true);
  };

  const handleYes = () => {
    setPhase('accepted');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-[#fdfaf6] text-[#4a3b3b] font-serif overflow-x-hidden selection:bg-red-100 relative">
      {/* 1. Base Texture Layer */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* 2. Classical Architectural Depth */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdfaf6] via-[#fdfaf6] to-[#f5eee6] opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/4 border-t border-[#8b1e1e]/5 bg-[#8b1e1e]/[0.02]"></div>
      </div>

      {/* 3. Ornate Fixed Frame - Responsive Width */}
      <div className="fixed inset-0 pointer-events-none z-50 border-[6px] md:border-[20px] border-[#8b1e1e]/5">
        <div className="absolute inset-0 border border-[#8b1e1e]/10 m-1 md:m-4"></div>
      </div>

      {phase === 'invite' ? (
        <div className={`relative flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>

          <div className="max-w-2xl relative w-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-[#f8bbd0]/15 blur-[80px] md:blur-[120px] rounded-full -z-10"></div>

            <div className="mb-6 md:mb-8 flex justify-center">
              <div className="p-3 rounded-full bg-white/50 border border-[#8b1e1e]/10 shadow-sm animate-pulse">
                <MailOpen size={18} className="text-[#8b1e1e]/40" />
              </div>
            </div>

            <h2 className="text-[#8b1e1e] uppercase tracking-[0.4em] md:tracking-[0.8em] text-[9px] md:text-[10px] font-bold mb-4 opacity-60">A sincere request for</h2>
            <h1 className="text-4xl md:text-7xl font-light mb-6 md:mb-8 tracking-tight text-[#2d2424] leading-tight">
              Alyssa <br className="md:hidden" />
              <span className="italic font-normal text-[#8b1e1e]">"Twirly Sundae"</span> Chiu
            </h1>

            <div className="flex items-center justify-center gap-4 md:gap-6 mb-8 md:mb-12">
              <div className="w-12 md:w-16 h-[1px] bg-gradient-to-r from-transparent via-[#8b1e1e]/20 to-transparent"></div>
              <Sparkles size={14} className="text-[#d4af37]/50" />
              <div className="w-12 md:w-16 h-[1px] bg-gradient-to-r from-transparent via-[#8b1e1e]/20 to-transparent"></div>
            </div>

            <div className="text-base md:text-xl text-[#6e5a5a] mb-10 md:mb-12 leading-relaxed max-w-xl mx-auto italic font-light space-y-6 md:space-y-8 text-left md:text-center">
              <p className="opacity-90">
                i know this is a little late, and i’m sorry i didn’t ask you earlier. i honestly just got caught up with time and everything going on pero ofcourse i just didn’t want the day to pass without asking you properly.
              </p>
              <p className="opacity-95 border-l-2 md:border-l-0 md:border-y border-[#8b1e1e]/5 py-4 px-5 md:px-6">
                the time we’ve been spending together lately has meant more to me than you probably realize. the conversations, the random moments, mga puyatan, and even the times we were just in each other’s presence,, they’ve stayed with me. being around you feels easy and natural in a way that i really value :)))
              </p>
              <p className="opacity-90">
                i admire who you are, and you deserve real effort and intention, not just words. i’d love the chance to celebrate you the way you deserve, even if it starts with something simple yk.
              </p>
              <p className="font-medium text-[#8b1e1e] not-italic pt-4 md:pt-6 tracking-wider text-xl md:text-3xl animate-bounce-subtle leading-snug">
                kayaa even if it’s a little last minute — will you please be my valentine??
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center relative w-full min-h-[160px] md:min-h-[140px]">
              <button
                onClick={handleYes}
                className="group relative w-full md:w-auto px-12 md:px-16 py-5 md:py-6 bg-[#8b1e1e] text-white rounded-none hover:bg-[#721818] transition-all transform hover:-translate-y-1 shadow-[0_15px_30px_rgba(139,30,30,0.3)] z-10 flex items-center justify-center gap-3 uppercase tracking-[0.3em] md:tracking-[0.4em] text-xs font-bold overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                Yes, I'd love to <Heart size={14} fill="currentColor" className="group-hover:scale-125 transition-transform text-red-200" />
              </button>

              <button
                onMouseEnter={moveNoButton}
                onClick={moveNoButton}
                style={isNoHovered ? { position: 'fixed', ...noButtonPos, transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', zIndex: 100 } : {}}
                className="w-full md:w-auto px-10 py-5 border border-[#8b1e1e]/30 text-[#8b1e1e] rounded-none hover:bg-[#8b1e1e] hover:text-white transition-all z-10 bg-white/40 backdrop-blur-md uppercase tracking-[0.2em] text-[10px] font-bold"
              >
                No
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto px-4 md:px-6 py-12 md:py-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 z-10">
          <div className="bg-white/95 backdrop-blur-sm p-8 md:p-20 shadow-[0_50px_100px_rgba(0,0,0,0.08)] relative border border-[#f0eadd]">

            {/* Inside Joke Section */}
            <div className="mb-10 md:mb-14 text-center border-b border-[#f0e0e0] pb-10 md:pb-12 relative">
              <Quote className="text-[#f8bbd0] mb-4 md:mb-6 mx-auto opacity-50" size={28} md:size={32} strokeWidth={1} />
              <p className="text-[#6e5a5a] italic text-xl md:text-2xl mb-6">"Crush mo talaga ako noh?"</p>
              <div className="relative inline-block">
                <span className="bg-[#8b1e1e] text-white px-5 md:px-6 py-2 font-medium tracking-[0.2em] text-xs md:text-sm uppercase inline-block shadow-lg">
                  oo crush talaga kita
                </span>
                <div className="absolute -inset-1 border border-[#8b1e1e] opacity-20 translate-x-1 translate-y-1"></div>
              </div>
            </div>

            <div className="space-y-6 text-base md:text-lg leading-[1.8] text-[#3d3333] font-light">
              <p className="font-medium text-[#8b1e1e] text-xl md:text-2xl mb-2">hey crushh,</p>
              <p>
                yownnnnn nag yes sya woooo AHAHAHHAHA so like i’m listening to laufey while writing this for you HAHAHA so if you want full main character vibes while reading this, you can play any laufey song in the background. highly recommended.
              </p>
              <p>
                well first of all, i’m really bad at these kinds of things so please bear with me noh but i just really wanted to say this properly. i really like you. like, genuinely. and i haven’t felt this way in such a long time that it actually caught me off guard. these past two months have been so unexpected for me. i didn’t think i’d have this kind of space with someone, a space where i can just be myself without overthinking everythinggg.
              </p>
              <p>
                you've given me a safe space in a way you probably don't even realize. around you, i feel at ease in my own skin. you've reminded me that it’s okay to open up, to care, to let someone matter. and that’s something i don’t take lightly.
              </p>
              <p>
                you make my university life feel different. special, even. parang may nilolook forward ako everyday. even the simplest moments feel better when you're there. and the way our minds match sometimes?? it's kind of crazy. minsan iniisip ko hulog ka ba ng langit or what HAHAHA kasi the timing of you coming into my life was honestly so critical for me.
              </p>
              <p>
                i honestly didn't expect something like this, but i'm so grateful you let me in. kaya thank you talaga, for trusting me with your stories, your thoughts, even the chikas that usually si jami lang would know hayssss.
              </p>
              <p>
                and can i just say (wag lalaki ulo mo ha)… you're one of the most beautiful women i know. inside and outside. i'm too shy to say that straight to your face, but it's true. i act calm around you, pero internally may konting system malfunction HAHAHA.
              </p>
              <p>
                but beyond all that, i just want you to know that i really want to know you more. who you are, how you think, what makes you you. i want to be part of your life in whatever way you'll allow me to be. and i genuinely hope we get to make this work.
              </p>
              <p>
                and more than anything, i just want you to know that i’m grateful for you in a way i honestly can’t fully put into words. your presence in my life means more than i probably show, and i don’t take that for granted at all.
              </p>
              <p>
                thank you for coming into my life when you did. i don’t take that lightly.
              </p>
              <p className="font-medium text-[#8b1e1e] pt-4 text-lg md:text-xl">
                and again… will you keep being my valentine, Twirly Sundae?
              </p>
            </div>

            <footer className="mt-16 md:mt-20 pt-10 md:pt-12 border-t border-[#f0e0e0] flex flex-col items-center">
              <p className="italic text-xl md:text-2xl mb-3 font-serif opacity-70">Sincerely,</p>
              <p className="text-[#8b1e1e] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-xs md:text-sm border-b border-[#8b1e1e]/20 pb-2">
                Abdullah Abdul-Raziq
              </p>
              <div className="mt-8 flex gap-2">
                <Sparkles className="text-[#d4af37]" size={16} />
                <Heart className="text-[#8b1e1e]/20" size={16} />
                <Sparkles className="text-[#d4af37]" size={16} />
              </div>
            </footer>

            <div className="absolute top-3 left-3 md:top-4 md:left-4 w-10 h-10 md:w-12 md:h-12 border-t border-l border-[#8b1e1e]/10"></div>
            <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 w-10 h-10 md:w-12 md:h-12 border-b border-r border-[#8b1e1e]/10"></div>
          </div>

          <div className="mt-12 md:mt-16 text-center text-[#8b1e1e]/20 text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase font-bold">
            OO NA CRUSH KITA
          </div>
        </div>
      )}

      {/* Enhanced Background Particles & Subtle Animations */}
      <style>{`
        @keyframes drift {
          0% { transform: translateY(-10vh) translateX(0) rotate(0deg); opacity: 0; }
          20% { opacity: 0.6; }
          50% { transform: translateY(50vh) translateX(20px) rotate(180deg); }
          100% { transform: translateY(110vh) translateX(-20px) rotate(360deg); opacity: 0; }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }
        .particle {
          position: fixed;
          pointer-events: none;
          z-index: 1;
        }
        .petal {
          background: #f8bbd0;
          border-radius: 100% 0 100% 0;
        }
        .sparkle {
          background: #d4af37;
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        }
      `}</style>
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`particle ${i % 3 === 0 ? 'sparkle' : 'petal'}`}
            style={{
              width: (i % 3 === 0 ? Math.random() * 5 + 3 : Math.random() * 10 + 5) + 'px',
              height: (i % 3 === 0 ? Math.random() * 5 + 3 : Math.random() * 10 + 5) + 'px',
              left: Math.random() * 100 + 'vw',
              top: '-20px',
              animation: `drift ${Math.random() * 8 + 10}s linear infinite`,
              animationDelay: `-${Math.random() * 15}s`,
              opacity: i % 3 === 0 ? 0.6 : 0.3
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default App;