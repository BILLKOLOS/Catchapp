import { useState } from "react"
import { ChevronLeft, ChevronRight, Calendar, MapPin, Heart, Share, ArrowLeft } from "lucide-react"
import { eventData } from "../data/event"
import RequestInviteModal from "../components/RequestInviteModal"
import { useNavigate } from 'react-router-dom'

const Trending = () => {
  const [activeCategory, setActiveCategory] = useState("menu")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedEventIndex, setSelectedEventIndex] = useState(null)
  const [likedEvents, setLikedEvents] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const navigate = useNavigate()

  // Format the event data to match the expected structure
  const events = eventData.map((event) => ({
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

  const renderCategoryContent = () => {
    if (!events[selectedEventIndex]?.categories) return null

    const category = events[selectedEventIndex].categories[activeCategory]
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
                      src={person.image || "/placeholder.svg?height=48&width=48"}
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
    <>
      <div className="w-full px-4 md:max-w-2xl md:mx-auto mt-20">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-gray-700 hover:text-[#272222] transition-colors"
        >
          <ArrowLeft size={18} />
          <span className="text-sm">Go back</span>
        </button>
      </div>
      
      <div className="w-full px-2 sm:px-4 md:max-w-2xl md:mx-auto mt-4 mb-8 space-y-6 sm:space-y-8 font-sans">
        {events.map((event, index) => (
          <div
            key={index}
            className="rounded-2xl md:rounded-[30px] overflow-hidden shadow-xl transform transition hover:scale-[1.01]"
          >
            {/* Event Header */}
            <div
              className="relative h-[266px] md:h-[312px] bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url(${event.image})` }}
              onClick={() => toggleMenu(index)}
            >
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />

              <div className="relative z-10 h-full p-4 sm:p-6 flex flex-col justify-between">
                {/* Top section with host info */}
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

                  <div className="px-3 py-1.5 bg-black/30 backdrop-blur-sm rounded-full flex flex-col items-center gap-0.5">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-purple-300" />
                      <span className="text-white text-xs font-medium">{event.date}</span>
                    </div>
                    <div className="text-purple-200 text-[10px] font-semibold">{event.time}</div>
                  </div>
                </div>

                {/* Center content - title & description */}
                <div className="my-4">
                  <h1 className="text-xl sm:text-2xl text-white font-bold mb-2 tracking-tight">{event.title}</h1>
                  <p className="text-sm text-white/90 font-medium leading-relaxed max-w-md line-clamp-2">
                    {event.description}
                  </p>
                </div>

                {/* Bottom action bar */}
                <div className="flex items-center justify-between">
                  {/* Location */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full">
                    <MapPin className="w-3.5 h-3.5 text-purple-300" />
                    <span className="text-xs text-gray-200">{event.location}</span>
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-3">
                    <button
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-all"
                      onClick={(e) => handleLike(event, e)}
                    >
                      <Heart
                        className={`w-4.5 h-4.5 ${likedEvents[event.id] ? "fill-red-500 text-red-500" : "text-white"}`}
                      />
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-all">
                      <Share className="w-4.5 h-4.5 text-white" />
                    </button>
                    <button className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm hover:bg-white/30 transition-all">
                      Request
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Details Section */}
            {isMenuOpen && selectedEventIndex === index && (
              <div className="p-4 sm:p-6 bg-[#272222] transition-all duration-300 ease-in-out">
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      if (!events[selectedEventIndex]?.categories) return
                      const categories = Object.keys(events[selectedEventIndex].categories)
                      const currentIndex = categories.indexOf(activeCategory)
                      const prevIndex = currentIndex - 1 < 0 ? categories.length - 1 : currentIndex - 1
                      setActiveCategory(categories[prevIndex])
                    }}
                    className="p-2 hover:bg-gray-800/70 rounded-xl transition-colors duration-300"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  </button>

                  <div className="flex items-center gap-2">
                    {getCategoryIcon(activeCategory)}
                    <span className="text-sm sm:text-base text-white font-medium">
                      {events[selectedEventIndex]?.categories?.[activeCategory]?.title || "Details"}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      if (!events[selectedEventIndex]?.categories) return
                      const categories = Object.keys(events[selectedEventIndex].categories)
                      const currentIndex = categories.indexOf(activeCategory)
                      const nextIndex = (currentIndex + 1) % categories.length
                      setActiveCategory(categories[nextIndex])
                    }}
                    className="p-2 hover:bg-gray-800/70 rounded-xl transition-colors duration-300"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  </button>
                </div>

                {/* Category dots indicator */}
                {events[selectedEventIndex]?.categories && (
                  <div className="flex justify-center gap-1.5 py-2 mb-4">
                    {Object.keys(events[selectedEventIndex].categories).map((cat) => (
                      <div
                        key={cat}
                        className={`w-1.5 h-1.5 rounded-full ${activeCategory === cat ? "bg-purple-500" : "bg-gray-600"}`}
                      />
                    ))}
                  </div>
                )}

                {renderCategoryContent()}

                <div className="mt-6 pt-4 border-t border-gray-800">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span className="text-xs sm:text-sm text-gray-400">Currently Available</span>
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-purple-400">
                      {events[selectedEventIndex]?.capacity || "Limited Spots"}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        {isModalOpen && <RequestInviteModal onClose={() => setIsModalOpen(false)}/>}
      </div>
    </>
  )
}

export default Trending