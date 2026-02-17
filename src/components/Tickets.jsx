import React, { useEffect, useRef, useState } from 'react';
import ticketImg from '../assets/ticket.png';

const Tickets = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Dynamic ticket data including sold-out percentages
  const ticketData = [
    { label: "Early birds", price: "1500", percentage: 58, status: "Available" },
    { label: "Standard", price: "2500", percentage: 72, status: "Available" },
    { label: "VIP", price: "3500", percentage: 48, status: "Available" },
    { label: "VVIP", price: "5000", percentage: 100, status: "Sold Out" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
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
      className="relative py-20 px-4 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Animated Fan Container */}
          <div className={`relative h-[350px] md:h-[550px] flex items-center justify-center order-2 md:order-1 ${isVisible ? 'is-visible' : ''}`}>
            <div className="relative w-48 h-72 md:w-80 md:h-[450px]">
              <img src={ticketImg} alt="Dhaara 2026 event ticket" className="ticket-fan-base ticket-4 z-10 drop-shadow-2xl" />
              <img src={ticketImg} alt="Dhaara 2026 event ticket" className="ticket-fan-base ticket-3 z-20 drop-shadow-2xl" />
              <img src={ticketImg} alt="Dhaara 2026 event ticket" className="ticket-fan-base ticket-2 z-30 drop-shadow-2xl" />
              <img src={ticketImg} alt="Dhaara 2026 event ticket" className="ticket-fan-base ticket-1 z-40 drop-shadow-2xl" />
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

            {/* Ticket Categories with Progress Bars */}
            <div className="w-full max-w-md space-y-6 text-white">
              {ticketData.map((ticket, index) => (
                <div key={index} className={`space-y-2 p-4 rounded-xl border transition-all ${ticket.percentage === 100 ? 'border-red-500/30 bg-red-500/5 opacity-60' : 'border-white/10 bg-white/5 hover:border-amber-500/30'}`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-gray-300 text-lg font-semibold block">{ticket.label}</span>
                      <span className="text-2xl font-bold text-amber-400 font-mono">{ticket.price}<span className="text-sm ml-1 text-gray-500 font-sans uppercase">LKR</span></span>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs font-bold uppercase px-2 py-1 rounded ${ticket.percentage === 100 ? 'bg-red-500 text-white' : 'bg-amber-500/20 text-amber-400'}`}>
                        {ticket.status}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">{ticket.percentage}% Sold Out</p>
                    </div>
                  </div>

                  {/* Progress Bar Container */}
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-1000 ease-out rounded-full ${ticket.percentage === 100 ? 'bg-red-500' : 'bg-gradient-to-r from-amber-600 to-orange-500'}`}
                      style={{ width: isVisible ? `${ticket.percentage}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-black px-16 py-5 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-amber-500/20 uppercase tracking-widest text-lg disabled:grayscale disabled:opacity-50"
              disabled={ticketData.every(t => t.percentage === 100)}
            >
              Get Tickets
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tickets;