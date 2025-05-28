import { useState, useEffect } from 'react';
import { useParams, useNavigate, Outlet, useLocation, Link } from 'react-router-dom';
import { CheckCircle, MapPin, ArrowLeft, MessageCircle, Mail } from 'lucide-react';
import NormalNav from '../components/NormalNav';
import PersonalProfileEdit from './PersonalProfileEdit';
import { eventData } from '../data/event';

// Enhanced Modal Component with animations
const Modal = ({ isOpen, onClose, children }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  if (!isOpen && !isAnimating) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Animated backdrop */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-60' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* Animated modal */}
      <div 
        className={`relative z-50 bg-[#272222] rounded-2xl shadow-2xl w-[95%] md:w-[667px] max-h-[90vh] mx-4 overflow-y-auto transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-8 scale-95'
        }`}
        onTransitionEnd={() => {
          if (!isOpen) setIsAnimating(false);
        }}
      >
        {children}
      </div>
    </div>
  );
};

const ProfilePage = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { id, albumId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const isPics = location.pathname.endsWith('/gallery');
  const isMyEvents = location.pathname.includes('my-event');
  const showNestedRoute = isPics || albumId || isMyEvents;
  const [isHovered, setIsHovered] = useState(null);

  // Format the event data to match the expected structure
  const formattedProfileData = eventData.map(event => ({
    id: event.organizer.id,
    username: event.organizer.name,
    user: event.organizer.username,
    subtext: event.organizer.bio,
    profile: event.organizer.src,
    following: event.organizer.followers,
    followers: event.organizer.followers,
    specialities: event.organizer.specialities,
    galleryImages: event.organizer.galleryImages
  }));

  const [profileData] = useState(formattedProfileData);

  const service = profileData.find(profile => profile.id.toString() === id);

  if (!service) {
    return <div>Profile not found!</div>;
  }

  const handlePicsClick = () => {
    navigate('gallery', { state: { galleryImages: service.galleryImages } });
  };

  const handleEventsClick = () => {
    navigate('');
  };

  const handleMyEventsClick = () => {
    navigate('my-event/details'); // Navigate to the details view by default
  };

  // Function to handle edit button click
  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  if (albumId) {
    return (
      <div className="p-4 mt-20 max-w-[1440px] mx-auto">
        <Outlet />
      </div>
    );
  }

  return (
    <div>
      <NormalNav />
      <div className="w-full px-4  mt-16">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-gray-700 hover:text-[#272222] transition-colors"
        >
          <ArrowLeft size={18} />
          <span className="text-sm">Go back</span>
        </button>
      </div>
      <div className="flex flex-col lg:flex-row p-4 gap-6 mt-2 max-w-[1440px] mx-auto font-sans">
        {/* Left Profile Section */}
        <div className="w-full lg:w-80 bg-white rounded-2xl p-6 h-fit shadow-lg border border-gray-100">
          <div className="relative mb-6 flex justify-center">
            <img
              src={service.profile}
              alt={service.username}
              className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-[#272222] shadow-lg"
            />
          </div>

          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-xl md:text-2xl font-bold mb-1 text-[#272222]">
                {service.username}
              </h2>
              <CheckCircle className="w-4 h-4 text-blue-400" />
            </div>
            <p className="text-xl text-orange-300 mb-1 ">
              {service.user}
            </p>
            <p className="text-sm text-[#272222]">{service.subtext}</p>
            <div className="flex items-center justify-center gap-1 mt-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>Based in Nairobi, Kenya</span>
            </div>
          </div>

          <div className="flex justify-center gap-8 mb-6">
            <div className="text-center">
              <div className="font-bold text-xl text-[#272222]">{service.followers}</div>
              <div className="text-sm text-gray-600">followers</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-xl text-[#272222]">{service.following}</div>
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
            </div>
          </div>
        </div>

        {/* Right Gallery Section */}
        <div className="flex-1">
          <div className="flex justify-center gap-4 md:gap-8 items-center mb-6">
            <button
              onClick={handleEventsClick}
              className={`flex gap-2 items-center px-4 md:px-5 py-2 font-medium text-sm transition-all duration-200 ${
                !isPics && !isMyEvents
                  ? 'bg-[#272222] text-white rounded-full shadow-md'
                  : 'border border-gray-200 rounded-full bg-gray-100 text-[#272222] hover:bg-gray-200'
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

            <button
              onClick={handlePicsClick}
              className={`flex gap-2 items-center px-4 md:px-5 py-2 font-medium text-sm transition-all duration-200 ${
                isPics
                  ? 'bg-[#272222] text-white rounded-full shadow-md'
                  : 'border border-gray-200 rounded-full bg-gray-100 text-[#272222] hover:bg-gray-200'
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

            <button
              onClick={handleMyEventsClick}
              className={`flex gap-2 items-center px-4 md:px-5 py-2 font-medium text-sm transition-all duration-200 ${
                isMyEvents
                  ? 'bg-[#272222] text-white rounded-full shadow-md'
                  : 'border border-gray-200 rounded-full bg-gray-100 text-[#272222] hover:bg-gray-200'
              }`}
            >
              My Events
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
          </div>

          {/* Conditionally render Events grid or PicsGallery via Outlet */}
          {showNestedRoute ? (
            <div className="max-w-3xl mx-auto">
              <Outlet />
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {service.galleryImages.map((image) => {
                // If the gallery image has albums, map through them
                if (image.album && image.album.length > 0) {
                  return image.album.map((album) => (
                    <Link
                      key={`profile/${id}/album/${album.id}`}
                      to={`album/${album.id}`}  // relative route: /profile/:id/album/:albumId
                      className="relative group"
                      onMouseEnter={() => setIsHovered(image.id)}
                      onMouseLeave={() => setIsHovered(null)}
                    >
                      <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                        <div className="absolute top-3 right-3 bg-[#272222] text-white font-medium text-xs px-3 py-1.5 rounded-xl shadow-md z-10">
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
                          src={image.src}
                          alt={`Gallery ${image.id}`}
                          className="w-full h-[300px] sm:h-[250px] md:h-[300px] lg:h-[312px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${
                            isHovered === image.id ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          <div className="absolute bottom-3 right-3">
                            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ));
                } else {
                  // If there is no album on this gallery image, render it normally.
                  return (
                    <div key={image.id} className="relative group">
                      <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                        <div className="absolute top-3 right-3 bg-[#272222] text-white font-medium text-xs px-3 py-1.5 rounded-xl shadow-md z-10">
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
                          src={image.src}
                          alt={`Gallery ${image.id}`}
                          className="w-full h-[300px] sm:h-[250px] md:h-[300px] lg:h-[312px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${
                            isHovered === image.id ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          <div className="absolute bottom-3 right-3">
                            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>
      </div>
      {/* Enhanced Modal */}
      <Modal 
        isOpen={isEditModalOpen} 
        onClose={() => setIsEditModalOpen(false)}
      >
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
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>

          {/* Modal content */}
          <PersonalProfileEdit 
            onClose={() => setIsEditModalOpen(false)}
            initialData={service}
          />
        </div>
      </Modal>
    </div>
  );
};

export default ProfilePage;
