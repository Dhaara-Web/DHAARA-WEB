import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence
import Header from './components/Header'
import Countdown from './components/Countdown'
import Gallery from './components/Gallery'
import Tickets from './components/Tickets'
import dhaaraLogo from './assets/logo_gold.png'
import Timeline from './components/Timeline'
import MessagesPage from './components/MessagesPage';
import bgVideo from './assets/Landing video/LandingVideo.mp4'
import Sponsors from './components/Sponsors'

function App() {

  const [isMobile, setIsMobile] = useState(false);
  // 1. New State for Video Loading
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      
      {/* 2. LOADING SCREEN COMPONENT */}
      <AnimatePresence>
        {!isVideoLoaded && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950"
          >
            {/* Pulsing Logo or Spinner */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="relative"
            >
              {/* You can use your logo here */}
              <div className="w-24 h-24 rounded-full border-4 border-t-amber-400 border-r-transparent border-b-orange-500 border-l-transparent animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center font-bold text-amber-500 text-xl animate-pulse">
                D26
              </div>
            </motion.div>
            <p className="mt-4 text-amber-400/80 font-light tracking-widest text-sm uppercase animate-pulse">
              Loading...
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. BACKGROUND VIDEO WITH EVENT LISTENER */}
      <video
        autoPlay
        loop
        muted
        playsInline
        // IMPORTANT: Updates state when enough data is loaded
        onLoadedData={() => setIsVideoLoaded(true)}
        className="fixed inset-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Fixed Dark Overlay */}
      <div className="fixed inset-0 backdrop-blur-md bg-slate-900/10" />
      
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        
        <motion.div 
          className="relative z-10 text-center px-4 py-20 max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3, 
                delayChildren: 0.2    
              }
            }
          }}
        >
          
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 50 }, 
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { duration: 0.8, ease: "easeOut" } 
              }
            }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 bg-linear-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent animate-pulse"
          >
            DHAARA
          </motion.h1>

          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { duration: 0.8, ease: "easeOut" }
              }
            }}
            className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 font-light"
          >
            Celebrating the Rhythm of Our Culture
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { duration: 0.8, ease: "easeOut" }
              }
            }}
          >
            <button className="bg-linear-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold px-8 py-3 md:px-10 md:py-4 rounded-full transition-all transform hover:scale-105 shadow-lg">
              Book Now!
            </button>
          </motion.div>

        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }} 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <svg className="w-6 h-6 text-amber-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>

      </section>

      {/* Countdown Timer */}
      <Countdown targetDate="2026-04-22" />

      {/* About Section */}
      <section id="about" className="relative py-12 md:py-24 px-4 backdrop-blur-md bg-slate-900/60 overflow-hidden">
        
        <div className="container mx-auto max-w-full px-4 md:px-10 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <motion.div 
              key={isMobile ? "mobile" : "desktop"}
              initial={{ 
                opacity: 0, 
                y: isMobile ? 50 : 0,   
                x: isMobile ? 0 : -50   
              }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-left space-y-6 md:space-y-8"
            >
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent tracking-wide uppercase">
                What is Dhaara?
              </h2>
              
              <div className="max-w-2xl w-full space-y-4 md:space-y-6 text-gray-300 text-base md:text-lg leading-relaxed font-light">
                <p>
                  Dhaara 26 is the largest inter-university music competition 
                  organized by the Flair Club of the University of Sri Jayewardenepura. 
                  Celebrating creativity, passion, and musical excellence, Dhaara has become a prestigious 
                  platform that brings together the most talented young musicians 
                  from universities across Sri Lanka.
                </p>
                
                <p>
                  This iconic event provides a vibrant stage for performers to showcase 
                  their skills across diverse musical genres, encouraging originality, 
                  teamwork, and artistic expression. More than just a competition, 
                  Dhaara 26 is a cultural movement that unites students through the 
                  universal language of music.
                </p>
                
                <p>
                  With breathtaking performances, expert judging, and an electrifying 
                  atmosphere, Dhaara 26 promises an unforgettable experience. It stands 
                  as a testament to the University of Sri Jayewardenepura's commitment 
                  to nurturing arts, talent, and youthful innovation.
                </p>
              </div>
            </motion.div>

            {/* Right Column: Image Stack */}
            <div className="w-full mt-12 md:mt-0 flex flex-row flex-wrap justify-center gap-4 h-auto md:block md:relative md:h-[700px]">

              <motion.div 
                initial={{ opacity: 0, y: 100, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative md:absolute md:top-0 md:right-0 transform md:rotate-20 hover:rotate-12 transition-all duration-700 z-10"
              >
                <motion.img 
                  src="src/assets/About_page_images/image1.png"
                  alt="Event Poster 1" 
                  className="h-[380px] md:h-[450px] w-auto " 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 100, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative md:absolute md:bottom-32 md:right-48 transform md:-rotate-5 hover:rotate-5 transition-all duration-500 z-20"
              >
                <motion.img 
                  src="src/assets/About_page_images/image2.png"
                  alt="Event Poster 2" 
                  className="h-[380px] md:h-[450px] w-auto "
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 100, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: -12 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative md:absolute md:bottom-0 md:right-0 transform md:-rotate-12 hover:rotate-0 transition-all duration-500 z-30"
              >
                <motion.img 
                  src="src/assets/About_page_images/image3.png"
                  alt="Event Poster 3"
                  className="h-[380px] md:h-[420px] w-auto "
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
              </motion.div>

            </div>
          </div>
        </div>
      </section>
      
      <Gallery />
      <Timeline/>
      <Tickets />
      <MessagesPage />
      <Sponsors/>


      <section id="contact" className="py-20 px-4 backdrop-blur-md bg-slate-900/60">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-base md:text-lg text-gray-200 mb-8">
            Interested in DHAARA or learning more about our events? We'd love to hear from you!
          </p>
          <button className="bg-linear-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg">
            Contact Us
          </button>
        </div>
      </section>

      <footer className="py-8 px-4 backdrop-blur-md bg-slate-900/80 border-t border-amber-500/20">
        <div className="container mx-auto text-center text-gray-300 text-sm">
          <p>&copy; 2026 DHAARA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App