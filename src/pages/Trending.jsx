import { useState } from "react";
import Navbar from "../components/Navbar.jsx"

const Trending = () => {
    const [events] = useState([
        {
            id: 1, title: "White Party",
            date: "12th Nov", host: "Susan",
            likes: 54,
            description: "welcome to the white party as we cut through th ages of entertainment",
            image: "https://images.pexels.com/photos/28976233/pexels-photo-28976233/free-photo-of-rustic-cheese-board-with-cold-cuts-and-bread.jpeg?auto=compress&cs=tinysrgb&w=600",
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

    const filteredEvents = events.filter(event => event.type);

    return (
        <div>
            {/*<Navbar />*/}
            <div className="flex flex-col items-center justify-center p-4 mt-12">
                <div className="flex flex-col items-center gap-8">
                    {events.map((event) => (
                        <div key={event.id} className="flex flex-col bg-white shadow-lg rounded-[30px] overflow-hidden w-[680px]">
                            {/* Event Image */}
                            <div className="relative">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl p-6 text-white flex flex-col justify-between">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={event.profile}
                                                alt={event.host}
                                                className="w-12 h-12 rounded-full border-2 border-gray-300"
                                            />
                                            <p className="font-medium">{event.host}</p>
                                        </div>
                                        <h3 className="text-xl font-bold uppercase">{event.date}</h3>
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                                        <div className="w-full flex justify-start items-center gap-4">
                                            <h5 className="block font-bold">{event.description}</h5>
                                            <div className="w-full flex justify-between">
                                                {/* Show the total number of events */}
                                                {filteredEvents.length > 0 && `1 / ${filteredEvents.length}`}
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                                </svg>
                                                <div className="flex gap-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                    </svg>
                                                    <p>{event.likes}</p>
                                                </div>
                                                <div className="flex justify-end items-center gap-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                                    </svg>
                                                    <div className="border-[2px] border-gray-100 px-4 p-1 rounded-[30px] bg-gray-300 bg-opacity-50">
                                                        <p>Request</p>
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
        </div>
    );    
};

export default Trending;
