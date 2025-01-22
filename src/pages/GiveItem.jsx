import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Camera, Star, Mail, Phone, MapPin, Heart } from 'lucide-react';

const PhotoProfile = () => {
  const { id } = useParams();

  const [isHovered, setIsHovered] = useState(null);

  const profileData = {
    1: {
      username: 'vk.photography',
      avatar:
          "https://images.pexels.com/photos/29846889/pexels-photo-29846889/free-photo-of-portrait-of-woman-by-lake-in-kaduna-nigeria.jpeg?auto=compress&cs=tinysrgb&w=600",
      subtext: 'Premium Photography',
      following: 500,
      followers: 25,
      rating: 4.8,
      specialties: ['Portraits', 'Events', 'Weddings'],
      galleryImages: [
        {
          id: 1,
          src: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600',
          location: 'Nairobi',
          date: { day: '24', month: 'Dec' },
          price: 24,
          likes: 142,
        },
        {
          id: 2,
          src: 'https://images.pexels.com/photos/30171263/pexels-photo-30171263/free-photo-of-elegant-contemporary-dancer-on-metallic-background.jpeg?auto=compress&cs=tinysrgb&w=600',
          location: 'Nairobi',
          date: { day: '28', month: 'Feb' },
          price: 24,
          likes: 156,
        },
        {
          id: 3,
          src: 'https://images.pexels.com/photos/823816/pexels-photo-823816.jpeg?auto=compress&cs=tinysrgb&w=600',
          location: 'Nairobi',
          date: { day: '03', month: 'Mar' },
          price: 24,
          likes: 198,
        },
        {
          id: 4,
          src: 'https://images.pexels.com/photos/30148410/pexels-photo-30148410/free-photo-of-glamorous-sweet-16-celebrant-with-balloons.jpeg?auto=compress&cs=tinysrgb&w=600',
          location: 'Nairobi',
          date: { day: '03', month: 'Mar' },
          price: 24,
          likes: 198,
        },
      ],
    },
  };

  const service = profileData[id];

  if (!service) {
    return <div className="text-[#272222] font-bold text-2xl">Service not found!</div>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-16 bg-[#272222] text-[#e6d5c9] rounded-[30px] overflow-hidden border border-[#3d2b27]">
      <div className="p-8 bg-gradient-to-b from-[#1a0f0f] to-[#120808]">
        {/* Profile Header */}
        <div className="flex items-center gap-8 mb-8">
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#c4a484] via-[#deb887] to-[#c4a484] p-[1px]">
              <div className="w-full h-full rounded-2xl bg-[#120808] flex items-center justify-center overflow-hidden">
                <img src={service.avatar} className="object-cover text-white" />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-[#deb887] text-[#120808] rounded-full px-2 py-0.5 text-xs font-semibold">
              PRO
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-light tracking-wide mb-1 text-white">
              {service.username}
            </h2>
            <p className="text-sm text-white font-light tracking-wider">
              {service.subtext}
            </p>
          </div>
        </div>

        {/* Rating and Contact */}
        <div className="flex items-center justify-between gap-32 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-400 mr-2">{service.rating}</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${
                    i < Math.floor(service.rating)
                      ? 'text-white'
                      : 'text-gray-300 fill-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="flex gap-4 w-full">
            <button className="p-2.5 rounded-xl bg-[#1e1210] hover:bg-[#2a1815] transition-all duration-300 border border-[#3d2b27]">
              <Mail className="w-5 h-5 text-white" />
            </button>
            <button className="p-2.5 rounded-xl bg-[#1e1210] hover:bg-[#2a1815] transition-all duration-300 border border-[#3d2b27]">
              <Phone className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Follow Button and Stats */}
        <div className="flex items-center justify-between gap-32 mb-8">
          <button className="px-10 py-2.5 bg-gradient-to-r from-[#c4a484] to-[#deb887] text-[#120808] rounded-xl text-sm font-medium hover:opacity-90 transition-all duration-300 shadow-lg">
            Follow
          </button>
          <div className="flex w-full gap-8 text-sm font-light">
            <div className="text-center">
              <div className="text-lg font-normal text-white">{service.following}</div>
              <div className="text-white tracking-wide">following</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-normal text-white">{service.followers}</div>
              <div className="text-white tracking-wide">followers</div>
            </div>
          </div>
        </div>

        {/* Specialties */}
        {service.specialties && (
          <div className="mb-8">
            <p className="text-sm text-white mb-4 tracking-wide">specialties</p>
            <div className="flex flex-wrap gap-2">
              {service.specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="px-5 py-2 bg-[#1e1210] text-white border border-[#3d2b27] rounded-xl text-sm font-light tracking-wide hover:bg-[#2a1815] transition-all duration-300 cursor-pointer"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-3 gap-1 bg-[#2a1815]">
        {service.galleryImages.map((image) => (
          <div
            key={image.id}
            className="relative group"
            onMouseEnter={() => setIsHovered(image.id)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className="relative overflow-hidden bg-[#120808]">
              {/* Date display moved to top-right */}
              <div className="absolute top-3 right-3 z-10">
                <div className="bg-black/20 backdrop-blur-sm rounded-lg p-1 text-center min-w-[40px]">
                  <div className="text-white text-xs font-bold">{image.date.day}</div>
                  <div className="text-white text-xs font-medium">{image.date.month}</div>
                </div>
              </div>
              
              <img
                src={image.src}
                alt={`Gallery image ${image.id}`}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 mix-blend-luminosity"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-[#120808] via-[#120808]/50 to-transparent 
                    transition-all duration-300 ${isHovered === image.id ? 'opacity-90' : 'opacity-0'}`}>
              </div>
            </div>
            <div
              className={`absolute bottom-3 left-3 right-3 transition-all duration-300 
                  ${isHovered === image.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
            >
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-white" />
                  <span className="font-light tracking-wide text-white">{image.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Heart className="w-3 h-3 text-[#deb887]" />
                  <span className="font-light tracking-wide text-[#e6d5c9]">{image.price}k</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoProfile;