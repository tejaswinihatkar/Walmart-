
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Leaf, Award, Info, ShoppingCart } from "lucide-react";
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
}

export const ProductCard = ({ 
  id, 
  name, 
  price, 
  image, 
  isEcoEligible, 
  ecoSavings = 5, 
  ecoPoints = 10,
  plasticSaved = "20g"
}: ProductCardProps) => {
  const [packagingType, setPackagingType] = useState("standard");
  const { toast } = useToast();

  const handleAddToCart = () => {
    const finalPrice = packagingType === "eco" ? price - ecoSavings : price;
    toast({
      title: "Added to cart!",
      description: packagingType === "eco" 
        ? `${name} with eco-packaging. You saved ₹${ecoSavings} and earned ${ecoPoints} points!`
        : `${name} added to cart.`,
    });
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {isEcoEligible && (
            <div className="absolute top-2 right-2">
              <Badge className="bg-green-600 hover:bg-green-700 flex items-center gap-1">
                <Leaf className="h-3 w-3" />
                EcoChoice
              </Badge>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2">{name}</h3>
          
          {/* Pricing */}
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">₹{packagingType === "eco" ? price - ecoSavings : price}</span>
              {packagingType === "eco" && (
                <span className="text-sm text-gray-500 line-through">₹{price}</span>
              )}
            </div>
          </div>

          {/* Packaging Options */}
          {isEcoEligible && (
            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-medium mb-2">Choose Packaging:</h4>
              <RadioGroup 
                value={packagingType} 
                onValueChange={setPackagingType}
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="standard" id={`standard-${id}`} />
                  <Label htmlFor={`standard-${id}`} className="text-sm">
                    Standard Packaging
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="eco" id={`eco-${id}`} />
                  <Label htmlFor={`eco-${id}`} className="text-sm flex items-center gap-2">
                    <Leaf className="h-3 w-3 text-green-600" />
                    Eco-Friendly Packaging
                    <div className="flex items-center gap-1 text-xs">
                      <span className="text-green-600 font-medium">Save ₹{ecoSavings}</span>
                      <span className="text-blue-600">+{ecoPoints} pts</span>
                    </div>
                  </Label>
                </div>
              </RadioGroup>

              {/* Eco Info */}
              {packagingType === "eco" && (
                <div className="mt-3 p-2 bg-green-50 rounded-md flex items-start gap-2 animate-fade-in">
                  <Info className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div className="text-xs text-green-700">
                    <p className="font-medium mb-1">🌱 Environmental Impact</p>
                    <p>This eco-packaging saves {plasticSaved} of plastic waste and is made from 100% recycled materials!</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Add to Cart */}
          <Button 
            onClick={handleAddToCart}
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
