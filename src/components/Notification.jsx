import React, { useState, useEffect } from 'react';
import { Bell, Phone, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { notificationData, categories } from '../data/notification';

const NotificationMenu = ({ isOpen, onClose, updateNotificationCount }) => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [readStatus, setReadStatus] = useState({});
  
  // Initialize read status from notifications data
  useEffect(() => {
    const initialReadStatus = {};
    
    // Flatten all notifications into a single array
    const allNotifications = [
      ...notificationData.general,
      ...notificationData.approved, 
      ...notificationData.calls
    ];
    
    // Set initial read status based on the 'read' property
    allNotifications.forEach(notification => {
      initialReadStatus[notification.id] = notification.read;
    });
    
    setReadStatus(initialReadStatus);
    
    // Count unread notifications
    const unreadCount = allNotifications.filter(note => !note.read).length;
    updateNotificationCount(unreadCount);
  }, [updateNotificationCount]);

  // Count unread notifications
  const countUnread = () => {
    let count = 0;
    Object.values(notificationData).forEach(category => {
      category.forEach(notification => {
        if (!readStatus[notification.id]) {
          count++;
        }
      });
    });
    return count;
  };

  // Mark individual notification as read
  const markAsRead = (id) => {
    setReadStatus(prev => {
      const updated = { ...prev, [id]: true };
      
      // Update parent component about the new count
      const newUnreadCount = Object.values(updated).filter(status => !status).length;
      updateNotificationCount(newUnreadCount);
      
      return updated;
    });
  };

  // Mark all notifications as read
  const markAllAsRead = () => {
    const updatedStatus = { ...readStatus };
    
    Object.values(notificationData).forEach(category => {
      category.forEach(notification => {
        updatedStatus[notification.id] = true;
      });
    });
    
    setReadStatus(updatedStatus);
    updateNotificationCount(0);
  };

  if (!isOpen) return null;

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
  const SimpleAvatar = ({ src, alt, user }) => {
    const initials = user ? user.split(' ').map(n => n[0]).join('') : '';
    
    return (
      <div className="h-8 w-8 md:h-10 md:w-10 rounded-full overflow-hidden flex-shrink-0">
        {src ? (
          <img src={src} alt={alt || user || 'Avatar'} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
            {initials}
          </div>
        )}
      </div>
    );
  };

  const NotificationItem = ({ id, icon, message, time, user, avatar, callType, duration, read }) => (
    <div 
      className={`flex items-start space-x-2 md:space-x-4 p-3 md:p-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 ${!readStatus[id] ? 'bg-blue-50' : ''}`}
      onClick={() => markAsRead(id)}
    >
      {user && (
        <SimpleAvatar src={avatar} user={user} />
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
          {callType && (
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              callType === 'missed' ? 'bg-red-100 text-red-600' :
              callType === 'incoming' ? 'bg-green-100 text-green-600' :
              'bg-blue-100 text-blue-600'
            }`}>
              {duration}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  // Handler for click outside
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('notification-overlay')) {
      onClose();
    }
  };

  // Count unread notifications by category
  const countUnreadByCategory = (categoryId) => {
    return notificationData[categoryId].filter(note => !readStatus[note.id]).length;
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-30 flex justify-end z-50 notification-overlay p-0 sm:p-2"
      onClick={handleOutsideClick}
    >
      <div className="h-full w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3 flex flex-col sm:mr-0 md:mr-4 lg:mr-8" onClick={e => e.stopPropagation()}>
        {/* Custom UI Panel */}
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
                        {unreadCount > 0 ? unreadCount : notificationData[category.id].length}
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

          {/* Custom Header */}
          <div className="bg-[#272222] px-3 md:px-6 py-2 md:py-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg md:text-xl font-bold text-white">Notifications</h2>
                <p className="text-blue-100 text-xs md:text-sm mt-0.5 md:mt-1">
                  {countUnreadByCategory(activeCategory)} unread of {notificationData[activeCategory].length} {activeCategory} notifications
                </p>
              </div>
              <button 
                onClick={onClose}
                className="md:hidden p-1.5 bg-gray-700 rounded-full text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Notifications Content */}
          <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
            {notificationData[activeCategory].map((notification) => (
              <NotificationItem
                key={notification.id}
                id={notification.id}
                icon={notification.icon}
                message={notification.message}
                time={notification.time}
                user={notification.user}
                avatar={notification.avatar}
                callType={notification.callType}
                duration={notification.duration}
                read={readStatus[notification.id]}
              />
            ))}
          </div>

          {/* Custom Footer */}
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

export default NotificationMenu;