import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { eventData } from "../data/event"
import NormalNav from "../components/NormalNav"
import BottomNav from "../components/HomeNavBottom"
import { Calendar, Clock, MapPin, Users, Heart, Share, ArrowLeft, MessageCircle } from "lucide-react"

const EventDetail = () => {
  const { eventId } = useParams()
  const navigate = useNavigate()
  const [event, setEvent] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    // Find the event with the matching ID
    const foundEvent = eventData.find((e) => e.id === Number.parseInt(eventId))

    if (foundEvent) {
      setEvent(foundEvent)
    }

    setIsLoading(false)
  }, [eventId])

  const handleBack = () => {
    navigate(-1)
  }

  const toggleLike = () => {
    setLiked(!liked)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#272222]"></div>
      </div>
    )
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <h2 className="text-xl font-bold text-[#272222] mb-2">Event Not Found</h2>
        <p className="text-gray-600 mb-6">The event you're looking for doesn't exist or has been removed.</p>
        <button onClick={handleBack} className="px-4 py-2 bg-[#272222] text-white rounded-lg flex items-center gap-2">
          <ArrowLeft size={16} />
          Go Back
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
    
      <div className="max-w-4xl mx-auto p-4 pt-16 pb-24">
        {/* Back Button */}
        <button onClick={handleBack} className="mb-4 flex items-center gap-1 text-[#272222] font-medium">
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>

        {/* Event Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-6">
          <img
            src={event.coverImage || "/placeholder.svg?height=400&width=800"}
            alt={event.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          {/* Event Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h1 className="text-3xl font-bold text-white mb-2">{event.title}</h1>
            <div className="flex items-center gap-2">
              <img
                src={event.organizer?.src || "/placeholder.svg?height=50&width=50"}
                alt={event.organizer?.name}
                className="w-8 h-8 rounded-full object-cover border-2 border-white"
              />
              <span className="text-white text-sm">{event.organizer?.name}</span>
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="text-[#272222] w-5 h-5" />
              <span className="text-gray-700">{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-[#272222] w-5 h-5" />
              <span className="text-gray-700">7:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-[#272222] w-5 h-5" />
              <span className="text-gray-700">{event.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-[#272222] w-5 h-5" />
              <span className="text-gray-700">{event.capacity}</span>
            </div>
          </div>

          <h2 className="text-xl font-bold text-[#272222] mb-3">About This Event</h2>
          <p className="text-gray-700 mb-6">{event.description}</p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={toggleLike}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                liked
                  ? "bg-red-50 border-red-200 text-red-500"
                  : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Heart className={`w-5 h-5 ${liked ? "fill-red-500 text-red-500" : ""}`} />
              <span>{liked ? "Liked" : "Like"}</span>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 hover:bg-gray-100">
              <Share className="w-5 h-5" />
              <span>Share</span>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 hover:bg-gray-100">
              <MessageCircle className="w-5 h-5" />
              <span>Comment</span>
            </button>
          </div>
        </div>

        {/* Organizer Info */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-[#272222] mb-4">Organizer</h2>
          <div className="flex items-center gap-4">
            <img
              src={event.organizer?.src || "/placeholder.svg?height=100&width=100"}
              alt={event.organizer?.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
            />
            <div>
              <h3 className="font-bold text-[#272222]">{event.organizer?.name}</h3>
              <p className="text-gray-600 text-sm">{event.organizer?.bio || "Event organizer"}</p>
              <div className="flex gap-4 mt-2">
                <div className="text-sm">
                  <span className="font-bold text-[#272222]">{event.organizer?.followers || 0}</span>
                  <span className="text-gray-600 ml-1">Followers</span>
                </div>
                <div className="text-sm">
                  <span className="font-bold text-[#272222]">{event.organizer?.following || 0}</span>
                  <span className="text-gray-600 ml-1">Following</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Register Button */}
        <div className="fixed bottom-20 left-0 right-0 p-4 bg-white border-t border-gray-200 flex justify-center">
          <button className="w-full max-w-md py-3 bg-gradient-to-r from-[#272222] to-[#3a3535] text-white font-bold rounded-xl shadow-lg">
            Register for Event
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}

export default EventDetail