const NotificationMenu = ({ isOpen, onClose }) => {
  const notifications = [
    {
      id: 1,
      section: 'Today',
      items: [
        {
          id: 1,
          user: { name: 'maya', image: 'https://images.pexels.com/photos/1756609/pexels-photo-1756609.jpeg?auto=compress&cs=tinysrgb&w=600' },
          action: 'requested to attend your event',
          status: 'pending'
        },
        {
          id: 2,
          user: { name: 'Stacy', image: 'https://images.pexels.com/photos/1784280/pexels-photo-1784280.jpeg?auto=compress&cs=tinysrgb&w=600' },
          action: 'requested to attend your event',
          status: 'pending'
        },
        {
          id: 3,
          user: { name: 'Derrick', image: 'https://images.pexels.com/photos/53265/pexels-photo-53265.jpeg?auto=compress&cs=tinysrgb&w=600' },
          action: 'requested to attend your event',
          status: 'approved'
        }
      ]
    },
    {
      id: 2,
      section: 'Yesterday',
      items: [
        {
          id: 4,
          user: { name: 'Peter', image: 'https://images.pexels.com/photos/3394225/pexels-photo-3394225.jpeg?auto=compress&cs=tinysrgb&w=600' },
          action: 'requested to attend your event',
          status: 'approved'
        },
        {
          id: 5,
          type: 'system',
          message: 'Happy birthday to me event set successfuly',
          timeInfo: 'In 1 week\'s time'
        },
        {
          id: 6,
          user: { name: 'kevin', image: 'https://images.pexels.com/photos/7942526/pexels-photo-7942526.jpeg?auto=compress&cs=tinysrgb&w=600' },
          action: 'request to join your event through stream.',
          status: 'approved',
          isStream: true
        },
        {
          id: 7,
          user: { name: 'kevin', image: 'https://images.pexels.com/photos/30586672/pexels-photo-30586672/free-photo-of-energetic-youth-party-with-bright-lights.jpeg?auto=compress&cs=tinysrgb&w=600' },
          action: 'started following you'
        },
        {
          id: 8,
          user: { name: 'claudia', image: 'https://images.pexels.com/photos/30609629/pexels-photo-30609629/free-photo-of-joyful-african-wedding-celebration-ceremony.jpeg?auto=compress&cs=tinysrgb&w=600' },
          action: 'started following you'
        }
      ]
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed right-0 top-[60px] w-full sm:absolute sm:w-96 bg-[#272222] rounded-l-xl sm:rounded-xl shadow-lg overflow-hidden z-50">
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>
          <h2 className="text-xl text-white font-semibold">Notifications</h2>
        </div>
      </div>

      <div className="max-h-[calc(100vh-120px)] sm:max-h-[600px] overflow-y-auto">
        {notifications.map(section => (
          <div key={section.id} className="p-4">
            <h3 className="text-white text-lg mb-4">{section.section}</h3>
            <div className="space-y-4">
              {section.items.map(notification => (
                <div key={notification.id} className="flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
                  {notification.type === 'system' ? (
                    <div className="flex items-center gap-3 w-full">
                      <div className="w-10 h-10 rounded-full bg-pink-400 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white break-words">{notification.message}</p>
                        <p className="text-gray-400 text-sm">{notification.timeInfo}</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <img src={notification.user.image} alt={notification.user.name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-white break-words">
                            <span className="font-medium">{notification.user.name}</span>
                            {' '}{notification.action}
                          </p>
                        </div>
                      </div>
                      {notification.status && (
                        <button 
                          className={`px-4 py-2 rounded-full whitespace-nowrap ${
                            notification.status === 'approved' 
                              ? 'bg-red-400 text-white' 
                              : 'bg-gray-200 text-gray-900'
                          } font-medium`}
                        >
                          {notification.status === 'approved' ? (
                            <div className="flex items-center gap-1">
                              Aprooved {notification.isStream && '□'}
                            </div>
                          ) : (
                            'Aproove'
                          )}
                        </button>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationMenu;