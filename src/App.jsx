import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'; 
import Header from './components/Header'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import Gallery from './components/Gallery'
import Tickets from './components/Tickets'
import dhaaraLogo from './assets/logo_gold.png'
import Timeline from './components/Timeline'
import bgVideo from './assets/Landing video/LandingVideo.mp4'
import Sponsors from './components/Sponsors'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import FloatingBookIcon from './components/FloatingBookIcon'
import image1 from './assets/About_page_images/image1.png'
import image2 from './assets/About_page_images/image2.png'
import image3 from './assets/About_page_images/image3.png'

function App() {

  const [isMobile, setIsMobile] = useState(false);
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
    <>
      {/* 1. LOADING SCREEN */}
      <AnimatePresence>
        {!isVideoLoaded && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
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

      {/* 2. BACKGROUND VIDEO WRAPPER */}
      <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className="w-full h-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        {/* Dark Overlay - No Blur for Performance */}
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="absolute inset-0 backdrop-blur-md" />
      </div>
      

      <div className="relative min-h-screen text-white overflow-x-hidden w-full">
        
        {/* Header */}
        <Header />
        
        {/* HERO SECTION */}
        <section id="home" className="relative min-h-screen flex items-center justify-center">
          
          <motion.div 
            className="relative z-10 text-center px-4 py-20 max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 0.1 }
              }
            }}
          >
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent animate-pulse"
            >
              DHAARA
            </motion.h1>

            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 font-light"
            >
              Celebrating the Rhythm of Our Culture
            </motion.p>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold px-8 py-3 md:px-10 md:py-4 rounded-full transition-all transform hover:scale-105 shadow-lg">
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

        {/* Separator / Countdown Area */}
        {/* Changed backdrop-blur to solid semi-transparent color */}
        <section className="py-20 px-4 bg-slate-900/80">
          <Countdown targetDate="2026-04-24" />
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="relative py-12 md:py-24 px-4 overflow-hidden">
          
          <div className="container mx-auto max-w-full px-4 md:px-10 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              
              {/* Text Content */}
              <motion.div 
                key={isMobile ? "mobile" : "desktop"}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
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

              {/* Image Stack - Optimized Animations */}
              <div className="w-full mt-12 md:mt-0 flex flex-row flex-wrap justify-center gap-4 h-auto md:block md:relative md:h-[700px]">
                
                {[image1, image2, image3].map((img, index) => (
                   <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0, rotate: index === 0 ? -2 : index === 1 ? -5 : -12 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative md:absolute z-${10 + (index * 10)} ${
                      index === 0 ? 'md:top-0 md:right-0 transform md:rotate-20' : 
                      index === 1 ? 'md:bottom-32 md:right-48 transform md:-rotate-5' : 
                      'md:bottom-0 md:right-0 transform md:-rotate-12'
                    }`}
                    // Performance Fix: Use GPU
                    style={{ willChange: "transform" }}
                  >
                    <motion.img 
                      src={img}
                      alt={`Event Poster ${index + 1}`}
                      className="h-[380px] md:h-[450px] w-auto" 
                      animate={{ y: [0, -10, 0] }} // Reduced range
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 0.5 
                      }}
                    />
                  </motion.div>
                ))}

              </div>
            </div>
          </div>
        </section>

        {/* Other Sections */}
        <Gallery />
        <Timeline />
        <Tickets />
        <Testimonials />
        <Sponsors />
        <Contact />

        {/* Footer - Optimized */}
        <footer className="py-8 px-4 bg-slate-900 border-t border-amber-500/20">
          <div className="container mx-auto text-center text-gray-300 text-sm">
            <p>&copy; 2026 DHAARA. All rights reserved.</p>
          </div>
        </footer>

      </div>

      <FloatingBookIcon />
    </>
  )
}

export default App