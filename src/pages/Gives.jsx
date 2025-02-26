import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Mail, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

const ServiceCard = ({ id, name, rating, specialization, price }) => (
  <Link to={`/explore/gives/service/${id}`}>
    <div className="min-w-[280px] bg-[#272222] rounded-[30px] cursor-pointer p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 bg-white  rounded-full flex items-center justify-center text-[#000000] font-semibold text-lg">
          {name[0]}
        </div>
        <div>
          <h3 className="font-semibold text-white">{name}</h3>
          <p className="text-sm text-white">{specialization}</p>
        </div>
      </div>
      
      <div className="flex items-center mb-3">
        <div className="flex items-center">
          <span className="text-lg font-bold text-gray-400 mr-2">{rating}</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${
                  i < Math.floor(rating)
                    ? 'text-gray-300'
                    : 'text-gray-300 fill-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
        <span className="text-sm text-gray-500 ml-2">(120+ reviews)</span>
      </div>

      <div className="text-sm text-white mb-4">
        Starting from <span className="font-semibold text-gray-500">{price}</span>
      </div>
      
      <div className="flex gap-2">
        <button className="flex-1 flex items-center justify-start gap-2 ">
          <Mail size={16} className=" text-white duration-300"/>
          
        </button>
        <button className="flex-1 flex items-center justify-end">
          <Phone size={16} className=" text-white duration-300"/>
        </button>
      </div>
    </div>
  </Link>
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
    <div className="mb-12 mt-12 max-w-[900px] mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="relative">
        <ScrollButton direction="left" onClick={() => scroll('left')} />
        <div className="overflow-hidden max-w-[900px] mx-auto">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth hide-scrollbar"
          >
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
        <ScrollButton direction="right" onClick={() => scroll('right')} />
      </div>
    </div>
  );
};

const ServiceCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Photography",
      description: "Professional photographers for your special moments",
      services: [
        { id: 1, name: "James Wilson", rating: 4.5, specialization: "Wedding Photography", price: "$500/day" },
        { id: 2, name: "Sunny Lee", rating: 4.8, specialization: "Portrait & Events", price: "$400/day" },
        { id: 3, name: "Maria Garcia", rating: 5.0, specialization: "Fashion Photography", price: "$600/day" },
        { id: 4, name: "Alex Chen", rating: 4.7, specialization: "Commercial Shoots", price: "$450/day" },
        { id: 5, name: "Sarah Brown", rating: 4.9, specialization: "Family Portraits", price: "$350/day" },
        { id: 6, name: "David Kim", rating: 4.6, specialization: "Product Photography", price: "$550/day" }
      ],
    },
    {
      id: 2,
      title: "Event Decor",
      description: "Transform your venue with stunning decorations",
      services: [
        { name: "Val Design", rating: 4.9, specialization: "Luxury Weddings", price: "$2000/event" },
        { name: "Stevon Art", rating: 4.7, specialization: "Corporate Events", price: "$1500/event" },
        { name: "Luna Decor", rating: 4.8, specialization: "Theme Parties", price: "$1200/event" },
        { name: "Bloom & Wild", rating: 4.6, specialization: "Floral Design", price: "$800/event" },
        { name: "Elite Events", rating: 5.0, specialization: "Full Venue Styling", price: "$2500/event" },
        { name: "Creative Space", rating: 4.7, specialization: "Modern Minimalist", price: "$1800/event" }
      ],
      
    },
    {
      id: 3,
      title: "MCs & Hosts",
      description: "Experienced hosts to keep your event engaging",
      services: [
        { name: "Kennedy Walsh", rating: 4.8, specialization: "Wedding MC", price: "$300/event" },
        { name: "James Carter", rating: 4.7, specialization: "Corporate Host", price: "$400/event" },
        { name: "Michelle Lee", rating: 4.9, specialization: "Bilingual MC", price: "$450/event" },
        { name: "Robert King", rating: 4.6, specialization: "Entertainment Host", price: "$350/event" },
        { name: "Lisa Chen", rating: 4.8, specialization: "Ceremony Master", price: "$500/event" },
        { name: "Tom Harris", rating: 4.7, specialization: "Awards Night Host", price: "$600/event" }
      ],
    },
    {
      id: 4,
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