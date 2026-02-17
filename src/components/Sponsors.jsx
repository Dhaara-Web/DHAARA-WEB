import React, { useState } from 'react';

export default function Sponsors() {
  
  const [sponsors] = useState([
    {
      id: 1,
      name: 'Title Partner 1',
      tier: 'title',
      image: '👑',
      description: 'Premier Title Partner',
    },
    {
      id: 2,
      name: 'Platinum Partner 1',
      tier: 'platinum',
      image: '💎',
      description: 'Platinum Partnership',
    },
    {
      id: 4,
      name: 'Gold Partner 1',
      tier: 'gold',
      image: '🏆',
      description: 'Gold Partnership',
    },
    {
      id: 5,
      name: 'Silver Partner 1',
      tier: 'silver',
      image: '⭐',
      description: 'Silver Partnership',
    },
    {
      id: 7,
      name: 'Bronze Partner 1',
      tier: 'bronze',
      image: '🎯',
      description: 'Bronze Partnership',
    },
  ]);

  const [otherSponsors] = useState([
    { id: 101, name: 'Partner A', icon: '🎯' },
    { id: 102, name: 'Partner B', icon: '🎪' },
    { id: 103, name: 'Partner C', icon: '🎨' },
    { id: 104, name: 'Partner D', icon: '🎭' },
    { id: 105, name: 'Partner E', icon: '🎬' },
    { id: 106, name: 'Partner F', icon: '📱' },
    { id: 107, name: 'Partner G', icon: '💡' },
    { id: 108, name: 'Partner H', icon: '🌟' }
  ]);

  const tierConfig = {
    title: { name: 'Title Partner', textColor: 'text-amber-400' },
    platinum: { name: 'Platinum Partner', textColor: 'text-slate-200' },
    gold: { name: 'Gold Partner', textColor: 'text-amber-500' },
    silver: { name: 'Silver Partner', textColor: 'text-slate-400' },
    bronze: { name: 'Bronze Partner', textColor: 'text-amber-700' }
  };

  const sponsorsByTier = {
    title: sponsors.filter(s => s.tier === 'title'),
    platinum: sponsors.filter(s => s.tier === 'platinum'),
    gold: sponsors.filter(s => s.tier === 'gold'),
    silver: sponsors.filter(s => s.tier === 'silver'),
    bronze: sponsors.filter(s => s.tier === 'bronze')
  };

  const renderTierSection = (tierKey, tierSponsors) => {
    if (tierSponsors.length === 0) return null;
    const config = tierConfig[tierKey];
    const isTitle = tierKey === 'title';

    return (
      <div key={tierKey} className="mb-20 text-center">
        <h3 className={`text-2xl font-bold mb-10 uppercase tracking-[0.2em] ${isTitle ? 'text-amber-400 scale-110' : config.textColor}`}>
          {isTitle && <span className="block text-xs font-light mb-2 text-amber-500/80 tracking-[0.4em]">OFFICIAL EVENT SPONSOR</span>}
          {config.name}
        </h3>

        <div className={`grid gap-10 ${tierSponsors.length === 1 ? 'grid-cols-1 max-w-2xl mx-auto' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
          {tierSponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className={`relative group rounded-[32px] transition-all duration-500 transform hover:-translate-y-2 ${
                isTitle 
                ? 'p-[2px] bg-gradient-to-b from-amber-400 via-orange-500 to-amber-600 shadow-[0_0_50px_-12px_rgba(251,191,36,0.4)]' 
                : 'p-[1.5px] bg-gradient-to-br from-amber-200 via-yellow-600 to-amber-800 shadow-xl'
              }`}
            >
              <div className="relative bg-slate-950 rounded-[30px] p-10 h-full overflow-hidden flex flex-col items-center">
                {isTitle && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-amber-500/20 blur-[80px] pointer-events-none"></div>
                )}
                
                <div className={`relative z-10 mb-6 flex items-center justify-center transition-all duration-500 ${isTitle ? 'text-8xl animate-bounce' : 'text-7xl'}`}>
                  {sponsor.image}
                </div>

                <h4 className={`relative z-10 font-black mb-3 tracking-tight ${isTitle ? 'text-4xl text-white' : `text-2xl ${config.textColor}`}`}>
                  {sponsor.name}
                </h4>

                <p className="relative z-10 text-gray-400 font-medium mb-8 italic line-clamp-2">
                  "{sponsor.description}"
                </p>

                
                <button className={`relative z-10 px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-all duration-300 ${
                  isTitle 
                  ? 'bg-gradient-to-r from-amber-400 to-orange-600 text-black hover:scale-105 shadow-[0_5px_15px_-5px_rgba(251,191,36,0.5)]' 
                  : 'bg-gradient-to-r from-amber-100 to-amber-300 text-black hover:brightness-110 shadow-md'
                }`}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="sponsors" className="py-24 px-4 text-white min-h-screen relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter uppercase">
    <span className="text-white">OUR</span>{" "}
    <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">SPONSORS</span>
  </h2>
          <p className="text-2xl md:text-3xl text-gray-300 font-bold tracking-tight">Proud Partners Making DHAARA 26' Possible</p>
          <div className="h-2 w-32 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-8"></div>
        </div>

        {/* Sponsor Cards Grid */}
        <div className="mb-32">
          {renderTierSection('title', sponsorsByTier.title)}
          {renderTierSection('platinum', sponsorsByTier.platinum)}
          {renderTierSection('gold', sponsorsByTier.gold)}
          {renderTierSection('silver', sponsorsByTier.silver)}
          {renderTierSection('bronze', sponsorsByTier.bronze)}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-24"></div>

        {/* --- Supporting Partners Section --- */}
        <div className="mb-32">
          <h3 className="text-3xl md:text-3xl font-semibold text-amber-500 mb-12 text-center uppercase tracking-[0.3em]">
            Supporting Partners
          </h3>
          
          <div className="relative overflow-hidden bg-slate-900/30 rounded-[40px] p-[1.5px] bg-gradient-to-r from-amber-200 via-yellow-600 to-amber-800 backdrop-blur-sm">
            <div className="bg-slate-950 rounded-[38px] p-12 overflow-hidden">
              <style>{`
                @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                .sponsors-scroll { display: flex; width: max-content; animation: scroll-left 40s linear infinite; }
                .sponsors-scroll:hover { animation-play-state: paused; }
              `}</style>
              <div className="sponsors-scroll gap-12">
                {[...otherSponsors, ...otherSponsors].map((sponsor, index) => (
                  <div key={index} className="flex flex-col items-center justify-center group w-40">
                    <div className="w-28 h-28 rounded-2xl bg-slate-800/30 border border-slate-700 flex items-center justify-center group-hover:border-amber-500/50 transition-all duration-300 group-hover:scale-110 shadow-lg">
                      <span className="text-5xl">{sponsor.icon}</span>
                    </div>
                    <p className="text-gray-400 font-bold text-center mt-4 text-sm group-hover:text-amber-300 transition-colors uppercase tracking-tight">{sponsor.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- Call to Action --- */}
        <div className="relative overflow-hidden rounded-[40px] p-16 text-center border border-amber-500/20 bg-slate-900/60 backdrop-blur-md">
          <h4 className="relative z-10 text-4xl md:text-6xl font-semibold mb-8 tracking-tight bg-gradient-to-r from-amber-200 to-amber-800 bg-clip-text text-transparent uppercase">
            BECOME PART OF THE LEGACY
          </h4>
          <p className="relative z-10 text-gray-300 text-base md:text-lg font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
  Join us in making DHAARA 26' the most memorable music competition. 
  We offer various sponsorship packages to showcase your brand.
</p>
          <button className="relative z-10 px-14 py-6 bg-gradient-to-r from-amber-200 to-amber-800 text-black font-black rounded-full hover:scale-110 transition-all transform duration-500 uppercase tracking-tighter shadow-[0_0_40px_-10px_rgba(251,191,36,0.6)] border-2 border-amber-400 active:scale-95">
            Sponsorship Opportunities
          </button>
        </div>

      </div>
    </section>
  );
}