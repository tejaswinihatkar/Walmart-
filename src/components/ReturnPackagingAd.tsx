
import React from "react";
import { QrCode, Package, Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ReturnPackagingAd = () => {
  return (
    <div className="my-6 rounded-lg overflow-hidden shadow-md relative">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 md:p-6 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-4 md:mb-0 md:mr-6">
            <div className="flex items-center mb-2">
              <QrCode className="h-6 w-6 mr-2" />
              <h3 className="text-xl md:text-2xl font-bold">Return Any Packaging, Get Rewards!</h3>
            </div>
            <p className="mb-3 text-white/90">
              Now even non-eco products like electronics and clothing qualify! Return ALL packaging materials - cartons, 
              plastics, manuals - and earn discount coupons on your next purchase.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <div className="flex items-center bg-white/20 p-2 rounded">
                <Package className="h-4 w-4 mr-2" />
                <span className="text-sm">Return Packaging</span>
              </div>
              <div className="flex items-center bg-white/20 p-2 rounded">
                <QrCode className="h-4 w-4 mr-2" />
                <span className="text-sm">Scan QR Code</span>
              </div>
              <div className="flex items-center bg-white/20 p-2 rounded">
                <Gift className="h-4 w-4 mr-2" />
                <span className="text-sm">Get Coupons</span>
              </div>
            </div>
          </div>
          
          <div className="flex-shrink-0 text-center">
            <div className="bg-white text-red-500 p-3 rounded-full inline-block mb-2">
              <Package className="h-10 w-10" />
            </div>
            <Button className="bg-white hover:bg-white/90 text-red-500 font-bold px-6">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Sale badge */}
      <div className="absolute top-0 right-0 bg-yellow-400 text-black font-bold px-3 py-1 rounded-bl-lg">
        NEW
      </div>
    </div>
  );
};
