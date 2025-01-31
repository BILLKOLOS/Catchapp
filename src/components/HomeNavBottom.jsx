import { useState, useEffect } from "react";
import profile from "../assets/profile.jpg";
import { Link } from 'react-router-dom';
import EventModal from './EventModal';

const BottomNav = () => {
    const [isAtBottom, setIsAtBottom] = useState(false);
    const [showEventModal, setShowEventModal] = useState(false);
    const [showCategories, setShowCategories] = useState(false);

    const categories = [
        { id: 1, name: 'Genaeral', active: true },
        { id: 2, name: 'Technology' },
        { id: 3, name: 'Tourism' },
        { id: 4, name: 'music' },
        { id: 5, name: 'Lifestyle' },
        { id: 6, name: 'Sports' },
        { id: 7, name: 'Health' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrolledToBottom =
                window.innerHeight + window.scrollY >= document.body.offsetHeight;
            setIsAtBottom(scrolledToBottom);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleCategories = () => {
        setShowCategories(!showCategories);
    };

    return (
        <>
            {showCategories && (
                <div className="fixed w-[220px] bottom-14 left-[40%] transform -translate-x-1/2 bg-gray-200 text-[#272222] rounded-lg p-4 shadow-lg z-50">
                    <h3 className="text-sm font-bold mb-2">category</h3>
                    <div className="flex flex-col gap-2">
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                className={`px-4 py-2 rounded-lg cursor-pointer flex items-center gap-2 ${
                                    category.active ? 'bg-gray-300' : 'hover:bg-gray-300'
                                }`}
                            >
                                <span>{category.name}</span>
                                {category.active && (
                                    <span className="w-2 h-2 bg-black rounded-full"></span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            
            <div
                className={`fixed bottom-1 right-0 w-full transition-transform duration-500 mt-12 ${
                    isAtBottom ? "translate-y-0" : "translate-y-full"
                } lg:translate-y-0`}
            >
                <div className="w-full flex justify-center px-7 gap-12 shadow-lg mt-12">
                    <div className="flex justify-center items-center gap-24 bg-[#D9D9D9] p-1 px-5 rounded-[30px] text-[#000000]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 cursor-pointer"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                            />
                        </svg>
                        <div 
                            className="flex gap-4 border-2 border-black p-2 px-3 rounded-full cursor-pointer"
                            onClick={toggleCategories}
                        >
                            <h4>General</h4>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className={`w-6 h-6 cursor-pointer transition-transform duration-300 ${
                                    showCategories ? 'rotate-180' : ''
                                }`}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d={showCategories 
                                        ? "m19.5 8.25-7.5 7.5-7.5-7.5"  // Pointing down
                                        : "m4.5 15.75 7.5-7.5 7.5 7.5"  // Pointing up
                                    }
                                />
                            </svg>
                        </div>
                        <Link to="/explore/trending">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 cursor-pointer"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
                                />
                            </svg>
                        </Link>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 cursor-pointer"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                        </svg>
                        <div className="border-[4px] border-[#000000] rounded-full p-[2px] cursor-pointer">
                            <img
                                className="object-cover rounded-full w-10 h-10"
                                src={profile} 
                                alt="Profile"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div 
                            className="bg-[#272222] text-white p-3 rounded-full cursor-pointer"
                            onClick={() => setShowEventModal(true)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 cursor-pointer"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                        <p className="font-bold">Host</p>
                    </div>
                </div>
            </div>
            {showEventModal && <EventModal onClose={() => setShowEventModal(false)} />}
        </>
    );
};

export default BottomNav;