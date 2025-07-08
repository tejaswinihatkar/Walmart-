
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const carouselItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=1200&h=400&fit=crop",
    title: "Return Packaging, Get Rewarded",
    description: "Earn eco points for returning reusable packaging",
    btnText: "Learn More",
    color: "from-green-700 to-green-500"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=400&fit=crop",
    title: "Big Savings on Eco Products",
    description: "Up to 20% off on eco-friendly alternatives",
    btnText: "Shop Now",
    color: "from-blue-700 to-blue-500"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1605600659853-11d96d3dbd51?w=1200&h=400&fit=crop",
    title: "Plastic-Free Packaging",
    description: "Join our mission for a sustainable future",
    btnText: "Explore",
    color: "from-purple-700 to-purple-500"
  }
];

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? carouselItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === carouselItems.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  
  // Auto slide
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-lg">
      {/* Slides */}
      <div 
        className="h-full w-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${carouselItems.length * 100}%`, display: 'flex' }}
      >
        {carouselItems.map((item) => (
          <div 
            key={item.id} 
            className="w-full h-full relative flex-shrink-0"
            style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className={cn("absolute inset-0 bg-gradient-to-r opacity-80", item.color)}></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{item.title}</h2>
              <p className="text-lg md:text-xl mb-6 max-w-lg text-center">{item.description}</p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition">
                {item.btnText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 bg-white/30 rounded-full p-2 backdrop-blur-sm cursor-pointer" onClick={prevSlide}>
        <ChevronLeft className="h-6 w-6 text-white" />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 bg-white/30 rounded-full p-2 backdrop-blur-sm cursor-pointer" onClick={nextSlide}>
        <ChevronRight className="h-6 w-6 text-white" />
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
        {carouselItems.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
              currentIndex === slideIndex ? "bg-white w-6" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
