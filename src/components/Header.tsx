
import { Leaf, ShoppingCart, User, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="eco-gradient p-2 rounded-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">EcoChoice</h1>
              <p className="text-xs text-green-600">Commerce Hub</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
              Products
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
              Categories
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
              Impact
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
              Rewards
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Eco Points */}
            <div className="flex items-center space-x-1 bg-green-50 px-3 py-1 rounded-full">
              <Award className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">245 pts</span>
            </div>

            {/* Cart */}
            <Button variant="outline" size="sm" className="relative">
              <ShoppingCart className="h-4 w-4" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-green-600">
                3
              </Badge>
            </Button>

            {/* Profile */}
            <Button variant="outline" size="sm">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
