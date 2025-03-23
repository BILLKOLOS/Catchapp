import React, { useState, useEffect } from 'react';
import { MessageSquare, ChevronLeft, ChevronRight, Search, Phone, Video, X } from 'lucide-react';
import { messagingData, messageCategories } from '../data/message';

const MessagingInterface = ({ isOpen, onClose, updateMessageCount }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [readStatus, setReadStatus] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [messages, setMessages] = useState(messagingData);
  
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

  // Map icon names to components
  const getIconComponent = (iconName) => {
    const icons = {
      MessageSquare: <MessageSquare className="h-4 w-4" />,
      // Add other icons as needed
    };
    return icons[iconName] || <MessageSquare className="h-4 w-4" />;
  };

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

  const categories = messageCategories.map(category => ({
    ...category,
    icon: getIconComponent(category.iconName)
  }));

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
      <div className="h-8 w-8 md:h-10 md:w-10 rounded-full overflow-hidden flex-shrink-0 relative">
        {src ? (
          <img src={src} alt={alt || user || 'Avatar'} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
            {initials}
          </div>
        )}
        {online && (
          <div className="absolute bottom-0 right-0 w-2 h-2 md:w-2.5 md:h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
        )}
      </div>
    );
  };

  const MessageItem = ({ id, iconName, message, time, user, avatar, online, read }) => {
    const icon = getIconComponent(iconName);
    
    return (
      <div 
        className={`flex items-start space-x-2 md:space-x-4 p-3 md:p-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 ${!readStatus[id] ? 'bg-blue-50' : ''}`}
        onClick={() => markAsRead(id)}
      >
        {user && (
          <SimpleAvatar src={avatar} user={user} online={online} />
        )}
        {!user && (
          <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
            {icon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            {user && <p className={`font-medium text-xs md:text-sm ${!readStatus[id] ? 'text-blue-800' : 'text-gray-900'}`}>{user}</p>}
            {icon && <span className="flex-shrink-0">{icon}</span>}
            {!readStatus[id] && (
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            )}
          </div>
          <p className={`text-xs md:text-sm ${!readStatus[id] ? 'text-blue-700 font-medium' : 'text-gray-600'} mt-0.5 line-clamp-3 md:line-clamp-2`}>{message}</p>
          <div className="flex items-center space-x-2 mt-1">
            <p className="text-xs text-gray-500">{time}</p>
            {online && (
              <span className="text-xs px-1.5 md:px-2 py-0.5 rounded-full bg-green-100 text-green-600">
                Online
              </span>
            )}
          </div>
        </div>
      </div>
    );
  };

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
      className="fixed inset-0 bg-black bg-opacity-30 flex justify-end z-50 messaging-overlay p-0 sm:p-2"
      onClick={handleOutsideClick}
    >
      <div className="h-full w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3 flex flex-col sm:mr-0 md:mr-4 lg:mr-8" onClick={e => e.stopPropagation()}>
        {/* UI Panel */}
        <div className="bg-white shadow-xl sm:rounded-l-lg overflow-hidden border-l border-gray-200 flex flex-col h-full">
          {/* Category Navigation */}
          <div className="border-b border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between px-2 md:px-4 py-1 md:py-2">
              <button 
                onClick={handlePrevious}
                className="p-1 md:p-1.5 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="Previous category"
              >
                <ChevronLeft className="h-4 w-4 md:h-5 md:w-5 text-gray-500" />
              </button>

              <div className="flex items-center">
                {categories.map(category => {
                  const unreadCount = countUnreadByCategory(category.id);
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center space-x-1 md:space-x-2 px-2 md:px-6 py-2 md:py-3 transition-colors relative ${
                        activeCategory === category.id 
                          ? 'text-blue-600' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {category.icon}
                      <span className="font-medium text-xs md:text-sm hidden xs:inline">{category.title}</span>
                      <span className={`text-xs px-1.5 md:px-2 py-0.5 rounded-full ${
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
                className="p-1 md:p-1.5 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="Next category"
              >
                <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Rest of your component remains unchanged */}
          {/* Header */}
          <div className="bg-[#272222] px-3 md:px-6 py-2 md:py-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg md:text-xl font-bold text-white">Messages</h2>
                <p className="text-blue-100 text-xs md:text-sm mt-0.5 md:mt-1">
                  {countUnreadByCategory(activeCategory)} unread of {messages[activeCategory].length} {activeCategory} messages
                </p>
              </div>
              <div className="flex space-x-2">
                <button className="p-1.5 md:p-2 bg-[#FFB8B8] hover:bg-[#FFB8B8] rounded-full text-white">
                  <Phone className="h-4 w-4 md:h-5 md:w-5" />
                </button>
                <button className="p-1.5 md:p-2 bg-[#FFB8B8] hover:bg-[#FFB8B8] rounded-full text-white md:inline-flex hidden">
                  <Video className="h-4 w-4 md:h-5 md:w-5" />
                </button>
                <button 
                  onClick={onClose}
                  className="md:hidden p-1.5 bg-gray-700 rounded-full text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Search bar */}
          <div className="py-2 md:py-3 px-3 md:px-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-2 md:left-3 top-1/2 transform -translate-y-1/2 h-3 w-3 md:h-4 md:w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search messages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 md:pl-10 pr-4 py-1.5 md:py-2 bg-gray-50 rounded-lg border border-gray-200 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-3 w-3 md:h-4 md:w-4" />
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
                  iconName={message.iconName}
                  message={message.message}
                  time={message.time}
                  user={message.user}
                  avatar={message.avatar}
                  online={message.online}
                  read={readStatus[message.id]}
                />
              ))
            ) : (
              <div className="p-4 md:p-6 text-center text-gray-500">
                <MessageSquare className="h-8 w-8 md:h-12 md:w-12 mx-auto text-gray-300 mb-2 md:mb-3" />
                <p className="text-base md:text-lg font-medium">No messages found</p>
                <p className="text-xs md:text-sm mt-1">Try a different search or category</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-3 md:px-4 py-2 md:py-3 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
            <button 
              onClick={markAllAsRead}
              className="text-xs md:text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
              Mark all as read
            </button>
            <button 
              onClick={onClose} 
              className="text-xs md:text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors hidden md:block"
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