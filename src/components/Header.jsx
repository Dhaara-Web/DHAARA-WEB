import { useState } from 'react';
import logo from '../assets/logo_gold.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/40 backdrop-blur-sm border-b border-slate-800/40">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <a href="#home" className="flex items-center">
            <img 
              src={logo} 
              alt="DHAARA Logo" 
              className="h-10 md:h-12 w-auto object-contain hover:opacity-80 transition-opacity"
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 text-white">
            <li>
              <a href="#home" className="hover:text-amber-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-amber-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-amber-400 transition-colors">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-amber-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4 text-white">
              <li>
                <a
                  href="#home"
                  className="block hover:text-amber-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block hover:text-amber-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="block hover:text-amber-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block hover:text-amber-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
