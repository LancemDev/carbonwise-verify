
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, BarChart3, Globe } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Amazonian Reforestation Initiative",
    type: "Forestry",
    location: "Brazil",
    area: "1,250 hectares",
    creditsAvailable: 3500,
    pricePerCredit: 15,
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
    icon: <Leaf className="h-5 w-5" />
  },
  {
    id: 2,
    title: "East African Soil Carbon Project",
    type: "Regenerative Agriculture",
    location: "Kenya",
    area: "780 hectares",
    creditsAvailable: 1200,
    pricePerCredit: 12,
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
    icon: <Globe className="h-5 w-5" />
  },
  {
    id: 3,
    title: "Pacific Coast Blue Carbon",
    type: "Blue Carbon",
    location: "Indonesia",
    area: "450 hectares",
    creditsAvailable: 2100,
    pricePerCredit: 18,
    image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
    icon: <BarChart3 className="h-5 w-5" />
  }
];

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-sm font-medium text-forest-600 mb-3 bg-forest-50 px-4 py-1 rounded-full">MARKETPLACE</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Carbon Credit Marketplace</h1>
            <p className="text-lg text-muted-foreground">
              Browse verified carbon credits from projects around the world and connect directly with project developers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="hover:shadow-xl transition-shadow overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <div className="p-1.5 bg-forest-100 text-forest-600 rounded-full mr-2">
                      {project.icon}
                    </div>
                    <p className="text-sm font-medium text-forest-600">{project.type}</p>
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>
                    {project.location} • {project.area}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Available Credits</span>
                    <span className="font-semibold">{project.creditsAvailable.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Price per Credit</span>
                    <span className="font-semibold">${project.pricePerCredit}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Details</Button>
                  <Button className="bg-forest-600 hover:bg-forest-700">Purchase</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
