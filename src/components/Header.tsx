
import { Sparkles, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="text-center mb-12">
      <div className="flex items-center justify-center mb-4">
        <Sparkles className="w-8 h-8 text-purple-600 mr-2" />
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Daily Affirmations
        </h1>
        <Sparkles className="w-8 h-8 text-purple-600 ml-2" />
      </div>
      
      <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
        Transform your mindset with powerful daily affirmations. Start your journey to a more positive you.
      </p>
      
      <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-3 text-lg">
        <Crown className="w-5 h-5 mr-2" />
        Unlock Premium Affirmations
      </Button>
    </header>
  );
};

export default Header;
