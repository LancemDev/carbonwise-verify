
import { CheckCircle, Leaf, BarChart, Globe, Shield, Link } from 'lucide-react';

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
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-sm font-medium text-forest-600 mb-3">CAPABILITIES</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Features for Carbon Projects</h2>
          <p className="text-muted-foreground max-w-2xl">Our platform combines cutting-edge technology with environmental expertise to make carbon credit verification accessible and efficient.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-xl hover-lift opacity-0" 
              style={{ animation: `fade-in 0.5s ease-out ${0.1 * index}s forwards` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
