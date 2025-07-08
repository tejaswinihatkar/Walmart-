
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const popularProducts = [
  {
    id: "p1",
    name: "Eco-Friendly Water Bottle",
    price: 599,
    originalPrice: 999,
    discount: "40% off",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop",
    rating: 4.5,
    reviews: 2345,
    isEcoFriendly: true
  },
  {
    id: "p2",
    name: "Wireless Bluetooth Earbuds",
    price: 1299,
    originalPrice: 2499,
    discount: "48% off",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=300&h=300&fit=crop",
    rating: 4.3,
    reviews: 1289,
    isEcoFriendly: false
  },
  {
    id: "p3",
    name: "Bamboo Cutlery Set",
    price: 349,
    originalPrice: 599,
    discount: "42% off",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=300&h=300&fit=crop",
    rating: 4.7,
    reviews: 856,
    isEcoFriendly: true
  },
  {
    id: "p4",
    name: "Smart Fitness Band",
    price: 1999,
    originalPrice: 3499,
    discount: "43% off",
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=300&h=300&fit=crop",
    rating: 4.4,
    reviews: 3421,
    isEcoFriendly: false
  },
  {
    id: "p5",
    name: "Reusable Coffee Cup",
    price: 399,
    originalPrice: 799,
    discount: "50% off",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300&h=300&fit=crop",
    rating: 4.8,
    reviews: 1023,
    isEcoFriendly: true
  }
];

export function PopularProducts() {
  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Popular Products</h2>
        <button className="text-blue-600 hover:underline text-sm font-medium">View All</button>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {popularProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow cursor-pointer border border-gray-200">
            <div className="relative">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              {product.isEcoFriendly && (
                <div className="absolute top-2 left-2">
                  <Badge className="bg-green-600 hover:bg-green-700 text-white text-xs flex items-center gap-1">
                    <span className="text-xs">EcoChoice</span>
                  </Badge>
                </div>
              )}
            </div>
            
            <div className="p-3">
              <h3 className="text-sm font-medium mb-1 line-clamp-2 h-10">{product.name}</h3>
              
              <div className="flex items-center space-x-1 mb-1">
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-medium ml-1">{product.rating}</span>
                </div>
                <span className="text-xs text-gray-500">({product.reviews})</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="font-bold">₹{product.price}</span>
                <span className="text-xs text-gray-500 line-through">₹{product.originalPrice}</span>
                <span className="text-xs text-green-600 font-medium">{product.discount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
