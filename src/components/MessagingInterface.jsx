import React, { useState, useEffect } from 'react';
import { MessageSquare, ChevronLeft, ChevronRight, Search, Phone, Video, X } from 'lucide-react';

const MessagingInterface = ({ isOpen, onClose, updateMessageCount }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [readStatus, setReadStatus] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  
  const messages = {
    all: [
      {
        id: 1,
        icon: <MessageSquare className="h-4 w-4" />,
        message: "Hey, are we still on for lunch?",
        time: "10:30 AM",
        user: "Sarah Johnson",
        avatar: "https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?auto=compress&cs=tinysrgb&w=600",
        online: true,
        read: false
      },
      {
        id: 2,
        icon: <MessageSquare className="h-4 w-4" />,
        message: "I've sent you the project files",
        time: "9:15 AM",
        user: "Mike Peters",
        avatar: "https://images.pexels.com/photos/3916850/pexels-photo-3916850.jpeg?auto=compress&cs=tinysrgb&w=600",
        online: true,
        read: false
      },
      {
        id: 3,
        icon: <MessageSquare className="h-4 w-4" />,
        message: "Thanks for your help yesterday with the presentation. It went really well and everyone was impressed!",
        time: "Yesterday",
        user: "Emma Wilson",
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
        online: false,
        read: true
      },
      {
        id: 4,
        icon: <MessageSquare className="h-4 w-4" />,
        message: "Let's catch up soon about the upcoming conference",
        time: "Yesterday",
        user: "David Brown",
        avatar: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600",
        online: false,
        read: false
      },
      {
        id: 5,
        icon: <MessageSquare className="h-4 w-4" />,
        message: "Do you have time to review my proposal?",
        time: "2 days ago",
        user: "Lisa Chen",
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
        online: false,
        read: true
      }
    ],
    unread: [
      {
        id: 1,
        icon: <MessageSquare className="h-4 w-4" />,
        message: "Hey, are we still on for lunch?",
        time: "10:30 AM",
        user: "Sarah Johnson",
        avatar: "/api/placeholder/40/40",
        online: true,
        read: false
      },
      {
        id: 2,
        icon: <MessageSquare className="h-4 w-4" />,
        message: "I've sent you the project files",
        time: "9:15 AM",
        user: "Mike Peters",
        avatar: "/api/placeholder/40/40",
        online: true,
        read: false
      },
      {
        id: 4,
        icon: <MessageSquare className="h-4 w-4" />,
        message: "Let's catch up soon about the upcoming conference",
        time: "Yesterday",
        user: "David Brown",
        avatar: "/api/placeholder/40/40",
        online: false,
        read: false
      }
    ],
    direct: [
      {
        id: 1,
        icon: <MessageSquare className="h-4 w-4" />,
        message: "Hey, are we still on for lunch?",
        time: "10:30 AM",
        user: "Sarah Johnson",
        avatar: "/api/placeholder/40/40",
        online: true,
        read: false
      },
      {
        id: 2,
        icon: <MessageSquare className="h-4 w-4" />,
        message: "I've sent you the project files",
        time: "9:15 AM",
        user: "Mike Peters",
        avatar: "/api/placeholder/40/40",
        online: true,
        read: false
      },
      {
        id: 3,
        icon: <MessageSquare className="h-4 w-4" />,
        message: "Thanks for your help yesterday with the presentation. It went really well and everyone was impressed!",
        time: "Yesterday",
        user: "Emma Wilson",
        avatar: "/api/placeholder/40/40",
        online: false,
        read: true
      }
    ]
  };

  // Initialize read status from messages data
  useEffect(() => {
    const initialReadStatus = {};
    
    // Flatten all messages into a single array
    const allMessages = [
      ...messages.all
    ];
    
    // Set initial read status based on the 'read' property
    allMessages.forEach(message => {
      initialReadStatus[message.id] = message.read;
    });
    
    setReadStatus(initialReadStatus);
    
    // Count unread messages
    const unreadCount = allMessages.filter(msg => !msg.read).length;
    if (updateMessageCount) {
      updateMessageCount(unreadCount);
    }
  }, []);

  // Count unread messages
  const countUnread = () => {
    let count = 0;
    Object.values(messages).forEach(category => {
      category.forEach(message => {
        if (!readStatus[message.id]) {
          count++;
        }
      });
    });
    return count;
  };

  // Mark individual message as read
  const markAsRead = (id) => {
    setReadStatus(prev => {
      const updated = { ...prev, [id]: true };
      
      // Update parent component about the new count if the function exists
      if (updateMessageCount) {
        const newUnreadCount = Object.values(updated).filter(status => !status).length;
        updateMessageCount(newUnreadCount);
      }
      
      return updated;
    });
  };

  // Mark all messages as read
  const markAllAsRead = () => {
    const updatedStatus = { ...readStatus };
    
    Object.values(messages).forEach(category => {
      category.forEach(message => {
        updatedStatus[message.id] = true;
      });
    });
    
    setReadStatus(updatedStatus);
    if (updateMessageCount) {
      updateMessageCount(0);
    }
  };

  if (!isOpen) return null;

  const categories = [
    { id: 'all', title: 'All Messages', icon: <MessageSquare className="h-4 w-4" /> },
    { id: 'unread', title: 'Unread', icon: <MessageSquare className="h-4 w-4" /> },
    { id: 'direct', title: 'Direct', icon: <MessageSquare className="h-4 w-4" /> }
  ];

  const handleNext = () => {
    const currentIndex = categories.findIndex(cat => cat.id === activeCategory);
    const nextIndex = (currentIndex + 1) % categories.length;
    setActiveCategory(categories[nextIndex].id);
  };

  const handlePrevious = () => {
    const currentIndex = categories.findIndex(cat => cat.id === activeCategory);
    const previousIndex = (currentIndex - 1 + categories.length) % categories.length;
    setActiveCategory(categories[previousIndex].id);
  };

  // Simple custom avatar implementation
  const SimpleAvatar = ({ src, alt, user, online }) => {
    const initials = user ? user.split(' ').map(n => n[0]).join('') : '';
    
    return (
      <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0 relative">
        {src ? (
          <img src={src} alt={alt || user || 'Avatar'} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
            {initials}
          </div>
        )}
        {online && (
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
        )}
      </div>
    );
  };

  const MessageItem = ({ id, icon, message, time, user, avatar, online, read }) => (
    <div 
      className={`flex items-start space-x-4 p-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 ${!readStatus[id] ? 'bg-blue-50' : ''}`}
      onClick={() => markAsRead(id)}
    >
      {user && (
        <SimpleAvatar src={avatar} user={user} online={online} />
      )}
      {!user && (
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
          {icon}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-2">
          {user && <p className={`font-medium text-sm ${!readStatus[id] ? 'text-blue-800' : 'text-gray-900'}`}>{user}</p>}
          {icon && <span className="flex-shrink-0">{icon}</span>}
          {!readStatus[id] && (
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
          )}
        </div>
        <p className={`text-sm ${!readStatus[id] ? 'text-blue-700 font-medium' : 'text-gray-600'} mt-0.5`}>{message}</p>
        <div className="flex items-center space-x-2 mt-1">
          <p className="text-xs text-gray-500">{time}</p>
          {online && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-600">
              Online
            </span>
          )}
        </div>
      </div>
    </div>
  );

  // Handler for click outside
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('messaging-overlay')) {
      onClose();
    }
  };

  // Count unread messages by category
  const countUnreadByCategory = (categoryId) => {
    return messages[categoryId].filter(msg => !readStatus[msg.id]).length;
  };

  // Filter messages based on search query
  const filteredMessages = messages[activeCategory].filter(message => 
    message.user?.toLowerCase().includes(searchQuery.toLowerCase()) || 
    message.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-30 flex justify-end z-50 messaging-overlay p-2"
      onClick={handleOutsideClick}
    >
      <div className="h-full w-full max-w-lg flex flex-col mr-8" onClick={e => e.stopPropagation()}>
        {/* UI Panel */}
        <div className="bg-white shadow-xl rounded-l-lg overflow-hidden border-l border-gray-200 flex flex-col h-full">
          {/* Category Navigation */}
          <div className="border-b border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between px-4 py-2">
              <button 
                onClick={handlePrevious}
                className="p-1.5 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="Previous category"
              >
                <ChevronLeft className="h-5 w-5 text-gray-500" />
              </button>

              <div className="flex items-center">
                {categories.map(category => {
                  const unreadCount = countUnreadByCategory(category.id);
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center space-x-2 px-6 py-3 transition-colors relative ${
                        activeCategory === category.id 
                          ? 'text-blue-600' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {category.icon}
                      <span className="font-medium text-sm">{category.title}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ml-1 ${
                        unreadCount > 0
                          ? 'bg-blue-500 text-white'
                          : activeCategory === category.id 
                            ? 'bg-blue-100 text-blue-600' 
                            : 'bg-gray-100 text-gray-600'
                      }`}>
                        {unreadCount > 0 ? unreadCount : messages[category.id].length}
                      </span>
                      {activeCategory === category.id && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                      )}
                    </button>
                  );
                })}
              </div>

              <button 
                onClick={handleNext}
                className="p-1.5 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="Next category"
              >
                <ChevronRight className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Header */}
          <div className="bg-[#272222] px-6 py-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-white">Messages</h2>
                <p className="text-blue-100 text-sm mt-1">
                  {countUnreadByCategory(activeCategory)} unread of {messages[activeCategory].length} {activeCategory} messages
                </p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white">
                  <Phone className="h-5 w-5" />
                </button>
                <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white">
                  <Video className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Search bar */}
          <div className="py-3 px-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search messages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Messages Content */}
          <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
            {filteredMessages.length > 0 ? (
              filteredMessages.map((message) => (
                <MessageItem
                  key={message.id}
                  id={message.id}
                  icon={message.icon}
                  message={message.message}
                  time={message.time}
                  user={message.user}
                  avatar={message.avatar}
                  online={message.online}
                  read={readStatus[message.id]}
                />
              ))
            ) : (
              <div className="p-6 text-center text-gray-500">
                <MessageSquare className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                <p className="text-lg font-medium">No messages found</p>
                <p className="text-sm mt-1">Try a different search or category</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
            <button 
              onClick={markAllAsRead}
              className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
              Mark all as read
            </button>
            <button 
              onClick={onClose} 
              className="text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagingInterface;