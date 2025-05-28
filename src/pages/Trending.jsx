import { useState } from "react"
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Clock, 
  MapPin, 
  Heart, 
  Share, 
  ArrowLeft, 
  Users, 
  ChevronUp,
  Activity 
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { eventData } from "../data/event"
import BottomNav from '../components/HomeNavBottom'
import { useRequest } from "../context/RequestContext"
import RequestInviteModal from "../components/RequestInviteModal"
import { useNavigate } from 'react-router-dom'

const Trending = () => {
  const [activeCategory, setActiveCategory] = useState("menu")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedEventIndex, setSelectedEventIndex] = useState(null)
  const [likedEvents, setLikedEvents] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { isRequested, setRequestedEvent } = useRequest()
  const [showRequestInvite, setShowRequestInvite] = useState(false)
  const [activeTab, setActiveTab] = useState('details')
  const [theme, setTheme] = useState('dark')
  
  const navigate = useNavigate()

  // Format the event data to match the expected structure
  const events = eventData.map((event) => ({
    id: event.id,
    title: event.title,
    date: event.date,
    time: event.time || "7:00 PM", // default time if not provided
    profile_id: event.organizer.id,
    host: event.organizer.name,
    likes: event.likes,
    description: event.description,
    image: event.coverImage,
    type: event.type,
    profile: event.organizer.src,
    location: event.location,
    categories: event.categories,
    capacity: event.capacity,
    organizer: event.organizer,
  }))

  const toggleMenu = (index) => {
    if (index !== selectedEventIndex) {
      setSelectedEventIndex(index)
      setActiveCategory("menu")
      setIsMenuOpen(true)
    } else {
      setIsMenuOpen((prevState) => !prevState)
    }
  }

  const handleLike = (event, e) => {
    e.stopPropagation()
    setLikedEvents((prev) => ({
      ...prev,
      [event.id]: !prev[event.id],
    }))
  }

  const openRequestModal = (e) => {
    e.stopPropagation()
    setIsModalOpen(true)
  }

  const getCategoryIcon = (categoryName) => {
    switch (categoryName) {
      case "menu":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-orange-400"
          >
            <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
            <line x1="6" x2="6" y1="2" y2="4"></line>
            <line x1="10" x2="10" y1="2" y2="4"></line>
            <line x1="14" x2="14" y1="2" y2="4"></line>
          </svg>
        )
      case "requirements":
        return <Calendar className="w-4 h-4 text-blue-400" />
      case "activities":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-green-400"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        )
      case "personalities":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-purple-400"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        )
      default:
        return null
    }
  }

  const renderTabContent = (event) => {
    switch (activeTab) {
      case 'details':
        return (
          <div className="space-y-6">
            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-lg font-semibold text-[#272222] dark:text-white">About This Event</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{event.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                <Calendar className="w-5 h-5 text-purple-500" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Date</p>
                  <p className="font-medium text-[#272222] dark:text-white">{event.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                <Clock className="w-5 h-5 text-purple-500" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Time</p>
                  <p className="font-medium text-[#272222] dark:text-white">{event.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                <MapPin className="w-5 h-5 text-purple-500" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="font-medium text-[#272222] dark:text-white">{event.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                <Users className="w-5 h-5 text-purple-500" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Capacity</p>
                  <p className="font-medium text-[#272222] dark:text-white">{event.capacity}</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'menu':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#272222] dark:text-white">Food Menu</h3>
              <div className="space-y-3">
                {event.categories?.menu?.items
                  .filter(item => item.type !== "beverage")
                  .map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-700 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[#272222] dark:text-white font-medium">{item.name}</span>
                      </div>
                      {item.price && (
                        <span className="text-purple-600 dark:text-purple-400 font-bold">{item.price}</span>
                      )}
                    </div>
                  ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#272222] dark:text-white">Drinks Menu</h3>
              <div className="space-y-3">
                {event.categories?.menu?.items
                  .filter(item => item.type === "beverage")
                  .map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-700 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[#272222] dark:text-white font-medium">{item.name}</span>
                      </div>
                      {item.price && (
                        <span className="text-purple-600 dark:text-purple-400 font-bold">{item.price}</span>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        );
      
      case 'requirements':
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#272222] dark:text-white">Requirements</h3>
            <div className="grid gap-3">
              {event.categories?.requirements?.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-700 transition-colors"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0" />
                  <span className="text-[#272222] dark:text-white font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'location':
        return (
          <div className="space-y-6">
            <div className="aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              {/* Map placeholder - you can integrate a real map here */}
              <div className="w-full h-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-purple-500" />
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
              <MapPin className="w-5 h-5 text-purple-500" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                <p className="font-medium text-[#272222] dark:text-white">{event.location}</p>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full px-4 md:max-w-2xl md:mx-auto mt-20"
      >
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-gray-700 hover:text-[#272222] transition-colors"
        >
          <ArrowLeft size={18} />
          <span className="text-sm">Go back</span>
        </button>
      </motion.div>
      
      <div className="w-full px-2 sm:px-4 md:max-w-2xl md:mx-auto mt-4 mb-8 space-y-6 sm:space-y-8 font-sans">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative rounded-2xl md:rounded-[30px] overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl bg-white dark:bg-gray-900"
          >
            {/* Event Header */}
            <div
              className="relative h-[300px] md:h-[350px] bg-cover bg-center cursor-pointer overflow-hidden"
              style={{ backgroundImage: `url(${event.image})` }}
              onClick={() => toggleMenu(index)}
            >
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:via-black/50 transition-all duration-300" />

              <div className="relative z-10 h-full p-4 sm:p-6 flex flex-col gap-2 justify-end">
                {/* Top section with host info */}
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={event.profile || "/placeholder.svg?height=48&width=48"}
                        alt={event.host}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-white/50 group-hover:ring-purple-400 transition-all duration-300"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center">
                        <span className="text-[8px] text-white font-bold">✓</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-sm sm:text-base text-white font-medium group-hover:text-purple-300 transition-colors duration-300">{event.host}</span>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                        <span className="text-xs text-gray-200">Host</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center content - title */}
                <div className="my-4">
                  <h1 className="text-2xl sm:text-3xl text-white font-bold mb-2 tracking-tight group-hover:text-purple-200 transition-colors duration-300">{event.title}</h1>
                </div>

                {/* Event details row */}
                <div className="flex flex-wrap gap-4 text-white mb-4">
                  <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full group-hover:bg-purple-900/40 transition-all duration-300">
                    <Calendar className="w-3.5 h-3.5 text-purple-300" />
                    <span className="text-xs text-gray-200">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full group-hover:bg-purple-900/40 transition-all duration-300">
                    <Clock className="w-3.5 h-3.5 text-purple-300" />
                    <span className="text-xs text-gray-200">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full group-hover:bg-purple-900/40 transition-all duration-300">
                    <Users className="w-3.5 h-3.5 text-purple-300" />
                    <span className="text-xs text-gray-200">{event.capacity}</span>
                  </div>
                </div>

                {/* Bottom action bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm hover:bg-purple-900/40 transition-all duration-300"
                      onClick={(e) => handleLike(event, e)}
                    >
                      <Heart
                        className={`w-4.5 h-4.5 ${likedEvents[event.id] ? "fill-red-500 text-red-500" : "text-white"}`}
                      />
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm hover:bg-purple-900/40 transition-all duration-300">
                      <Share className="w-4.5 h-4.5 text-white" />
                    </button>
                    <button
                      className={`px-3 py-1 ${
                        isRequested(event.id)
                          ? "bg-purple-500/30 hover:bg-purple-600/40"
                          : "bg-white/20 hover:bg-white/30"
                      } rounded-full backdrop-blur-sm transition-all duration-300 flex items-center gap-1.5 group-hover:bg-purple-500/40`}
                      onClick={(e) => {
                        e.stopPropagation()
                        if (isRequested(event.id)) return
                        setRequestedEvent(event.id, true)
                        setShowRequestInvite(true)
                      }}
                    >
                      {isRequested(event.id) && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-purple-300 animate-pulse"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      )}
                      <span className="text-sm text-white">{isRequested(event.id) ? "Requested" : "Request"}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Details Section */}
            {isMenuOpen && selectedEventIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className={`bg-white dark:bg-gray-900 border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-100'}`}
              >
                {/* Header with tabs */}
                <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-[#272222] dark:text-white">Event Details</h2>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsMenuOpen(false);
                        }}
                        className="p-2 text-gray-500 hover:text-[#272222] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Navigation Tabs */}
                  <nav className="flex gap-4">
                    {['Details', 'Menu', 'Requirements', 'Location'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab.toLowerCase())}
                        className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                          activeTab === tab.toLowerCase()
                            ? 'text-[#272222] dark:text-white'
                            : 'text-gray-500 hover:text-[#272222] dark:hover:text-white'
                        }`}
                      >
                        {tab}
                        {activeTab === tab.toLowerCase() && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#272222] dark:bg-white"
                            initial={false}
                          />
                        )}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Tab Content */}
                <div className="p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      {renderTabContent(event)}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
        <BottomNav />
        {/* Request Modal */}
        {showRequestInvite && <RequestInviteModal onClose={() => setShowRequestInvite(false)} />}
      </div>
    </>
  )
}

export default Trending