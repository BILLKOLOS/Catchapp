import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const LiveEvent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);

    const events = [
        { 
            name: "Susan", 
            image: "https://images.pexels.com/photos/29846889/pexels-photo-29846889/free-photo-of-portrait-of-woman-by-lake-in-kaduna-nigeria.jpeg?auto=compress&cs=tinysrgb&w=600" 
        },
        { 
            name: "Betty", 
            image: "https://images.pexels.com/photos/29783131/pexels-photo-29783131/free-photo-of-silhouette-of-man-in-profile-wearing-hat-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600" 
        },
        { 
            name: "Michael", 
            image: "https://images.pexels.com/photos/29734086/pexels-photo-29734086/free-photo-of-woman-using-laptop-while-sitting-at-the-table.jpeg?auto=compress&cs=tinysrgb&w=600" 
        },
        { 
            name: "Emma", 
            image: "https://images.pexels.com/photos/29838611/pexels-photo-29838611/free-photo-of-woman-in-a-green-shirt-is-sitting-at-a-table.jpeg?auto=compress&cs=tinysrgb&w=600" 
        }
    ];

    const handleScroll = (direction) => {
        if (containerRef.current) {
            const container = containerRef.current;
            const scrollAmount = container.clientWidth; // Scroll by full container width
            
            if (direction === 'next') {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                setCurrentIndex(prevIndex => 
                    prevIndex < events.length - 1 ? prevIndex + 1 : prevIndex
                );
            } else {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                setCurrentIndex(prevIndex => 
                    prevIndex > 0 ? prevIndex - 1 : 0
                );
            }
        }
    };

    return (
        <div className="relative w-full md:h-[333px] md:w-[515px] bg-[#D9D9D9] rounded-lg md:rounded-[30px] mb-24 py-3 px-4">
            <div className="px-4 md:px-24">
                <h4 className="text-center font-semibold bg-[#272222] text-white p-2 rounded-[30px] cursor-pointer text-sm">
                    Happening Now
                </h4>
            </div>

            {/* Navigation Arrows */}
            <button 
                onClick={() => handleScroll('prev')} 
                className={`absolute left-2 top-1/2 transform -translate-y-1/2 
                    bg-white/50 rounded-full p-1 z-10 
                    ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/75'}`}
                disabled={currentIndex === 0}
            >
                <ChevronLeft className="text-[#272222]" />
            </button>

            <button 
                onClick={() => handleScroll('next')} 
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 
                    bg-white/50 rounded-full p-1 z-10 
                    ${currentIndex === events.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/75'}`}
                disabled={currentIndex === events.length - 1}
            >
                <ChevronRight className="text-[#272222]" />
            </button>

            {/* Scrollable Container */}
            <div 
                ref={containerRef} 
                className="mt-4 md:mt-8 flex overflow-x-auto scroll-smooth no-scrollbar"
                style={{ scrollSnapType: 'x mandatory' }}
            >
                <div className="flex gap-4 md:gap-6">
                    {events.map((person, index) => (
                        <Link 
                            key={index} 
                            to="/happening-now" 
                            className="flex-shrink-0 w-full max-w-[300px]"
                            style={{ scrollSnapAlign: 'center' }}
                        >
                            <div className="flex justify-between items-center w-full">
                                <div className="flex justify-start items-center gap-2 md:gap-4">
                                    <div className="border-2 md:border-[4px] border-[#000000] rounded-full p-[1px] cursor-pointer">
                                        <img 
                                            src={person.image} 
                                            alt={`${person.name} profile`} 
                                            className="object-cover rounded-full w-10 h-10 md:w-16 md:h-16" 
                                        /> 
                                    </div>
                                    <p className="text-sm md:text-md font-bold text-[#272222]">{person.name}</p>
                                </div>
                                <div className="px-2 md:px-4">
                                    <p className="border-[1px] md:border-[2px] text-[#272222] border-[#000000] rounded-full p-[2px] cursor-pointer text-center w-[80px] md:w-[134px] text-xs md:text-sm hover:bg-[#272222] hover:text-white">
                                        live
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-4 space-x-2">
                {events.map((_, index) => (
                    <span 
                        key={index} 
                        className={`h-2 w-2 rounded-full 
                            ${currentIndex === index ? 'bg-[#272222]' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </div>
    )
};

export default LiveEvent;