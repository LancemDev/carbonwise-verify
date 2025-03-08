
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="blur-circle-1 top-0 left-0"></div>
      <div className="blur-circle-2 bottom-0 right-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto animate-in-bottom">
          <div className="inline-block mb-6">
            <span className="glass px-4 py-2 rounded-full text-sm font-medium">Revolutionizing Carbon Projects</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            AI-Powered Carbon <span className="text-gradient">Sequestration</span> Verification
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 text-balance">
            Simplify carbon credit certification for small-scale projects without scientists. Our AI platform streamlines verification, enhances accuracy, and connects you with buyers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/register">
              <Button size="lg" className="bg-forest-600 hover:bg-forest-700 text-white">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="outline" size="lg" className="glass-button">
                Learn How It Works
              </Button>
            </Link>
          </div>
          
          <div className="mt-16 w-full max-w-4xl">
            <div className="relative">
              <div className="glass-card rounded-xl overflow-hidden shadow-2xl">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
