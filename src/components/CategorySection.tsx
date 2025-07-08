
import { Smartphone, Tv, Shirt, Apple, Home, Gift, Laptop, Headphones } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Mobiles",
    icon: Smartphone,
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: 2,
    name: "Electronics",
    icon: Tv,
    color: "bg-purple-100 text-purple-600"
  },
  {
    id: 3,
    name: "Fashion",
    icon: Shirt,
    color: "bg-pink-100 text-pink-600"
  },
  {
    id: 4,
    name: "Groceries",
    icon: Apple,
    color: "bg-green-100 text-green-600"
  },
  {
    id: 5,
    name: "Home",
    icon: Home,
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    id: 6,
    name: "Appliances",
    icon: Gift,
    color: "bg-red-100 text-red-600"
  },
  {
    id: 7,
    name: "Laptops",
    icon: Laptop,
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    id: 8,
    name: "Audio",
    icon: Headphones,
    color: "bg-orange-100 text-orange-600"
  }
];

export function CategorySection() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">Shop By Category</h2>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col items-center justify-center cursor-pointer group">
            <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
              <category.icon className="h-8 w-8" />
            </div>
            <span className="text-sm font-medium text-center">{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
