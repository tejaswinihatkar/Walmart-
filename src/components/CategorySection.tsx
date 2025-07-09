
import { Smartphone, Tv, Shirt, Apple, Home, Gift, Laptop, Headphones } from "lucide-react";

const categories = [
  {
    id: "Mobiles",
    name: "Mobiles",
    icon: Smartphone,
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: "Electronics",
    name: "Electronics",
    icon: Tv,
    color: "bg-purple-100 text-purple-600"
  },
  {
    id: "Fashion",
    name: "Fashion",
    icon: Shirt,
    color: "bg-pink-100 text-pink-600"
  },
  {
    id: "Groceries",
    name: "Groceries",
    icon: Apple,
    color: "bg-green-100 text-green-600"
  },
  {
    id: "Home",
    name: "Home",
    icon: Home,
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    id: "Appliances",
    name: "Appliances",
    icon: Gift,
    color: "bg-red-100 text-red-600"
  },
  {
    id: "Laptops",
    name: "Laptops",
    icon: Laptop,
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    id: "Audio",
    name: "Audio",
    icon: Headphones,
    color: "bg-orange-100 text-orange-600"
  }
];

interface CategorySectionProps {
  onCategorySelect: (categoryId: string) => void;
  selectedCategory: string;
}

export function CategorySection({ onCategorySelect, selectedCategory }: CategorySectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">Shop By Category</h2>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className={`flex flex-col items-center justify-center cursor-pointer group ${
              selectedCategory === category.id ? 'scale-110' : ''
            }`}
            onClick={() => onCategorySelect(category.id)}
          >
            <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform ${
              selectedCategory === category.id ? 'ring-2 ring-blue-500 ring-offset-2' : ''
            }`}>
              <category.icon className="h-8 w-8" />
            </div>
            <span className={`text-sm font-medium text-center ${
              selectedCategory === category.id ? 'text-blue-600 font-bold' : ''
            }`}>
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
