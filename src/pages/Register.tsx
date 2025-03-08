
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ArrowRight, Check, Info, Loader2, MapPin, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

const projectTypes = [
  { value: "forest", label: "Forestry & Reforestation" },
  { value: "agriculture", label: "Regenerative Agriculture" },
  { value: "wetland", label: "Wetland Restoration" },
  { value: "grassland", label: "Grassland Management" },
  { value: "agroforestry", label: "Agroforestry" },
  { value: "other", label: "Other Nature-Based Solution" },
];

const Register = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    projectName: "",
    projectType: "",
    location: "",
    area: "",
    description: "",
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsLoading(true);
      // Simulate form submission
      setTimeout(() => {
        setIsLoading(false);
        // Redirect to success page or dashboard
        window.location.href = "/dashboard";
      }, 2000);
    }
  };

  const renderStepIndicator = () => (
    <div className="flex justify-center mb-8">
      <div className="flex items-center">
        <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 1 ? "bg-forest-600 text-white" : "bg-muted text-muted-foreground"}`}>
          {step > 1 ? <Check className="w-5 h-5" /> : "1"}
        </div>
        <div className={`w-16 h-1 ${step >= 2 ? "bg-forest-600" : "bg-muted"}`}></div>
        <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 2 ? "bg-forest-600 text-white" : "bg-muted text-muted-foreground"}`}>
          {step > 2 ? <Check className="w-5 h-5" /> : "2"}
        </div>
        <div className={`w-16 h-1 ${step >= 3 ? "bg-forest-600" : "bg-muted"}`}></div>
        <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 3 ? "bg-forest-600 text-white" : "bg-muted text-muted-foreground"}`}>
          3
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-24 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Register Your Carbon Project</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Begin your carbon verification journey by providing information about your project. Our AI system will guide you through the process.
            </p>
          </div>
          
          {renderStepIndicator()}
          
          <div className="glass-card rounded-xl p-8 md:p-10 shadow-xl">
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-xl font-semibold mb-6">Project Information</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="projectName">Project Name</Label>
                      <Input 
                        id="projectName" 
                        name="projectName" 
                        value={formData.projectName} 
                        onChange={handleChange} 
                        placeholder="Enter your project name" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="projectType">Project Type</Label>
                      <Select onValueChange={(value) => handleSelectChange("projectType", value)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          {projectTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="location">Project Location</Label>
                        <div className="relative">
                          <Input 
                            id="location" 
                            name="location" 
                            value={formData.location} 
                            onChange={handleChange} 
                            placeholder="Country, Region" 
                            required 
                          />
                          <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="area">Project Area (hectares)</Label>
                        <Input 
                          id="area" 
                          name="area" 
                          type="number" 
                          value={formData.area} 
                          onChange={handleChange} 
                          placeholder="0.00" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="description">Project Description</Label>
                      <Textarea 
                        id="description" 
                        name="description" 
                        value={formData.description} 
                        onChange={handleChange} 
                        placeholder="Briefly describe your carbon sequestration project" 
                        rows={4} 
                        required 
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {step === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input 
                          id="firstName" 
                          name="firstName" 
                          value={formData.firstName} 
                          onChange={handleChange} 
                          placeholder="Enter your first name" 
                          required 
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName" 
                          name="lastName" 
                          value={formData.lastName} 
                          onChange={handleChange} 
                          placeholder="Enter your last name" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="your.email@example.com" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="organization">Organization (if applicable)</Label>
                      <Input 
                        id="organization" 
                        name="organization" 
                        value={formData.organization} 
                        onChange={handleChange} 
                        placeholder="Organization name" 
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {step === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-xl font-semibold mb-6">Project Documentation</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-muted/50 rounded-lg p-4 flex items-start space-x-4">
                      <Info className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Upload any available documentation for your project. This could include satellite images, land ownership documents, previous carbon assessments, or any other relevant files.
                        </p>
                      </div>
                    </div>
                    
                    <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
                      <Upload className="mx-auto h-10 w-10 text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">Upload Project Documents</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Drag and drop files here, or click to browse
                      </p>
                      <Button variant="outline" type="button" className="glass-button">
                        Select Files
                      </Button>
                      <p className="text-xs text-muted-foreground mt-2">
                        Supported formats: PDF, JPEG, PNG, TIFF, GeoTIFF, KML, SHP (Max 50MB)
                      </p>
                    </div>
                    
                    <div>
                      <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
                      <Textarea 
                        id="additionalInfo" 
                        placeholder="Share any other details that might help with the verification process" 
                        rows={3} 
                      />
                    </div>
                  </div>
                </div>
              )}
              
              <div className="flex justify-between mt-10">
                {step > 1 && (
                  <Button type="button" variant="outline" className="glass-button" onClick={() => setStep(step - 1)}>
                    Back
                  </Button>
                )}
                {step === 1 && <div></div>}
                
                <Button type="submit" className="bg-forest-600 hover:bg-forest-700 text-white">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : step < 3 ? (
                    <>
                      Continue
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    "Submit Project"
                  )}
                </Button>
              </div>
            </form>
          </div>
          
          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>
              Already have an account? <Link to="/login" className="text-forest-600 hover:underline">Sign in</Link>
            </p>
            <p className="mt-2">
              Need help? <Link to="/support" className="text-forest-600 hover:underline">Contact our support team</Link>
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Register;
