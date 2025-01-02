import React from 'react';
import { Star, Mail, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

const ServiceCard = ({ name, rating, specialization, price }) => (
  <div className="min-w-[280px] bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
        {name[0]}
      </div>
      <div>
        <h3 className="font-semibold text-gray-800 mt-12">{name}</h3>
        <p className="text-sm text-gray-500">{specialization}</p>
      </div>
    </div>
    
    <div className="flex items-center mb-3">
      <div className="flex items-center">
        <span className="text-lg font-bold text-gray-800 mr-2">{rating}</span>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`${
                i < Math.floor(rating)
                  ? 'text-yellow-400 fill-yellow-400'
                  : 'text-gray-300 fill-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      <span className="text-sm text-gray-500 ml-2">(120+ reviews)</span>
    </div>

    <div className="text-sm text-gray-600 mb-4">
      Starting from <span className="font-semibold text-gray-800">{price}</span>
    </div>
    
    <div className="flex gap-2">
      <button className="flex-1 flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-600 py-2 rounded-lg transition-colors duration-300">
        <Mail size={16} />
        <span className="text-sm font-medium">Message</span>
      </button>
      <button className="flex-1 flex items-center justify-center gap-2 bg-green-50 hover:bg-green-100 text-green-600 py-2 rounded-lg transition-colors duration-300">
        <Phone size={16} />
        <span className="text-sm font-medium">Call</span>
      </button>
    </div>
  </div>
);

const ScrollButton = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 z-10"
    style={{ [direction]: '-12px' }}
  >
    {direction === 'left' ? (
      <ChevronLeft className="w-5 h-5 text-gray-600" />
    ) : (
      <ChevronRight className="w-5 h-5 text-gray-600" />
    )}
  </button>
);

const ServiceCategory = ({ title, description, services }) => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="relative">
        <ScrollButton direction="left" onClick={() => scroll('left')} />
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth hide-scrollbar"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <ScrollButton direction="right" onClick={() => scroll('right')} />
      </div>
    </div>
  );
};

const ServiceCategories = () => {
  const categories = [
    {
      title: "Photography",
      description: "Professional photographers for your special moments",
      services: [
        { name: "James Wilson", rating: 4.5, specialization: "Wedding Photography", price: "$500/day" },
        { name: "Sunny Lee", rating: 4.8, specialization: "Portrait & Events", price: "$400/day" },
        { name: "Maria Garcia", rating: 5.0, specialization: "Fashion Photography", price: "$600/day" },
        { name: "Alex Chen", rating: 4.7, specialization: "Commercial Shoots", price: "$450/day" },
        { name: "Sarah Brown", rating: 4.9, specialization: "Family Portraits", price: "$350/day" },
        { name: "David Kim", rating: 4.6, specialization: "Product Photography", price: "$550/day" }
      ]
    },
    {
      title: "Event Decor",
      description: "Transform your venue with stunning decorations",
      services: [
        { name: "Val Design", rating: 4.9, specialization: "Luxury Weddings", price: "$2000/event" },
        { name: "Stevon Art", rating: 4.7, specialization: "Corporate Events", price: "$1500/event" },
        { name: "Luna Decor", rating: 4.8, specialization: "Theme Parties", price: "$1200/event" },
        { name: "Bloom & Wild", rating: 4.6, specialization: "Floral Design", price: "$800/event" },
        { name: "Elite Events", rating: 5.0, specialization: "Full Venue Styling", price: "$2500/event" },
        { name: "Creative Space", rating: 4.7, specialization: "Modern Minimalist", price: "$1800/event" }
      ]
    },
    {
      title: "MCs & Hosts",
      description: "Experienced hosts to keep your event engaging",
      services: [
        { name: "Kennedy Walsh", rating: 4.8, specialization: "Wedding MC", price: "$300/event" },
        { name: "James Carter", rating: 4.7, specialization: "Corporate Host", price: "$400/event" },
        { name: "Michelle Lee", rating: 4.9, specialization: "Bilingual MC", price: "$450/event" },
        { name: "Robert King", rating: 4.6, specialization: "Entertainment Host", price: "$350/event" },
        { name: "Lisa Chen", rating: 4.8, specialization: "Ceremony Master", price: "$500/event" },
        { name: "Tom Harris", rating: 4.7, specialization: "Awards Night Host", price: "$600/event" }
      ]
    },
    {
      title: "Catering Services",
      description: "Delicious food and professional service",
      services: [
        { name: "Gourmet Delights", rating: 4.9, specialization: "Fine Dining", price: "$50/person" },
        { name: "Fresh Feast", rating: 4.7, specialization: "Buffet Service", price: "$35/person" },
        { name: "Sweet Sensations", rating: 4.8, specialization: "Dessert Bar", price: "$25/person" },
        { name: "World Cuisine", rating: 4.6, specialization: "International Food", price: "$45/person" },
        { name: "Green Table", rating: 4.8, specialization: "Vegan Options", price: "$40/person" },
        { name: "Party Bites", rating: 4.7, specialization: "Cocktail Service", price: "$30/person" }
      ]
    }
  ];

  return (
    <div className="p-8 max-w-[1400px] mx-auto">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      {categories.map((category, index) => (
        <ServiceCategory key={index} {...category} />
      ))}
    </div>
  );
};

export default ServiceCategories;