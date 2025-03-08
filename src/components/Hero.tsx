
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);

  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-forest-400/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] rounded-full bg-forest-400/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={`flex flex-col items-center text-center max-w-4xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block mb-6">
            <span className="glass px-4 py-2 rounded-full text-sm font-medium bg-white/20 backdrop-blur-lg border border-white/10">
              Revolutionizing Carbon Projects
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            AI-Powered Carbon <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-forest-500 to-green-500">Sequestration</span> Verification
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 text-balance">
            Simplify carbon credit certification for small-scale projects without scientists. Our AI platform streamlines verification, enhances accuracy, and connects you with buyers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/register">
              <Button size="lg" className="bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-700 hover:to-forest-800 text-white transition-all duration-300">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="outline" size="lg" className="glass-button backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20">
                Learn How It Works
              </Button>
            </Link>
          </div>
          
          <div className={`mt-16 w-full max-w-4xl transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              <div className="glass-card rounded-xl overflow-hidden shadow-2xl backdrop-blur-md bg-white/10 border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                  alt="Carbon sequestration visualization" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <p className="font-medium">AI Analysis in Progress</p>
                  </div>
                  
                  <div className="mt-4 bg-black/30 backdrop-blur-md p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-300">Processing satellite imagery</span>
                      <span className="text-sm text-green-400">78% complete</span>
                    </div>
                    <div className="h-2 bg-black/30 rounded-full">
                      <div className="h-2 bg-green-400 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .text-gradient {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          background-image: linear-gradient(to right, #2cb67d, #34d399);
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }
        
        .glass-card:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          transform: translateY(-5px);
        }
      `}</style>
    </section>
  );
};

export default Hero;
