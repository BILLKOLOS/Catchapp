import { useState } from 'react';
import { 
  Users, 
  Star, 
  Music, 
  Cake, 
  Target,
  BarChart3,
  Globe,
  Heart,
  MessageCircle,
  Share2 
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const EventAnalytics = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Sample event data remains the same
  const eventData = {
    eventName: "Summer Music Festival 2024",
    coverImage: "https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=600",
    profileImage: "https://images.pexels.com/photos/29783131/pexels-photo-29783131/free-photo-of-silhouette-of-man-in-profile-wearing-hat-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600",
    attendees: 1245,
    totalRequests: 1567,
    likes: 892,
    comments: 245,
    shares: 78,
    coverageMap: [
      { region: 'North', percentage: 35 },
      { region: 'South', percentage: 25 },
      { region: 'East', percentage: 20 },
      { region: 'West', percentage: 20 }
    ],
    serviceProviders: [
      { type: 'DJ', rating: 4.7, icon: <Music className="h-5 w-5 text-pink-500" /> },
      { type: 'Catering', rating: 4.5, icon: <Cake className="h-5 w-5 text-orange-500" /> },
      { type: 'Decor', rating: 4.6, icon: <Target className="h-5 w-5 text-purple-500" /> }
    ],
    peopleReached: 15678,
    totalEngagement: 5432
  };

  const renderOverviewTab = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {[
        { 
          title: "Attendees", 
          value: eventData.attendees, 
          icon: <Users className="h-8 w-8 text-blue-500" /> 
        },
        { 
          title: "Requests", 
          value: eventData.totalRequests, 
          icon: <Target className="h-8 w-8 text-green-500" /> 
        },
        { 
          title: "Likes", 
          value: eventData.likes, 
          icon: <Heart className="h-8 w-8 text-red-500" /> 
        }
      ].map((stat) => (
        <div 
          key={stat.title} 
          className="bg-[#323232] rounded-2xl shadow-lg p-6 flex flex-col items-center space-y-3 transform hover:scale-105 transition-transform duration-300"
        >
          {stat.icon}
          <span className="text-2xl font-bold text-white">{stat.value.toLocaleString()}</span>
          <span className="text-sm text-gray-300">{stat.title}</span>
        </div>
      ))}
    </div>
  );

  const renderServiceProvidersTab = () => (
    <div className="p-6 space-y-4">
      {eventData.serviceProviders.map((provider) => (
        <div 
          key={provider.type} 
          className="flex items-center justify-between bg-[#323232] rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
        >
          <div className="flex items-center space-x-4">
            {provider.icon}
            <span className="font-semibold text-lg text-white">{provider.type}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="h-6 w-6 text-yellow-500" />
            <span className="font-bold text-lg text-white">{provider.rating}/5</span>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCoverageTab = () => (
    <div className="p-6">
      <div className="bg-[#323232] rounded-2xl shadow-lg p-6">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={eventData.coverageMap} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <XAxis 
              dataKey="region" 
              tick={{ fill: '#fff' }}
              axisLine={{ stroke: '#fff' }}
            />
            <YAxis 
              tick={{ fill: '#fff' }}
              axisLine={{ stroke: '#fff' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(39, 34, 34, 0.9)', 
                color: 'white', 
                borderRadius: '16px',
                border: 'none',
                padding: '12px' 
              }} 
            />
            <Bar 
              dataKey="percentage" 
              fill="#8B5CF6" // Changed to a solid purple color
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  return (
    <div className="max-w-[667px] mx-auto mt-28 bg-[#272222] shadow-xl text-white rounded-[30px]">
      {/* Header */}
      <div className="relative mt-16">
        <img 
          src={eventData.coverImage} 
          alt="Event Cover" 
          className="w-full h-64 object-cover rounded-b-3xl"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#272222] to-transparent p-8">
          <div className="flex items-center space-x-6">
            <img 
              src={eventData.profileImage} 
              alt="Event Profile" 
              className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-bold">{eventData.eventName}</h2>
              <p className="text-gray-200 text-lg">Event Analytics Dashboard</p>
            </div>
          </div>
        </div>
      </div>

      {/* Engagement Stats */}
      <div className="flex justify-around p-6 bg-[#323232] rounded-2xl mx-6 mt-6 shadow-lg">
        <div className="flex flex-col items-center space-y-2">
          <Heart className="h-8 w-8 text-red-400" />
          <span className="text-lg font-semibold">{eventData.likes.toLocaleString()}</span>
          <span className="text-sm text-gray-300">Likes</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <MessageCircle className="h-8 w-8 text-blue-400" />
          <span className="text-lg font-semibold">{eventData.comments.toLocaleString()}</span>
          <span className="text-sm text-gray-300">Comments</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <Share2 className="h-8 w-8 text-green-400" />
          <span className="text-lg font-semibold">{eventData.shares.toLocaleString()}</span>
          <span className="text-sm text-gray-300">Shares</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-700 mx-6 mt-6">
        {[
          { id: 'overview', label: 'Overview' },
          { id: 'providers', label: 'Providers' },
          { id: 'coverage', label: 'Coverage' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 p-4 text-center text-lg font-semibold transition-all duration-300 ${
              activeTab === tab.id 
                ? 'border-b-2 border-blue-500 text-blue-400' 
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Dynamic Content */}
      <div className="mt-6">
        {activeTab === 'overview' && renderOverviewTab()}
        {activeTab === 'providers' && renderServiceProvidersTab()}
        {activeTab === 'coverage' && renderCoverageTab()}
      </div>

      {/* Bottom Stats */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#323232] rounded-2xl p-6 text-center shadow-lg">
            <Globe className="h-8 w-8 mx-auto text-teal-400 mb-3" />
            <span className="font-bold text-2xl block mb-2">{eventData.peopleReached.toLocaleString()}</span>
            <span className="text-gray-300">People Reached</span>
          </div>
          <div className="bg-[#323232] rounded-2xl p-6 text-center shadow-lg">
            <BarChart3 className="h-8 w-8 mx-auto text-purple-400 mb-3" />
            <span className="font-bold text-2xl block mb-2">{eventData.totalEngagement.toLocaleString()}</span>
            <span className="text-gray-300">Total Engagement</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventAnalytics;