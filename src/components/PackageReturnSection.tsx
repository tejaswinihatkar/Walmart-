
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Package, QrCode, Gift, Recycle, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const PackageReturnSection = () => {
  const [isScanning, setIsScanning] = useState(false);
  const { toast } = useToast();

  const returnHistory = [
    {
      id: 1,
      date: "2024-01-15",
      packageType: "Bread Plastic Wrap",
      reward: 5,
      status: "processed"
    },
    {
      id: 2,
      date: "2024-01-10",
      packageType: "Milk Container",
      reward: 8,
      status: "processed"
    },
    {
      id: 3,
      date: "2024-01-08",
      packageType: "Detergent Bottle",
      reward: 12,
      status: "processed"
    }
  ];

  const handleScanPackage = () => {
    setIsScanning(true);
    
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
      toast({
        title: "Package Scanned Successfully!",
        description: "You've earned 10 eco points for returning eco-friendly packaging. Thank you for helping the environment!",
      });
    }, 2000);
  };

  const totalReturned = returnHistory.length;
  const totalRewards = returnHistory.reduce((sum, item) => sum + item.reward, 0);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Return & Earn Program</h2>
        <p className="text-gray-600">Bring back your eco-packaging and earn rewards!</p>
      </div>

      {/* Scan Package Section */}
      <Card className="border-green-500 bg-gradient-to-r from-green-50 to-blue-50">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <QrCode className="h-6 w-6 text-green-600" />
            Scan Package to Return
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="flex justify-center">
            <div className={`w-32 h-32 border-4 border-dashed border-green-400 rounded-lg flex items-center justify-center ${isScanning ? 'animate-pulse bg-green-100' : 'bg-white'}`}>
              {isScanning ? (
                <div className="text-green-600">
                  <QrCode className="h-8 w-8 animate-spin" />
                  <p className="text-xs mt-2">Scanning...</p>
                </div>
              ) : (
                <Package className="h-12 w-12 text-green-400" />
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              Scan the QR code on your eco-packaging to earn rewards
            </p>
            <Button 
              onClick={handleScanPackage}
              disabled={isScanning}
              className="bg-green-600 hover:bg-green-700"
            >
              {isScanning ? "Scanning Package..." : "Start Scanning"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Return Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Package className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-blue-600">{totalReturned}</p>
            <p className="text-sm text-gray-600">Packages Returned</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Gift className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-green-600">{totalRewards}</p>
            <p className="text-sm text-gray-600">Points Earned</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Recycle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-purple-600">100%</p>
            <p className="text-sm text-gray-600">Recycling Rate</p>
          </CardContent>
        </Card>
      </div>

      {/* How It Works */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">How the Return Program Works</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">1</span>
              </div>
              <div>
                <h4 className="font-medium">Purchase Eco-Friendly Products</h4>
                <p className="text-sm text-gray-600">Buy products with reusable eco-packaging from Walmart</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">2</span>
              </div>
              <div>
                <h4 className="font-medium">Use & Clean Packaging</h4>
                <p className="text-sm text-gray-600">Use the product and clean the reusable packaging</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">3</span>
              </div>
              <div>
                <h4 className="font-medium">Return to Walmart</h4>
                <p className="text-sm text-gray-600">Bring packaging to any Walmart store or scan QR code</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">4</span>
              </div>
              <div>
                <h4 className="font-medium">Earn Rewards</h4>
                <p className="text-sm text-gray-600">Get eco points and coupons for future purchases</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Return History */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Returns</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {returnHistory.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-sm">{item.packageType}</p>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-700">+{item.reward} pts</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
