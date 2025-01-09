import React, { useState } from 'react';
import { SearchIcon, GiftIcon, MonitorIcon, Heart, MessageCircle, Share2, BookmarkIcon } from 'lucide-react';

const SocialFeed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'jane',
      avatar: 'https://images.pexels.com/photos/30007344/pexels-photo-30007344/free-photo-of-dynamic-portrait-of-a-woman-with-flowing-hair.jpeg?auto=compress&cs=tinysrgb&w=600',
      verified: true,
      content: 'I attended the culture color fest in mount kenya/nyeri county',
      location: 'Mount Kenya, Nyeri County',
      images: [
        'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/28976233/pexels-photo-28976233/free-photo-of-rustic-cheese-board-with-cold-cuts-and-bread.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      likes: 23,
      isLiked: false,
      comments: 12,
      shares: 5,
      timestamp: '2h ago',
      saved: false
    },
    {
      id: 2,
      username: 'cate',
      avatar: 'https://images.pexels.com/photos/30039441/pexels-photo-30039441/free-photo-of-emotional-portrait-of-a-woman-in-low-light.jpeg?auto=compress&cs=tinysrgb&w=600',
      verified: true,
      content: 'it was an honor attending the neet gala in lavington nairobi',
      location: 'Lavington, Nairobi',
      images: [
        'https://images.pexels.com/photos/7551762/pexels-photo-7551762.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      likes: 45,
      isLiked: false,
      comments: 8,
      shares: 3,
      timestamp: '4h ago',
      saved: false
    },
    {
      id: 3,
      username: 'travel_kenya',
      avatar: 'https://images.pexels.com/photos/29976870/pexels-photo-29976870/free-photo-of-contemplative-young-adult-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=600',
      verified: true,
      content: 'Sunset safari at Masai Mara. The wildlife here never ceases to amaze! 🦁🌅',
      location: 'Masai Mara National Reserve',
      images: [
        'https://images.pexels.com/photos/13033128/pexels-photo-13033128.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/20335122/pexels-photo-20335122/free-photo-of-elephant-in-savannah.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/27832453/pexels-photo-27832453/free-photo-of-a-lion-walking-across-the-road-in-front-of-a-jeep.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      likes: 892,
      isLiked: false,
      comments: 56,
      shares: 124,
      timestamp: '6h ago',
      saved: false
    },
    {
      id: 4,
      username: 'foodie_nairobi',
      avatar: 'https://images.pexels.com/photos/15566416/pexels-photo-15566416/free-photo-of-beautiful-woman-with-necklace-on-hill.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Found this hidden gem in Westlands! Best nyama choma in town 😋🍖',
      location: 'Westlands, Nairobi',
      images: [
        'https://images.pexels.com/photos/3743389/pexels-photo-3743389.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      likes: 156,
      isLiked: false,
      comments: 23,
      shares: 7,
      timestamp: '12h ago',
      saved: false
    }
  ]);

  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked
        };
      }
      return post;
    }));
  };

  const handleSave = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          saved: !post.saved
        };
      }
      return post;
    }));
  };

  return (
    <div className="max-w-2xl mx-auto bg-gray-50 min-h-screen mt-16">
      {/* Posts */}
      <div className="p-4 space-y-6">
        {posts.map(post => (
          <div key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden transition-transform hover:shadow-md">
            {/* Post Header */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img src={post.avatar} alt={post.username} className="w-16 h-16 object-cover" />
                </div>
                <div>
                  <div className="flex items-center">
                    <span className="font-semibold">{post.username}</span>
                    {post.verified && (
                      <svg className="w-4 h-4 ml-1 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <div className="text-xs text-gray-500">{post.location}</div>
                </div>
              </div>
              <button className="px-4 py-1.5 text-sm text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 transition-colors">
                follow
              </button>
            </div>

            {/* Post Content */}
            <p className="px-4 pb-4 text-sm">{post.content}</p>

            {/* Post Images */}
            <div className={`grid gap-1 ${post.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
              {post.images.map((image, index) => (
                <div key={index} className="aspect-square bg-gray-100">
                  <img 
                    src={image} 
                    alt={`Post ${index + 1}`}
                    className="w-full h-full object-cover hover:opacity-95 transition-opacity cursor-pointer"
                  />
                </div>
              ))}
            </div>

            {/* Post Actions */}
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button 
                    className="flex items-center space-x-1 group"
                    onClick={() => handleLike(post.id)}
                  >
                    <Heart 
                      className={`w-6 h-6 ${post.isLiked ? 'fill-red-500 text-red-500' : 'text-gray-500 group-hover:text-red-500'} transition-colors`}
                    />
                    <span className={`text-sm ${post.isLiked ? 'text-red-500' : 'text-gray-500 group-hover:text-red-500'}`}>
                      {post.likes}
                    </span>
                  </button>
                  <button className="flex items-center space-x-1 group">
                    <MessageCircle className="w-6 h-6 text-gray-500 group-hover:text-blue-500" />
                    <span className="text-sm text-gray-500 group-hover:text-blue-500">{post.comments}</span>
                  </button>
                  <button className="flex items-center space-x-1 group">
                    <Share2 className="w-6 h-6 text-gray-500 group-hover:text-green-500" />
                    <span className="text-sm text-gray-500 group-hover:text-green-500">{post.shares}</span>
                  </button>
                </div>
                <button 
                  onClick={() => handleSave(post.id)}
                  className="group"
                >
                  <BookmarkIcon 
                    className={`w-6 h-6 ${post.saved ? 'fill-yellow-500 text-yellow-500' : 'text-gray-500 group-hover:text-yellow-500'} transition-colors`}
                  />
                </button>
              </div>
              <div className="mt-2 text-xs text-gray-500">{post.timestamp}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialFeed;