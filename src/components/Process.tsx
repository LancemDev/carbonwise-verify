
import { ClipboardCheck, BarChart3, Award, Users } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardCheck className="h-10 w-10 text-white" />,
    title: "Register Your Project",
    description: "Create an account and provide basic information about your carbon sequestration project. We support various nature-based solutions.",
    color: "from-forest-500 to-forest-600"
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-white" />,
    title: "AI-Based Assessment",
    description: "Our OpenAI-powered system analyzes satellite imagery and environmental data to estimate your project's carbon potential.",
    color: "from-sky-500 to-sky-600"
  },
  {
    icon: <Award className="h-10 w-10 text-white" />,
    title: "Verification & Certification",
    description: "Our platform generates all necessary documentation and facilitates verification to create marketable carbon credits.",
    color: "from-amber-500 to-amber-600"
  },
  {
    icon: <Users className="h-10 w-10 text-white" />,
    title: "Connect with Buyers",
    description: "List your verified credits on our marketplace where pre-qualified buyers can purchase them directly.",
    color: "from-earth-500 to-earth-600"
  }
];

const Process = () => {
  return (
    <section className="py-20 relative">
      <div className="blur-circle-3 top-40 right-0"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-sm font-medium text-forest-600 mb-3">THE PROCESS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Green Connect Works</h2>
          <p className="text-muted-foreground max-w-2xl">A simple four-step process that makes carbon credit verification accessible for small-scale projects.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col opacity-0" style={{ animation: `fade-in 0.5s ease-out ${0.2 * index}s forwards` }}>
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}>
                {step.icon}
              </div>
              
              <div className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-24 w-full h-0.5 bg-gradient-to-r from-forest-200 to-transparent"></div>
                )}
                
                <div className="glass-card p-6 rounded-xl h-full">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-forest-100 text-forest-700 font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
