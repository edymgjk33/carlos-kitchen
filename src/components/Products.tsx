import { useState } from 'react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Ovens', 'Grills', 'Refrigeration', 'Prep Equipment'];

  const products = [
    {
      id: 1,
      name: 'Commercial Convection Oven',
      category: 'Ovens',
      price: '£2,499',
      description: 'Professional-grade convection oven for consistent cooking results',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Stainless Steel Grill',
      category: 'Grills',
      price: '£1,899',
      description: 'Heavy-duty grill perfect for high-volume restaurants',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'Walk-in Freezer Unit',
      category: 'Refrigeration',
      price: '£4,999',
      description: 'Energy-efficient commercial freezer with digital controls',
      image: '/placeholder.svg'
    },
    {
      id: 4,
      name: 'Professional Food Processor',
      category: 'Prep Equipment',
      price: '£899',
      description: 'High-capacity food processor for efficient meal preparation',
      image: '/placeholder.svg'
    },
    {
      id: 5,
      name: 'Commercial Range Hood',
      category: 'Ovens',
      price: '£1,299',
      description: 'Powerful ventilation system for commercial kitchens',
      image: '/placeholder.svg'
    },
    {
      id: 6,
      name: 'Blast Chiller',
      category: 'Refrigeration',
      price: '£3,499',
      description: 'Rapid cooling system for food safety and quality',
      image: '/placeholder.svg'
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="products" className="section-premium bg-premium-gray-light">
      <div className="container-premium">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-premium-black">Our Products</h2>
          <p className="text-lg text-premium-gray-dark max-w-2xl mx-auto">
            Discover our comprehensive range of professional catering equipment, 
            designed to meet the demands of modern commercial kitchens.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-premium-black text-premium-white'
                  : 'bg-premium-white text-premium-black border border-premium-black hover:bg-premium-black hover:text-premium-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="card-premium group">
              <div className="aspect-square bg-premium-gray rounded-sm mb-6 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-premium-black">{product.name}</h3>
              <p className="text-premium-gray-dark mb-4 font-light">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-premium-black">{product.price}</span>
                <button className="px-4 py-2 border border-premium-black text-premium-black hover:bg-premium-black hover:text-premium-white transition-all duration-300">
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;