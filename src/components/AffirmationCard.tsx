
import { Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SubscriptionButton from "@/components/SubscriptionButton";

interface AffirmationCardProps {
  affirmation: string;
  category: string;
  isPremium?: boolean;
  isBlurred?: boolean;
}

const AffirmationCard = ({ affirmation, category, isPremium = false, isBlurred = false }: AffirmationCardProps) => {
  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${isPremium ? 'border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
      <CardContent className="p-6 relative">
        {isPremium && (
          <div className="absolute top-3 right-3">
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Premium
            </div>
          </div>
        )}
        
        <div className="mb-3">
          <span className="text-sm font-medium text-gray-600 bg-white/70 px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
        
        <div className={`relative ${isBlurred && isPremium ? 'filter blur-sm' : ''}`}>
          <p className="text-lg leading-relaxed text-gray-800 font-medium mb-4">
            "{affirmation}"
          </p>
        </div>
        
        {isBlurred && isPremium && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-lg">
            <SubscriptionButton
              variant="default"
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white"
            >
              <Lock className="w-4 h-4 mr-2" />
              Unlock Premium
            </SubscriptionButton>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AffirmationCard;
