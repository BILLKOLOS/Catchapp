import { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Users,
  Activity,
  Coffee,
  BarChart2,
  Clock,
  Edit,
} from "lucide-react";
import { eventData } from '../data/event';
import EditEvent from './EditEvent';

const MyOrganizerEvents = ({ organizerId }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("menu");
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);
  const [showEventModal, setShowEventModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const isDetailsView = location.pathname.endsWith('/details') || 
                     (location.pathname.endsWith('my-event') && !location.pathname.includes('/analytics'));


  // Get the base path for my-event
  const basePath = location.pathname.split('/my-event')[0] + '/my-event';

  useEffect(() => {
    if (location.pathname.endsWith('my-event')) {
      navigate('details', { replace: true });
    }
  }, [location, navigate]);

  // Filter events by organizer ID
  const organizerEvents = eventData.filter(event => 
    event.organizer.id === organizerId
  ).map(event => ({
    id: event.id,
    title: event.title,
    date: event.date,
    organizer: event.organizer,
    likes: event.likes,
    description: event.description,
    image: event.coverImage,
    type: event.type,
    profile: event.organizer.src,
    categories: event.categories,
    capacity: event.capacity
  }));

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

if (isLoading) return <div className="text-center mt-20">Loading events...</div>;

  const currentEvent = organizerEvents[selectedEventIndex];

  const initialData = {
    id: currentEvent.id,
    title: currentEvent.title,
    description: currentEvent.description,
    date: currentEvent.date,
    time: "18:00",
    location: "Event Location",
    coverImage: currentEvent.image,
    capacity: currentEvent.capacity,
    personalities: {
      performers: currentEvent.categories.personalities?.sections.performers || [],
      guests: currentEvent.categories.personalities?.sections.guests || [],
      speakers: currentEvent.categories.personalities?.sections.speakers || []
    },
    requirements: currentEvent.categories.requirements?.items.map(item => item.name).join('\n') || "",
    activities: currentEvent.categories.activities?.items.map(item => item.name).join('\n') || "",
    food: currentEvent.categories.food?.items || [],
    drinks: currentEvent.categories.drinks?.items || []
  };

  const renderCategoryContent = () => {
    const selectedEvent = organizerEvents[selectedEventIndex];
    const category = selectedEvent.categories[activeCategory];

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

    if (!organizerEvents.length) {
      return (
        <div className="text-center mt-20 p-4">
          <p>No events found for this organizer.</p>
          <button 
            onClick={() => navigate(-1)} 
            className="mt-4 px-4 py-2 bg-[#272222] text-white rounded-full"
          >
            Go Back
          </button>
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
    <div className="flex-1 flex-col">
      {/* Navigation Tabs - Always visible */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => navigate(`${basePath}/details`)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            isDetailsView
              ? 'bg-[#272222] text-white shadow-md'
              : 'bg-gray-100 text-[#272222] hover:bg-gray-200'
          }`}
        >
          <Activity className="w-4 h-4" />
          Event Details
        </button>
        <button
          onClick={() => navigate(`${basePath}/analytics`)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            !isDetailsView
              ? 'bg-[#272222] text-white shadow-md'
              : 'bg-gray-100 text-[#272222] hover:bg-gray-200'
          }`}
        >
          <BarChart2 className="w-4 h-4" />
          Analytics
        </button>
      </div>

      {/* Conditional content */}
      {isDetailsView ? (
        // Event Details Content
        <div className="space-y-6">
          {organizerEvents.map((event, index) => (
            <div
            key={index}
            className="rounded-2xl md:rounded-[30px] overflow-hidden shadow-xl transform transition hover:scale-[1.01] bg-white"
            >
              {/* Event Header - Updated to match event details style */}
              <div
                className="relative h-[300px] md:h-[350px] bg-cover bg-center cursor-pointer"
                style={{ backgroundImage: `url(${event.image})` }}
              >
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />

                <div className="relative z-10 h-full p-4 sm:p-6 flex flex-col gap-2 justify-end">
                  {/* Top section with host info */}

                  {/* Center content - title */}
                  <div className="my-4">
                    <h1 className="text-2xl sm:text-3xl text-white font-bold mb-2 tracking-tight">{event.title}</h1>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={event.profile || "/placeholder.svg?height=48&width=48"}
                        alt={event.host}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-white/50"
                      />
                      <div>
                        <span className="text-sm sm:text-base text-white font-medium">{event.host}</span>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="w-2 h-2 rounded-full bg-green-400" />
                          <span className="text-xs text-gray-200">Host</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Event details row */}
                  <div className="flex flex-wrap gap-4 text-white mb-4">
                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <Calendar className="w-3.5 h-3.5 text-purple-300" />
                      <span className="text-xs text-gray-200">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <Clock className="w-3.5 h-3.5 text-purple-300" />
                      <span className="text-xs text-gray-200">{event.time}</span>
                    </div>
                    {/* Location moved to menu */}
                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <Users className="w-3.5 h-3.5 text-purple-300" />
                      <span className="text-xs text-gray-200">{event.capacity}</span>
                    </div>
                  </div>

                </div>
              </div>

              {selectedEventIndex === index && (
                <div className="p-4 sm:p-6 bg-[#272222] rounded-b-2xl transition-all duration-300 ease-in-out">
                  {/* Category Navigation */}
                  <div className="flex items-center justify-between mb-6">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const categories = Object.keys(organizerEvents[selectedEventIndex].categories);
                        const currentIndex = categories.indexOf(activeCategory);
                        const prevIndex = currentIndex - 1 < 0 ? categories.length - 1 : currentIndex - 1;
                        setActiveCategory(categories[prevIndex]);
                      }}
                      className="p-2 hover:bg-gray-800/70 rounded-xl transition-colors duration-300"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    </button>

                    <div className="flex items-center gap-2">
                      {organizerEvents[selectedEventIndex].categories[activeCategory].icon}
                      <span className="text-sm sm:text-base text-white font-medium">
                        {organizerEvents[selectedEventIndex].categories[activeCategory].title}
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const categories = Object.keys(organizerEvents[selectedEventIndex].categories);
                        const currentIndex = categories.indexOf(activeCategory);
                        const nextIndex = (currentIndex + 1) % categories.length;
                        setActiveCategory(categories[nextIndex]);
                      }}
                      className="p-2 hover:bg-gray-800/70 rounded-xl transition-colors duration-300"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    </button>
                  </div>

                  {/* Event Description Section */}
                  <div className="mb-6 animate-fadeIn">
                    <h2 className="text-lg font-bold text-white mb-3">About This Event</h2>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {organizerEvents[selectedEventIndex].description}
                    </p>
                    
                    {/* Location and Time */}
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 text-gray-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-purple-300"
                        >
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span className="text-sm">{organizerEvents[selectedEventIndex].date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-purple-300"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span className="text-sm">6:00 PM</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-purple-300"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span className="text-sm">Nairobi, Kenya</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Users className="w-4 h-4 text-purple-300" />
                        <span className="text-sm">{organizerEvents[selectedEventIndex].capacity} spots</span>
                      </div>
                    </div>
                  </div>

                  {/* Category Dots Indicator */}
                  <div className="flex justify-center gap-1.5 py-2 mb-4">
                    {Object.keys(organizerEvents[selectedEventIndex].categories).map((cat) => (
                      <div
                        key={cat}
                        className={`w-1.5 h-1.5 rounded-full ${
                          activeCategory === cat ? "bg-purple-500" : "bg-gray-600"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Category Content */}
                  {renderCategoryContent()}

                  {/* Availability Status */}
                  <div className="mt-6 pt-4 border-t border-gray-800">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                        <span className="text-xs sm:text-sm text-gray-400">
                          Currently Available
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-purple-400">
                        {organizerEvents[selectedEventIndex].capacity}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
       ) : (
        // Analytics Content via Outlet
        <Outlet context={{ organizerEvents, selectedEventIndex, setSelectedEventIndex }} />
      )}
    

      {/* Edit Button */}
      <button
        onClick={() => setShowEventModal(true)}
        className="fixed bottom-20 right-8 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors shadow-lg"
      >
        <Edit className="w-5 h-5" />
      </button>

      {/* Edit Event Modal */}
      {showEventModal && (
        <EditEvent 
          onClose={() => setShowEventModal(false)} 
          initialData={initialData} 
        />
      )}
    </div>
  );
};

export default MyOrganizerEvents;