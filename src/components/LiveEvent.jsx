import { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { useTheme } from "../context/theme-provider";

const LiveEvent = () => {
    const { theme } = useTheme();
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
            const scrollAmount = container.clientHeight;
            
            if (direction === 'next') {
                container.scrollBy({ top: scrollAmount, behavior: 'smooth' });
                setCurrentIndex(prevIndex => 
                    prevIndex < events.length - 1 ? prevIndex + 1 : prevIndex
                );
            } else {
                container.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
                setCurrentIndex(prevIndex => 
                    prevIndex > 0 ? prevIndex - 1 : 0
                );
            }
        }
    };

    return (
        <div className={`relative w-full md:h-[251px] md:w-[564px] ${theme === 'dark' ? 'bg-gray-800' : 'bg-[#D9D9D9]'} rounded-xl md:rounded-[30px] p-3`}>
            {/* Header */}
            <div className="px-4 md:px-24 mb-4">
                <h4 className={`text-center font-semibold ${theme === 'dark' ? 'bg-gray-900' : 'bg-[#272222]'} text-white p-2 rounded-[30px] cursor-pointer text-sm`}>
                    Happening Now
                </h4>
            </div>

            {/* Main Content Container */}
            <div className="h-[calc(100%-4rem)] flex flex-col justify-between">
                {/* Scrollable Content */}
                <div 
                    ref={containerRef}
                    className="flex flex-col overflow-y-auto scroll-smooth scrollbar-hide h-48"
                    style={{ 
                        scrollSnapType: 'y mandatory',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                >
                    <div className="flex flex-col gap-4 px-4">
                        {events.map((person, index) => (
                            <Link 
                                key={index} 
                                to="/happening-now" 
                                className="flex-shrink-0 w-full"
                                style={{ scrollSnapAlign: 'center' }}
                            >
                                <div className="flex justify-between items-center w-full">
                                    <div className="flex justify-start items-center gap-2 md:gap-4">
                                        <div className={`border-2 md:border-[4px] ${theme === 'dark' ? 'border-gray-700' : 'border-[#000000]'} rounded-full p-[1px] cursor-pointer`}>
                                            <img 
                                                src={person.image || "/placeholder.svg"} 
                                                alt={`${person.name} profile`} 
                                                className="object-cover rounded-full w-10 h-10 md:w-16 md:h-16" 
                                            /> 
                                        </div>
                                        <p className={`text-sm md:text-md font-bold ${theme === 'dark' ? 'text-white' : 'text-[#272222]'}`}>{person.name}</p>
                                    </div>
                                    <div className="px-2 md:px-4">
                                        <p className={`border-[1px] md:border-[2px] ${theme === 'dark' ? 'text-white border-gray-600 hover:bg-gray-700' : 'text-[#272222] border-[#000000] hover:bg-[#272222] hover:text-white'} rounded-full p-[2px] cursor-pointer text-center w-[80px] md:w-[134px] text-xs md:text-sm transition-colors`}>
                                            live
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2">
                    {events.map((_, index) => (
                        <span 
                            key={index} 
                            className={`h-2 w-2 rounded-full 
                                ${currentIndex === index 
                                    ? (theme === 'dark' ? 'bg-white' : 'bg-[#272222]') 
                                    : (theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300')}`}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default LiveEvent;
