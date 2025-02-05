import React, { useState } from 'react';
import { Camera, Home, Settings, Calendar, Gift } from 'lucide-react';
import BottomNav from '../components/HomeNavBottom';
import NormalNav from '../components/NormalNav';

const HappeningNow = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const activeUsers = [
    { id: 1, name: 'timothy', online: true },
    { id: 2, name: 'andrew', online: true },
    { id: 3, name: 'nancy', online: true }
  ];

  const chatMessages = [
    { id: 1, message: 'hi' },
    { id: 2, message: 'hi too' },
    { id: 3, message: 'type' },
    { id: 4, message: 'hae' },
    { id: 5, message: 'hey' },
    { id: 6, message: 'type' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NormalNav />
      
      <div className="bg-[#272222] max-w-[200px] mx-auto w-full px-2 py-2 mt-20 rounded-[30px]">
        <div className="flex items-center justify-center">
          <h2 className="text-white text-[1rem] font-bold">Happening Now</h2>
        </div>
      </div>
      
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
        {/* Active Users - Scrollable on Mobile */}
        <div className="overflow-x-auto pb-4">
          <div className="flex justify-center gap-4 min-w-max">
            {activeUsers.map(user => (
              <div key={user.id} className="bg-gray-900 text-white rounded-full px-4 py-2 flex items-center gap-2 flex-shrink-0">
                <img
                  src="https://images.pexels.com/photos/30392508/pexels-photo-30392508/free-photo-of-elegant-woman-in-bright-pink-blouse-posing.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="w-8 h-8 rounded-full object-cover"
                  alt={user.name}
                />
                <span className="text-sm">{user.name}</span>
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              </div>
            ))}
          </div>
        </div>

        {/* Stream Content - Responsive Layout */}
        <div className='flex flex-col lg:flex-row gap-4'>
          {/* Stream Section */}
          <div className="flex-1 relative rounded-md md:rounded-[30px] overflow-hidden mb-6">
            <img
              src="https://images.pexels.com/photos/30433578/pexels-photo-30433578/free-photo-of-vibrant-concert-crowd-with-stage-lights.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Stream"
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
            <div className="absolute top-4 left-1/2 -translate-x-1/2">
              <div className="bg-white/20 backdrop-blur px-4 py-1 rounded-full flex items-center gap-2">
                <span className="text-white">Nairobi, kasarani</span>
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              </div>
            </div>
            <div className="absolute bottom-4 w-full px-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img
                    src="https://images.pexels.com/photos/30447781/pexels-photo-30447781/free-photo-of-portrait-of-woman-in-red-sweater-with-festive-greenery.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="User"
                    className="w-10 md:w-14 h-10 md:h-14 object-cover rounded-full border-4 border-[#272222]"
                  />
                  <span className="text-white font-bold text-sm md:text-base">wesley</span>
                </div>
                <div className='w-full flex justify-center gap-4 items-center'>
                  <div className='bg-gray-400 border-2 border-[#272222] w-10 h-10 md:w-14 md:h-14 rounded-full'></div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6 md:w-8 md:h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Section - Mobile Toggle */}
          <div className="w-full lg:w-64">
            {/* Mobile Chat Toggle */}
            <button 
              onClick={() => setIsChatOpen(!isChatOpen)}
              className="lg:hidden w-full bg-gray-400 py-2 rounded-full mb-4 flex items-center justify-center"
            >
              {isChatOpen ? 'Close Chat' : 'Open Chat'}
            </button>

            {/* Chat Sidebar - Responsive */}
            <div className={`
              bg-gray-100 rounded-[30px] p-4 
              ${isChatOpen ? 'block' : 'hidden'} lg:block
              h-[300px] md:h-[367px] 
              overflow-y-auto
            `}>
              <div className="flex flex-col gap-2">
                {chatMessages.map(msg => (
                  <div key={msg.id} className="bg-white rounded-full px-4 py-2">
                    <span className="text-[#272222]">{msg.message}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-auto">
        <BottomNav />
      </footer>
    </div>
  );
};

export default HappeningNow;