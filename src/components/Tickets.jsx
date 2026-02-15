import React, { useEffect, useRef, useState } from 'react';
import ticketImg from '../assets/ticket.png';

const Tickets = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set visibility based on whether the section is in view
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="tickets" 
      ref={sectionRef} 
      className="relative py-20 px-4 backdrop-blur-md bg-slate-900/60 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Animated Fan Container */}
          <div className={`relative h-[350px] md:h-[550px] flex items-center justify-center order-2 md:order-1 ${isVisible ? 'is-visible' : ''}`}>
            
            <div className="relative w-48 h-72 md:w-80 md:h-[450px]">
              <img src={ticketImg} alt="Ticket" className="ticket-fan-base ticket-4 z-10 drop-shadow-2xl" />
              <img src={ticketImg} alt="Ticket" className="ticket-fan-base ticket-3 z-20 drop-shadow-2xl" />
              <img src={ticketImg} alt="Ticket" className="ticket-fan-base ticket-2 z-30 drop-shadow-2xl" />
              <img src={ticketImg} alt="Ticket" className="ticket-fan-base ticket-1 z-40 drop-shadow-2xl" />
            </div>
          </div>

          {/* Right Column: Pricing Part */}
          <div className="flex flex-col items-center md:items-start space-y-10 order-1 md:order-2">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-5xl md:text-7xl font-black text-white uppercase leading-[0.9] tracking-tighter">
                BOOK YOUR <br />
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  TICKET
                </span> NOW
              </h2>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="h-[2px] w-12 bg-amber-500/50"></div>
                <p className="text-amber-500 font-bold tracking-[0.5em] text-xl uppercase">DHAARA '26</p>
              </div>
            </div>

            <div className="w-full max-w-sm space-y-2 text-white">
              {/* Pricing rows stay the same */}
              <div className="flex justify-between items-end py-4 border-b border-white/10 hover:border-amber-500/50 transition-colors">
                <span className="text-gray-300 text-xl">Standard</span>
                <span className="text-3xl font-bold text-amber-400 font-mono">2000<span className="text-sm ml-1 text-gray-500">LKR</span></span>
              </div>
              <div className="flex justify-between items-end py-4 border-b border-white/10 hover:border-amber-500/50 transition-colors">
                <span className="text-gray-300 text-xl">VIP</span>
                <span className="text-3xl font-bold text-amber-400 font-mono">3000<span className="text-sm ml-1 text-gray-500">LKR</span></span>
              </div>
              <div className="flex justify-between items-end py-4">
                <span className="text-gray-300 text-xl">VVIP</span>
                <span className="text-3xl font-bold text-amber-400 font-mono">5000<span className="text-sm ml-1 text-gray-500">LKR</span></span>
              </div>
            </div>

            <button className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-black px-16 py-5 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-amber-500/20 uppercase tracking-widest text-lg">
              Get Tickets
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tickets;