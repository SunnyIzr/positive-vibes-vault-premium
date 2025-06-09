
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AuthButton = () => {
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <Button 
        onClick={() => navigate("/auth")}
        variant="outline"
        className="bg-white/70 backdrop-blur-sm"
      >
        <User className="w-4 h-4 mr-2" />
        Sign In
      </Button>
    );
  }

  const displayName = profile?.display_name || 
                     (profile?.first_name && profile?.last_name 
                       ? `${profile.first_name} ${profile.last_name}` 
                       : profile?.first_name || user.email?.split('@')[0] || 'User');

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-700">
        Hello, {displayName}
      </span>
      <Button 
        onClick={signOut}
        variant="outline"
        className="bg-white/70 backdrop-blur-sm"
      >
        <LogOut className="w-4 h-4 mr-2" />
        Sign Out
      </Button>
    </div>
  );
};

export default AuthButton;
