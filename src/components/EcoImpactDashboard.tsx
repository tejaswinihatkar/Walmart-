
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Leaf, Award, Users, Recycle, TreePine, Package } from "lucide-react";

export const EcoImpactDashboard = () => {
  const userStats = {
    ecoPoints: 245,
    plasticSaved: 2.3,
    ordersWithEcoPackaging: 12,
    packagesReturned: 8,
    nextRewardAt: 300
  };

  const communityStats = {
    totalPlasticSaved: 12000,
    totalUsers: 15420,
    ecoOrdersThisMonth: 3240,
    packagesReturnedCommunity: 25680
  };

  const progressToNextReward = (userStats.ecoPoints / userStats.nextRewardAt) * 100;

  return (
    <div className="space-y-6">
      {/* Personal Impact */}
      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Leaf className="h-6 w-6 text-green-600" />
          Your Eco Impact
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Eco Points</p>
                  <p className="text-2xl font-bold text-green-600">{userStats.ecoPoints}</p>
                </div>
                <Award className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Plastic Saved</p>
                  <p className="text-2xl font-bold text-blue-600">{userStats.plasticSaved}kg</p>
                </div>
                <Recycle className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-50 to-pink-50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Eco Orders</p>
                  <p className="text-2xl font-bold text-purple-600">{userStats.ordersWithEcoPackaging}</p>
                </div>
                <TreePine className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-50 to-red-50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Packages Returned</p>
                  <p className="text-2xl font-bold text-orange-600">{userStats.packagesReturned}</p>
                </div>
                <Package className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress to Next Reward */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-green-600" />
              Next Reward Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>{userStats.ecoPoints} points</span>
                <span>{userStats.nextRewardAt} points</span>
              </div>
              <Progress value={progressToNextReward} className="h-3" />
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  {userStats.nextRewardAt - userStats.ecoPoints} more points for ₹100 coupon
                </p>
                <Badge variant="outline" className="text-green-600 border-green-600">
                  {Math.round(progressToNextReward)}% complete
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Community Impact */}
      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Users className="h-6 w-6 text-blue-600" />
          Community Impact
        </h2>
        
        <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">Together, We're Making a Difference!</h3>
              <p className="text-green-100">Join {communityStats.totalUsers.toLocaleString()} eco-warriors</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Recycle className="h-8 w-8" />
                </div>
                <p className="text-2xl font-bold">{communityStats.totalPlasticSaved.toLocaleString()}kg</p>
                <p className="text-sm text-green-100">Plastic Waste Saved</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8" />
                </div>
                <p className="text-2xl font-bold">{communityStats.totalUsers.toLocaleString()}</p>
                <p className="text-sm text-green-100">Active Eco-Users</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Leaf className="h-8 w-8" />
                </div>
                <p className="text-2xl font-bold">{communityStats.ecoOrdersThisMonth.toLocaleString()}</p>
                <p className="text-sm text-green-100">Eco Orders This Month</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Package className="h-8 w-8" />
                </div>
                <p className="text-2xl font-bold">{communityStats.packagesReturnedCommunity.toLocaleString()}</p>
                <p className="text-sm text-green-100">Packages Returned</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
