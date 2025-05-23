import { useState, useRef, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { eventData } from "../data/event"
import { useTheme } from "../context/theme-provider"
import RequestInviteModal from "./RequestInviteModal"
import { useRequest } from "../context/RequestContext"



const MyEvents = ({ activeFilter, activeSlide, activeEventId }) => {
  const { theme } = useTheme()
  const navigate = useNavigate()
  const { isRequested, setRequestedEvent } = useRequest()

  const formattedEvents = eventData.map((event) => ({
    id: event.id,
    title: event.title,
    date: event.date,
    host: event.organizer.name,
    likes: event.likes,
    description: event.description,
    image: event.coverImage,
    type: event.type,
    profile: event.organizer.src,
    attendees: Math.floor(Math.random() * 50) + 10, // Random number for demo
  }))

  const [events] = useState(formattedEvents)
  const [isScrollable, setIsScrollable] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [showRequestInvite, setShowRequestInvite] = useState(false)
  const scrollContainerRef = useRef(null)
  const filteredEvents = events.filter((event) => event.type === activeFilter)
  


  // Function to truncate title to maximum 10 characters
  const truncateTitle = (title) => {
    if (title.length <= 10) {
      return title
    }
    return title.substring(0, 10) + "..."
  }

  // Handle event card click to navigate to event details
  const handleEventClick = (eventId) => {
    navigate(`/details/${eventId}`)
  }

  // Check if container is scrollable
  useEffect(() => {
    const checkScrollable = () => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth } = scrollContainerRef.current
        setIsScrollable(scrollWidth > clientWidth)
      }
    }

    checkScrollable()
    window.addEventListener("resize", checkScrollable)
    return () => window.removeEventListener("resize", checkScrollable)
  }, [filteredEvents])

  // Update scroll position for scroll button visibility
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setScrollPosition(scrollLeft / (scrollWidth - clientWidth))
    }
  }

  // Auto-scroll to active event
  useEffect(() => {
    if (scrollContainerRef.current && activeEventId) {
      const activeElement = scrollContainerRef.current.querySelector(`[data-event-id="${activeEventId}"]`)
      if (activeElement) {
        const scrollLeft =
          activeElement.offsetLeft - (scrollContainerRef.current.offsetWidth - activeElement.offsetWidth) / 2
        scrollContainerRef.current.scrollTo({ left: scrollLeft, behavior: "smooth" })
      }
    }
  }, [activeEventId])

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll)
      return () => container.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = container.clientWidth * 0.8
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = container.clientWidth * 0.8
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="w-full md:w-[60%] lg:w-[65%]">
      <div className="flex justify-end items-center mb-2 px-2">
        {isScrollable && (
          <div className="flex items-center gap-1">
            <button
              onClick={scrollLeft}
              className={`p-1 rounded-full ${theme === "dark" ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"} transition-colors ${scrollPosition <= 0 ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={scrollPosition <= 0}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-3 w-3" />
            </button>
            <button
              onClick={scrollRight}
              className={`p-1 rounded-full ${theme === "dark" ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"} transition-colors ${scrollPosition >= 0.99 ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={scrollPosition >= 0.99}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-3 w-3" />
            </button>
          </div>
        )}
      </div>

      <div className="relative w-full">
        {/* Events container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-3 md:gap-4 pb-2 hide-scrollbar"
          onScroll={handleScroll}
        >
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div
                key={event.id}
                data-event-id={event.id}
                onClick={() => handleEventClick(event.id)}
                className={`
                  flex-none 
                  w-[180px] sm:w-[200px] md:w-[160px] lg:w-[180px] xl:w-[200px]
                  h-[140px] md:h-[196px]
                  bg-gradient-to-br ${theme === "dark" ? "from-gray-800 to-gray-700" : "from-[#272222] to-[#3a3535]"}
                  cursor-pointer rounded-xl md:rounded-[20px] 
                  py-2 px-3 transition-all duration-300
                  hover:shadow-lg hover:transform hover:scale-[1.02]
                  ${event.id === activeEventId ? `ring-2 ${theme === "dark" ? "ring-gray-500" : "ring-gray-400"} shadow-lg` : ""}
                `}
              >
                {/* Event content */}
                <div className="flex flex-col h-full justify-between">
                  <div className="flex justify-start items-center gap-2">
                    <div className="flex-shrink-0 relative">
                      <img
                        src={event.profile || "/placeholder.svg"}
                        alt="profile"
                        className={`object-cover rounded-full w-8 h-8 md:w-9 md:h-9 border-2 ${theme === "dark" ? "border-gray-600/20" : "border-white/20"}`}
                      />
                      <span
                        className={`absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border-[1px] ${theme === "dark" ? "border-gray-800" : "border-[#272222]"}`}
                      ></span>
                    </div>
                    <div>
                      <p className="text-white text-xs md:text-sm font-medium">{event.host}</p>
                      <p className="text-gray-300 text-[10px]">{event.date}</p>
                    </div>
                  </div>

                  <h3 className="text-center text-white font-[Pacifico] text-base md:text-lg my-2" title={event.title}>
                    {truncateTitle(event.title)}
                  </h3>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-gray-300"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-gray-300 text-[10px] md:text-xs">{event.attendees}</p>
                    </div>
                    <div
                      className={`border ${theme === "dark" ? "border-gray-500" : "border-gray-400"} px-2 py-1 rounded-[30px] ${
                        isRequested(event.id)
                          ? "bg-purple-500/30 border-purple-400/50"
                          : `${theme === "dark" ? "bg-gray-700/50 hover:bg-gray-600/50" : "bg-white/10 hover:bg-white/20"}`
                      } backdrop-blur-sm cursor-pointer transition-all duration-200 flex items-center gap-1`}
                    >
                      <button
                        className="text-sm cursor-pointer z-99"
                        onClick={(e) => {
                          e.stopPropagation()
                          if (isRequested(event.id)) return
                          setRequestedEvent(event.id, true)
                          setShowRequestInvite(true)
                        }}
                      >
                        {isRequested(event.id) ? "Requested" : "Request"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={`w-full py-6 text-center ${theme === "dark" ? "text-gray-400" : "text-gray-500"} text-sm`}>
              No events available for {activeFilter}.
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Request Modal */}
      {showRequestInvite && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div
            className={`w-[90%] max-w-md p-6 rounded-2xl shadow-xl ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-[#272222]"}`}>
                Request Invitation
              </h2>
              <button
                onClick={() => setShowRequestInvite(false)}
                className={`p-2 rounded-full ${theme === "dark" ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${theme === "dark" ? "text-gray-300" : "text-gray-500"}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            
          </div>
        </div>
      )}
      
      {showRequestInvite  && <RequestInviteModal onClose = {() => setShowRequestInvite(false)}/>}
    </div>
  )
}

export default MyEvents
