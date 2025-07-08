
import { Leaf, ShoppingCart, User, Search, Heart, Bell, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <header className="bg-blue-600 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 mr-8">
            <div className="p-1 rounded-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">EcoMart</h1>
              <p className="text-xs text-blue-200">Save More, Go Green</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Input 
                placeholder="Search for products, brands and more..." 
                className="w-full bg-white text-black pr-10 h-10"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Search className="h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center ml-6 space-x-6">
            <div className="flex items-center space-x-1 cursor-pointer">
              <User className="h-5 w-5" />
              <span className="text-sm font-medium">Account</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            
            <div className="flex items-center cursor-pointer">
              <div className="relative">
                <Heart className="h-5 w-5" />
                <Badge className="absolute -top-2 -right-2 h-4 w-4 flex items-center justify-center p-0 bg-yellow-400 text-blue-600">
                  2
                </Badge>
              </div>
              <span className="ml-1 text-sm font-medium">Wishlist</span>
            </div>
            
            <div className="flex items-center space-x-1 cursor-pointer">
              <div className="relative">
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -top-2 -right-2 h-4 w-4 flex items-center justify-center p-0 bg-yellow-400 text-blue-600">
                  3
                </Badge>
              </div>
              <span className="ml-1 text-sm font-medium">Cart</span>
            </div>
            
            {/* Eco Points */}
            <div className="flex items-center space-x-1 bg-blue-700 px-3 py-1 rounded-full">
              <Leaf className="h-4 w-4 text-green-300" />
              <span className="text-sm font-medium text-green-200">245 pts</span>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className="flex md:hidden ml-auto">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white">
              <ShoppingCart className="h-6 w-6" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 bg-yellow-400 text-blue-600">
                3
              </Badge>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Category Navigation */}
      <div className="bg-white text-black border-b">
        <div className="max-w-7xl mx-auto px-4 flex overflow-x-auto">
          <div className="flex space-x-8 py-2">
            <div className="flex flex-col items-center px-4 cursor-pointer">
              <span className="text-sm font-medium">Electronics</span>
            </div>
            <div className="flex flex-col items-center px-4 cursor-pointer">
              <span className="text-sm font-medium">Appliances</span>
            </div>
            <div className="flex flex-col items-center px-4 cursor-pointer">
              <span className="text-sm font-medium">Fashion</span>
            </div>
            <div className="flex flex-col items-center px-4 cursor-pointer">
              <span className="text-sm font-medium">Groceries</span>
            </div>
            <div className="flex flex-col items-center px-4 cursor-pointer">
              <span className="text-sm font-medium">Mobiles</span>
            </div>
            <div className="flex flex-col items-center px-4 cursor-pointer">
              <span className="text-sm font-medium">Home</span>
            </div>
            <div className="flex flex-col items-center px-4 cursor-pointer text-green-600">
              <span className="text-sm font-medium">EcoChoice</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
