
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      
      if (!data.session) {
        navigate("/login");
        return;
      }
      
      setUser(data.session.user);
      
      // Fetch user profile
      const { data: profileData, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", data.session.user.id)
        .single();
      
      if (error) {
        console.error("Error fetching profile:", error);
      } else {
        setProfile(profileData);
      }
      
      setLoading(false);
    };
    
    checkUser();
    
    // Set up auth state change listener
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_OUT") {
          navigate("/login");
        } else if (session) {
          setUser(session.user);
        }
      }
    );
    
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error: any) {
      toast.error(error.message || "Error signing out");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-forest-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass-card rounded-xl p-8 shadow-xl">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold">Your Dashboard</h1>
              <Button 
                variant="outline" 
                onClick={handleSignOut}
                className="border-forest-600 text-forest-600 hover:bg-forest-50"
              >
                Sign Out
              </Button>
            </div>
            
            <div className="space-y-6">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h2 className="font-medium mb-3">Account Information</h2>
                <div className="space-y-2">
                  <p><span className="text-muted-foreground">Email:</span> {user?.email}</p>
                  <p><span className="text-muted-foreground">Username:</span> {profile?.username || "Not set"}</p>
                </div>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-lg">
                <h2 className="font-medium mb-3">Your Carbon Projects</h2>
                <div className="text-center py-10">
                  <p className="text-muted-foreground mb-4">You don't have any carbon projects yet.</p>
                  <Button 
                    className="bg-forest-600 hover:bg-forest-700 text-white"
                    onClick={() => navigate("/register")}
                  >
                    Register a New Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
