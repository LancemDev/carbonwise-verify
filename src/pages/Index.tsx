
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Process from "@/components/Process";
import InfoCenter from "@/components/InfoCenter";
import Footer from "@/components/Footer";
import { ArrowRight, Award, CheckCircle2, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TestimonialCard = ({ quote, author, role, company, image }: { 
  quote: string; 
  author: string; 
  role: string; 
  company: string; 
  image: string;
}) => (
  <div className="glass-card p-8 rounded-xl hover-lift">
    <div className="flex items-center space-x-4 mb-6">
      <img src={image} alt={author} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <p className="font-medium">{author}</p>
        <p className="text-sm text-muted-foreground">{role}, {company}</p>
      </div>
    </div>
    <p className="text-muted-foreground italic mb-6">"{quote}"</p>
    <div className="flex text-amber-500">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      
      {/* Statistics Section */}
      <section className="py-16 bg-forest-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-forest-300">95%</div>
              <p className="text-forest-200">Time Saved in Verification</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-forest-300">87%</div>
              <p className="text-forest-200">Cost Reduction vs Traditional</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-forest-300">10,000+</div>
              <p className="text-forest-200">Tons CO₂ Verified</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-forest-300">500+</div>
              <p className="text-forest-200">Projects Supported</p>
            </div>
          </div>
        </div>
      </section>
      
      <Process />
      
      {/* Project Types Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="blur-circle-1 bottom-0 left-20"></div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-sm font-medium text-forest-600 mb-3">PROJECT TYPES</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Supported Carbon Solutions</h2>
            <p className="text-muted-foreground max-w-2xl">We support various types of nature-based carbon sequestration projects with our AI verification platform.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card rounded-xl overflow-hidden hover-lift group">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                  alt="Forestry" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <TreePine className="w-6 h-6 text-forest-600 mr-2" />
                  <h3 className="text-xl font-semibold">Forestry</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Reforestation, afforestation, and forest management projects that increase carbon storage.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-forest-100 text-forest-700 rounded-full text-xs font-medium">High Capacity</span>
                  <span className="px-3 py-1 bg-forest-100 text-forest-700 rounded-full text-xs font-medium">Biodiversity+</span>
                  <span className="px-3 py-1 bg-forest-100 text-forest-700 rounded-full text-xs font-medium">Long-term</span>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl overflow-hidden hover-lift group">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                  alt="Regenerative Agriculture" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-forest-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-xl font-semibold">Regenerative Agriculture</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Farming practices that restore soil health and increase soil carbon sequestration.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-forest-100 text-forest-700 rounded-full text-xs font-medium">Soil Health</span>
                  <span className="px-3 py-1 bg-forest-100 text-forest-700 rounded-full text-xs font-medium">No-till</span>
                  <span className="px-3 py-1 bg-forest-100 text-forest-700 rounded-full text-xs font-medium">Cover Crops</span>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl overflow-hidden hover-lift group">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                  alt="Wetland Restoration" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-forest-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <h3 className="text-xl font-semibold">Wetland Restoration</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Restoration of wetlands, mangroves, and coastal ecosystems with high carbon potential.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-forest-100 text-forest-700 rounded-full text-xs font-medium">Blue Carbon</span>
                  <span className="px-3 py-1 bg-forest-100 text-forest-700 rounded-full text-xs font-medium">Ecosystem Services</span>
                  <span className="px-3 py-1 bg-forest-100 text-forest-700 rounded-full text-xs font-medium">Flood Resilience</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <Link to="/project-types">
              <Button variant="outline" className="glass-button">
                Explore All Project Types
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Certification Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <span className="text-sm font-medium text-forest-600 mb-3">CERTIFICATION</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Verified Carbon Certificates</h2>
              <p className="text-muted-foreground mb-6">
                Our platform generates high-quality carbon credit certificates that are recognized in voluntary markets, making your projects more marketable and valuable.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex">
                  <CheckCircle2 className="w-5 h-5 text-forest-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Market-recognized certification backed by AI verification</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="w-5 h-5 text-forest-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Blockchain-backed for transparency and immutability</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="w-5 h-5 text-forest-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Detailed carbon measurement data and verification proof</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="w-5 h-5 text-forest-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Compliant with leading voluntary carbon standards</span>
                </li>
              </ul>
              
              <Link to="/certification">
                <Button className="bg-forest-600 hover:bg-forest-700 text-white">
                  Learn About Certification
                </Button>
              </Link>
            </div>
            
            <div className="md:w-1/2">
              <div className="glass-card p-2 rounded-xl shadow-xl backdrop-blur-xl bg-white/20 rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="border-2 border-dashed border-forest-200 rounded-lg p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold">Carbon Credit Certificate</h3>
                      <p className="text-muted-foreground">Verified by Green Connect AI</p>
                    </div>
                    <Award className="w-12 h-12 text-forest-600" />
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Project Name</p>
                      <p className="font-medium">Rainforest Reforestation Initiative</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Project Owner</p>
                      <p className="font-medium">Green Future NGO</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Carbon Credits Certified</p>
                      <p className="font-medium">1,450 tCO₂e</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Verification Date</p>
                      <p className="font-medium">May 15, 2023</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-forest-200 pt-4">
                    <div className="text-sm">
                      <p className="text-muted-foreground">Certificate ID</p>
                      <p className="font-mono">CW-230515-1450-RF</p>
                    </div>
                    <div className="w-20 h-20 bg-forest-100 rounded-md flex items-center justify-center">
                      <div className="w-16 h-16 grid grid-cols-4 grid-rows-4 gap-0.5">
                        {Array(16).fill(0).map((_, i) => (
                          <div key={i} className="bg-forest-600"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-sm font-medium text-forest-600 mb-3">TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-muted-foreground max-w-2xl">Hear from projects that have successfully used our platform for carbon verification.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="GreenConnect's AI verification cut our certification timeline from months to weeks. The process was seamless and affordable."
              author="Emily Chen"
              role="Project Manager"
              company="GreenForest Initiative"
              image="https://randomuser.me/api/portraits/women/32.jpg"
            />
            <TestimonialCard 
              quote="As a small farm collective, we couldn't afford traditional verification. Green Connect made it possible for us to enter the carbon market."
              author="Michael Rodriguez"
              role="Founder"
              company="Sustainable Farms Collective"
              image="https://randomuser.me/api/portraits/men/46.jpg"
            />
            <TestimonialCard 
              quote="The detailed data analysis provided by their AI system was even more thorough than our previous manual assessments. Impressive technology."
              author="Sarah Johnson"
              role="Environmental Scientist"
              company="EcoRestore"
              image="https://randomuser.me/api/portraits/women/65.jpg"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-forest-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Verify Your Carbon Project?</h2>
            <p className="text-forest-200 mb-8 text-lg">
              Join hundreds of projects already using Green Connect to simplify verification and access carbon markets.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register">
                <Button size="lg" className="bg-forest-600 hover:bg-forest-700 text-white">
                  Register Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="outline" size="lg" className="border-forest-600 text-forest-200 hover:text-white hover:bg-forest-800">
                  Request a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <InfoCenter />
      <Footer />
    </div>
  );
};

export default Index;
