import { useState, useRef, useEffect } from 'react';
import NotificationMenu from './Notification';
import MessagingInterface from './MessagingInterface';

const TopNav = ({ activeFilter, setActiveFilter }) => {
    const filters = ["Today", "Tomorrow", "NextMonth", "ThisYear"];
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const searchInputRef = useRef(null);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [notificationCount, setNotificationCount] = useState(0);
    const [isMessagingOpen, setIsMessagingOpen] = useState(false);
    const [MessageCount, setMessageCount] = useState(3);
    // New state for search event popup
    const [isSearchEventOpen, setIsSearchEventOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState("Nairobi,kenya");
    const [selectedTown, setSelectedTown] = useState("");

    // Initialize notification count on first load
    useEffect(() => {
        // This will be replaced by the actual count from NotificationMenu
        // For demo purposes, we start with 3 unread notifications
        setNotificationCount(3);
    }, []);

    const updateNotificationCount = (count) => {
        setNotificationCount(count);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const toggleSearchEvent = () => {
        setIsSearchEventOpen(!isSearchEventOpen);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
    };

    const handleEventSearch = () => {
        console.log('Searching for events in:', selectedCity, selectedTown);
        setIsSearchEventOpen(false);
    };

    const FilterButton = ({ filter, isMobile = false }) => (
        <button
            key={filter}
            aria-label={`Filter by ${filter}`}
            aria-pressed={activeFilter === filter}
            className={`
                group
                relative
                px-4
                py-2
                rounded-full
                font-semibold
                transition-all
                duration-200
                ${isMobile ? 'w-full py-3' : 'w-auto'}
                ${activeFilter === filter
                    ? "bg-[#272222] text-white hover:bg-[#3a3535]"
                    : "bg-[#D9D9D9] text-[#272222] hover:bg-[#c0c0c0]"
                }
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-[#272222]
                disabled:opacity-50
                disabled:cursor-not-allowed
            `}
            onClick={() => {
                setActiveFilter(filter);
                setIsMenuOpen(false);
            }}
        >
            <span className="relative z-10">{filter}</span>
            {activeFilter === filter && (
                <span 
                    className="
                        absolute 
                        bottom-[-8px] 
                        left-0 
                        right-0 
                        h-1 
                        bg-[#B94343] 
                        rounded-lg
                        transition-all
                        duration-200
                    "
                    aria-hidden="true"
                />
            )}
        </button>
    );

    return (
        <div className="fixed top-0 z-50 flex flex-col bg-white w-full">
            {/* Top Section */}
            <div className="flex justify-between items-center px-4 md:px-8 py-1">
                {/* Logo and Search Section - Now with flex-1 to help with centering */}
                <div className="flex-1 flex justify-start items-center gap-2 md:gap-8">
                    {/* Logo Section */}
                    <div className='flex justify-start items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-12 h-12">
                            <rect 
                            x="20" 
                            y="20" 
                            width="160" 
                            height="160" 
                            rx="50" 
                            fill="#D9D9D9"
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
                        <h1 className="hidden md:block font-[Pacifico] text-xl md:text-2xl text-[#000000]">Catchapp</h1>
                    </div>
                    
                    {/* Desktop Search Icon Only */}
                    <button 
                        onClick={toggleSearch} 
                        className="hidden md:block text-[#000000] cursor-pointer focus:outline-none"
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
                    {/* Chevron Down Button - NEW */}
                    <button 
                        onClick={toggleSearchEvent}
                        className="bg-[#D9D9D9] text-[#000000] p-2 rounded-full cursor-pointer mr-2 flex items-center justify-center"
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
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" 
                            />
                        </svg>
                    </button>
                </div>

                {/* Centered Filters - Now in its own container */}
                <div className="flex-1 flex justify-center items-center">
                    <nav 
                        className="hidden md:flex justify-center gap-3" 
                        role="navigation" 
                        aria-label="Time filters"
                    >
                        <div className="flex items-center space-x-3">
                            {filters.map((filter) => (
                                <FilterButton key={filter} filter={filter} />
                            ))}
                        </div>
                    </nav>

                    {/* Mobile Search Input */}
                    <div className="w-full mr-4 md:hidden">
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

                {/* Icons Section - Now with flex-1 to help with centering */}
                <div className="flex-1 flex justify-end gap-2 items-center">
                    <div className="relative">
                        <button 
                            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                            className="bg-[#D9D9D9] text-[#000000] p-2 rounded-full cursor-pointer mr-2"
                        >
                            {notificationCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                    {notificationCount > 9 ? '9+' : notificationCount}
                                </span>
                            )}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 md:size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>
                        </button>
                        
                        <NotificationMenu 
                            isOpen={isNotificationOpen}
                            onClose={() => setIsNotificationOpen(false)}
                            updateNotificationCount={updateNotificationCount}
                        />
                    </div>
                        <div className='relative'>
                            <button
                                onClick={() => setIsMessagingOpen(!isMessagingOpen)}
                                className="bg-[#D9D9D9] text-[#000000] p-2 rounded-full cursor-pointer mr-2"
                            >
                                {MessageCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                        {MessageCount > 9 ? '9+' : MessageCount}
                                    </span>
                                )}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 md:size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 0-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                            </button>
                            <MessagingInterface
                                isOpen={isMessagingOpen}
                                onClose={() => setIsMessagingOpen(false)}
                        />
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

            {/* Search Event Popup - NEW */}
            {isSearchEventOpen && (
                <div className="absolute top-16 left-16 md:right-32 bg-white rounded-2xl shadow-xl z-50 w-64 md:w-80 p-4">
                    <div className="flex items-center mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 mr-2 text-gray-700"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
                            />
                        </svg>
                        <span className="text-lg font-medium text-gray-700">search event in</span>
                    </div>
                    
                    <div className="mb-4">
                        <div className="flex items-center mb-2">
                            <div className="mr-2 p-1 bg-gray-100 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </div>
                            <span className="font-medium text-gray-800">City</span>
                            <div className="ml-auto">
                                <div className="bg-[#272222] text-white py-2 px-4 rounded-full">
                                    {selectedCity}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-6">
                        <div className="flex items-center mb-2">
                            <div className="mr-2 p-1 bg-gray-100 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </div>
                            <span className="font-medium text-gray-800">Town</span>
                            <div className="ml-auto">
                                <button className="bg-[#272222] text-white py-2 px-4 rounded-full" onClick={handleEventSearch}>
                                    search
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex justify-center">
                        <div className="bg-gray-100 rounded-full p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            )}

            {/* Desktop Search Input Container */}
            <div 
                className={`
                    hidden 
                    md:block 
                    absolute 
                    top-full 
                    left-12
                    mt-2 
                    bg-white 
                    rounded-xl 
                    shadow-lg
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-black 
                    overflow-hidden 
                    transition-all 
                    duration-300 
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
                <nav 
                    className="flex flex-col h-full pt-20 px-6 space-y-6"
                    role="navigation" 
                    aria-label="Mobile time filters"
                >
                    <div className="flex flex-col gap-4">
                        {filters.map((filter) => (
                            <FilterButton key={filter} filter={filter} isMobile={true} />
                        ))}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default TopNav;