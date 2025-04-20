import { useState, useRef } from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const searchInputRef = useRef(null);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Add search logic here
        console.log('Searching for:', searchQuery);
    };

    return (
        <div className="fixed top-0 z-50 flex flex-col bg-white w-full shadow-sm">
            {/* Top Section */}
            <div className="flex justify-between items-center px-3 md:px-6 py-1 md:py-1.5 border-b border-gray-100">
                {/* Logo and Search */}
                <div className="flex justify-start items-center gap-3 md:gap-8">
                    <div className='flex justify-start items-center'>
                        <NavLink to="/" className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-10 h-10">
                                <rect 
                                    x="20" 
                                    y="20" 
                                    width="160" 
                                    height="160" 
                                    rx="50" 
                                    fill="#F2F2F2"
                                    stroke="#262727"
                                    strokeWidth="12"
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
                            <h1 className="hidden md:block font-[Pacifico] text-lg md:text-xl text-[#000000] cursor-pointer ml-1">Catchapp</h1>
                        </NavLink>
                    </div>
                     {/* Search Container */}
                    <div className="relative flex items-center ml-auto" ref={searchInputRef}>
                        {/* Desktop Search Icon */}
                        <button 
                            onClick={toggleSearch} 
                            className="hidden md:block text-gray-600 hover:text-black cursor-pointer focus:outline-none mr-2 transition-colors"
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
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
                                />
                            </svg>
                        </button>

                        {/* Desktop Search Input Container */}
                        <div 
                            className={`
                                hidden 
                                md:block 
                                absolute 
                                top-full 
                                left-12
                                mt-1 
                                bg-white 
                                rounded-lg 
                                shadow-md
                                focus:outline-none 
                                overflow-hidden 
                                transition-all 
                                duration-200 
                                ease-in-out 
                                ${isSearchOpen ? 'opacity-100 visible w-[300px]' : 'opacity-0 invisible w-0'}
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
                                        pl-12 
                                        pr-2 
                                        py-2 
                                        text-sm 
                                        border 
                                        border-gray-100
                                        focus:outline-none 
                                        focus:ring-1 
                                        focus:ring-black 
                                        rounded-lg
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
                                        w-4 
                                        h-4 
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
                                            className="w-4 h-4"
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
                                        pl-8 
                                        pr-8 
                                        py-1.5
                                        text-sm 
                                        border 
                                        border-gray-100 
                                        focus:outline-none 
                                        focus:ring-1 
                                        focus:ring-black 
                                        rounded-lg
                                        bg-gray-50
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
                                        left-2 
                                        top-1/2 
                                        -translate-y-1/2 
                                        w-4 
                                        h-4 
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
                                            right-2 
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
                                            className="w-4 h-4"
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
                <div className="hidden md:flex justify-center items-center">
                    <div className="flex items-center gap-4">
                        <NavLink
                            to="/explore/trending"
                            className={({ isActive }) =>
                                `rounded-full py-1.5 px-4 font-medium text-sm cursor-pointer transition-colors duration-200 ${
                                    isActive ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`
                            }
                        >
                            <h5>Trending</h5>
                        </NavLink>
                        <NavLink
                            to="/explore/gives"
                            className={({ isActive }) =>
                                `flex gap-2 items-center py-1.5 px-4 rounded-full cursor-pointer font-medium text-sm transition-colors duration-200 ${
                                    isActive ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`
                            }
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                                />
                            </svg>
                            <h5>Gives</h5>
                        </NavLink>
                        <NavLink
                            to="/explore/feeds"
                            className={({ isActive }) =>
                                `flex gap-2 items-center py-1.5 px-4 rounded-full cursor-pointer font-medium text-sm transition-colors duration-200 ${
                                    isActive ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`
                            }
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                                />
                            </svg>
                            <h5>Feeds</h5>
                        </NavLink>
                    </div>
                </div>

                {/* Profile and Mobile Menu Toggle */}
                <div className="flex items-center gap-3">
                    {/* Profile Section - Always Visible */}
                    <div className="hidden md:flex items-center gap-3">
                        <div className="relative">
                            <img
                                src="https://images.pexels.com/photos/29976870/pexels-photo-29976870/free-photo-of-contemplative-young-adult-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="profile"
                                className="object-cover rounded-full w-8 h-8 ring-2 ring-gray-100"
                            />
                            <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-green-400 ring-1 ring-white"></span>
                        </div>
                        <p className="text-gray-800 font-medium text-sm hidden md:block">Williams</p>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button 
                        className="md:hidden p-1.5 text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
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
                    duration-200 
                    ease-in-out 
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                    pt-16
                `}
            >
                {/* Close Button */}
                <button 
                    className="absolute top-3 right-3 p-1.5 z-50 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="flex flex-col h-full pt-4 px-6 space-y-5">
                    {/* Profile Section in Mobile Menu */}
                    <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                        <div className="relative">
                            <img
                                src="https://images.pexels.com/photos/29976870/pexels-photo-29976870/free-photo-of-contemplative-young-adult-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="profile"
                                className="object-cover rounded-full w-10 h-10 ring-2 ring-gray-100"
                            />
                            <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-1 ring-white"></span>
                        </div>
                        <div>
                            <p className="text-gray-800 font-medium">Williams</p>
                            <p className="text-gray-500 text-xs">Online</p>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <NavLink
                        to="/explore/trending"
                        className={({ isActive }) =>
                            `w-full flex items-center gap-3 py-2 px-4 rounded-full cursor-pointer font-medium text-sm transition-colors duration-200 ${
                                isActive ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`
                        }
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                        </svg>
                        <h5>Trending</h5>
                    </NavLink>
                    <NavLink
                        to="/explore/gives"
                        className={({ isActive }) =>
                            `w-full flex items-center gap-3 py-2 px-4 rounded-full cursor-pointer font-medium text-sm transition-colors duration-200 ${
                                isActive ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`
                        }
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                            />
                        </svg>
                        <h5>Gives</h5>
                    </NavLink>
                    <NavLink
                        to="/explore/feeds"
                        className={({ isActive }) =>
                            `w-full flex items-center gap-3 py-2 px-4 rounded-full cursor-pointer font-medium text-sm transition-colors duration-200 ${
                                isActive ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`
                        }
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                            />
                        </svg>
                        <h5>Feeds</h5>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;