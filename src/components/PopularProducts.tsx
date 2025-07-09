
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";

// Get top products with discounts for the popular section
const popularProducts = products
  .filter(product => product.discount && product.discount > 10)
  .slice(0, 8)
  .map(product => ({
    id: product.id,
    name: product.name,
    price: product.price,
    originalPrice: product.originalPrice || product.price + (product.price * (product.discount || 0) / 100),
    discount: `${product.discount}% off`,
    image: product.image,
    rating: product.rating,
    reviews: product.reviews,
    isEcoFriendly: product.isEcoEligible,
    brand: product.brand
  }));

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
              {product.brand && (
                <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
              )}
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
