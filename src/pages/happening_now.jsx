import React, { useState } from 'react';
import { Camera, Home, Settings, Calendar, Gift, MessageCircle, ThumbsUp, Send } from 'lucide-react';
import BottomNav from '../components/HomeNavBottom';
import NormalNav from '../components/NormalNav';

const HappeningNow = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [commentText, setCommentText] = useState("")

  const activeUsers = [
    { id: 1, name: 'timothy', online: true },
    { id: 2, name: 'andrew', online: true },
    { id: 3, name: 'nancy', online: true }
  ];

  // YouTube-style comments
  const comments = [
    {
      id: 1,
      user: "timothy",
      avatar:
        "https://images.pexels.com/photos/30392508/pexels-photo-30392508/free-photo-of-elegant-woman-in-bright-pink-blouse-posing.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "This event is amazing! 🔥",
      time: "2m ago",
      likes: 12,
    },
    {
      id: 2,
      user: "andrew",
      avatar:
        "https://images.pexels.com/photos/29976870/pexels-photo-29976870/free-photo-of-contemplative-young-adult-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Can't wait to see what happens next",
      time: "1m ago",
      likes: 5,
    },
    {
      id: 3,
      user: "nancy",
      avatar:
        "https://images.pexels.com/photos/30447781/pexels-photo-30447781/free-photo-of-portrait-of-woman-in-red-sweater-with-festive-greenery.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Where is this happening? I want to join!",
      time: "just now",
      likes: 3,
    },
    {
      id: 4,
      user: "james",
      avatar:
        "https://images.pexels.com/photos/30039441/pexels-photo-30039441/free-photo-of-emotional-portrait-of-a-woman-in-low-light.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "The sound quality is perfect 👌",
      time: "5m ago",
      likes: 8,
    },
    {
      id: 5,
      user: "sarah",
      avatar:
        "https://images.pexels.com/photos/15566416/pexels-photo-15566416/free-photo-of-beautiful-woman-with-necklace-on-hill.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "I'm loving this performance!",
      time: "3m ago",
      likes: 15,
    },
  ]

  const handleSubmitComment = (e) => {
    e.preventDefault()
    if (commentText.trim()) {
      // In a real app, you would add the comment to the list
      setCommentText("")
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NormalNav />
      
      <div className="bg-[#272222] max-w-[200px] mx-auto w-full px-2 py-2 mt-16 rounded-[30px]">
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
          <div className="w-full lg:w-72 h-[calc(100vh-240px)] flex flex-col">
            {/* Mobile Toggle */}
            <button
              onClick={() => setIsChatOpen(!isChatOpen)}
              className="lg:hidden w-full bg-[#272222] text-white py-2 rounded-xl mb-2 flex items-center justify-center gap-2 shadow-md hover:bg-black transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              {isChatOpen ? "Hide Comments" : "Show Comments"}
            </button>

            {/* Comments Container */}
            <div
              className={`
                bg-white rounded-xl shadow-lg border border-gray-100
                ${isChatOpen ? "flex" : "hidden"} lg:flex
                flex-col flex-1 overflow-hidden
              `}
            >
              <div className="bg-[#272222] text-white p-3 flex items-center justify-between">
                <h3 className="font-medium flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Comments
                </h3>
                <span className="text-xs bg-red-500 px-2 py-0.5 rounded-full">Live</span>
              </div>

              {/* Comments List */}
              <div className="flex-1 overflow-y-auto p-3 space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex gap-3">
                    <img
                      src={comment.avatar || "/placeholder.svg"}
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
                <form onSubmit={handleSubmitComment} className="flex items-center gap-2">
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
                    className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#272222]"
                  />
                  <button
                    type="submit"
                    disabled={!commentText.trim()}
                    className={`p-2 rounded-full ${
                      commentText.trim() ? "bg-[#272222] text-white hover:bg-black" : "bg-gray-200 text-gray-400"
                    } transition-colors`}
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
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
