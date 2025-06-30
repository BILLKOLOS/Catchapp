import { useState, useEffect } from "react"
import Map from "./Map"
import LiveEvent from "./LiveEvent"
import MyEvents from "./MyEvents"
import { useNavigate, Link } from "react-router-dom"
import { eventData } from "../data/event"
import { Calendar, Clock, MapPin, Users, Heart, Share } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import RequestInviteModal from "./RequestInviteModal"
import { useRequest } from "../context/RequestContext"

const MainContent = ({ activeFilter }) => {
  // Format the event data to match the expected structure
  const formattedEvents = eventData.map((event) => ({
    id: event.id,
    title: event.title,
    date: event.date,
    time: event.time, // added time
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

  const [events] = useState(formattedEvents)
  const [activeSlide, setActiveSlide] = useState(0)
  const [selectedEventIndex, setSelectedEventIndex] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("details")
  const [showRequestInvite, setShowRequestInvite] = useState(false)
  const [liked, setLiked] = useState(false)
  const [theme, setTheme] = useState("dark")
  const { isRequested, setRequestedEvent } = useRequest()

  const navigate = useNavigate()

  const filteredEvents = events.filter((event) => event.type === activeFilter)

  // Automatic sliding effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isMenuOpen) {
        setActiveSlide((prevSlide) => (prevSlide === filteredEvents.length - 1 ? 0 : prevSlide + 1))
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [filteredEvents.length, isMenuOpen])

  const handleLocationClick = () => {
    navigate("/event-route")
  }

  const toggleMenu = (index) => {
    if (selectedEventIndex !== index) {
      setActiveSlide(index)
      setSelectedEventIndex(index)
      setActiveTab("details")
      setIsMenuOpen(true)
    } else {
      setIsMenuOpen((prev) => !prev)
    }
  }

  const toggleLike = (e) => {
    e.stopPropagation()
    setLiked(!liked)
  }

  const renderTabContent = (event) => {
    switch (activeTab) {
      case "details":
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

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={toggleLike}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                  liked
                    ? "bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-700 text-red-600 dark:text-red-400"
                    : "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <Heart className={`w-5 h-5 ${liked ? "fill-red-500 text-red-500" : ""}`} />
                <span>{liked ? "Liked" : "Like"}</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                <Share className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        )

      case "menu":
        return (
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#272222] dark:text-white">Food Menu</h3>
              <div className="space-y-3">
                {event.categories?.menu?.items
                  ?.filter((item) => item.type !== "beverage")
                  ?.map((item, index) => (
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
                  ?.filter((item) => item.type === "beverage")
                  ?.map((item, index) => (
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
        )

      case "requirements":
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#272222] dark:text-white">Requirements</h3>
            <div className="grid gap-3">
              {event.categories?.requirements?.items?.map((item, index) => (
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
        )

      case "location":
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
        )

      default:
        return null
    }
  }

  return (
    <div className="w-full px-4 mt-20 md:mt-2 md:px-6 md:py-0.5">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-12 md:mt-16">
        {/* Map Section */}
        <div className="hidden md:flex w-full lg:w-auto">
          <Map />
        </div>

        {/* Slider Section */}
        <div className="flex-1 relative rounded-lg md:rounded-[30px]">
          {filteredEvents.length > 0 ? (
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {filteredEvents.map((event, index) => (
                  <div key={event.id} className="flex-shrink-0 w-full">
                    <div className="relative cursor-pointer" onClick={() => toggleMenu(index)}>
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-[300px] md:h-[312px] object-cover rounded-lg md:rounded-[30px] cursor-pointer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 rounded-xl lg:rounded-[30px] p-4 md:px-8 lg:px-12 lg:py-6 text-white">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">{event.title}</h1>
                          <Link to={`/profile/${event.organizer.id}`}>
                            <div className="flex items-center gap-2">
                              <img
                                src={event.profile || "/placeholder.svg"}
                                alt={event.host}
                                className="w-8 h-8 rounded-full object-cover border-2 border-white"
                              />
                              <span className="text-white text-sm">{event.host}</span>
                            </div>
                          </Link>

                          <div className="flex flex-wrap gap-4 text-white mt-4 mb-4">
                            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                              <Calendar className="w-3.5 h-3.5 text-purple-300" />
                              <span className="text-xs text-gray-200">{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                              <Clock className="w-3.5 h-3.5 text-purple-300" />
                              <span className="text-xs text-gray-200">{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                              <Users className="w-3.5 h-3.5 text-purple-300" />
                              <span className="text-xs text-gray-200">{event.capacity}</span>
                            </div>
                          </div>

                          <div className="flex justify-between items-center mt-4">
                            <div className="flex items-center gap-4">
                              <button onClick={(e) => toggleLike(e)} className="flex items-center gap-1">
                                <Heart className={`w-5 h-5 ${liked ? "fill-red-500 text-red-500" : ""}`} />
                                <span>{event.likes}</span>
                              </button>
                              <button onClick={handleLocationClick} className="flex items-center gap-1">
                                <MapPin className="w-5 h-5" />
                                <span className="hidden sm:inline text-sm">Location</span>
                              </button>
                            </div>

                            <button
                              className={`px-3 py-1 ${
                                isRequested(event.id)
                                  ? "bg-purple-500/30 hover:bg-purple-600/40"
                                  : "bg-white/20 hover:bg-white/30"
                              } rounded-full backdrop-blur-sm transition-colors flex items-center gap-1.5`}
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
                              <span className="text-sm">{isRequested(event.id) ? "Requested" : "Request"}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slide counter */}
              <div className="absolute bottom-24 sm:bottom-28 right-6 px-3 py-1 bg-black/30 rounded-full backdrop-blur-sm z-10">
                <span className="text-xs text-white">
                  {filteredEvents.length > 0 && `${activeSlide + 1} / ${filteredEvents.length}`}
                </span>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500">No events available.</p>
          )}

          {/* Updated Event Details Overlay */}
          {isMenuOpen && selectedEventIndex !== null && filteredEvents[selectedEventIndex] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-white dark:bg-gray-900 rounded-lg md:rounded-[30px] z-20 overflow-hidden max-h-full flex flex-col"
            >
              {/* Header with tabs */}
              <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-[#272222] dark:text-white">Event Details</h2>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsMenuOpen(false)
                      }}
                      className="p-2 text-gray-500 hover:text-[#272222] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Navigation Tabs */}
                <nav className="flex gap-4">
                  {["Details", "Menu", "Requirements", "Location"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab.toLowerCase())}
                      className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                        activeTab === tab.toLowerCase()
                          ? "text-[#272222] dark:text-white"
                          : "text-gray-500 hover:text-[#272222] dark:hover:text-white"
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
              <div className="p-6 overflow-y-auto flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    {renderTabContent(filteredEvents[selectedEventIndex])}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </div>

        {/* Request Modal */}
        {showRequestInvite && <RequestInviteModal onClose={() => setShowRequestInvite(false)} />}
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-4 md:gap-6 pb-3 mt-6">
        <LiveEvent />
        <MyEvents
          activeFilter={activeFilter}
          activeSlide={activeSlide}
          activeEventId={filteredEvents[activeSlide]?.id}
        />
      </div>
    </div>
  )
}

export default MainContent
