import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Mail, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import serviceData from '../data/service';

const ServiceCard = ({ id, name, rating, specialization, price, profileData }) => (
  <Link to={`/explore/gives/service/${id}`}>
    <div className="min-w-[280px] bg-[#272222] rounded-[30px] cursor-pointer p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="flex items-center gap-3 mb-3">
        <div className=" flex items-center justify-center text-[#000000] font-semibold text-lg">
          <img src={profileData.profile} alt="profile" className="rounded-full w-12 h-12 object-cover" />
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
  const formattedServiceData = serviceData.map(service => ({
    id: service.id,
    title: service.title,
    description: service.description,
    services: service.services,
  }))

  const [categories] = useState(formattedServiceData)

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