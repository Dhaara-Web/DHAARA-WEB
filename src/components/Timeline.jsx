import React from 'react';
import { motion } from 'framer-motion';
// Ensure this path is correct for your project
import dhaaraLogo from '../assets/logo_gold.png'; 

// --- Sample Data ---
const timelineData = [
  {
    id: 1,
    title: "VOCAL TRAINING WORKSHOP",
    date: "2026-02-10", // Past
  },
  {
    id: 2,
    title: "1 ST ROUND AUDITIONS",
    date: "2026-02-11", // Past
  },
  {
    id: 3,
    title: "Stage Performing Workshop",
    date: "2026-02-09", // Future
  },
  {
    id: 4,
    title: "Event Management Workshop",
    date: "2026-02-08", // Future
  },
  {
    id: 5,
    title: "Semi Final",
    date: "2026-04-15", // Future
  }
];

const isActive = (dateString) => {
  const eventDate = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  eventDate.setHours(0, 0, 0, 0);
  return eventDate <= today;
};

// --- Timeline Item Component ---
const TimelineItem = ({ data, index }) => {
  const isEven = index % 2 === 0;
  const active = isActive(data.date);

  return (
    <motion.div 
      // 1. Animation Settings
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger effect
      className={`relative flex flex-col md:flex-row items-center md:justify-between mb-12 w-full
        ${isEven ? 'md:flex-row-reverse' : ''}
      `}
    >
      
      {/* Spacer for desktop layout */}
      <div className="hidden md:block w-5/12"></div>

      {/* Central Dot */}
      <div className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full z-20 transition-all duration-500
        ${active
          ? 'bg-amber-400 ring-4 ring-amber-400/50 shadow-[0_0_30px_rgba(251,191,36,1)]'
          : 'bg-gray-700 border-4 border-slate-900'
        }
        top-0 md:top-1/2 md:-translate-y-1/2
      `}>
      </div>
      
      {/* Horizontal Connector Line */}
      <div className={`absolute h-1 hidden md:block transition-all duration-500
         ${active ? 'bg-amber-400' : 'bg-gray-700'}
         top-1/2 -translate-y-1/2
         ${isEven ? 'right-1/2 w-1/12 origin-right' : 'left-1/2 w-1/12 origin-left'}
       `}></div>

      {/* Content Box */}
      <div className={`w-[calc(100%-4rem)] ml-16 md:ml-0 md:w-5/12 px-6 py-4 rounded-xl shadow-2xl z-10 
        transition-all duration-500 cursor-default hover:scale-105 border border-slate-700/50
        ${active
          ? 'bg-gradient-to-br from-amber-400 to-amber-500 text-slate-900' // Gradient for active items
          : 'bg-slate-800/80 backdrop-blur-sm text-gray-200' 
        }
        ${isEven ? 'md:text-right' : 'md:text-left'}
      `}>
        <h3 className="font-bold text-lg md:text-xl mb-1 uppercase tracking-wider">{data.title}</h3>
        <p className={`text-sm font-medium ${active ? 'text-slate-800' : 'text-amber-500'}`}>
          {new Date(data.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

    </motion.div>
  );
};

// --- Main Component ---
const Timeline = () => {
  // Logic to calculate how tall the yellow line should be
  const totalItems = timelineData.length;
  // Find the index of the last active item (e.g., if item 2 is active, index is 1)
  const lastActiveIndex = timelineData.findLastIndex(item => isActive(item.date));
  
  // Calculate percentage: (Index / (Total - 1)) * 100
  // If no items are active, height is 0.
  const progressHeight = lastActiveIndex >= 0 
    ? (lastActiveIndex / (totalItems - 1)) * 100 
    : 0;

  return (
    <section id="timeline" className="relative py-24 px-4 overflow-hidden min-h-screen flex items-center justify-center backdrop-blur-md bg-slate-900/60">
      
       {/* Background */}
       

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-20 tracking-wider uppercase bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"
        >
          Dhaara 2026 Timeline
        </motion.h2>

        <div className="relative">
          
          {/* 1. The Gray Background Line (Full Height) */}
          <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700 rounded-full"></div>

          {/* 2. The Yellow Progress Line (Calculated Height) */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: `${progressHeight}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-1 bg-amber-400 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.8)] z-0"
          ></motion.div>

          {/* Render Items */}
          {timelineData.map((item, index) => (
            <TimelineItem key={item.id} data={item} index={index} />
          ))}

        </div>
      </div>
    </section>
  );
};

export default Timeline;