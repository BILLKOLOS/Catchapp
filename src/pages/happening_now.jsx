import React, { useState } from 'react';
import { Camera, Home, MessageCircle, ThumbsUp, Send } from 'lucide-react';
import BottomNav from '../components/HomeNavBottom';
import NormalNav from '../components/NormalNav';

const HappeningNow = () => {
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [commentText, setCommentText] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);

  const activeUsers = [
    { id: 1, name: 'timothy', online: true, avatar: "https://images.pexels.com/photos/30392508/pexels-photo-30392508/free-photo-of-elegant-woman-in-bright-pink-blouse-posing.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 2, name: 'andrew', online: true, avatar: "https://images.pexels.com/photos/29976870/pexels-photo-29976870/free-photo-of-contemplative-young-adult-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 3, name: 'nancy', online: true, avatar: "https://images.pexels.com/photos/30447781/pexels-photo-30447781/free-photo-of-portrait-of-woman-in-red-sweater-with-festive-greenery.jpeg?auto=compress&cs=tinysrgb&w=600" }
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

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {!isFullScreen && <NormalNav />}
      
      <main className={`flex-1 max-w-5xl mx-auto mb-16 w-full px-2 ${isFullScreen ? 'pt-0' : 'pt-16 md:pt-20'}`}>
        {!isFullScreen && (
          <div className="flex justify-between items-center mb-3">
            <div className="bg-red-600 px-3 py-1 rounded-lg">
              <h2 className="text-white text-sm font-medium">LIVE</h2>
            </div>
            <h2 className="text-gray-800 font-semibold">Happening Now</h2>
            <div className="w-16"></div> {/* Empty div for spacing */}
          </div>
        )}
        
        <div className={`flex ${isFullScreen ? 'flex-col' : 'flex-col lg:flex-row'} gap-3`}>
          {/* Video Section - YouTube Style */}
          <div className={`${isFullScreen ? 'w-full h-screen' : 'w-full lg:w-2/3'} bg-black rounded-lg overflow-hidden relative`}>
            {/* Video Player */}
            <div className="relative w-full h-0 pb-9/16">
              <img
                src="https://images.pexels.com/photos/30433578/pexels-photo-30433578/free-photo-of-vibrant-concert-crowd-with-stage-lights.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Stream"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              
              {/* Video Overlay Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://images.pexels.com/photos/30447781/pexels-photo-30447781/free-photo-of-portrait-of-woman-in-red-sweater-with-festive-greenery.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="User"
                      className="w-8 h-8 object-cover rounded-full"
                    />
                    <div>
                      <p className="text-white text-sm font-medium">wesley</p>
                      <p className="text-gray-300 text-xs">Nairobi, Kasarani</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleFullScreen}
                      className="bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        {isFullScreen ? (
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M15 9H19.5M15 9V4.5M15 15V19.5M15 15H19.5M9 15H4.5M9 15V19.5" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        )}
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Live indicator */}
              <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                LIVE
              </div>
              
              {/* Viewer count */}
              <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded">
                132 watching
              </div>
            </div>
          </div>
          
          {/* Comments Section - YouTube Style */}
          {!isFullScreen && (
            <div className="w-full lg:w-1/3 h-auto lg:h-80 flex flex-col">
              {/* Mobile Toggle for Comments */}
              <div className="lg:hidden flex justify-between items-center mb-2">
                <button
                  onClick={() => setIsChatOpen(!isChatOpen)}
                  className="text-gray-800 text-sm font-medium flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  {isChatOpen ? "Hide chat" : "Show chat"}
                </button>
                <span className="text-xs text-gray-500">132 watching</span>
              </div>
              
              {/* Comments Container - YouTube Style */}
              {isChatOpen && (
                <div className="flex flex-col h-full border border-gray-200 rounded-lg bg-white overflow-hidden">
                  {/* Active Users - YouTube Style */}
                  <div className="p-2 border-b border-gray-200">
                    <div className="flex gap-1 overflow-x-auto hide-scrollbar">
                      {activeUsers.map(user => (
                        <div key={user.id} className="flex-shrink-0">
                          <div className="relative">
                            <img
                              src={user.avatar}
                              className="w-7 h-7 rounded-full object-cover border-2 border-white"
                              alt={user.name}
                            />
                            <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white"></span>
                          </div>
                        </div>
                      ))}
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600">
                        +12
                      </div>
                    </div>
                  </div>
                  
                  {/* Comments List */}
                  <div className="flex-1 overflow-y-auto p-2 space-y-3 bg-gray-50">
                    {comments.map((comment) => (
                      <div key={comment.id} className="flex gap-2">
                        <img
                          src={comment.avatar}
                          alt={comment.user}
                          className="w-6 h-6 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex-1">
                          <div className="flex items-baseline gap-2">
                            <p className="text-xs font-medium text-gray-700">{comment.user}</p>
                            <span className="text-xs text-gray-400">{comment.time}</span>
                          </div>
                          <p className="text-xs text-gray-800">{comment.text}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <button className="flex items-center gap-1 text-gray-400 hover:text-gray-600">
                              <ThumbsUp className="w-3 h-3" />
                              <span className="text-xs">{comment.likes}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Comment Input - YouTube Style */}
                  <div className="p-2 bg-white border-t border-gray-200">
                    <form onSubmit={handleSubmitComment} className="flex items-center gap-2">
                      <img
                        src="https://images.pexels.com/photos/29976870/pexels-photo-29976870/free-photo-of-contemplative-young-adult-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Your avatar"
                        className="w-6 h-6 rounded-full object-cover flex-shrink-0"
                      />
                      <input
                        type="text"
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        placeholder="Chat..."
                        className="flex-1 bg-gray-100 rounded-full px-3 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                      <button
                        type="submit"
                        disabled={!commentText.trim()}
                        className={`p-1 rounded-full ${
                          commentText.trim() ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-200 text-gray-400"
                        } transition-colors`}
                      >
                        <Send className="w-3 h-3" />
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Video Info Section (displayed below video) */}
        {!isFullScreen && (
          <div className="mt-3 p-3 bg-white rounded-lg border border-gray-200">
            <h1 className="text-lg font-bold text-gray-900">Live Music Performance at Kasarani Stadium</h1>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2 gap-3">
              <div className="flex items-center gap-3">
                <img 
                  src="https://images.pexels.com/photos/30447781/pexels-photo-30447781/free-photo-of-portrait-of-woman-in-red-sweater-with-festive-greenery.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Channel" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-sm text-[#272222]">Wesley's Channel</p>
                  <p className="text-xs text-[#272222]">23.4K subscribers</p>
                </div>
                <button className="bg-red-600 text-white text-sm px-4 py-1 rounded-full ml-2">
                  Subscribe
                </button>
              </div>
              
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full">
                  <ThumbsUp className="w-4 h-4 text-[#272222]" />
                  <span className="text-sm text-[#272222]">12K</span>
                </button>
                <button className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-[#272222]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
                  </svg>
                </button>
                <button className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-[#272222]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186z" />
                  </svg>
                  <span className="text-sm text-[#272222]">Share</span>
                </button>
              </div>
            </div>
            
            <div className="mt-3 bg-gray-50 p-2 rounded-lg">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-[#272222]">132 watching now • Started streaming 42 minutes ago</p>
                <button className="text-xs text-blue-600">Show more</button>
              </div>
            </div>
          </div>
        )}
      </main>

      {!isFullScreen && (
        <footer className="mt-auto">
          <BottomNav />
        </footer>
      )}
    </div>
  );
};

export default HappeningNow;