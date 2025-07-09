# 🛒 Walmart EcoChoice Commerce Hub

Enhanced e-commerce platform with 25+ products and working category filtering, built with modern web technologies.

## ✨ Features

- **🛍️ 25+ Products** across 8 categories (Mobiles, Electronics, Fashion, Groceries, Home, Appliances, Laptops, Audio)
- **🏷️ Category Filtering** with clean button interface
- **💰 Dynamic Pricing** with discounts and original price display
- **⭐ Product Ratings & Reviews** with real-world data
- **🔄 Sorting Options** (Featured, Price, Rating, Popularity)
- **📱 Responsive Design** with grid/list view modes
- **🌱 Eco-Friendly Focus** with sustainable packaging options
- **🎯 Professional UI** similar to Amazon/Flipkart experience

## 🛠️ Technologies Used

- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Build Tool**: Vite
- **Icons**: Lucide React
- **State Management**: React Hooks

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/tejaswinihatkar/Walmart-.git

# Navigate to project directory
cd Walmart-

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 📦 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── ProductCard.tsx # Individual product display
│   ├── Header.tsx      # Navigation header
│   └── ...
├── data/               # Product data and types
│   └── products.ts     # Product catalog with 25+ items
├── pages/              # Main application pages
│   └── Index.tsx       # Homepage with product grid
└── hooks/              # Custom React hooks

```

## 🎨 Key Components

### ProductCard
- Displays product information with brand, pricing, and ratings
- Shows discount badges and eco-friendly indicators
- Includes wishlist and cart functionality
- Responsive design for different screen sizes

### Category Filtering
- Clean button interface for category selection
- Real-time product filtering
- Dynamic product count display
- Works across all 8 product categories

### Sorting & Views
- Multiple sorting options (price, rating, popularity)
- Grid and list view modes
- Professional e-commerce layout

## 📊 Product Categories

1. **📱 Mobiles** - iPhone, Samsung, OnePlus
2. **📺 Electronics** - TVs, Speakers, Cameras
3. **👕 Fashion** - Shoes, Clothing, Accessories
4. **🥖 Groceries** - Organic foods, Fresh produce
5. **🏠 Home** - Furniture, Decor, Utilities
6. **🔌 Appliances** - Kitchen, Laundry, Cleaning
7. **💻 Laptops** - MacBook, Dell, ASUS
8. **🎧 Audio** - Headphones, Speakers, Earbuds

## 🌱 Eco-Friendly Features

- Sustainable packaging options
- Plastic waste reduction tracking
- Eco-points reward system
- Return packaging program
- Environmental impact dashboard

## 📱 Responsive Design

- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interface
- Cross-browser compatibility

## 🚀 Deployment

The project can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Author

**Tejaswini Hatkar**
- GitHub: [@tejaswinihatkar](https://github.com/tejaswinihatkar)

---

⭐ **Star this repository if you found it helpful!**
