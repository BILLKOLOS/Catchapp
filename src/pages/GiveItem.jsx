import { useState, useEffect } from "react"
import { useParams, useNavigate, Outlet, useLocation, Link } from "react-router-dom"
import { Mail, Phone, MapPin, Camera, Star, Heart } from "lucide-react"
import ServiceProviderEdit from "./ServiceProvideEdit"
import serviceData from "../data/service"

// Enhanced Modal Component with animations
const Modal = ({ isOpen, onClose, children }) => {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true)
    }
  }, [isOpen])

  if (!isOpen && !isAnimating) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Animated backdrop */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-60" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Animated modal */}
      <div
        className={`relative z-50 bg-[#272222] rounded-2xl shadow-2xl w-[95%] md:w-[667px] max-h-[90vh] mx-4 overflow-y-auto transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
        }`}
        onTransitionEnd={() => {
          if (!isOpen) setIsAnimating(false)
        }}
      >
        {children}
      </div>
    </div>
  )
}

const PhotoProfile = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const { id, eventId } = useParams() // This is the profile id
  const navigate = useNavigate()
  const location = useLocation()

  // Check if we're in the pics view by examining the pathname
  const isPics = location.pathname.endsWith("/pics")
  const isReviews = location.pathname.endsWith("/reviews")

  // Determine if we are in a nested route (either "pics" or an event album)
  const showNestedRoute = isPics || isReviews || eventId

  const [isHovered, setIsHovered] = useState(null)
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    // Find the profile data when the component mounts or ID changes
    const formattedProfileData = serviceData.flatMap((service) =>
      service.services.map((serviceItem) => ({
        id: serviceItem.id,
        username: serviceItem.profileData.username,
        subtext: serviceItem.profileData.subtext,
        profile: serviceItem.profileData.profile,
        following: serviceItem.profileData.following,
        followers: serviceItem.profileData.followers,
        specialties: serviceItem.profileData.specialties,
        galleryImages: serviceItem.profileData.galleryImages,
      })),
    )

    const foundProfile = formattedProfileData.find((profile) => profile.id.toString() === id)

    setProfile(foundProfile)
  }, [id])

  if (!profile) {
    return (
      <div className="p-4 mt-20 text-center">
        <div className="animate-spin inline-block w-8 h-8 border-4 border-[#272222] border-t-transparent rounded-full"></div>
        <p className="mt-2 text-gray-600">Loading profile...</p>
      </div>
    )
  }

  // Navigate to the nested pics route
  const handlePicsClick = () => {
    navigate("pics", { state: { galleryImages: profile.galleryImages } })
  }

  const handleReviewsClick = () => {
    navigate("reviews")
  }

  const handleEventsClick = () => {
    navigate("")
  }

  // Function to handle edit button click
  const handleEditClick = () => {
    setIsEditModalOpen(true)
  }

  // Handle profile updates from the edit modal
  const handleProfileUpdate = (updatedProfile) => {
    setProfile(updatedProfile)
    setIsEditModalOpen(false)
  }

  if (eventId) {
    return (
      <div className="p-4 mt-20 max-w-[1440px] mx-auto">
        <Outlet />
      </div>
    )
  }

  return (
    <div className="flex flex-col lg:flex-row p-4 gap-6 mt-20 max-w-[1440px] mx-auto font-sans">
      {/* Left Profile Section */}
      <div className="w-full lg:w-80 bg-white rounded-2xl p-6 h-fit shadow-lg border border-gray-100">
        <div className="relative mb-6 flex justify-center">
          <div className="relative">
            <img
              src={profile.profile || "/placeholder.svg"}
              alt={profile.username}
              className="w-28 h-28 rounded-full object-cover border-4 border-[#272222] shadow-lg"
            />
            <div className="absolute bottom-1 right-1 bg-[#272222] text-white p-1.5 rounded-full shadow-md hover:bg-black transition-colors cursor-pointer">
              <Camera className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold mb-1 text-[#272222]">{profile.username}</h2>
          <p className="text-sm text-gray-600">{profile.subtext}</p>
        </div>

        <div className="flex justify-center gap-8 mb-6">
          <div className="text-center">
            <div className="font-bold text-xl text-[#272222]">{profile.followers}</div>
            <div className="text-sm text-gray-600">followers</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-xl text-[#272222]">{profile.following}</div>
            <div className="text-sm text-gray-600">following</div>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <button className="flex-1 bg-[#272222] text-white py-2.5 rounded-full text-sm font-medium hover:bg-black transition-colors shadow-md">
            Follow
          </button>
          <div className="flex gap-2">
            <button className="p-2.5 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
              <Mail className="w-5 h-5 text-[#272222]" />
            </button>
            <button className="p-2.5 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
              <Phone className="w-5 h-5 text-[#272222]" />
            </button>
          </div>
        </div>

        <div>
          <p className="text-md font-bold mb-3 text-[#272222] flex items-center gap-2">
            <Star className="w-4 h-4" />
            Specialties
          </p>
          <div className="flex flex-wrap gap-2">
            {profile.specialties.map((specialty) => (
              <span
                key={specialty}
                className="px-3 py-1 text-white bg-[#272222] rounded-full text-xs font-medium shadow-sm hover:bg-black transition-colors cursor-default"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Gallery Section */}
      <div className="flex-1">
        <div className="flex justify-center gap-4 md:gap-8 items-center mb-6">
          {/* Events button */}
          <button
            onClick={handleEventsClick}
            className={`flex gap-2 items-center px-4 md:px-5 py-2 font-medium text-sm transition-all duration-200 ${
              !isPics && !isReviews
                ? "bg-[#272222] text-white rounded-full shadow-md"
                : "border border-gray-200 rounded-full bg-gray-100 text-[#272222] hover:bg-gray-200"
            }`}
          >
            Events
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </button>

          {/* Pics button */}
          <button
            onClick={handlePicsClick}
            className={`flex gap-2 items-center px-4 md:px-5 py-2 font-medium text-sm transition-all duration-200 ${
              isPics
                ? "bg-[#272222] text-white rounded-full shadow-md"
                : "border border-gray-200 rounded-full bg-gray-100 text-[#272222] hover:bg-gray-200"
            }`}
          >
            Pics
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Z"
              />
            </svg>
          </button>

          {/* Reviews button */}
          <button
            onClick={handleReviewsClick}
            className={`flex gap-2 items-center px-4 md:px-5 py-2 font-medium text-sm transition-all duration-200 ${
              isReviews
                ? "bg-[#272222] text-white rounded-full shadow-md"
                : "border border-gray-200 rounded-full bg-gray-100 text-[#272222] hover:bg-gray-200"
            }`}
          >
            Reviews
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
          </button>
        </div>

        {/* Conditionally render Events grid or PicsGallery via Outlet */}
        {showNestedRoute ? (
          <Outlet />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {profile.galleryImages.map((image) => {
              if (image.album && image.album.length > 0) {
                return image.album.map((album) => (
                  <Link
                    key={`profile/${id}/album/${album.id}`}
                    to={`album/${album.id}`} // relative route: /profile/:id/album/:albumId
                    className="relative group"
                    onMouseEnter={() => setIsHovered(image.id)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                      <div className="absolute top-3 right-3 bg-[#272222] text-white font-medium text-xs px-3 py-1.5 rounded-lg shadow-md z-10">
                        <div className="flex flex-col items-center">
                          <p>{image.date.day}</p>
                          <p>{image.date.month}</p>
                        </div>
                      </div>
                      <div className="absolute flex gap-2 items-center bottom-3 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white font-medium text-xs px-3 py-1.5 rounded-full shadow-md z-10">
                        <MapPin className="w-3.5 h-3.5" />
                        <p>{image.location}</p>
                      </div>
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={`Gallery ${image.id}`}
                        className="w-full h-[250px] md:h-[280px] lg:h-[300px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${
                          isHovered === image.id ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <div className="absolute bottom-3 right-3">
                          <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                            <Heart className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              } else {
                // If there is no album on this gallery image, render it normally.
                return (
                  <div key={image.id} className="relative group">
                    <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                      <div className="absolute top-3 right-3 bg-[#272222] text-white font-medium text-xs px-3 py-1.5 rounded-lg shadow-md z-10">
                        <div className="flex flex-col items-center">
                          <p>{image.date.day}</p>
                          <p>{image.date.month}</p>
                        </div>
                      </div>
                      <div className="absolute flex gap-2 items-center bottom-3 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white font-medium text-xs px-3 py-1.5 rounded-full shadow-md z-10">
                        <MapPin className="w-3.5 h-3.5" />
                        <p>{image.location}</p>
                      </div>
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={`Gallery ${image.id}`}
                        className="w-full h-[250px] md:h-[280px] lg:h-[300px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${
                          isHovered === image.id ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <div className="absolute bottom-3 right-3">
                          <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                            <Heart className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            })}
          </div>
        )}
      </div>

      {/* Enhanced Modal */}
      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        <div className="relative">
          {/* Close button */}
          <button
            onClick={() => setIsEditModalOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal content - Pass current profile data and update handler */}
          <ServiceProviderEdit
            onClose={() => setIsEditModalOpen(false)}
            initialData={profile}
            onUpdate={handleProfileUpdate}
          />
        </div>
      </Modal>
    </div>
  )
}

export default PhotoProfile

