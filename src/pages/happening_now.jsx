import { Camera, Home, Settings, Calendar, Gift } from 'lucide-react';
import BottomNav from '../components/HomeNavBottom';
import NormalNav from '../components/NormalNav';

const HappeningNow = () => {
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
      <div className="bg-[#272222] max-w-[200px] mx-auto w-full px-2 py-2 mt-14 rounded-[30px]">
        <div className="flex items-center justify-center">
          <h2 className="text-white text-[1rem] font-bold">Happening Now</h2>
        </div>
      </div>
      
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="flex-1">
            {/* Active Users */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {activeUsers.map(user => (
                <div key={user.id} className="bg-gray-900 text-white rounded-full px-4 py-2 flex items-center gap-2">
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

            {/* Stream Content */}
            <div className='flex gap-4'>
              <div className="relative w-full rounded-3xl overflow-hidden mb-6">
                <img
                  src="https://images.pexels.com/photos/30433578/pexels-photo-30433578/free-photo-of-vibrant-concert-crowd-with-stage-lights.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Stream"
                  className="w-full h-[400px] object-cover"
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
                        className="w-14 h-14 object-cover rounded-full border-4 border-[#272222]"
                      />
                      <span className="text-white font-bold">wesley</span>
                    </div>
                    <div className='w-full ml-80 flex gap-6 justify-start items-center'>
                      <div className='bg-gray-400 border-2 border-[#272222] w-14 h-14 rounded-full'></div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
                {/* Chat Sidebar */}
              <div className="w-full lg:w-64 bg-gray-100 rounded-[30px] p-4 h-[367px] overflow-y-auto">
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

          
        </div>
      </main>

      <footer className="mt-auto">
        <BottomNav />
      </footer>
    </div>
  );
};

export default HappeningNow;