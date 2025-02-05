import { useState, useEffect } from "react";
import Map from "./Map";
import LiveEvent from "./LiveEvent"
import MyEvents from "./MyEvents"
import { Link } from 'react-router-dom';

const MainContent = ({ activeFilter }) => {
    const [events] = useState([
        {
            id: 1, title: "White Party",
            date: "12th Nov", host: "Susan",
            likes: 54,
            description: "welcome to the white party as we cut through th ages of entertainment",
            image: "https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=600",
            type: "Today", profile: "https://images.pexels.com/photos/29783131/pexels-photo-29783131/free-photo-of-silhouette-of-man-in-profile-wearing-hat-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 2, title: "Graduation",
            date: "1st Dec", host: "James",
            likes: 32,
            description: "welcome to the Graduation party as we cut through th ages of entertainment",
            image: "https://images.pexels.com/photos/7944240/pexels-photo-7944240.jpeg?auto=compress&cs=tinysrgb&w=600",
            type: "Tomorrow", profile: "https://images.pexels.com/photos/29846889/pexels-photo-29846889/free-photo-of-portrait-of-woman-by-lake-in-kaduna-nigeria.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 3, title: "Wedding Anniversary",
            date: "5th Jan", host: "Andrew",
            likes: 32,
            description: "welcome to the wedding anniversary ceremony as we cut through th ages of entertainment",
            image: "https://images.pexels.com/photos/29816651/pexels-photo-29816651/free-photo-of-elegant-engagement-ring-in-velvet-box.jpeg?auto=compress&cs=tinysrgb&w=600",
            type: "This Year", profile: "https://images.pexels.com/photos/29846889/pexels-photo-29846889/free-photo-of-portrait-of-woman-by-lake-in-kaduna-nigeria.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 4, title: "Home Coming Ceremony",
            date: "12th Nov", host: "Ochieng",
            likes: 100,
            description: "welcome to the Home coming ceremony as we cut through th ages of entertainment",
            image: "https://images.pexels.com/photos/5604922/pexels-photo-5604922.jpeg?auto=compress&cs=tinysrgb&w=600",
            type: "Today", profile: "https://images.pexels.com/photos/29846889/pexels-photo-29846889/free-photo-of-portrait-of-woman-by-lake-in-kaduna-nigeria.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 5, title: "Sports Day",
            date: "12th Feb", host: "Michael",
            likes: 100,
            description: "welcome to the Sports Day as we cut through th ages of entertainment",
            image: "https://images.pexels.com/photos/29783074/pexels-photo-29783074/free-photo-of-men-practicing-soccer-on-outdoor-field.jpeg?auto=compress&cs=tinysrgb&w=600",
            type: "Next Month", profile: "https://images.pexels.com/photos/29846889/pexels-photo-29846889/free-photo-of-portrait-of-woman-by-lake-in-kaduna-nigeria.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
    ]);

    const filteredEvents = events.filter(event => event.type === activeFilter);
    const [slide, setSlide] = useState(0);

    // Automatic sliding effect
    useEffect(() => {
        const interval = setInterval(() => {
            setSlide((prevSlide) => (prevSlide === filteredEvents.length - 1 ? 0 : prevSlide + 1));
        }, 5000); // Adjust the interval (5000ms = 5 seconds)

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [filteredEvents.length]);

    const prevSlide = () => setSlide(slide === 0 ? filteredEvents.length - 1 : slide - 1);
    const nextSlide = () => setSlide(slide === filteredEvents.length - 1 ? 0 : slide + 1);

    return (
        <div className="w-full px-4 mt-16 md:px-6 lg:px-1">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 mt-6 lg:mt-12">
                {/* Map Section */}
                <div className="hidden md:flex w-full lg:w-auto">
                    <Map />
                </div>

                {/* Slider Section */}
                <div className="flex-1 mt-9 md:mt-2 relative rounded-lg lg:rounded-[30px]">
                    {filteredEvents.length > 0 ? (
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-1000 ease-in-out"
                                style={{ transform: `translateX(-${slide * 100}%)` }}
                            >
                                {filteredEvents.map((event) => (
                                    <div key={event.id} className="flex-shrink-0 w-full">
                                        <div className="relative">
                                            <img
                                                src={event.image}
                                                alt={event.title}
                                                className="w-full h-[300px] md:h-[300px] lg:h-[348px] object-cover rounded-lg lg:rounded-[30px]"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg lg:rounded-[30px] p-4 md:px-8 lg:px-12 lg:py-6 text-white">
                                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                                                    <div className="flex justify-start items-center gap-2">
                                                        <div className="border-2 lg:border-[4px] border-[#000000] rounded-full p-[2px] cursor-pointer">
                                                            <Link to="/profile">
                                                                <img src={event.profile} alt="profile" className="rounded-full w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 object-cover" />
                                                            </Link>
                                                        </div>
                                                        <p className="text-base lg:text-lg">{event.host}</p>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase">{event.date}</h3>
                                                    </div>
                                                </div>
                                                <div className="mt-8 lg:mt-24">
                                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 lg:mb-7">{event.title}</h3>
                                                    <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                                                        <h5 className="text-sm lg:text-base font-bold flex-shrink-0">{event.description}</h5>
                                                        <div className="w-full flex flex-wrap gap-4 justify-between items-center">
                                                            <span className="text-sm">{filteredEvents.length > 0 && `${slide + 1} / ${filteredEvents.length}`}</span>
                                                            <div className="flex items-center gap-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 lg:size-6">
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
                                                                    <p className="text-sm">Request</p>
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

                    {/* Navigation Arrows */}
                    <div className="flex justify-end items-center gap-2 mt-2">
                        <button
                            onClick={prevSlide}
                            className="p-1 rounded-full border-[#000000] border-2 text-[#000000] hover:bg-gray-700 hover:text-white transition-all"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 font-bold">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-1 rounded-full border-[#000000] border-2 text-[#000000] hover:bg-gray-700 hover:text-white transition-all"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 font-bold">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-12 mt-4">
                <LiveEvent />
                <MyEvents activeFilter={activeFilter}/>
            </div>
        </div>
    );
};

export default MainContent;