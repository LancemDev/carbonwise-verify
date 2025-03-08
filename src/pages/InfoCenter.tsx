
import React from 'react';
import Navbar from '@/components/Navbar';
import InfoCenterComponent from '@/components/InfoCenter';
import Footer from '@/components/Footer';

const InfoCenter = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-sm font-medium text-forest-600 mb-3 bg-forest-50 px-4 py-1 rounded-full">KNOWLEDGE HUB</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Carbon Markets Information Center</h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about carbon credits, markets, and the verification process, all in one place.
            </p>
          </div>
          
          <InfoCenterComponent />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InfoCenter;
