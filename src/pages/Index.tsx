
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { EcoImpactDashboard } from "@/components/EcoImpactDashboard";
import { RewardsSection } from "@/components/RewardsSection";
import { PackageReturnSection } from "@/components/PackageReturnSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
      plasticSaved: "15g"
    },
    {
      id: "2", 
      name: "Fresh Milk (1L)",
      price: 35,
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop",
      isEcoEligible: true,
      ecoSavings: 3,
      ecoPoints: 8,
      plasticSaved: "12g"
    },
    {
      id: "3",
      name: "Eco-Friendly Detergent",
      price: 120,
      image: "https://images.unsplash.com/photo-1563453392212-326d32d2d3d6?w=400&h=300&fit=crop",
      isEcoEligible: true,
      ecoSavings: 10,
      ecoPoints: 20,
      plasticSaved: "35g"
    },
    {
      id: "4",
      name: "Organic Rice (5kg)",
      price: 280,
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
      isEcoEligible: true,
      ecoSavings: 15,
      ecoPoints: 25,
      plasticSaved: "50g"
    },
    {
      id: "5",
      name: "Natural Honey",
      price: 85,
      image: "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=400&h=300&fit=crop",
      isEcoEligible: true,
      ecoSavings: 7,
      ecoPoints: 12,
      plasticSaved: "18g"
    },
    {
      id: "6",
      name: "Eco Paper Towels",
      price: 65,
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
      isEcoEligible: true,
      ecoSavings: 8,
      ecoPoints: 15,
      plasticSaved: "25g"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose <span className="text-green-600">Eco-Friendly</span>, Save More
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every sustainable choice you make earns rewards and helps protect our planet. 
            Join thousands of eco-warriors making a difference!
          </p>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="products" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 max-w-lg mx-auto">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="impact">My Impact</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
            <TabsTrigger value="returns">Returns</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Featured Eco-Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </div>
  );
};

export default Index;
