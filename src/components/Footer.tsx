
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-forest-500 to-forest-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="font-semibold text-xl">Green Connect</span>
            </Link>
            <p className="text-forest-200 mb-6">
              Simplifying carbon sequestration verification with AI technology for small-scale projects.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-forest-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-forest-200 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-forest-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Explore</h3>
            <ul className="space-y-4">
              <li><Link to="/how-it-works" className="text-forest-200 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/info-center" className="text-forest-200 hover:text-white transition-colors">Information Center</Link></li>
              <li><Link to="/marketplace" className="text-forest-200 hover:text-white transition-colors">Marketplace</Link></li>
              <li><Link to="/register" className="text-forest-200 hover:text-white transition-colors">Register Project</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><Link to="/blog" className="text-forest-200 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/case-studies" className="text-forest-200 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/faq" className="text-forest-200 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/support" className="text-forest-200 hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-forest-400 mt-1" />
                <span className="text-forest-200">123 Green Street, Eco City, Nature Country</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-forest-400" />
                <a href="mailto:info@greenconnect.com" className="text-forest-200 hover:text-white transition-colors">info@greenconnect.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-forest-400" />
                <a href="tel:+1234567890" className="text-forest-200 hover:text-white transition-colors">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-forest-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-forest-400 text-sm">© 2025 Green Connect. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-forest-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-forest-400 hover:text-white transition-colors text-sm">Terms of Service</Link>
            <Link to="/cookies" className="text-forest-400 hover:text-white transition-colors text-sm">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
