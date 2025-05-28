import { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Calendar,
  Users,
  Activity,
  Coffee,
  BarChart2,
  Clock,
  Edit,
  MapPin,
  Heart,
  Share2,
  MessageCircle,
  Star,
  X,
  ArrowLeft,
  MoreVertical,
  Trash2,
  Copy,
  Archive
} from "lucide-react";
import { eventData } from '../data/event';
import EditEvent from './EditEvent';

const DropdownMenu = ({ onClose, onEdit, onDelete, onDuplicate, onArchive }) => (
  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-1 border border-gray-100 z-50">
    <button
      onClick={onEdit}
      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
    >
      <Edit className="w-4 h-4" />
      Edit Event
    </button>
    <button
      onClick={onDuplicate}
      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
    >
      <Copy className="w-4 h-4" />
      Duplicate
    </button>
    <button
      onClick={onArchive}
      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
    >
      <Archive className="w-4 h-4" />
      Archive
    </button>
    <button
      onClick={onDelete}
      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
    >
      <Trash2 className="w-4 h-4" />
      Delete
    </button>
  </div>
);

const EventDetailDropdown = ({ event, isOpen, onToggle, onEdit }) => {
  const [activeTab, setActiveTab] = useState('details');
  const [showDropdown, setShowDropdown] = useState(false);
  
  const handleClickOutside = (e) => {
    if (!e.target.closest('.dropdown-menu') && !e.target.closest('.dropdown-toggle')) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleEdit = () => {
    setShowDropdown(false);
    onEdit();
  };

  const handleDelete = () => {
    setShowDropdown(false);
    // Implement delete functionality
  };

  const handleDuplicate = () => {
    setShowDropdown(false);
    // Implement duplicate functionality
  };

  const handleArchive = () => {
    setShowDropdown(false);
    // Implement archive functionality
  };

  const mockCategories = {
    food: {
      title: event.categories?.menu?.title || "Food Menu",
      items: event.categories?.menu?.items || [
        { name: "Grilled Chicken Salad", price: "$15" },
        { name: "Beef Stir Fry", price: "$18" },
        { name: "Vegetarian Pasta", price: "$14" },
        { name: "Seafood Platter", price: "$25" },
        { name: "BBQ Ribs", price: "$22" }
      ]
    },
    drinks: {
      title: "Drinks Menu",
      items: event.categories?.menu?.items?.filter(item => item.type === "beverage") || [
        { name: "Fresh Fruit Smoothies", price: "$8" },
        { name: "Craft Cocktails", price: "$12" },
        { name: "Premium Wine Selection", price: "$10" },
        { name: "Artisanal Coffee", price: "$5" },
        { name: "Fresh Juices", price: "$6" }
      ]
    },
    activities: {
      title: event.categories?.activities?.title || "Activities",
      items: event.categories?.activities?.items || [
        { name: "Live Music Performance" },
        { name: "Interactive Games" },
        { name: "Dance Floor" },
        { name: "Photo Booth" }
      ]
    },
    requirements: {
      title: event.categories?.requirements?.title || "Requirements",
      items: event.categories?.requirements?.items || [
        { name: "Valid ID Required" },
        { name: "Smart Casual Dress Code" },
        { name: "Advance Registration" },
        { name: "COVID-19 Safety Protocols" }
      ]
    }
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-white border-t border-gray-200 overflow-hidden"
        >
          {/* Header with tabs and controls */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-[#272222]">Event Details</h2>
              <div className="flex items-center gap-2">
                <div className="relative dropdown-menu">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowDropdown(!showDropdown);
                    }}
                    className="p-2 text-[#272222] hover:bg-[#272222]/5 rounded-full transition-colors dropdown-toggle"
                  >
                    <MoreVertical className="w-5 h-5" />
                  </button>
                  {showDropdown && (
                    <DropdownMenu
                      onClose={() => setShowDropdown(false)}
                      onEdit={handleEdit}
                      onDelete={handleDelete}
                      onDuplicate={handleDuplicate}
                      onArchive={handleArchive}
                    />
                  )}
                </div>
                <button
                  onClick={onToggle}
                  className="p-2 text-[#272222] hover:bg-[#272222]/5 rounded-full transition-colors"
                >
                  <ChevronUp className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-6 border-b border-gray-200 -mb-6">
              {['details', 'requirements', 'activities', 'menu'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 px-1 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-[#272222] text-[#272222]'
                      : 'border-transparent text-gray-500 hover:text-[#272222]'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              {activeTab === 'details' && (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">About This Event</h3>
                    <p className="text-gray-700 leading-relaxed">{event.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">Event Host</h3>
                    <div className="flex items-center gap-4">
                      <img
                        src={event.organizer.src}
                        alt="Host"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900">{event.organizer.name}</h4>
                        <p className="text-sm text-gray-600">Event Organizer</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">Event Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-3 bg-[#272222]/5 rounded-lg">
                        <Calendar className="w-5 h-5 text-[#272222]" />
                        <div>
                          <p className="text-sm text-gray-600">Date</p>
                          <p className="font-medium text-[#272222]">{event.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-[#272222]/5 rounded-lg">
                        <Clock className="w-5 h-5 text-[#272222]" />
                        <div>
                          <p className="text-sm text-gray-600">Time</p>
                          <p className="font-medium text-[#272222]">6:00 PM</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-[#272222]/5 rounded-lg">
                        <MapPin className="w-5 h-5 text-[#272222]" />
                        <div>
                          <p className="text-sm text-gray-600">Location</p>
                          <p className="font-medium text-[#272222]">Nairobi, Kenya</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-[#272222]/5 rounded-lg">
                        <Users className="w-5 h-5 text-[#272222]" />
                        <div>
                          <p className="text-sm text-gray-600">Capacity</p>
                          <p className="font-medium text-[#272222]">{event.capacity} spots</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'requirements' && (
                <motion.div
                  key="requirements"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <h3 className="text-lg font-semibold mb-4 text-[#272222]">{event.categories?.requirements?.title || "Requirements"}</h3>
                  <div className="grid gap-3">
                    {event.categories?.requirements?.items?.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-[#272222]/5 rounded-lg border border-[#272222]/10"
                      >
                        <div className="w-2 h-2 bg-[#272222] rounded-full flex-shrink-0" />
                        <span className="text-[#272222] font-medium">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'activities' && (
                <motion.div
                  key="activities"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <h3 className="text-lg font-semibold mb-4 text-[#272222]">{event.categories?.activities?.title || "Activities"}</h3>
                  <div className="grid gap-3">
                    {event.categories?.activities?.items?.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-[#272222]/5 rounded-lg border border-[#272222]/10"
                      >
                        <Activity className="w-5 h-5 text-[#272222] flex-shrink-0" />
                        <span className="text-[#272222] font-medium">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'menu' && (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-[#272222]">{event.categories?.menu?.title || "Food Menu"}</h3>
                    <div className="space-y-3">
                      {event.categories?.menu?.items?.filter(item => item.type !== "beverage").map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-[#272222]/5 rounded-lg border border-[#272222]/10"
                        >
                          <div className="flex items-center gap-3">
                            <Coffee className="w-5 h-5 text-[#272222]" />
                            <span className="text-[#272222] font-medium">{item.name}</span>
                          </div>
                          {item.price && <span className="text-[#272222] font-bold">{item.price}</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-[#272222]">Drinks Menu</h3>
                    <div className="space-y-3">
                      {event.categories?.menu?.items?.filter(item => item.type === "beverage").map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-[#272222]/5 rounded-lg border border-[#272222]/10"
                        >
                          <div className="flex items-center gap-3">
                            <Coffee className="w-5 h-5 text-[#272222]" />
                            <span className="text-[#272222] font-medium">{item.name}</span>
                          </div>
                          {item.price && <span className="text-[#272222] font-bold">{item.price}</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const MyOrganizerEvents = () => {
  const [expandedEvent, setExpandedEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [likedEvents, setLikedEvents] = useState({});
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeTab, setActiveTab] = useState('details');
  const navigate = useNavigate();
  const { id: organizerId } = useParams(); // Get organizerId from URL params

  // Filter events by organizer ID
  const organizerEvents = eventData.filter(event => 
    event.organizer.id.toString() === organizerId?.toString()
  );

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleLike = (eventId) => {
    setLikedEvents(prev => ({
      ...prev,
      [eventId]: !prev[eventId]
    }));
  };

  const handleToggleDetails = (eventId) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };

  const handleEditClick = (event) => {
    setSelectedEvent(event);
    setShowEditModal(true);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'analytics') {
      navigate('analytics');
    } else {
      navigate('details');
    }
  };

  if (isLoading) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex items-center justify-center min-h-[60vh]"
      >
        <div className="w-16 h-16 border-4 border-[#272222] border-t-transparent rounded-full animate-spin"></div>
      </motion.div>
    );
  }

  if (organizerEvents.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-4">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 text-center">
            <h3 className="text-lg font-semibold text-gray-900">No Events Found</h3>
            <p className="text-gray-600 mt-2">This organizer hasn't created any events yet.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-4">
      {/* Main Navigation Tabs */}
      <div className="max-w-3xl mx-auto px-4 mb-6">
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => handleTabChange('details')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'details'
                  ? 'bg-[#272222] text-white shadow-lg transform hover:scale-105'
                  : 'bg-gray-100 text-[#272222] hover:bg-gray-200'
              }`}
            >
              <Activity className="w-4 h-4" />
              Event Details
            </button>
            <button
              onClick={() => handleTabChange('analytics')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'analytics'
                  ? 'bg-[#272222] text-white shadow-lg transform hover:scale-105'
                  : 'bg-gray-100 text-[#272222] hover:bg-gray-200'
              }`}
            >
              <BarChart2 className="w-4 h-4" />
              Analytics
            </button>
          </div>
        </div>
      </div>

      {/* Event Cards */}
      {activeTab === 'details' && (
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-6">
            {organizerEvents.map((event) => (
              <motion.div
                key={event.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Event Image */}
                <div className="relative h-[250px] group">
                  <img
                    src={event.coverImage}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  {/* Event Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-purple-300" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-purple-300" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-purple-300" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-purple-300" />
                        <span>{event.capacity} spots</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Actions */}
                <div className="p-4 bg-white">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-6">
                      <button
                        onClick={() => handleLike(event.id)}
                        className="flex items-center gap-2 group"
                      >
                        <Heart
                          className={`w-5 h-5 transition-colors duration-300 ${
                            likedEvents[event.id]
                              ? "fill-red-500 text-red-500"
                              : "text-[#272222] group-hover:text-red-500"
                          }`}
                        />
                        <span className={`text-sm ${likedEvents[event.id] ? "text-red-500" : "text-[#272222]"}`}>
                          {event.likes}
                        </span>
                      </button>
                      <button className="flex items-center gap-2 group">
                        <MessageCircle className="w-5 h-5 text-[#272222] group-hover:text-blue-500 transition-colors duration-300" />
                        <span className="text-sm text-[#272222] group-hover:text-blue-500">0</span>
                      </button>
                      <button className="flex items-center gap-2 group">
                        <Share2 className="w-5 h-5 text-[#272222] group-hover:text-green-500 transition-colors duration-300" />
                        <span className="text-sm text-[#272222] group-hover:text-green-500">0</span>
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEditClick(event)}
                        className="p-2 text-[#272222] hover:text-black transition-colors duration-300"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleToggleDetails(event.id)}
                        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#272222] hover:text-black hover:bg-gray-100 rounded-lg transition-colors duration-300"
                      >
                        View Details
                        {expandedEvent === event.id ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Event Detail Dropdown */}
                <EventDetailDropdown
                  event={event}
                  isOpen={expandedEvent === event.id}
                  onToggle={() => handleToggleDetails(event.id)}
                  onEdit={() => handleEditClick(event)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Analytics Tab Content */}
      {activeTab === 'analytics' && (
        <div className="max-w-3xl mx-auto px-4">
          <Outlet />
        </div>
      )}

      {/* Edit Event Modal */}
      {showEditModal && selectedEvent && (
        <EditEvent
          onClose={() => setShowEditModal(false)}
          initialData={selectedEvent}
        />
      )}
    </div>
  );
};

export default MyOrganizerEvents;