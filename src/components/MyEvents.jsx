import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { eventData } from "../data/event";

const MyEvents = ({ activeFilter, activeSlide, activeEventId }) => {
  const formattedEvents = eventData.map(event => ({
    id: event.id,
    title: event.title,
    date: event.date,
    host: event.organizer.name,
    likes: event.likes,
    description: event.description,
    image: event.coverImage,
    type: event.type,
    profile: event.organizer.src
  }));

  const [events] = useState(formattedEvents);

  const scrollContainerRef = useRef(null);
  const filteredEvents = events.filter(event => event.type === activeFilter);

  // Function to truncate title to maximum 12 characters
  const truncateTitle = (title) => {
    if (title.length <= 12) {
      return title;
    }
    return title.substring(0, 12) + '...';
  };

  // Auto-scroll to active event
  useEffect(() => {
    if (scrollContainerRef.current && activeEventId) {
      const activeElement = scrollContainerRef.current.querySelector(`[data-event-id="${activeEventId}"]`);
      if (activeElement) {
        const scrollLeft = activeElement.offsetLeft - (scrollContainerRef.current.offsetWidth - activeElement.offsetWidth) / 2;
        scrollContainerRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [activeEventId]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full px-4 md:px-6 overflow-x-hidden">
      <h1 className="font-bold text-[#272222] text-base md:text-lg mb-4 md:mb-1">
        My Events
      </h1>
      <div className="relative w-full">
        {/* Scroll buttons */}
        <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-700 bg-opacity-50 rounded-full p-2 hover:bg-opacity-75">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-700 bg-opacity-50 rounded-full p-2 hover:bg-opacity-75">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Events container */}
        <div ref={scrollContainerRef} className="flex overflow-x-auto gap-4 md:gap-6 pb-4 scrollbar-hide">
          {filteredEvents.map((event) => (
            <Link to={`/my-event/${event.id}`} key={event.id}>
              <div
                data-event-id={event.id}
                className={`flex-none w-full sm:w-[calc(50%-16px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-16px)] min-w-[280px] max-w-[320px] h-[222px] bg-[#272222] cursor-pointer rounded-lg md:rounded-[30px] py-4 px-5 transition-all duration-300 ${
                  event.id === activeEventId ? 'ring-4 ring-gray-900' : ''
                }`}
              >
                {/* Event content */}
                <div className="flex flex-col gap-6 md:gap-8">
                  <div className="flex justify-start items-center gap-4">
                    <div className="flex-shrink-0">
                      <img src={event.profile} alt="profile" className="object-cover rounded-full w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
                    </div>
                    <div>
                      <p className="text-white text-sm md:text-base lg:text-lg font-semibold">{event.host}</p>
                    </div>
                  </div>
                  <h3 className="text-center text-white font-[Pacifico] text-xl md:text-2xl lg:text-3xl" title={event.title}>
                    {truncateTitle(event.title)}
                  </h3>
                  <div className="flex justify-between items-center">
                    <p className="text-white text-sm md:text-base">{event.attendees}</p>
                    <div className="border border-gray-100 px-3 md:px-4 py-1.5 rounded-[30px] bg-gray-300 bg-opacity-50 cursor-pointer hover:bg-opacity-60 transition-all duration-200">
                      <p className="text-white text-sm md:text-base whitespace-nowrap">Request</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyEvents;