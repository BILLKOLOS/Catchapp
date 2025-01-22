import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Activity, Coffee, Mic, Upload, X } from 'lucide-react';

// Custom Card Components with updated dark theme
const Card = ({ children, className = "" }) => (
  <div className={`bg-[#2d2d2d] rounded-xl border border-gray-700 backdrop-blur-lg ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`p-6 border-b border-gray-700 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h2 className={`text-xl font-semibold text-white ${className}`}>{children}</h2>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 space-y-6 ${className}`}>{children}</div>
);

const EventModal = ({ onClose }) => {
  const [previewImage, setPreviewImage] = useState('/api/placeholder/400/200');

  const handleImageChange = (e) => {
    setPreviewImage('/api/placeholder/400/200');
  };

  return (
    <>
      {/* Modal Backdrop with blur effect */}
      <div 
        className="fixed inset-0 bg-[#272222] bg-opacity-80 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-[#1e1e1e] rounded-2xl shadow-2xl">
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-6 space-y-8">
              {/* Header Section */}
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Create New Event
                </h1>
                <p className="text-gray-400">Fill in the details for your upcoming event</p>
              </div>

              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Upload size={20} className="text-blue-500" />
                    Basic Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Event Title</label>
                    <input 
                      type="text"
                      className="w-full p-3 bg-[#333333] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter event title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Event Banner</label>
                    <div className="border-2 border-dashed border-gray-700 rounded-xl p-6 text-center">
                      <img 
                        src={previewImage} 
                        alt="Event banner preview" 
                        className="mb-4 rounded-lg mx-auto w-full object-cover"
                      />
                      <button 
                        onClick={() => document.getElementById('fileInput').click()}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                      >
                        Upload Image/Video
                      </button>
                      <input
                        id="fileInput"
                        type="file"
                        className="hidden"
                        onChange={handleImageChange}
                        accept="image/*,video/*"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Event Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Activity size={20} className="text-purple-500" />
                    Event Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Description</label>
                    <textarea 
                      className="w-full p-3 bg-[#333333] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[120px]"
                      placeholder="Describe your event..."
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 flex items-center gap-2 text-gray-300">
                        <Calendar size={16} className="text-blue-500" />
                        Date
                      </label>
                      <input 
                        type="date" 
                        className="w-full p-3 bg-[#333333] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 flex items-center gap-2 text-gray-300">
                        <Clock size={16} className="text-purple-500" />
                        Time
                      </label>
                      <input 
                        type="time" 
                        className="w-full p-3 bg-[#333333] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2 text-gray-300">
                      <MapPin size={16} className="text-blue-500" />
                      Location
                    </label>
                    <input 
                      type="text"
                      className="w-full p-3 bg-[#333333] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Event location"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2 text-gray-300">
                      <Users size={16} className="text-purple-500" />
                      Expected Attendees
                    </label>
                    <input 
                      type="number"
                      className="w-full p-3 bg-[#333333] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Number of attendees"
                    />
                  </div>
                </CardContent>
              </Card>

             {/* New Event Personalities Card */}
             <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Mic size={20} className="text-blue-500" />
                    Event Personalities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {['Performers', 'Guests', 'Speakers'].map((type) => (
                      <div key={type} className="bg-[#333333] rounded-xl border border-gray-700 p-6">
                        <h3 className="text-white font-medium mb-4 text-lg">{type}</h3>
                        <div className="space-y-4">
                          <div className="border-2 border-dashed border-gray-700 rounded-xl p-6 text-center hover:border-blue-500 transition-colors">
                            <div className="relative inline-block">
                              <img 
                                src="/api/placeholder/100/100"
                                alt={`Add ${type}`}
                                className="mx-auto mb-4 rounded-full w-24 h-24 object-cover ring-2 ring-gray-700"
                              />
                              <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2 shadow-lg">
                                <Upload size={16} className="text-white" />
                              </div>
                            </div>
                            <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center justify-center gap-2 w-full">
                              <span>+ Add {type}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Requirements and Activities Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Activity size={20} className="text-purple-500" />
                    Requirements & Activities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Event Requirements</label>
                    <textarea 
                      className="w-full p-4 bg-[#333333] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[120px]"
                      placeholder="List any special requirements..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Event Activities</label>
                    <textarea 
                      className="w-full p-4 bg-[#333333] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[120px]"
                      placeholder="List planned activities..."
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Food and Drinks Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Coffee size={20} className="text-blue-500" />
                    Food & Drinks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Food Items</label>
                      <div className="border-2 border-dashed border-gray-700 rounded-xl p-6 text-center hover:border-blue-500 transition-colors bg-[#333333]">
                        <img 
                          src="/api/placeholder/200/150" 
                          alt="Add food"
                          className="mx-auto mb-4 rounded-lg shadow-lg"
                        />
                        <button className="flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 transition-colors w-full">
                          <Upload size={16} />
                          <span className="text-sm font-medium">Add Food Item</span>
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Drinks</label>
                      <div className="border-2 border-dashed border-gray-700 rounded-xl p-6 text-center hover:border-purple-500 transition-colors bg-[#333333]">
                        <img 
                          src="/api/placeholder/200/150" 
                          alt="Add drinks"
                          className="mx-auto mb-4 rounded-lg shadow-lg"
                        />
                        <button className="flex items-center justify-center gap-2 text-purple-400 hover:text-purple-300 transition-colors w-full">
                          <Upload size={16} />
                          <span className="text-sm font-medium">Add Drink Item</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Buttons */}
              <div className="flex justify-end gap-4">
                <button 
                  onClick={onClose}
                  className="px-6 py-3 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition-opacity font-medium">
                  Create Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventModal;