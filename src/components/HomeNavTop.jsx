import { useState, useRef } from 'react';

const TopNav = ({ activeFilter, setActiveFilter }) => {
    const filters = ["Today", "Tomorrow", "Next Month", "This Year"];
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
            <div className="flex justify-between items-center px-4 md:px-8 py-2">
                <div className="flex justify-start items-center gap-4 md:gap-8">
                    {/* Logo Section */}
                    <div className='flex justify-start items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-14 h-14">
                        <rect 
                            x="20" 
                            y="20" 
                            width="160" 
                            height="160" 
                            rx="50" 
                            fill="#262727"
                            stroke="white"
                            stroke-width="12"
                            className="animate-pulse"
                        />
                        <path
                            d="M 100 60
                            A 40 40 0 1 0 140 100
                            L 120 100
                            A 20 20 0 1 1 100 80
                            Z"
                            fill="white"
                            className="animate-bounce-subtle"
                        />
                        <circle 
                            cx="75" 
                            cy="100" 
                            r="6" 
                            fill="white"
                            className="animate-ping-subtle"
                        />
                        </svg>
                        <h1 className="hidden md:block font-[Pacifico] text-xl md:text-2xl text-[#000000]">Catchapp</h1>
                    </div>
                    
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
                        <div className="w-full mr-3 md:hidden">
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

                {/* Notification & Email Icons - Always visible */}
                <div className="flex gap-2 items-center">
                    <div className="bg-[#D9D9D9] text-[#000000] p-2 rounded-full cursor-pointer mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 md:size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                    </div>
                    <div className="bg-[#D9D9D9] text-[#000000] p-2 rounded-full cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 md:size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 0-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                    </div>

                    {/* Mobile menu toggle */}
                    <button 
                        className="md:hidden p-2 text-[#272222]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
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
                    {/* Filters Section */}
                    <div className="flex flex-col gap-4">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                className={`
                                    w-full 
                                    px-4 
                                    py-3 
                                    rounded-[30px] 
                                    cursor-pointer 
                                    transition-all 
                                    font-semibold 
                                    text-base 
                                    relative 
                                    ${
                                        activeFilter === filter
                                            ? "bg-[#272222] text-white"
                                            : "bg-[#D9D9D9] text-[#272222]"
                                    }
                                `}
                                onClick={() => {
                                    setActiveFilter(filter);
                                    setIsMenuOpen(false);
                                }}
                            >
                                {filter}
                                {activeFilter === filter && (
                                    <span className="absolute bottom-[-8px] left-0 right-0 h-[4px] mt-2 w-full bg-[#B94343] rounded-lg"></span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNav;