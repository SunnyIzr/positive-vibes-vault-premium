
import { useState } from "react";
import Header from "@/components/Header";
import AffirmationCard from "@/components/AffirmationCard";
import CategoryFilter from "@/components/CategoryFilter";

const affirmationsData = [
  // Free affirmations
  { text: "I am worthy of love and respect", category: "Self-Love", isPremium: false },
  { text: "I choose to be confident in all that I do", category: "Confidence", isPremium: false },
  { text: "Every challenge I face is an opportunity to grow", category: "Growth", isPremium: false },
  { text: "I attract positive energy and abundance", category: "Abundance", isPremium: false },
  { text: "I am grateful for all the blessings in my life", category: "Gratitude", isPremium: false },
  { text: "I believe in my ability to achieve my goals", category: "Success", isPremium: false },
  
  // Premium affirmations (blurred for non-premium users)
  { text: "I am a powerful creator of my own reality and manifest my dreams effortlessly", category: "Manifestation", isPremium: true },
  { text: "My intuition guides me to make the perfect decisions for my highest good", category: "Intuition", isPremium: true },
  { text: "I release all limiting beliefs and embrace my unlimited potential", category: "Breakthrough", isPremium: true },
  { text: "I am aligned with the energy of prosperity and wealth flows to me easily", category: "Wealth", isPremium: true },
  { text: "I radiate magnetic confidence that attracts all my desires", category: "Magnetism", isPremium: true },
  { text: "I am divinely protected and guided on my spiritual journey", category: "Spiritual", isPremium: true },
];

const categories = ["All", "Self-Love", "Confidence", "Growth", "Abundance", "Gratitude", "Success", "Manifestation", "Intuition", "Breakthrough", "Wealth", "Magnetism", "Spiritual"];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isPremiumUser, setIsPremiumUser] = useState(false); // This would be connected to auth/payment system

  const filteredAffirmations = affirmationsData.filter(
    (affirmation) => selectedCategory === "All" || affirmation.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <Header />
        
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredAffirmations.map((affirmation, index) => (
            <AffirmationCard
              key={index}
              affirmation={affirmation.text}
              category={affirmation.category}
              isPremium={affirmation.isPremium}
              isBlurred={affirmation.isPremium && !isPremiumUser}
            />
          ))}
        </div>
        
        {filteredAffirmations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No affirmations found for this category.</p>
          </div>
        )}
        
        <div className="text-center mt-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready for More Powerful Affirmations?
            </h3>
            <p className="text-gray-600 mb-6">
              Unlock premium affirmations designed by wellness experts to accelerate your personal transformation.
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg">
              Get Premium Access
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
