
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-navbar py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-forest-500 to-forest-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="font-semibold text-xl">CarbonWise</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-forest-600 transition-colors">Home</Link>
            <Link to="/how-it-works" className="text-sm font-medium hover:text-forest-600 transition-colors">How It Works</Link>
            <Link to="/info-center" className="text-sm font-medium hover:text-forest-600 transition-colors">Info Center</Link>
            <Link to="/marketplace" className="text-sm font-medium hover:text-forest-600 transition-colors">Marketplace</Link>
            <Link to="/register">
              <Button className="bg-forest-600 hover:bg-forest-700 text-white">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} glass-navbar mx-4 my-2 rounded-xl p-4 animate-fade-in`}>
        <div className="flex flex-col space-y-4">
          <Link to="/" className="text-sm font-medium px-4 py-2 rounded-md hover:bg-white/20 transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/how-it-works" className="text-sm font-medium px-4 py-2 rounded-md hover:bg-white/20 transition-colors" onClick={() => setIsOpen(false)}>How It Works</Link>
          <Link to="/info-center" className="text-sm font-medium px-4 py-2 rounded-md hover:bg-white/20 transition-colors" onClick={() => setIsOpen(false)}>Info Center</Link>
          <Link to="/marketplace" className="text-sm font-medium px-4 py-2 rounded-md hover:bg-white/20 transition-colors" onClick={() => setIsOpen(false)}>Marketplace</Link>
          <Link to="/register" onClick={() => setIsOpen(false)}>
            <Button className="w-full bg-forest-600 hover:bg-forest-700 text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
