import React, { useState, useEffect } from "react";
import Map from "./Map";
import LiveEvent from "./LiveEvent"
import MyEvents from "./MyEvents"
import { Link, useNavigate } from 'react-router-dom';
import { eventData } from  "../data/event";
import { ChevronLeft, ChevronRight, Calendar, Users, Activity, Coffee } from "lucide-react";
import RequestInviteModal from './RequestInviteModal'

const MainContent = ({ activeFilter }) => {
    // Format the event data to match the expected structure
    const formattedEvents = eventData.map(event => ({
        id: event.id,
        title: event.title,
        date: event.date,
        time: event.time, // added time
        profile_id: event.organizer.id,
        host: event.organizer.name,
        likes: event.likes,
        description: event.description,
        image: event.coverImage,
        type: event.type,
        profile: event.organizer.src,
        location: event.location,
        categories: event.categories,
        capacity: event.capacity,
        organizer: event.organizer
    }));

    const [events] = useState(formattedEvents);
    const [activeSlide, setActiveSlide] = useState(0);
    const [selectedEventIndex, setSelectedEventIndex] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState("menu");
    const [showRequestInvite, setShowRequestInvite] = useState(false)
    
    const navigate = useNavigate();
    const filteredEvents = events.filter(event => event.type === activeFilter);

    // Automatic sliding effect
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isMenuOpen) {
                setActiveSlide((prevSlide) => (prevSlide === filteredEvents.length - 1 ? 0 : prevSlide + 1));
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [filteredEvents.length, isMenuOpen]);


    const handleLocationClick = () => {
        navigate('/event-route');
    };

    const toggleMenu = (index) => {
        // If the clicked event is different from the currently selected one,
        // update the active slide, selected event, and force the menu open.
        if (selectedEventIndex !== index) {
          setActiveSlide(index);
          setSelectedEventIndex(index);
          setActiveCategory("menu");
          setIsMenuOpen(true);
        } else {
          // If the same event is clicked again, simply toggle the open state.
          setIsMenuOpen((prev) => !prev);
        }
    };
      
    const renderCategoryContent = () => {
        if (!filteredEvents[selectedEventIndex]?.categories) return null;
        
        const category = filteredEvents[selectedEventIndex].categories[activeCategory];
        
        if (!category) return null;

        if (activeCategory === "personalities") {
            return (
                <div className="space-y-8 animate-fadeIn">
                    {Object.entries(category.sections).map(([sectionName, people]) => (
                        <div key={sectionName} className="space-y-4">
                            <h3 className="text-sm font-semibold text-gray-400 capitalize pl-2">
                                {sectionName}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {people.map((person, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center p-2 sm:p-3 bg-gray-800/50 rounded-xl backdrop-blur-sm 
                                                hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        <img
                                            src={person.image}
                                            alt={person.name}
                                            className="w-8 h-8 sm:w-12 sm:h-12 rounded-full ring-2 ring-purple-500 p-0.5"
                                        />
                                        <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-gray-200 text-center">
                                            {person.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            );
        }

        return (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 animate-fadeIn">
                {category.items?.map((item, index) => (
                    <div
                        key={index}
                        className="group relative p-3 sm:p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm 
                                hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent 
                                        rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                        <span className="relative text-xs sm:text-sm font-medium text-gray-200">
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
        );
    };
      
    return (
        <div className="w-full px-4 mt-20 md:mt-2 md:px-6 md:py-0.5">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-12 md:mt-16">
                {/* Map Section */}
                <div className="hidden md:flex w-full lg:w-auto">
                    <Map />
                </div>

                {/* Slider Section */}
                <div className="flex-1 relative rounded-lg md:rounded-[30px]">
                    {filteredEvents.length > 0 ? (
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-1000 ease-in-out"
                                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                            >
                                {filteredEvents.map((event, index) => (
                                    <div key={event.id} className="flex-shrink-0 w-full">
                                        <div className="relative cursor-pointer" onClick={() => toggleMenu(index)}>
                                            <img
                                                src={event.image}
                                                alt={event.title}
                                                className="w-full h-[300px] md:h-[312px] object-cover rounded-lg md:rounded-[30px] cursor-pointer"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl lg:rounded-[30px] p-4 md:px-8 lg:px-12 lg:py-6 text-white">
                                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                                                    <div className="flex justify-start items-center gap-2">
                                                        <div className="border-2 lg:border-[4px] border-[#000000] rounded-full p-[2px] cursor-pointer">
                                                            <Link to={`/profile/${event.profile_id}`}>
                                                                <img src={event.profile} alt="profile" className="rounded-full w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 object-cover" />
                                                            </Link>
                                                        </div>
                                                        <div>
                                                            <span className="text-sm sm:text-base text-white font-medium">
                                                                {event.host}
                                                            </span>
                                                            <div className="flex items-center gap-2 mt-1">
                                                                <div className="w-2 h-2 rounded-full bg-green-400" />
                                                                <span className="text-xs text-gray-200">Host</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6 px-3 sm:px-4 py-1 sm:py-2 bg-black/30 rounded-full backdrop-blur-sm">
                                                        <div className="flex flex-col items-center gap-0.5">
                                                            <div className="flex items-center gap-1 sm:gap-2">
                                                                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-purple-300" />
                                                                <span className="text-white text-xs sm:text-sm font-medium">
                                                                    {event.date}
                                                                </span>
                                                            </div>
                                                            <div className="text-purple-200 text-[10px] sm:text-xs font-semibold">
                                                                {event.time}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-8 md:mt-12">
                                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-7">{event.title}</h3>
                                                    <h5 className="text-sm lg:text-base font-semibold flex-shrink-0">{event.description}</h5>
                                                    <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                                                        <div className="w-full flex gap-8 justify-end items-center mt-4">
                                                            <span className="text-sm">{filteredEvents.length > 0 && `${activeSlide + 1} / ${filteredEvents.length}`}</span>
                                                            <div className="flex items-center gap-2">
                                                                <svg onClick={handleLocationClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 lg:size-6 cursor-pointer">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                                                </svg>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 lg:size-6">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                                </svg>
                                                                <p className="text-sm lg:text-base">{event.likes}</p>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 lg:size-6">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                                                </svg>
                                                                <div className="border-2 border-gray-100 px-3 py-1 rounded-full bg-gray-300 bg-opacity-50">
                                                                    <button className="text-sm" onClick={() => setShowRequestInvite(true)}>Request</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <p className="text-center text-gray-500">No events available.</p>
                    )}

                    {/* Event Details Overlay - Made scrollable */}
                    {isMenuOpen && selectedEventIndex !== null && filteredEvents[selectedEventIndex] && (
                        <div className="absolute inset-0 bg-[#272222] rounded-lg md:rounded-[30px] z-20 overflow-hidden max-h-full flex flex-col">
                            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-800">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (!filteredEvents[selectedEventIndex]?.categories) return;
                                        const categories = Object.keys(filteredEvents[selectedEventIndex].categories);
                                        const currentIndex = categories.indexOf(activeCategory);
                                        const prevIndex = currentIndex - 1 < 0 ? categories.length - 1 : currentIndex - 1;
                                        setActiveCategory(categories[prevIndex]);
                                    }}
                                    className="p-2 hover:bg-gray-800/70 rounded-xl transition-colors duration-300"
                                >
                                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                                </button>

                                <div className="flex items-center gap-2">
                                    {filteredEvents[selectedEventIndex]?.categories?.[activeCategory]?.icon}
                                    <span className="text-sm sm:text-base text-white font-medium">
                                        {filteredEvents[selectedEventIndex]?.categories?.[activeCategory]?.title || "Details"}
                                    </span>
                                </div>

                                <div className="flex items-center">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (!filteredEvents[selectedEventIndex]?.categories) return;
                                            const categories = Object.keys(filteredEvents[selectedEventIndex].categories);
                                            const currentIndex = categories.indexOf(activeCategory);
                                            const nextIndex = (currentIndex + 1) % categories.length;
                                            setActiveCategory(categories[nextIndex]);
                                        }}
                                        className="p-2 hover:bg-gray-800/70 rounded-xl transition-colors duration-300 mr-1"
                                    >
                                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                                    </button>
                                    
                                    {/* Close button repositioned */}
                                    <button 
                                        onClick={() => setIsMenuOpen(false)}
                                        className="p-2 bg-gray-800/50 rounded-full hover:bg-gray-700/70 transition-colors ml-2"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            
                            {/* Scrollable content area */}
                            <div className="p-4 sm:p-6 overflow-y-auto flex-1">
                                {renderCategoryContent()}
                            </div>

                            {/* Fixed bottom part */}
                            <div className="p-4 sm:p-6 border-t border-gray-800">
                                {/* Request Button */}
                                
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-400" />
                                        <span className="text-xs sm:text-sm text-gray-400">
                                            Currently Available
                                        </span>
                                    </div>
                                    <span className="text-xs sm:text-sm font-medium text-purple-400">
                                        {filteredEvents[selectedEventIndex]?.capacity || "Limited Spots"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* Request Modal */}
                {showRequestInvite && <RequestInviteModal onClose={() => setShowRequestInvite(false)} />}
            </div>
            <div className="flex flex-col-reverse lg:flex-row gap-4 md:gap-6 pb-3 mt-6">
                <LiveEvent />
                <MyEvents activeFilter={activeFilter} activeSlide={activeSlide} activeEventId={filteredEvents[activeSlide]?.id} />
            </div>
            
        </div>
    );
};

export default MainContent;
