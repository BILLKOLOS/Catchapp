import { useState, useRef } from 'react';
import { NavLink } from "react-router-dom";

const AnalyticsNav = ( { id } ) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const searchInputRef = useRef(null);


    const isPathActive = (path) => {
        return location.pathname === path;
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Add search logic here
        console.log('Searching for:', searchQuery);
    };

    return (
        <div className="fixed top-0 z-50 flex flex-col bg-white w-full mb-20">
            {/* Top Section */}
            <div className="flex justify-between items-center px-4 md:px-8 py-2">
                {/* Logo and Search */}
                <div className="flex justify-start items-center gap-4 md:gap-12">
                    <div className='flex justify-start items-center'>
                            <NavLink to="/" className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-12 h-12">
                                    <rect 
                                        x="20" 
                                        y="20" 
                                        width="160" 
                                        height="160" 
                                        rx="50" 
                                        fill="#D9D9D9"
                                        stroke="#262727"
                                        stroke-width="12"
                                        className="animate-pulse"
                                    />
                                    <path
                                        d="M 100 60
                                            A 40 40 0 1 0 140 100
                                            L 120 100
                                            A 20 20 0 1 1 100 80
                                            Z"
                                        fill="#262727"       
                                        className="animate-bounce-subtle"
                                    />
                                    <circle 
                                        cx="75" 
                                        cy="100" 
                                        r="6" 
                                        fill="#262727"           
                                        className="animate-ping-subtle"
                                    />
                                </svg>
                                <h1 className="hidden md:block font-[Pacifico] text-xl md:text-2xl text-[#000000] cursor-pointer">Catchapp</h1>
                            </NavLink>
                    </div>
                     {/* Search Container */}
                    <div className="relative flex items-center ml-auto" ref={searchInputRef}>
                        {/* Desktop Search Icon */}
                        <button 
                            onClick={toggleSearch} 
                            className="hidden md:block text-[#000000] cursor-pointer focus:outline-none mr-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
                                />
                            </svg>
                        </button>

                        {/* Desktop Search Input */}
                        <div 
                            className={`
                                hidden 
                                md:block 
                                absolute 
                                top-full 
                                right-0
                                mt-2 
                                bg-white 
                                rounded-xl 
                                shadow-lg 
                                overflow-hidden 
                                transition-all 
                                duration-300 
                                ease-in-out 
                                ${isSearchOpen 
                                    ? 'opacity-100 visible w-[300px]' 
                                    : 'opacity-0 invisible w-0'}
                                z-50
                            `}
                        >
                            <form onSubmit={handleSearchSubmit} className="relative w-full">
                                <input 
                                    type="text" 
                                    placeholder="Search Catchapp" 
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="
                                        w-full 
                                        pl-16 
                                        pr-2 
                                        py-3 
                                        text-sm 
                                        border 
                                        border-gray-200 
                                        focus:outline-none 
                                        focus:ring-2 
                                        focus:ring-[#272222] 
                                        rounded-xl
                                    "
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="
                                        absolute 
                                        left-3 
                                        top-1/2 
                                        -translate-y-1/2 
                                        w-5 
                                        h-5 
                                        text-gray-400
                                    "
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
                                    />
                                </svg>
                                
                                {searchQuery && (
                                    <button 
                                        type="button"
                                        onClick={() => setSearchQuery('')}
                                        className="
                                            absolute 
                                            right-3 
                                            top-1/2 
                                            -translate-y-1/2 
                                            text-gray-400 
                                            hover:text-black 
                                            transition-colors
                                        "
                                    >
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            fill="none" 
                                            viewBox="0 0 24 24" 
                                            strokeWidth={1.5} 
                                            stroke="currentColor" 
                                            className="w-5 h-5"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                d="M6 18 18 6M6 6l12 12" 
                                            />
                                        </svg>
                                    </button>
                                )}
                            </form>
                        </div>

                        {/* Mobile Search Input */}
                        <div className="w-full md:hidden">
                            <form onSubmit={handleSearchSubmit} className="relative w-full">
                                <input 
                                    type="text" 
                                    placeholder="Search Catchapp" 
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="
                                        w-full 
                                        pl-10 
                                        pr-8 
                                        py-2
                                        text-sm 
                                        border 
                                        border-gray-200 
                                        focus:outline-none 
                                        focus:ring-2 
                                        focus:ring-black 
                                        rounded-xl
                                    "
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="
                                        absolute 
                                        left-3 
                                        top-1/2 
                                        -translate-y-1/2 
                                        w-5 
                                        h-5 
                                        text-gray-400
                                    "
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
                                    />
                                </svg>
                                
                                {searchQuery && (
                                    <button 
                                        type="button"
                                        onClick={() => setSearchQuery('')}
                                        className="
                                            absolute 
                                            right-3 
                                            top-1/2 
                                            -translate-y-1/2 
                                            text-gray-400 
                                            hover:text-black 
                                            transition-colors
                                        "
                                    >
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            fill="none" 
                                            viewBox="0 0 24 24" 
                                            strokeWidth={1.5} 
                                            stroke="currentColor" 
                                            className="w-5 h-5"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                d="M6 18 18 6M6 6l12 12" 
                                            />
                                        </svg>
                                    </button>
                                )}
                            </form>
                        </div>
                    </div>
                </div>

                 {/* Desktop Navigation */}
               <div className="hidden md:flex justify-center items-center py-4">
                <div className="flex items-center gap-6">
                    <NavLink
                        to={`/my-event/details`}
                        className={
                            isPathActive(`/my-event/details`)
                                ? "bg-[#272222] text-white rounded-[30px] py-2.5 px-8 font-semibold transition-all duration-300 shadow-lg hover:bg-[#3a3535]"
                                : "bg-[#D9D9D9] text-[#272222] rounded-[30px] py-2.5 px-8 font-semibold transition-all duration-300 hover:bg-[#c0c0c0]"
                        }
                    >
                        <h5>My Event</h5>
                    </NavLink>
                    <NavLink
                        to={`/my-event/analytics`}
                        className={
                            isPathActive(`/my-event/analytics`)
                                ? "bg-[#272222] text-white rounded-[30px] py-2.5 px-8 font-semibold transition-all duration-300 shadow-lg hover:bg-[#3a3535] flex items-center gap-2"
                                : "bg-[#D9D9D9] text-[#272222] rounded-[30px] py-2.5 px-8 font-semibold transition-all duration-300 hover:bg-[#c0c0c0] flex items-center gap-2"
                        }
                    >
                        <h5>Event Analytics</h5>
                    </NavLink>
                    <NavLink
                        to={`/my-event/past-events`}
                        className={
                            isPathActive(`/my-event/${id}/edit`)
                                ? "bg-[#272222] text-white rounded-[30px] py-2.5 px-8 font-semibold transition-all duration-300 shadow-lg hover:bg-[#3a3535] flex items-center gap-2"
                                : "bg-[#D9D9D9] text-[#272222] rounded-[30px] py-2.5 px-8 font-semibold transition-all duration-300 hover:bg-[#c0c0c0] flex items-center gap-2"
                        }
                    >
                        <h5>Past Events</h5>
                    </NavLink>
                </div>
                </div>

                {/* Profile and Mobile Menu Toggle */}
                <div className="flex items-center gap-4">
                    {/* Profile Section - Always Visible */}
                    <div className="hidden md:flex items-center gap-4">
                        <img
                            src="https://images.pexels.com/photos/29976870/pexels-photo-29976870/free-photo-of-contemplative-young-adult-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="profile"
                            className="object-cover rounded-full w-10 md:w-14 h-10 md:h-14"
                        />
                        <p className="text-[#000000] font-bold hidden md:block">Williams</p>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button 
                        className="md:hidden p-2 text-[#272222]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div 
                className={`
                    md:hidden 
                    fixed 
                    inset-0 
                    bg-white
                    z-40 
                    transform 
                    transition-transform 
                    duration-300 
                    ease-in-out 
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                {/* Close Button */}
                <button 
                    className="absolute top-4 right-4 p-2 z-50 text-[#272222] font-bold"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="flex flex-col h-full pt-20 px-6 space-y-6">
                    {/* Profile Section in Mobile Menu */}
                    <div className="flex items-center gap-4 mb-6">
                        <img
                            src="https://images.pexels.com/photos/29976870/pexels-photo-29976870/free-photo-of-contemplative-young-adult-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="profile"
                            className="object-cover rounded-full w-14 h-14"
                        />
                        <p className="text-[#000000] font-bold">Williams</p>
                    </div>

                    <NavLink
                        to={`/my-event/${id}`}
                        className={({ isActive }) =>
                            `w-full flex items-center gap-4 py-3 px-6 rounded-[30px] cursor-pointer font-semibold transition-colors duration-300 ${
                                isActive ? "bg-[#000000] text-white" : "bg-[#D9D9D9] text-[#000000]"
                            }`
                        }
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <h5>My Events</h5>
                    </NavLink>
                    <NavLink
                        to={`/my-event/${id}/analytics`}
                        className={({ isActive }) =>
                            `w-full flex items-center gap-4 py-3 px-6 rounded-[30px] cursor-pointer font-semibold transition-colors duration-300 ${
                                isActive ? "bg-[#000000] text-white" : "bg-[#D9D9D9] text-[#000000]"
                            }`
                        }
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                        </svg>
                        <h5>Event Analytics</h5>
                    </NavLink>
                    <NavLink
                        to={`/my-event/${id}/edit`}
                        className={({ isActive }) =>
                            `w-full flex items-center gap-4 py-3 px-6 rounded-[30px] cursor-pointer font-semibold transition-colors duration-300 ${
                                isActive ? "bg-[#000000] text-white" : "bg-[#D9D9D9] text-[#000000]"
                            }`
                        }
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                        <h5>Edit Event</h5>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsNav;