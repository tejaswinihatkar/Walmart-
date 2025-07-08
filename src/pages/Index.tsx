
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { EcoImpactDashboard } from "@/components/EcoImpactDashboard";
import { RewardsSection } from "@/components/RewardsSection";
import { PackageReturnSection } from "@/components/PackageReturnSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel } from "@/components/HomepageCarousel";
import { CategorySection } from "@/components/CategorySection";
import { PopularProducts } from "@/components/PopularProducts";
import { ReturnPackagingAd } from "@/components/ReturnPackagingAd";

const Index = () => {
  const products = [
    {
      id: "1",
      name: "Organic Whole Wheat Bread",
      price: 45,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
      isEcoEligible: true,
      ecoSavings: 5,
      ecoPoints: 10,
      plasticSaved: "15g",
      rating: 4.5,
      reviews: 128
    },
    {
      id: "2", 
      name: "Fresh Milk (1L)",
      price: 35,
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop",
      isEcoEligible: true,
      ecoSavings: 3,
      ecoPoints: 8,
      plasticSaved: "12g",
      rating: 4.2,
      reviews: 95
    },
    {
      id: "3",
      name: "Eco-Friendly Detergent",
      price: 120,
      image: "https://images.unsplash.com/photo-1563453392212-326d32d2d3d6?w=400&h=300&fit=crop",
      isEcoEligible: true,
      ecoSavings: 10,
      ecoPoints: 20,
      plasticSaved: "35g",
      rating: 4.7,
      reviews: 210
    },
    {
      id: "4",
      name: "Organic Rice (5kg)",
      price: 280,
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
      isEcoEligible: true,
      ecoSavings: 15,
      ecoPoints: 25,
      plasticSaved: "50g",
      rating: 4.3,
      reviews: 156
    },
    {
      id: "5",
      name: "Natural Honey",
      price: 85,
      image: "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=400&h=300&fit=crop",
      isEcoEligible: true,
      ecoSavings: 7,
      ecoPoints: 12,
      plasticSaved: "18g",
      rating: 4.6,
      reviews: 176
    },
    {
      id: "6",
      name: "Eco Paper Towels",
      price: 65,
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
      isEcoEligible: true,
      ecoSavings: 8,
      ecoPoints: 15,
      plasticSaved: "25g",
      rating: 4.1,
      reviews: 89
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Homepage Carousel */}
        <div className="mb-6">
          <Carousel />
        </div>
        
        {/* New Return Packaging Ad - placed prominently between carousel and categories */}
        <ReturnPackagingAd />
        
        {/* Category Section */}
        <div className="mb-8">
          <CategorySection />
        </div>
        
        {/* Popular Products Section */}
        <div className="mb-8">
          <PopularProducts />
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="products" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 max-w-lg mx-auto">
            <TabsTrigger value="products">Eco Products</TabsTrigger>
            <TabsTrigger value="impact">My Impact</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
            <TabsTrigger value="returns">Returns</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-8">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Featured Eco-Products</h2>
                <button className="text-blue-600 hover:underline text-sm font-medium">View All</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="impact">
            <EcoImpactDashboard />
          </TabsContent>

          <TabsContent value="rewards">
            <RewardsSection />
          </TabsContent>

          <TabsContent value="returns">
            <PackageReturnSection />
          </TabsContent>
        </Tabs>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About EcoMart</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">EcoChoice Initiative</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Help</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Payments</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Shipping</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Returns & Refunds</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Consumer Policy</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Terms of Use</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Security</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Sitemap</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Facebook</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Instagram</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">YouTube</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between">
            <p className="text-gray-400">© 2025 EcoMart. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <img src="https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=30&h=20&fit=crop" alt="Payment Method" className="h-5" />
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=30&h=20&fit=crop" alt="Payment Method" className="h-5" />
              <img src="https://images.unsplash.com/photo-1601307666167-8879e7eb18dd?w=30&h=20&fit=crop" alt="Payment Method" className="h-5" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
