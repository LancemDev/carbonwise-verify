
import React from 'react';
import Navbar from '@/components/Navbar';
import Process from '@/components/Process';
import Footer from '@/components/Footer';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-sm font-medium text-forest-600 mb-3 bg-forest-50 px-4 py-1 rounded-full">THE PROCESS</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How Our Platform Works</h1>
            <p className="text-lg text-muted-foreground">
              Our streamlined process makes carbon credit verification accessible and efficient for small-scale projects.
            </p>
          </div>
          
          <Process />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
