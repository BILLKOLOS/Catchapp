import { useState, useRef, useEffect } from 'react';
import { useTheme } from "../context/theme-provider";
import NotificationMenu from './Notification';
import MessagingInterface from './MessagingInterface';

const TopNav = ({ activeFilter, setActiveFilter }) => {
    const { theme } = useTheme();
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
    // New state for mobile search
    const [isMobileSearchActive, setIsMobileSearchActive] = useState(false);

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

    const toggleMobileSearch = () => {
        setIsMobileSearchActive(!isMobileSearchActive);
    };

    const toggleSearchEvent = () => {
        setIsSearchEventOpen(!isSearchEventOpen);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
        // Close mobile search after submission
        if (isMobileSearchActive) {
            setIsMobileSearchActive(false);
        }
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
                    : theme === 'dark' 
                        ? "bg-gray-700 text-white hover:bg-gray-600" 
                        : "bg-gray-100 text-[#272222] hover:bg-gray-200"
                }
                focus:outline-none
                focus:ring-2
                focus:ring-offset-1
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
        <div className={`fixed top-0 z-50 flex flex-col ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} w-full shadow-md`}>
            {/* Top Section */}
            <div className={`flex justify-between items-center px-4 md:px-8 py-1.5 transition-all duration-300 border-b ${theme === 'dark' ? 'border-gray-800' : 'border-gray-100'} ${isMobileSearchActive ? 'h-16' : 'h-16'}`}>
                {/* Logo and Search Section */}
                <div className={`flex-1 flex justify-start items-center gap-2 md:gap-6 ${isMobileSearchActive ? 'hidden' : 'flex'}`}>
                    {/* Logo Section */}
                    <div className='flex justify-start items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-10 h-10 md:w-10 md:h-10">
                            <rect 
                            x="20" 
                            y="20" 
                            width="160" 
                            height="160" 
                            rx="50" 
                            fill={theme === 'dark' ? '#4B5563' : '#D9D9D9'}
                            stroke={theme === 'dark' ? '#E5E7EB' : '#262727'}
                            strokeWidth="12"
                            className="animate-pulse"
                            />
                            <path
                            d="M 100 60
                                A 40 40 0 1 0 140 100
                                L 120 100
                                A 20 20 0 1 1 100 80
                                Z"
                            fill={theme === 'dark' ? '#E5E7EB' : '#262727'}       
                            className="animate-bounce-subtle"
                            />
                            <circle 
                            cx="75" 
                            cy="100" 
                            r="6" 
                            fill={theme === 'dark' ? '#E5E7EB' : '#262727'}           
                            className="animate-ping-subtle"
                            />
                        </svg>
                        <h1 className={`hidden md:block font-[Pacifico] text-xl md:text-2xl ${theme === 'dark' ? 'text-white' : 'text-[#000000]'}`}>Catchapp</h1>
                    </div>
                    
                    {/* Desktop Search Icon Only */}
                    <button 
                        onClick={toggleSearch} 
                        className={`hidden md:flex items-center justify-center w-10 h-10 ${theme === 'dark' ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-50 text-[#000000] hover:bg-gray-100'} rounded-full transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-200`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
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

                    {/* Mobile Search Icon */}
                    <button 
                        onClick={toggleMobileSearch} 
                        className={`md:hidden flex items-center justify-center w-10 h-10 ${theme === 'dark' ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-50 text-[#000000] hover:bg-gray-100'} rounded-full transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-200`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
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

                    {/* Chevron Down Button */}
                    <button 
                        onClick={toggleSearchEvent}
                        className={`flex items-center justify-center w-10 h-10 ${theme === 'dark' ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-50 text-[#000000] hover:bg-gray-100'} p-2 rounded-full transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-200`}
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={2} 
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

                {/* Mobile Search Input - Full Width when active */}
                {isMobileSearchActive && (
                    <form onSubmit={handleSearchSubmit} className="relative w-full flex items-center px-1">
                        <button 
                            type="button"
                            onClick={toggleMobileSearch}
                            className="p-2 mr-2 text-gray-500"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                        </button>
                        <div className="relative flex-1">
                            <input 
                                type="text" 
                                placeholder="Search Catchapp" 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                autoFocus
                                className={`
                                    w-full 
                                    pl-10 
                                    pr-8 
                                    py-3
                                    text-sm 
                                    border
                                    ${theme === 'dark' 
                                        ? 'text-white bg-gray-800 border-gray-700 focus:border-gray-500' 
                                        : 'text-[#272222] bg-gray-50 border-gray-200 focus:border-black'
                                    }
                                    focus:outline-none 
                                    focus:ring-1
                                    focus:ring-black 
                                    rounded-full
                                    shadow-sm
                                `}
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="
                                    absolute 
                                    left-3 
                                    top-1/2 
                                    -translate-y-1/2 
                                    w-5 
                                    h-5 
                                    text-gray-500
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
                                        text-gray-500
                                        hover:text-black 
                                        transition-colors
                                    "
                                >
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth={2} 
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
                        </div>
                        <button 
                            type="submit" 
                            className={`ml-2 ${theme === 'dark' ? 'bg-gray-700' : 'bg-black'} text-white px-4 py-2 rounded-full text-sm font-medium`}
                        >
                            Search
                        </button>
                    </form>
                )}

                {/* Centered Filters - Now in its own container */}
                <div className={`flex-1 flex justify-center items-center ${isMobileSearchActive ? 'hidden' : 'flex'}`}>
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
                </div>

                {/* Icons Section */}
                <div className={`flex-1 flex justify-end gap-3 items-center ${isMobileSearchActive ? 'hidden' : 'flex'}`}>
                    <div className="relative">
                        <button 
                            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                            className={`flex items-center justify-center w-10 h-10 ${theme === 'dark' ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-50 text-[#000000] hover:bg-gray-100'} rounded-full cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-gray-200`}
                        >
                            {notificationCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
                                    {notificationCount > 9 ? '9+' : notificationCount}
                                </span>
                            )}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>
                        </button>
                        
                        {/* Notification Menu*/}
                        {isNotificationOpen && (
                            <NotificationMenu 
                                isOpen={isNotificationOpen}
                                onClose={() => setIsNotificationOpen(false)}
                                updateNotificationCount={updateNotificationCount}
                            />
                        )}
                    </div>
                    <div className='relative'>
                        <button
                            onClick={() => setIsMessagingOpen(!isMessagingOpen)}
                            className={`flex items-center justify-center w-10 h-10 ${theme === 'dark' ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-50 text-[#000000] hover:bg-gray-100'} rounded-full cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-gray-200`}
                        >
                            {MessageCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
                                    {MessageCount > 9 ? '9+' : MessageCount}
                                </span>
                            )}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 0-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </button>
                        {/* Messaging Interface Component */}
                        {isMessagingOpen && (
                            <MessagingInterface
                                isOpen={isMessagingOpen}
                                onClose={() => setIsMessagingOpen(false)}
                            />
                        )}
                    </div>

                    {/* Mobile menu toggle */}
                    <button 
                        className={`md:hidden flex items-center justify-center w-10 h-10 ${theme === 'dark' ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-50 text-[#272222] hover:bg-gray-100'} rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-gray-200`}
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

            {/* Search Event Popup */}
            {isSearchEventOpen && (
                <div className={`absolute top-16 left-4 md:left-16 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-2xl shadow-lg z-50 w-64 md:w-80 p-5 border`}>
                    <div className="flex items-center mb-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
                            />
                        </svg>
                        <span className={`text-lg font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Search event in</span>
                    </div>
                    
                    <div className="mb-5">
                        <div className="flex items-center mb-2">
                            <div className={`mr-2 p-2 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} rounded-full`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </div>
                            <span className={`font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>City</span>
                            <div className="ml-auto">
                                <div className="bg-[#272222] text-white py-2 px-4 rounded-full text-sm">
                                    {selectedCity}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-6">
                        <div className="flex items-center mb-2">
                            <div className={`mr-2 p-2 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} rounded-full`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </div>
                            <span className={`font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>Town</span>
                            <div className="ml-auto">
                                <button className="bg-[#272222] text-white py-2 px-4 rounded-full text-sm hover:bg-black transition-colors" onClick={handleEventSearch}>
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex justify-center">
                        <div className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'} rounded-full p-2`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-5 h-5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
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
                    ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}
                    rounded-full
                    shadow-lg
                    border
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
                        className={`
                            w-full 
                            pl-12 
                            pr-12
                            py-3
                            text-sm
                            ${theme === 'dark' ? 'text-white bg-gray-800' : 'text-[#272222] bg-white'}
                            border-none
                            focus:outline-none 
                            focus:ring-0
                        `}
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="
                            absolute 
                            left-4
                            top-1/2 
                            -translate-y-1/2 
                            w-5 
                            h-5 
                            text-gray-500
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
                                right-4
                                top-1/2 
                                -translate-y-1/2 
                                text-gray-500
                                hover:text-black 
                                transition-colors
                            "
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={2} 
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
                    ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}
                    z-40 
                    transform 
                    transition-transform 
                    duration-300 
                    ease-in-out 
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                {/* Mobile Menu Header */}
                <div className={`flex items-center justify-between p-4 border-b ${theme === 'dark' ? 'border-gray-800' : 'border-gray-100'}`}>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-10 h-10">
                            <rect 
                                x="20" 
                                y="20" 
                                width="160" 
                                height="160" 
                                rx="50" 
                                fill={theme === 'dark' ? '#4B5563' : '#D9D9D9'}
                                stroke={theme === 'dark' ? '#E5E7EB' : '#262727'}
                                strokeWidth="12"
                            />
                            <path
                                d="M 100 60
                                    A 40 40 0 1 0 140 100
                                    L 120 100
                                    A 20 20 0 1 1 100 80
                                    Z"
                                fill={theme === 'dark' ? '#E5E7EB' : '#262727'}
                            />
                            <circle 
                                cx="75" 
                                cy="100" 
                                r="6" 
                                fill={theme === 'dark' ? '#E5E7EB' : '#262727'}
                            />
                        </svg>
                        <h1 className={`font-[Pacifico] text-xl ${theme === 'dark' ? 'text-white' : 'text-[#000000]'} ml-2`}>Catchapp</h1>
                    </div>
                    
                    {/* Close Button */}
                    <button 
                        className={`flex items-center justify-center w-10 h-10 rounded-full ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-50 text-[#272222]'}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                {/* Menu Content */}
                <nav 
                    className="flex flex-col px-6 py-6 space-y-6"
                    role="navigation" 
                    aria-label="Mobile time filters"
                >
                    <h2 className={`text-lg font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>Time Filters</h2>
                    <div className="flex flex-col gap-4">
                        {filters.map((filter) => (
                            <FilterButton key={filter} filter={filter} isMobile={true} />
                        ))}
                    </div>
                    
                    {/* Additional Mobile Menu Items */}
                    <div className={`pt-6 border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-100'}`}>
                        <h2 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#272222]'} mb-4`}>Quick Access</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <button className={`flex items-center justify-center p-4 ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} rounded-xl transition-colors`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'text-purple-400' : 'text-[#E6C2BC]'}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                <span className={theme === 'dark' ? 'text-white' : 'text-[#272222]'}>Nearby</span>
                            </button>
                            <button className={`flex items-center justify-center p-4 ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} rounded-xl transition-colors`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 mr-2 ${theme === 'dark' ? 'text-purple-400' : 'text-[#E6C2BC]'}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                </svg>
                                <span className={theme === 'dark' ? 'text-white' : 'text-[#272222]'}>Today's Events</span>
                            </button>
                            <button className={`flex items-center justify-center p-4 ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} rounded-xl transition-colors`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 mr-2 ${theme === 'dark' ? 'text-purple-400' : 'text-[#E6C2BC]'}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <span className={theme === 'dark' ? 'text-white' : 'text-[#272222]'}>Profile</span>
                            </button>
                            <button className={`flex items-center justify-center p-4 ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} rounded-xl transition-colors`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 mr-2 ${theme === 'dark' ? 'text-purple-400' : 'text-[#E6C2BC]'}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                </svg>
                                <span className={theme === 'dark' ? 'text-white' : 'text-[#272222]'}>Settings</span>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
};

export default TopNav;
