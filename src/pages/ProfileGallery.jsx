import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ProfileGallery = () => {
  const location = useLocation();
  const { galleryImages } = location.state || {};
  const [isHovered, setIsHovered] = useState(null);

  if (!galleryImages) {
    return <div>No gallery images found.</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 p-4">
      {galleryImages.map((image) => (
        <div
          key={image.id}
          className="relative group"
          onMouseEnter={() => setIsHovered(image.id)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div className="relative overflow-hidden rounded-md">
            <img
              src={image.src}
              alt={`Gallery ${image.id}`}
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[312px] object-cover"
            />
            <div
              className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
                isHovered === image.id ? 'opacity-100' : 'opacity-0'
              }`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileGallery;
