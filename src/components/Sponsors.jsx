import React, { useState } from 'react';

export default function Sponsors() {
  const [sponsors] = useState([
    {
      id: 1,
      name: 'Title Partner 1',
      tier: 'title',
      image: '👑',
      description: 'Premier Title Partner'
    },
    {
      id: 2,
      name: 'Platinum Partner 1',
      tier: 'platinum',
      image: '💎',
      description: 'Platinum Partnership'
    },
    
    {
      id: 4,
      name: 'Gold Partner 1',
      tier: 'gold',
      image: '🏆',
      description: 'Gold Partnership'
    },
    {
      id: 5,
      name: 'Silver Partner 1',
      tier: 'silver',
      image: '⭐',
      description: 'Silver Partnership'
    },
    
    {
      id: 7,
      name: 'Bronze Partner 1',
      tier: 'bronze',
      image: '🎯',
      description: 'Bronze Partnership'
    },
  ]);

  const [otherSponsors] = useState([
    { id: 1, name: 'Partner A', icon: '🎯' },
    { id: 2, name: 'Partner B', icon: '🎪' },
    { id: 3, name: 'Partner C', icon: '🎨' },
    { id: 4, name: 'Partner D', icon: '🎭' },
    { id: 5, name: 'Partner E', icon: '🎬' },
    { id: 6, name: 'Partner F', icon: '📱' },
    { id: 7, name: 'Partner G', icon: '💡' },
    { id: 8, name: 'Partner H', icon: '🌟' }
  ]);

  // Group sponsors by tier
  const tierConfig = {
    title: { name: 'Title Partner', color: 'from-amber-500 to-amber-600', borderColor: 'border-amber-500/50' },
    platinum: { name: 'Platinum Partner', color: 'from-gray-300 to-gray-500', borderColor: 'border-gray-400/50' },
    gold: { name: 'Gold Partner', color: 'from-amber-500 to-amber-600', borderColor: 'border-amber-500/50' },
    silver: { name: 'Silver Partner', color: 'from-slate-300 to-slate-500', borderColor: 'border-slate-400/50' },
    bronze: { name: 'Bronze Partner', color: 'from-orange-700 to-orange-800', borderColor: 'border-orange-600/50' }
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
    const isSingleSponsor = tierSponsors.length === 1;

    return (
      <div key={tierKey} className="mb-16">
        <h3 className="text-2xl font-bold text-amber-200 mb-8 text-center uppercase tracking-wide">
          {config.name}
        </h3>

        <div className={`grid gap-8 ${
          isSingleSponsor ? 'grid-cols-1 max-w-2xl mx-auto' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {tierSponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className={`relative group overflow-hidden rounded-2xl border ${config.borderColor} bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-sm hover:border-opacity-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-amber-400 to-orange-500 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10 p-8 text-center">
                {/* Logo/Icon */}
                <div className="text-7xl mb-6">{sponsor.image}</div>

                {/* Name */}
                <h4 className="text-2xl font-bold text-white mb-2">
                  {sponsor.name}
                </h4>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {sponsor.description}
                </p>

                {/* Divider */}
                <div className="h-1 bg-gradient-to-r from-amber-400/20 via-orange-500/20 to-amber-400/20 rounded-full my-6"></div>

                {/* CTA */}
                <button className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 text-sm">
                  Learn More
                </button>
              </div>

              {/* Bottom Border Accent */}
              <div className={`h-1 bg-gradient-to-r ${config.color}`}></div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="sponsors" className="py-20 px-4  backdrop-blur-md bg-slate-900/60 ">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-amber-300 tracking-wide">
            OUR SPONSORS
          </h2>
          <p className="text-lg text-gray-300 font-light">
            Proud Partners Making DHAARA 26' Possible
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Sponsor Tiers */}
        <div className="mb-20">
          {renderTierSection('title', sponsorsByTier.title)}
          {renderTierSection('platinum', sponsorsByTier.platinum)}
          {renderTierSection('gold', sponsorsByTier.gold)}
          {renderTierSection('silver', sponsorsByTier.silver)}
          {renderTierSection('bronze', sponsorsByTier.bronze)}
        </div>

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent rounded-full mb-16"></div>

        {/* Other Sponsors Section */}
        <div>
          <h3 className="text-2xl font-bold text-amber-200 mb-12 text-center uppercase tracking-wide">
            Supporting Partners
          </h3>

          {/* Moving Logos Carousel */}
          <div className="relative overflow-hidden bg-gradient-to-r from-slate-900/50 via-slate-800/30 to-slate-900/50 rounded-2xl border border-amber-500/20 p-8 backdrop-blur-sm">
            <style>{`
              @keyframes scroll-left {
                0% {
                  transform: translateX(100%);
                }
                100% {
                  transform: translateX(-100%);
                }
              }

              .sponsors-scroll {
                animation: scroll-left 30s linear infinite;
                display: flex;
                gap: 2rem;
              }

              .sponsors-scroll:hover {
                animation-play-state: paused;
              }

              .sponsor-item {
                flex-shrink: 0;
                min-width: 150px;
              }
            `}</style>

            {/* Duplicate items for seamless loop */}
            <div className="sponsors-scroll">
              {[...otherSponsors, ...otherSponsors].map((sponsor, index) => (
                <div
                  key={`${sponsor.id}-${index}`}
                  className="sponsor-item flex flex-col items-center justify-center group"
                >
                  {/* Logo Container */}
                  <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-amber-900/30 to-orange-900/20 border border-amber-500/30 flex items-center justify-center group-hover:border-amber-500/70 transition-all group-hover:shadow-lg group-hover:shadow-amber-500/30">
                    <span className="text-5xl">{sponsor.icon}</span>
                  </div>

                  {/* Sponsor Name */}
                  <p className="text-gray-300 font-semibold text-center mt-3 text-sm group-hover:text-amber-300 transition-colors">
                    {sponsor.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 via-slate-900/50 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 via-slate-900/50 to-transparent pointer-events-none z-10"></div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 backdrop-blur-md bg-slate-900/60.border border-amber-500/30 rounded-2xl p-8 text-center">
          <h4 className="text-2xl font-bold text-amber-100 mb-4">
            Interested in Becoming a Partner?
          </h4>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join us in making DHAARA 26' the most memorable music competition. We offer various sponsorship packages to showcase your brand.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105">
            Sponsorship Opportunities
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 text-center">
          <div className="inline-flex space-x-3">
            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
