import { useState, useEffect } from "react"
import Map from "./Map"
import LiveEvent from "./LiveEvent"
import MyEvents from "./MyEvents"
import { useNavigate, Link } from "react-router-dom"
import { eventData } from "../data/event"
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin, Users, Heart, Share } from "lucide-react"
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
  const [activeCategory, setActiveCategory] = useState("menu")
  const [showRequestInvite, setShowRequestInvite] = useState(false)
  const [liked, setLiked] = useState(false) // Added liked state
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
    // If the clicked event is different from the currently selected one,
    // update the active slide, selected event, and force the menu open.
    if (selectedEventIndex !== index) {
      setActiveSlide(index)
      setSelectedEventIndex(index)
      setActiveCategory("menu")
      setIsMenuOpen(true)
    } else {
      // If the same event is clicked again, simply toggle the open state.
      setIsMenuOpen((prev) => !prev)
    }
  }

  const toggleLike = (e) => {
    e.stopPropagation() // Prevent event bubbling
    setLiked(!liked)
  }

  const renderCategoryContent = () => {
    if (!filteredEvents[selectedEventIndex]?.categories) return null

    // If we're showing the menu category, display event details similar to EventDetail
    if (activeCategory === "menu") {
      const event = filteredEvents[selectedEventIndex]
      return (
        <div className="space-y-6 animate-fadeIn">
          {/* Event Details */}
          <div className="flex flex-wrap gap-6 text-gray-300">
            <div className="flex items-center gap-2">
              <Calendar className="text-purple-300 w-5 h-5" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-purple-300 w-5 h-5" />
              <span>{event.time || "7:00 PM"}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-purple-300 w-5 h-5" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-purple-300 w-5 h-5" />
              <span>{event.capacity}</span>
            </div>
          </div>

          <h2 className="text-xl font-bold text-white">About This Event</h2>
          <p className="text-gray-300">{event.description}</p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={toggleLike}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                liked
                  ? "bg-red-900/30 border-red-700 text-red-400"
                  : "bg-gray-800/50 border-gray-700 text-gray-300 hover:bg-gray-700/50"
              }`}
            >
              <Heart className={`w-5 h-5 ${liked ? "fill-red-400 text-red-400" : ""}`} />
              <span>{liked ? "Liked" : "Like"}</span>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 hover:bg-gray-700/50">
              <Share className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>
        </div>
      )
    }

    const category = filteredEvents[selectedEventIndex].categories[activeCategory]

    if (!category) return null

    if (activeCategory === "personalities") {
      return (
        <div className="space-y-8 animate-fadeIn">
          {Object.entries(category.sections).map(([sectionName, people]) => (
            <div key={sectionName} className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-400 capitalize pl-2">{sectionName}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {people.map((person, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-2 sm:p-3 bg-gray-800/50 rounded-xl backdrop-blur-sm 
                                                hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <img
                      src={person.image || "/placeholder.svg"}
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
      )
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
            <span className="relative text-xs sm:text-sm font-medium text-gray-200">{item.name}</span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="w-full px-4 mt-20 md:mt-2 md:px-6 md:py-0.5">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-12 md:mt-16">
        {/* Map Section */}
        <div className="hidden md:flex w-full lg:w-auto">
          <Map />
        </div>

        {/* Slider Section - Updated to match EventDetail styling */}
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
                      {/* Updated banner style to match EventDetail */}
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-[300px] md:h-[312px] object-cover rounded-lg md:rounded-[30px] cursor-pointer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 rounded-xl lg:rounded-[30px] p-4 md:px-8 lg:px-12 lg:py-6 text-white">
                        {/* Event Title and Organizer at the bottom like in EventDetail */}
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

                          {/* Date/Time Tag */}
                          <div className="flex flex-wrap gap-4 text-white mt-4 mb-4">
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
                          {/* Action buttons */}
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

          {/* Event Details Overlay - Made scrollable */}
          {isMenuOpen && selectedEventIndex !== null && filteredEvents[selectedEventIndex] && (
            <div className="absolute inset-0 bg-[#272222] rounded-lg md:rounded-[30px] z-20 overflow-hidden max-h-full flex flex-col">
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-800">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    if (!filteredEvents[selectedEventIndex]?.categories) return
                    const categories = Object.keys(filteredEvents[selectedEventIndex].categories)
                    const currentIndex = categories.indexOf(activeCategory)
                    const prevIndex = currentIndex - 1 < 0 ? categories.length - 1 : currentIndex - 1
                    setActiveCategory(categories[prevIndex])
                  }}
                  className="p-2 hover:bg-gray-800/70 rounded-xl transition-colors duration-300"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                </button>

                <div className="flex items-center gap-2">
                  {filteredEvents[selectedEventIndex]?.categories?.[activeCategory]?.icon}
                  <span className="text-sm sm:text-base text-white font-medium">
                    {filteredEvents[selectedEventIndex]?.categories?.[activeCategory]?.title || "Details"}
                  </span>
                </div>

                <div className="flex items-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      if (!filteredEvents[selectedEventIndex]?.categories) return
                      const categories = Object.keys(filteredEvents[selectedEventIndex].categories)
                      const currentIndex = categories.indexOf(activeCategory)
                      const nextIndex = (currentIndex + 1) % categories.length
                      setActiveCategory(categories[nextIndex])
                    }}
                    className="p-2 hover:bg-gray-800/70 rounded-xl transition-colors duration-300 mr-1"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  </button>

                  {/* Close button repositioned */}
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 bg-gray-800/50 rounded-full hover:bg-gray-700/70 transition-colors ml-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Scrollable content area */}
              <div className="p-4 sm:p-6 overflow-y-auto flex-1">{renderCategoryContent()}</div>

              {/* Fixed bottom part */}
              <div className="p-4 sm:p-6 border-t border-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-xs sm:text-sm text-gray-400">Currently Available</span>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-purple-400">
                    {filteredEvents[selectedEventIndex]?.capacity || "Limited Spots"}
                  </span>
                </div>
              </div>
            </div>
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
