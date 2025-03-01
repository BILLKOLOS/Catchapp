import React, { useState, useEffect } from 'react';
import { Bell, Phone, Calendar, Heart, Star, MessageSquare, UserPlus, Check, Tag, ChevronLeft, ChevronRight, PhoneMissed, PhoneCall, X } from 'lucide-react';

const NotificationMenu = ({ isOpen, onClose, updateNotificationCount }) => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [readStatus, setReadStatus] = useState({});
  
  const notifications = {
    general: [
      {
        id: 1,
        icon: <UserPlus className="h-4 w-4" />,
        message: "Friend request",
        time: "Just now",
        user: "Alex Thompson",
        avatar: "https://images.pexels.com/photos/2747447/pexels-photo-2747447.jpeg?auto=compress&cs=tinysrgb&w=600",
        read: false
      },
      {
        id: 2,
        icon: <Calendar className="h-4 w-4" />,
        message: "Your event is set successfully",
        time: "5 min ago",
        read: false
      },
      {
        id: 3,
        icon: <Calendar className="h-4 w-4" />,
        message: "Brian requested to attend your event",
        time: "10 min ago",
        user: "Brian Miller",
        avatar: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=600",
        read: false
      },
      {
        id: 4,
        icon: <Star className="h-4 w-4" />,
        message: "John rated your event 5 star",
        time: "15 min ago",
        user: "John Davis",
        avatar: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600",
        read: true
      },
      {
        id: 5,
        icon: <Star className="h-4 w-4" />,
        message: "John rated your service 4 star at the happy birthday to me event on march 2024 at 4pm",
        time: "20 min ago",
        user: "John Davis",
        avatar: "https://images.pexels.com/photos/144428/pexels-photo-144428.jpeg?auto=compress&cs=tinysrgb&w=600",
        read: true
      },
      {
        id: 6,
        icon: <Heart className="h-4 w-4 text-red-500" />,
        message: "John liked your event",
        time: "25 min ago",
        user: "John Davis",
        avatar: "/api/placeholder/32/32",
        read: true
      },
      {
        id: 7,
        icon: <MessageSquare className="h-4 w-4" />,
        message: "John commented on your post",
        time: "30 min ago",
        user: "John Davis",
        avatar: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600",
        read: true
      },
      {
        id: 8,
        icon: <Calendar className="h-4 w-4" />,
        message: "John invited you to attend the white party event",
        time: "35 min ago",
        user: "John Davis",
        avatar: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600",
        read: true
      },
      {
        id: 9,
        icon: <Bell className="h-4 w-4" />,
        message: "Your post has been posted to the feed",
        time: "40 min ago",
        read: true
      },
      {
        id: 10,
        icon: <Calendar className="h-4 w-4" />,
        message: "The white party event is in two weeks",
        time: "45 min ago",
        read: true
      },
      {
        id: 11,
        icon: <Calendar className="h-4 w-4" />,
        message: "White party event is now live",
        time: "50 min ago",
        read: true
      },
      {
        id: 15,
        icon: <Tag className="h-4 w-4" />,
        message: "You have been tagged as a eg guest, speaker, performer, in the white party event happening on 3rd June 2025 from 1 to 2 pm",
        time: "1 hour ago",
        read: true
      }
    ],
    approved: [
      {
        id: 12,
        icon: <Check className="h-4 w-4 text-green-500" />,
        message: "You have been approved to attend the white party event",
        time: "1 day ago",
        read: true
      },
      {
        id: 14,
        icon: <Check className="h-4 w-4 text-green-500" />,
        message: "You can now access city events",
        time: "2 days ago",
        read: true
      }
    ],
    calls: [
      {
        id: 13,
        icon: <PhoneMissed className="h-4 w-4 text-red-500" />,
        message: "Missed call (2 min)",
        time: "2 hours ago",
        user: "John Davis",
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
        callType: "missed",
        duration: "2 min",
        read: true
      },
      {
        id: 16,
        icon: <PhoneCall className="h-4 w-4 text-green-500" />,
        message: "Incoming call (5 min)",
        time: "3 hours ago",
        user: "Brian Miller",
        avatar: "https://images.pexels.com/photos/3916850/pexels-photo-3916850.jpeg?auto=compress&cs=tinysrgb&w=600",
        callType: "incoming",
        duration: "5 min",
        read: true
      },
      {
        id: 17,
        icon: <PhoneCall className="h-4 w-4 text-blue-500" />,
        message: "Outgoing call (8 min)",
        time: "Yesterday",
        user: "Alex Thompson",
        avatar: "https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?auto=compress&cs=tinysrgb&w=600",
        callType: "outgoing",
        duration: "8 min",
        read: true
      }
    ]
  };

  // Initialize read status from notifications data
  useEffect(() => {
    const initialReadStatus = {};
    
    // Flatten all notifications into a single array
    const allNotifications = [
      ...notifications.general,
      ...notifications.approved, 
      ...notifications.calls
    ];
    
    // Set initial read status based on the 'read' property
    allNotifications.forEach(notification => {
      initialReadStatus[notification.id] = notification.read;
    });
    
    setReadStatus(initialReadStatus);
    
    // Count unread notifications
    const unreadCount = allNotifications.filter(note => !note.read).length;
    updateNotificationCount(unreadCount);
  }, []);

  // Count unread notifications
  const countUnread = () => {
    let count = 0;
    Object.values(notifications).forEach(category => {
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
    
    Object.values(notifications).forEach(category => {
      category.forEach(notification => {
        updatedStatus[notification.id] = true;
      });
    });
    
    setReadStatus(updatedStatus);
    updateNotificationCount(0);
  };

  if (!isOpen) return null;

  const categories = [
    { id: 'general', title: 'General', icon: <Bell className="h-4 w-4" /> },
    { id: 'approved', title: 'Approved', icon: <Check className="h-4 w-4" /> },
    { id: 'calls', title: 'Calls', icon: <Phone className="h-4 w-4" /> }
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
  const SimpleAvatar = ({ src, alt, user }) => {
    const initials = user ? user.split(' ').map(n => n[0]).join('') : '';
    
    return (
      <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
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
      className={`flex items-start space-x-4 p-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 ${!readStatus[id] ? 'bg-blue-50' : ''}`}
      onClick={() => markAsRead(id)}
    >
      {user && (
        <SimpleAvatar src={avatar} user={user} />
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
    return notifications[categoryId].filter(note => !readStatus[note.id]).length;
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-30 flex justify-end z-50 notification-overlay p-2"
      onClick={handleOutsideClick}
    >
      <div className="h-full w-full max-w-lg flex flex-col mr-8" onClick={e => e.stopPropagation()}>
        {/* Custom UI Panel instead of Card */}
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
                        {unreadCount > 0 ? unreadCount : notifications[category.id].length}
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

          {/* Custom Header */}
          <div className="bg-[#272222] px-6 py-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-white">Notifications</h2>
                <p className="text-blue-100 text-sm mt-1">
                  {countUnreadByCategory(activeCategory)} unread of {notifications[activeCategory].length} {activeCategory} notifications
                </p>
              </div>
            </div>
          </div>

          {/* Notifications Content */}
          <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
            {notifications[activeCategory].map((notification) => (
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

export default NotificationMenu;