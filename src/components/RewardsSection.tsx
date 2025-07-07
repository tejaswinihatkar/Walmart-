
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Gift, Award, Truck, Percent } from "lucide-react";

export const RewardsSection = () => {
  const rewards = [
    {
      id: 1,
      title: "₹50 Off Coupon",
      points: 100,
      icon: Percent,
      description: "Save ₹50 on your next order",
      available: true
    },
    {
      id: 2,
      title: "Free Shipping",
      points: 150,
      icon: Truck,
      description: "Free shipping on your next 3 orders",
      available: true
    },
    {
      id: 3,
      title: "₹100 Off Coupon",
      points: 200,
      icon: Gift,
      description: "Save ₹100 on orders above ₹500",
      available: false
    },
    {
      id: 4,
      title: "Premium Eco Box",
      points: 300,
      icon: Award,
      description: "Exclusive eco-friendly product bundle",
      available: false
    }
  ];

  const userPoints = 245;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Green Rewards</h2>
        <p className="text-gray-600">Turn your eco-points into amazing rewards!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {rewards.map((reward) => {
          const IconComponent = reward.icon;
          const canRedeem = userPoints >= reward.points;
          const progress = Math.min((userPoints / reward.points) * 100, 100);

          return (
            <Card 
              key={reward.id} 
              className={`transition-all duration-200 ${
                canRedeem 
                  ? 'border-green-500 shadow-md hover:shadow-lg eco-glow' 
                  : 'border-gray-200 opacity-75'
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      canRedeem ? 'bg-green-100' : 'bg-gray-100'
                    }`}>
                      <IconComponent className={`h-5 w-5 ${
                        canRedeem ? 'text-green-600' : 'text-gray-400'
                      }`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{reward.title}</CardTitle>
                      <p className="text-sm text-gray-600">{reward.description}</p>
                    </div>
                  </div>
                  <Badge 
                    variant={canRedeem ? "default" : "secondary"}
                    className={canRedeem ? "bg-green-600" : ""}
                  >
                    {reward.points} pts
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                {!canRedeem && (
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{userPoints}/{reward.points} pts</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                )}
                
                <Button 
                  className={`w-full ${
                    canRedeem 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-gray-300 cursor-not-allowed'
                  }`}
                  disabled={!canRedeem}
                >
                  {canRedeem ? 'Redeem Now' : `Need ${reward.points - userPoints} more points`}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
