import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CloudCog as SoundCloud, Instagram, Youtube, Menu, X, Heart } from 'lucide-react';
import { useState } from 'react';
import Home from './pages/Home';
import Music from './pages/Music';
import Reels from './pages/Reels';
import Connect from './pages/Connect';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentYear = new Date().getFullYear();

  return (
    <Router basename="/yuftn">
      <div className="min-h-screen bg-[#1a0f0f] text-amber-100 flex flex-col">
        {/* Navigation */}
        <nav className="fixed w-full bg-[#1a0f0f]/90 backdrop-blur-sm z-50 border-b border-amber-900/20">
          <div 
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23B45309' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 20L20 0v20L0 40z'/%3E%3Cpath d='M20 20L40 0v20L20 40z'/%3E%3C/g%3E%3C/svg%3E')"
            }}
          >
            <div className="flex items-center justify-between h-16">
              <Link 
                to="/" 
                className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-red-600 text-transparent bg-clip-text"
              >
                DJ Yuftn
              </Link>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-amber-900/20 rounded-lg transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="hover:text-amber-500 transition-colors">Home</Link>
                <Link to="/music" className="hover:text-amber-500 transition-colors">Tracks</Link>
                <Link to="/reels" className="hover:text-amber-500 transition-colors">Events</Link>
                <Link 
                  to="/connect" 
                  className="px-4 py-2 bg-gradient-to-r from-amber-500 to-red-600 rounded-full hover:from-amber-600 hover:to-red-700 transition-colors"
                >
                  Book
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-[#1a0f0f]/95 backdrop-blur-sm border-b border-amber-900/20">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link 
                  to="/" 
                  className="block px-3 py-2 hover:bg-gradient-to-r hover:from-amber-900/30 hover:to-red-900/20 rounded-lg transition-colors" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/music" 
                  className="block px-3 py-2 hover:bg-gradient-to-r hover:from-amber-900/30 hover:to-red-900/20 rounded-lg transition-colors" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Music
                </Link>
                <Link 
                  to="/reels" 
                  className="block px-3 py-2 hover:bg-gradient-to-r hover:from-amber-900/30 hover:to-red-900/20 rounded-lg transition-colors" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reels
                </Link>
                <Link 
                  to="/connect" 
                  className="block px-3 py-2 bg-gradient-to-r from-amber-500 to-red-600 rounded-lg mt-4" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Connect
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="pt-16 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music" element={<Music />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/connect" element={<Connect />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer 
          className="bg-[#1a0f0f] border-t border-amber-900/20"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B45309' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
          }}
        >
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Social Links */}
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold mb-4 text-amber-500">Follow Me</h3>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a 
                    href="https://instagram.com/y_yuftn" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-amber-900/20 rounded-full transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-amber-900/20 rounded-full transition-colors"
                  >
                    <Youtube size={20} />
                  </a>
                  <a 
                    href="https://soundcloud.com/zakaria-mouaoual" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-amber-900/20 rounded-full transition-colors"
                  >
                    <SoundCloud size={20} />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4 text-amber-500">Quick Links</h3>
                <div className="space-y-2">
                  <Link to="/music" className="block hover:text-amber-500 transition-colors">Latest Tracks</Link>
                  <Link to="/reels" className="block hover:text-amber-500 transition-colors">Watch Reels</Link>
                  <Link to="/connect" className="block hover:text-amber-500 transition-colors">Book Event</Link>
                </div>
              </div>

              {/* Contact */}
              <div className="text-center md:text-right">
                <h3 className="text-lg font-semibold mb-4 text-amber-500">Contact</h3>
                <a 
                  href="mailto:contact@zakariadj.com"
                  className="block hover:text-amber-500 transition-colors"
                >
                  contact@zakariadj.com
                </a>
                <a 
                  href="https://zakariadj.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-amber-500 transition-colors mt-2"
                >
                  zakariadj.com
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center pt-8 border-t border-amber-900/20">
              <p className="text-amber-300/60 text-sm">
                Made with <Heart size={14} className="inline text-red-500" /> in Morocco © {currentYear} Ksambaa
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;