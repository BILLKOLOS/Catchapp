import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImagePlus, ChevronLeft, ChevronRight, X } from 'lucide-react';

const EventPhotoAlbum = () => {
  const { eventId } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const albums = {
    1: {
      name: "sarah",
      subheading: "wedding",
      date: "saturday, june 15",
      time: "9:00 am - 4:00pm",
      location: "egret center nairobi",
      images: [
        { src: "https://images.pexels.com/photos/1756609/pexels-photo-1756609.jpeg?auto=compress&cs=tinysrgb&w=600", 
          gridClass: "row-span-2 col-span-1", alt: "Photographer in yellow jacket" },
        { src: "https://images.pexels.com/photos/1784280/pexels-photo-1784280.jpeg?auto=compress&cs=tinysrgb&w=600", 
          gridClass: "col-span-1", alt: "Conference room meeting" },
        { src: "https://images.pexels.com/photos/106011/pexels-photo-106011.jpeg?auto=compress&cs=tinysrgb&w=600", 
          gridClass: "col-span-1", alt: "Office space" },
        { src: "https://images.pexels.com/photos/30567465/pexels-photo-30567465/free-photo-of-stylish-model-in-sunglasses-and-leather-jacket.jpeg?auto=compress&cs=tinysrgb&w=600", 
          gridClass: "col-span-1", alt: "Person in yellow jacket from behind" },
        { src: "https://images.pexels.com/photos/53265/pexels-photo-53265.jpeg?auto=compress&cs=tinysrgb&w=600", 
          gridClass: "col-span-1", alt: "Empty auditorium" },
        { src: "https://images.pexels.com/photos/30624212/pexels-photo-30624212/free-photo-of-side-profile-portrait-of-stylish-young-man.jpeg?auto=compress&cs=tinysrgb&w=600", 
          gridClass: "col-span-1", alt: "Group gathering" },
        { src: "https://images.pexels.com/photos/30507957/pexels-photo-30507957/free-photo-of-close-up-of-wedding-rings-with-bouquet.jpeg?auto=compress&cs=tinysrgb&w=600", 
          gridClass: "col-span-1", alt: "Group gathering" },
        { src: "https://images.pexels.com/photos/3394225/pexels-photo-3394225.jpeg?auto=compress&cs=tinysrgb&w=600", 
          gridClass: "col-span-1", alt: "Group gathering" }
      ]
    },
    2: {
      name: "John's Birthday",
      date: "Sunday, August 20",
      time: "2:00 PM - 8:00 PM",
      location: "Downtown Arena, Nairobi",
      images: [
        { src: "https://images.pexels.com/photos/7942526/pexels-photo-7942526.jpeg?auto=compress&cs=tinysrgb&w=600", 
          gridClass: "row-span-2 col-span-1", alt: "Birthday cake" },
        { src: "https://images.pexels.com/photos/11625530/pexels-photo-11625530.jpeg?auto=compress&cs=tinysrgb&w=600", 
          gridClass: "row-span-1 col-span-1", alt: "Friends celebrating" },
        { src: "https://images.pexels.com/photos/12845899/pexels-photo-12845899.jpeg?auto=compress&cs=tinysrgb&w=600", 
          gridClass: "row-span-1 col-span-1", alt: "Gift opening" },
        { src: "https://images.pexels.com/photos/30636213/pexels-photo-30636213/free-photo-of-cosplay-group-in-san-jose-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=600", 
          gridClass: "row-span-1 col-span-1", alt: "Dance floor" },
        { src: "https://images.pexels.com/photos/30586672/pexels-photo-30586672/free-photo-of-energetic-youth-party-with-bright-lights.jpeg?auto=compress&cs=tinysrgb&w=600", 
          gridClass: "row-span-1 col-span-1", alt: "Group selfie" },
        { src: "https://images.pexels.com/photos/30609629/pexels-photo-30609629/free-photo-of-joyful-african-wedding-celebration-ceremony.jpeg?auto=compress&cs=tinysrgb&w=600", 
          gridClass: "row-span-1 col-span-1", alt: "Surprise moment" }
      ]
    }
  };

  const album = albums[eventId];

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % album.images.length);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + album.images.length) % album.images.length);
  };

  if (!album) {
    return <div className="p-8 text-center">Album not found</div>;
  }

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
                  <span className="text-xs sm:text-sm font-medium">{album.date}</span>
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
            {album.images.map((image, index) => (
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
        {selectedImage && (
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

export default EventPhotoAlbum;