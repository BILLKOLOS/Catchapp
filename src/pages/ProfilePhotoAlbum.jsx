import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImagePlus, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { eventData } from '../data/event';

const ProfilePhotoAlbum = () => {
  const { id, albumId } = useParams(); // albumId comes from /album/:albumId
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get the profile data for the organizer with id = 'id'
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

  const service = formattedProfileData.find(
    profile => profile.id.toString() === id
  );

  if (!service) {
    return <div>Profile not found!</div>;
  }

  // Flatten all albums from all gallery images
  const allAlbums = service.galleryImages.flatMap(image => image.album || []);
  
  // Find the album with id matching albumId
  const album = allAlbums.find(
    alb => alb.id.toString() === albumId
  );

  if (!album) {
    return <div className="p-8 text-center text-black">
      Album not found. ID: {albumId}
    </div>;
  }

  const handleNextImage = (e) => {
    if (!album?.images) return;
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % album.images.length);
  };

  const handlePrevImage = (e) => {
    if (!album?.images) return;
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + album.images.length) % album.images.length);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen p-2 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#272222] text-white p-4 sm:p-5 lg:p-6">
          <div className="flex justify-between items-start sm:items-center">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-wide mb-2">
                {album.name}
              </h1>
              <div className="opacity-80 space-y-1">
                <p className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                  <span className="text-xs sm:text-sm font-medium">
                    {album.date}
                  </span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full inline-block sm:inline mt-1 sm:mt-0">
                    {album.time}
                  </span>
                </p>
                <p className="text-xs sm:text-sm">{album.location}</p>
              </div>
            </div>
            <button className="bg-white/20 hover:bg-white/30 transition p-2 sm:p-3 rounded-full">
              <ImagePlus size={20} className="text-white sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="p-2 sm:p-4 lg:p-6">
          <div className="grid grid-cols-3 grid-rows-4 gap-2 sm:gap-3 lg:gap-4 h-[400px] sm:h-[600px] lg:h-[800px]">
            {album.images?.map((image, index) => (
              <div 
                key={index} 
                className={`${image.gridClass} overflow-hidden rounded-lg sm:rounded-xl shadow-md lg:shadow-lg relative group cursor-pointer`}
                onClick={() => {
                  setSelectedImage(image.src);
                  setCurrentImageIndex(index);
                }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xs sm:text-sm bg-black/50 px-2 sm:px-3 py-1 rounded-full">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage && album.images && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:bg-white/20 p-2 rounded-full transition"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            <button 
              className="absolute left-2 sm:left-4 text-white hover:bg-white/20 p-1 sm:p-2 rounded-full transition"
              onClick={handlePrevImage}
            >
              <ChevronLeft className="w-8 h-8 sm:w-12 sm:h-12" />
            </button>

            <div className="max-w-4xl max-h-[80vh] sm:max-h-[85vh] lg:max-h-[90vh] flex flex-col items-center">
              <img 
                src={album.images[currentImageIndex].src} 
                alt={album.images[currentImageIndex].alt}
                className="max-w-full max-h-full object-contain rounded-lg sm:rounded-xl shadow-xl sm:shadow-2xl"
              />
              <p className="text-white mt-2 sm:mt-4 text-center opacity-70 text-sm sm:text-base">
                {album.images[currentImageIndex].alt}
              </p>
            </div>

            <button 
              className="absolute right-2 sm:right-4 text-white hover:bg-white/20 p-1 sm:p-2 rounded-full transition"
              onClick={handleNextImage}
            >
              <ChevronRight className="w-8 h-8 sm:w-12 sm:h-12" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePhotoAlbum;
