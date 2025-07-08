
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Leaf, Award, Info, ShoppingCart, Star, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  isEcoEligible: boolean;
  ecoSavings?: number;
  ecoPoints?: number;
  plasticSaved?: string;
  rating?: number;
  reviews?: number;
}

export const ProductCard = ({ 
  id, 
  name, 
  price, 
  image, 
  isEcoEligible, 
  ecoSavings = 5, 
  ecoPoints = 10,
  plasticSaved = "20g",
  rating = 4.2,
  reviews = 120
}: ProductCardProps) => {
  const [packagingType, setPackagingType] = useState("standard");
  const { toast } = useToast();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    const finalPrice = packagingType === "eco" ? price - ecoSavings : price;
    toast({
      title: "Added to cart!",
      description: packagingType === "eco" 
        ? `${name} with eco-packaging. You saved ₹${ecoSavings} and earned ${ecoPoints} points!`
        : `${name} added to cart.`,
    });
  };
  
  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: isWishlisted ? `${name} removed from your wishlist` : `${name} added to your wishlist`,
    });
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200">
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {isEcoEligible && (
            <div className="absolute top-2 left-2">
              <Badge className="bg-green-600 hover:bg-green-700 flex items-center gap-1">
                <Leaf className="h-3 w-3" />
                EcoChoice
              </Badge>
            </div>
          )}
          <button 
            onClick={handleWishlist}
            className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full shadow-sm"
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} />
          </button>
        </div>

        {/* Product Info */}
        <div className="p-3">
          <h3 className="font-medium text-sm mb-1 line-clamp-2 h-10">{name}</h3>
          
          {/* Ratings */}
          <div className="flex items-center space-x-1 mb-2">
            <div className="flex items-center bg-green-600 text-white px-1.5 py-0.5 rounded text-xs">
              <span>{rating}</span>
              <Star className="h-3 w-3 ml-0.5" />
            </div>
            <span className="text-xs text-gray-500">({reviews})</span>
          </div>
          
          {/* Pricing */}
          <div className="mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold">₹{packagingType === "eco" ? price - ecoSavings : price}</span>
              {packagingType === "eco" && (
                <span className="text-sm text-gray-500 line-through">₹{price}</span>
              )}
              {packagingType === "eco" && (
                <span className="text-xs text-green-600 font-medium">{Math.round((ecoSavings / price) * 100)}% off</span>
              )}
            </div>
          </div>

          {/* Packaging Options */}
          {isEcoEligible && (
            <div className="mb-3 p-2 bg-gray-50 rounded-lg">
              <h4 className="text-xs font-medium mb-2">Choose Packaging:</h4>
              <RadioGroup 
                value={packagingType} 
                onValueChange={setPackagingType}
                className="space-y-1.5"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="standard" id={`standard-${id}`} className="h-3 w-3" />
                  <Label htmlFor={`standard-${id}`} className="text-xs">
                    Standard Packaging
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="eco" id={`eco-${id}`} className="h-3 w-3" />
                  <Label htmlFor={`eco-${id}`} className="text-xs flex items-center gap-1">
                    <Leaf className="h-3 w-3 text-green-600" />
                    Eco-Friendly Packaging
                    <div className="flex items-center gap-1 text-[10px]">
                      <span className="text-green-600 font-medium">-₹{ecoSavings}</span>
                      <span className="text-blue-600">+{ecoPoints}pts</span>
                    </div>
                  </Label>
                </div>
              </RadioGroup>

              {/* Eco Info */}
              {packagingType === "eco" && (
                <div className="mt-2 p-1.5 bg-green-50 rounded-md flex items-start gap-1.5 animate-fade-in">
                  <Info className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                  <div className="text-[10px] text-green-700">
                    <p className="font-medium">🌱 Return packaging & earn rewards!</p>
                    <p>Saves {plasticSaved} plastic waste. Recyclable & biodegradable.</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="grid grid-cols-2 gap-2">
            <Button 
              onClick={handleAddToCart}
              className="text-xs h-8 bg-yellow-500 hover:bg-yellow-600 text-gray-900"
            >
              <ShoppingCart className="h-3.5 w-3.5 mr-1" />
              ADD TO CART
            </Button>
            
            <Button 
              className="text-xs h-8 bg-orange-500 hover:bg-orange-600"
            >
              BUY NOW
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
