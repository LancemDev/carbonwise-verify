
import { Book, FileText, GraduationCap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const resources = [
  {
    icon: <Book className="h-6 w-6" />,
    title: "Carbon Markets Explained",
    description: "A comprehensive guide to understanding how carbon markets function.",
    link: "/info-center/carbon-markets"
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Verification Standards",
    description: "Learn about the different standards and methodologies for carbon verification.",
    link: "/info-center/verification-standards"
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Project Development",
    description: "Step-by-step guides for developing successful carbon sequestration projects.",
    link: "/info-center/project-development"
  }
];

const InfoCenter = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
          <div className="mb-8 md:mb-0 md:max-w-xl">
            <span className="text-sm font-medium text-forest-600 mb-3">KNOWLEDGE HUB</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Carbon Markets Information Center</h2>
            <p className="text-muted-foreground">Everything you need to know about carbon credits, markets, and the verification process, all in one place.</p>
          </div>
          
          <div className="glass-card p-8 rounded-xl md:max-w-sm shadow-xl backdrop-blur-xl bg-white/30 dark:bg-white/5">
            <h3 className="text-xl font-semibold mb-4">Latest Market Insights</h3>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center">
                <span>Voluntary Carbon Market</span>
                <span className="text-forest-600 font-medium">↑ 3.2%</span>
              </div>
              <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-forest-500 rounded-full"></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span>Nature-Based Solutions</span>
                <span className="text-forest-600 font-medium">↑ 5.7%</span>
              </div>
              <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-forest-500 rounded-full"></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span>Renewable Energy Credits</span>
                <span className="text-amber-600 font-medium">↓ 1.4%</span>
              </div>
              <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-amber-500 rounded-full"></div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mb-4">Data updated May 2023. Source: Carbon Credits Global Index</p>
            <Button className="w-full bg-forest-600 hover:bg-forest-700 text-white">
              View Full Market Report
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Link key={index} to={resource.link} className="glass-card p-6 rounded-xl hover-lift group">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-2 rounded-lg bg-forest-100 text-forest-600 group-hover:bg-forest-600 group-hover:text-white transition-colors">
                  {resource.icon}
                </div>
                <h3 className="text-lg font-semibold">{resource.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{resource.description}</p>
              <div className="flex items-center text-forest-600 font-medium">
                <span>Read more</span>
                <svg 
                  className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCenter;
