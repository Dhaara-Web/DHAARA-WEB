import Header from './components/Header'
import Countdown from './components/Countdown'
import Gallery from './components/Gallery'
import Tickets from './components/Tickets'
import dhaaraLogo from './assets/logo_gold.png'
import image1 from './assets/About_page_images/image1.png'
import image2 from './assets/About_page_images/image2.png'
import image3 from './assets/About_page_images/image3.png'

function App() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Fixed Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: `url(${dhaaraLogo})`,
          filter: 'brightness(0.3)'
        }}
      />
      
      {/* Fixed Dark Overlay */}
      <div className="fixed inset-0 bg-slate-900/40 -z-10" />
      
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 py-20 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 bg-linear-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent animate-pulse">
            DHAARA
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 font-light">
            Celebrating the Rhythm of Our Culture
          </p>
          <button className="bg-linear-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold px-8 py-3 md:px-10 md:py-4 rounded-full transition-all transform hover:scale-105 shadow-lg">
            Book Now!
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-amber-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Countdown Timer */}
      <Countdown targetDate="2026-04-22" />

      {/* About Section with Glass Effect */}
    <section id="about" className="relative py-12 md:py-24 px-4 backdrop-blur-md bg-slate-900/60 overflow-hidden">
  
  {/* Main Content Container */}
  <div className="container mx-auto max-w-full px-4 md:px-10 relative z-10">
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      
      {/* Left Column: Text Content */}
      <div className="text-left space-y-6 md:space-y-8">
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
      </div>

      {/* Right Column: Image Stack */}
      {/* MOBILE: Row Grid (flex-row, flex-wrap) | DESKTOP: Stack (block, relative) */}
      <div className="w-full mt-12 md:mt-0 flex flex-row flex-wrap justify-center gap-4 h-auto md:block md:relative md:h-[700px]">

        {/* Card 1: Back Card */}
        {/* Mobile: relative (part of grid) | Desktop: absolute (positioned top right) */}
        <div className="relative md:absolute md:top-0 md:right-0 transform rotate-0 md:-rotate-2 hover:rotate-12 transition-all duration-700 z-10">
          <img 
            src={image1}
            alt="Event Poster 1" 
            className="h-[380px] md:h-[450px] w-auto" 
          />
        </div>

        {/* Card 2: Middle Card */}
        {/* Mobile: relative | Desktop: absolute (positioned left) */}
        <div className="relative md:absolute md:bottom-32 md:right-48 transform rotate-0 md:-rotate-5 hover:rotate-0 transition-all duration-500 z-20">
          <img 
            src={image2}
            alt="Event Poster 2" 
            className="h-[380px] md:h-[450px] w-auto "
          />
        </div>

        {/* Card 3: Front Card */}
        {/* Mobile: relative | Desktop: absolute (positioned bottom right) */}
        <div className="relative md:absolute md:bottom-0 md:right-0 transform rotate-0 md:-rotate-12 hover:rotate-0 transition-all duration-500 z-30">
          <img 
            src={image3}
            alt="Event Poster 3"
            className="h-[380px] md:h-[420px] w-auto"
          />
        </div>

      </div>
    
    </div>
  </div>
</section>

 <Gallery />

 {/* Tickets Section with Glass Effect */}
 <Tickets />

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

      {/* Footer with Glass Effect */}
      <footer className="py-8 px-4 backdrop-blur-md bg-slate-900/80 border-t border-amber-500/20">
        <div className="container mx-auto text-center text-gray-300 text-sm">
          <p>&copy; 2026 DHAARA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App