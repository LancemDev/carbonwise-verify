
import { CheckCircle, Leaf, BarChart, Globe, Shield, Link } from 'lucide-react';
import { useEffect, useRef } from 'react';

const features = [
  {
    icon: <Leaf className="h-10 w-10 text-forest-500" />,
    title: "Nature-Based Solutions",
    description: "Support for forestry, regenerative agriculture, and other nature-based carbon sequestration projects."
  },
  {
    icon: <BarChart className="h-10 w-10 text-forest-500" />,
    title: "AI-Powered Analysis",
    description: "Leverage OpenAI foundation models for accurate carbon estimation and verification."
  },
  {
    icon: <Globe className="h-10 w-10 text-forest-500" />,
    title: "Satellite Integration",
    description: "Utilizes satellite imagery and environmental data to assess carbon sequestration potential."
  },
  {
    icon: <Shield className="h-10 w-10 text-forest-500" />,
    title: "Trusted Verification",
    description: "Streamlined verification process that maintains high standards of credibility."
  },
  {
    icon: <Link className="h-10 w-10 text-forest-500" />,
    title: "Market Connectivity",
    description: "Direct access to qualified buyers for your verified carbon credits."
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-forest-500" />,
    title: "Certification Issuance",
    description: "Generate official carbon credit certificates recognized in the marketplace."
  }
];

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card) => {
      observer.observe(card);
    });
    
    return () => {
      featureCards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute -top-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-forest-500/5 blur-3xl"></div>
      <div className="absolute -bottom-[300px] -right-[300px] w-[600px] h-[600px] rounded-full bg-forest-500/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-sm font-medium text-forest-600 mb-3 bg-forest-50 px-4 py-1 rounded-full">CAPABILITIES</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Features for Carbon Projects</h2>
          <p className="text-muted-foreground max-w-2xl">Our platform combines cutting-edge technology with environmental expertise to make carbon credit verification accessible and efficient.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card glass-card p-8 rounded-xl hover-lift opacity-0 transition-all duration-500 hover:shadow-xl"
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              <div className="mb-6 bg-gradient-to-br from-forest-50 to-forest-100 rounded-full p-4 w-20 h-20 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
              
              <div className="mt-6 pt-4 border-t border-forest-100">
                <span className="text-forest-600 text-sm font-medium flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <style jsx>{`
          .animate-in {
            animation: fadeInUp 0.8s ease forwards;
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .glass-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .hover-lift {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .hover-lift:hover {
            transform: translateY(-5px);
          }
        `}</style>
      </div>
    </section>
  );
};

export default Features;
