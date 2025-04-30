import React, { useState } from 'react';
import { Camera, MessageCircle, ThumbsUp, Send } from 'lucide-react';
import BottomNav from '../components/HomeNavBottom'

const HappeningNow = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [commentText, setCommentText] = useState("");

  const activeUsers = [
    { id: 1, name: 'timothy', online: true },
    { id: 2, name: 'andrew', online: true },
    { id: 3, name: 'nancy', online: true },
    { id: 4, name: 'james', online: true },
    { id: 5, name: 'sarah', online: true }
  ];

  const comments = [
    {
      id: 1,
      user: "timothy",
      avatar: "https://images.pexels.com/photos/30392508/pexels-photo-30392508/free-photo-of-elegant-woman-in-bright-pink-blouse-posing.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "This event is amazing! 🔥",
      time: "2m ago",
      likes: 12,
    },
    {
      id: 2,
      user: "andrew",
      avatar: "https://images.pexels.com/photos/29976870/pexels-photo-29976870/free-photo-of-contemplative-young-adult-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Can't wait to see what happens next",
      time: "1m ago",
      likes: 5,
    },
    {
      id: 3,
      user: "nancy",
      avatar: "https://images.pexels.com/photos/30447781/pexels-photo-30447781/free-photo-of-portrait-of-woman-in-red-sweater-with-festive-greenery.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Where is this happening? I want to join!",
      time: "just now",
      likes: 3,
    },
    {
      id: 4,
      user: "james",
      avatar: "https://images.pexels.com/photos/30039441/pexels-photo-30039441/free-photo-of-emotional-portrait-of-a-woman-in-low-light.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "The sound quality is perfect 👌",
      time: "5m ago",
      likes: 8,
    },
    {
      id: 5,
      user: "sarah",
      avatar: "https://images.pexels.com/photos/15566416/pexels-photo-15566416/free-photo-of-beautiful-woman-with-necklace-on-hill.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "I'm loving this performance!",
      time: "3m ago",
      likes: 15,
    },
  ];

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      // In a real app, you would add the comment to the list
      setCommentText("");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header - Made Sticky */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo Section */}
          <div className='flex justify-start items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-10 h-10 md:w-10 md:h-10">
                            <rect 
                            x="20" 
                            y="20" 
                            width="160" 
                            height="160" 
                            rx="50" 
                            fill="#D9D9D9"
                            stroke="#262727"
                            strokeWidth="12"
                            className="animate-pulse"
                            />
                            <path
                            d="M 100 60
                                A 40 40 0 1 0 140 100
                                L 120 100
                                A 20 20 0 1 1 100 80
                                Z"
                            fill="#262727"       
                            className="animate-bounce-subtle"
                            />
                            <circle 
                            cx="75" 
                            cy="100" 
                            r="6" 
                            fill="#262727"           
                            className="animate-ping-subtle"
                            />
                    </svg>
                        <h1 className="hidden md:block font-[Pacifico] text-xl md:text-2xl text-[#000000]">Catchapp</h1>
                    </div>
          <div className="bg-[#272222] rounded-full px-4 py-1.5">
            <h2 className="text-white text-sm font-medium">Happening Now</h2>
          </div>
          <div className="w-6 h-6"></div> {/* Empty div for flex alignment */}
        </div>
      </header>
      
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-4">
        {/* Active Users - Horizontal Scrollable */}
        <div className="mb-4 -mx-4">
          <div className="px-4">
            <div className="flex justify-center gap-2 pb-0">
              {activeUsers.map(user => (
                <div key={user.id} className="flex flex-col items-center">
                  <div className="relative">
                    <img
                      src="https://images.pexels.com/photos/30392508/pexels-photo-30392508/free-photo-of-elegant-woman-in-bright-pink-blouse-posing.jpeg?auto=compress&cs=tinysrgb&w=600"
                      className="w-14 h-14 rounded-full object-cover border-2 border-gray-900"
                      alt={user.name}
                    />
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
                  </div>
                  <span className="text-xs mt-1">{user.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content - Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Stream Section - Takes 2/3 on large screens */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              {/* Stream Header */}
              <div className="bg-[#272222] text-white p-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img
                    src="https://images.pexels.com/photos/30447781/pexels-photo-30447781/free-photo-of-portrait-of-woman-in-red-sweater-with-festive-greenery.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Stream host"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="font-medium">wesley</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-red-500 h-2 w-2 rounded-full"></span>
                  <span className="text-xs">Nairobi, Kasarani</span>
                </div>
              </div>
              
              {/* Stream Content */}
              <div className="relative aspect-video bg-gray-800]">
                <img
                  src="https://images.pexels.com/photos/30433578/pexels-photo-30433578/free-photo-of-vibrant-concert-crowd-with-stage-lights.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Stream"
                  className="w-full h-full object-cover"
                />
                
                {/* Stream Controls */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
                  <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Camera className="w-6 h-6 text-white" />
                  </button>
                  <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                  </button>
                </div>
                
                {/* Viewer Count */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs">
                  2.4k watching
                </div>
              </div>
              
              {/* Stream Info */}
              <div className="p-4">
                <h3 className="font-bold">Live Concert at Kasarani Stadium</h3>
                <p className="text-sm text-gray-600 mt-1">Join us for this amazing live performance featuring top artists!</p>
              </div>
            </div>
          </div>

          {/* Chat Section - Mobile Toggle & Fixed 1/3 on large screens */}
          <div className="relative">
            {/* Mobile Toggle Button */}
            <button
              onClick={() => setIsChatOpen(!isChatOpen)}
              className="lg:hidden w-full bg-gray-900 text-white py-2 rounded-xl mb-2 flex items-center justify-center gap-2 shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              {isChatOpen ? "Hide Comments" : "Show Comments"}
            </button>

            {/* Comments Container */}
            <div
              className={`
                bg-white rounded-xl shadow-md border border-gray-100
                ${isChatOpen ? "block" : "hidden"} lg:block
                h-[500px] lg:h-full
              `}
            >
              <div className="bg-[#272222] text-white p-3 flex items-center justify-between">
                <h3 className="font-medium flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Live Comments
                </h3>
                <span className="text-xs bg-red-500 px-2 py-0.5 rounded-full">Live</span>
              </div>

              {/* Comments List */}
              <div className="h-[calc(100%-110px)] overflow-y-auto p-3 space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex gap-3">
                    <img
                      src={comment.avatar}
                      alt={comment.user}
                      className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-xs font-bold text-gray-800">{comment.user}</p>
                        <span className="text-xs text-gray-500">{comment.time}</span>
                      </div>
                      <p className="text-sm text-gray-700 mt-1">{comment.text}</p>
                      <div className="flex items-center gap-4 mt-1">
                        <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
                          <ThumbsUp className="w-3.5 h-3.5" />
                          <span className="text-xs">{comment.likes}</span>
                        </button>
                        <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span className="text-xs">Reply</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comment Input */}
              <div className="p-3 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <img
                    src="https://images.pexels.com/photos/29976870/pexels-photo-29976870/free-photo-of-contemplative-young-adult-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Your avatar"
                    className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                  />
                  <input
                    type="text"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Add a comment..."
                    className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                  <button
                    onClick={handleSubmitComment}
                    disabled={!commentText.trim()}
                    className={`p-2 rounded-full ${
                      commentText.trim() ? "bg-gray-900 text-white hover:bg-black" : "bg-gray-200 text-gray-400"
                    } transition-colors`}
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default HappeningNow;