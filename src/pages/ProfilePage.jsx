import React, { useState } from 'react';
import { Mail, Search, CheckCircle, MapPin, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';

const EventCard = ({ location, image, date }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={image} 
        alt={location}
        className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-70'}`} />
      
      <div className="absolute top-2 right-2">
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-1 text-center min-w-[40px]">
          <div className="text-white text-xs font-bold">{date.day}</div>
          <div className="text-white text-xs font-medium">{date.month}</div>
        </div>
      </div>

      <div className="absolute bottom-2 left-2 transform transition-all duration-300">
        <div className="bg-[#3E2723]/90 rounded-lg px-2 py-1 backdrop-blur-sm">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-white/90" />
            <span className="text-white text-xs font-medium">{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfilePage = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(500);

  const events = [
    { 
      location: 'Paris', 
      type: 'drinks',
      file: 'https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: { day: '24', month: 'Dec' }
    },
    { 
      location: 'Nairobi', 
      type: 'food',
      file: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: { day: '15', month: 'Jan' }
    },
    { 
      location: 'Nairobi', 
      type: 'graduation',
      file: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: { day: '28', month: 'Feb' }
    },
    { 
      location: 'Capetown', 
      type: 'crowd',
      file: 'https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: { day: '03', month: 'Mar' }
    },
    { 
      location: 'Nairobi', 
      type: 'presentation',
      file: 'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: { day: '17', month: 'Apr' }
    },
    { 
      location: 'Cairo', 
      type: 'fashion',
      file: 'https://images.pexels.com/photos/698907/pexels-photo-698907.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: { day: '22', month: 'May' }
    }
  ];

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    setFollowerCount(prev => isFollowing ? prev - 1 : prev + 1);
  };

  return (
    <div>
        <Navbar />
        <div className="max-w-2xl mt-20 rounded-[30px] mx-auto bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
            <div className="bg-[#272222] text-white p-4 rounded-[30px]">
                <div className="flex items-start justify-between mb-4">
                <div className="relative group">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 ring-2 ring-white/20 transform transition-transform group-hover:scale-105" />
                    <div className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-xs text-white">View</span>
                    </div>
                </div>
                <button className="bg-zinc-800 p-2 rounded-full hover:bg-zinc-700 transition-colors transform active:scale-95">
                    <Mail className="w-5 h-5" />
                </button>
                </div>
                
                <div className="mb-4">
                <div className="flex items-center gap-2">
                    <h2 className="text-xl font-semibold">Brian Gikunga</h2>
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-gray-400 text-sm">brian</div>
                </div>

                <div className="mb-4">
                <p className="text-sm text-gray-300 leading-relaxed">
                    Digital explorer & event enthusiast. Capturing moments across the globe 🌍 
                    Creating unforgettable experiences through photography and events.
                </p>
                <div className="flex items-center gap-1 mt-2 text-sm text-gray-400">
                    <Globe className="w-4 h-4" />
                    <span>Based in Nairobi, Kenya</span>
                </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                <button 
                    onClick={handleFollow}
                    className={`px-6 py-1.5 rounded-full transition-all duration-300 transform active:scale-95 font-medium
                    ${isFollowing 
                        ? 'bg-zinc-800 text-white hover:bg-red-500 hover:text-white' 
                        : 'bg-white text-black hover:bg-gray-100'}`}
                >
                    {isFollowing ? 'Unfollow' : 'Follow'}
                </button>
                </div>

                <div className="flex gap-8">
                <div className="cursor-pointer hover:bg-zinc-800 p-2 rounded-lg transition-colors">
                    <div className="font-semibold">{followerCount}</div>
                    <div className="text-sm text-gray-400">followers</div>
                </div>
                <div className="cursor-pointer hover:bg-zinc-800 p-2 rounded-lg transition-colors">
                    <div className="font-semibold">25</div>
                    <div className="text-sm text-gray-400">following</div>
                </div>
                </div>
            </div>

            <div className="mt-2">
                <div className="flex items-center justify-between p-3">
                <h3 className="text-lg font-semibold">Events</h3>
                <div className="flex items-center gap-2 bg-white/50 px-3 py-1 rounded-full hover:bg-white/80 transition-colors cursor-pointer">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm text-gray-600">pics</span>
                </div>
                </div>

                <div className="grid grid-cols-2 gap-1">
                {events.map((event, index) => (
                    <EventCard 
                    key={index}
                    location={event.location}
                    image={event.file}
                    date={event.date}
                    />
                ))}
                </div>
            </div>
        </div>
    </div>
    
  );
};

export default ProfilePage;