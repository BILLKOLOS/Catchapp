import React, { useState } from "react";
import { Card, CardContent } from "@mui/material";
import { Avatar } from '@mui/material';
import { Calendar, MapPin, Users, Clock, ChevronRight, Heart } from "lucide-react";

const EventCard = ({ event, isExpanded, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`mb-6 mt-6 cursor-pointer transform transition-all duration-500 ease-in-out rounded-[30px] ${
        isExpanded ? "scale-[1.02] shadow-2xl" : "hover:scale-[1.01] hover:shadow-lg"
      } ${isHovered ? "ring-2 ring-blue-500 ring-opacity-50" : ""}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {/* Card Header */}
      <div className="relative group">
        {/* Cover Image */}
        <img
          src={event.coverImage}
          alt={event.title}
          className={`w-full h-[312px]  object-cover transition-transform duration-700 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />

        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t  ${
            isExpanded ? "from-black/90 via-black/60" : "from-black/70 via-transparent"
          } to-transparent transition-opacity duration-500`}
        />

        {/* Event Header Content */}
        <div className="absolute top-2 left-0 right-0 p-6">
          <div className="flex justify-between py-3">
            {/* Organizer Section */}
            <div className="flex flex-col items-start gap-12">
              <div className="flex items-center gap-3">
                <Avatar className="border-2 border-white/50 shadow-lg">
                  <img
                    src={event.organizer.avatar}
                    alt={event.organizer.name}
                    className="hover:scale-110 transition-transform duration-300 w-16 h-16"
                  />
                </Avatar>
                <h3 className="text-white font-semibold">{event.organizer.name}</h3>
              </div>
              <div className="">
                <h3 className="text-white text-2xl font-[Pacifico] tracking-wide">{event.title}</h3>
                {/* Likes Counter */}
                <div className="flex items-center gap-2 mt-28 py-1">
                  <Heart className="w-4 h-4 text-red-500" />
                  <span className="text-white text-sm">{event.likes}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 text-white text-md">
                <h2 className="font-semibold">{event.date}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <CardContent className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
          <div className="space-y-6 py-4">
            {/* Location Section */}
            <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
              <MapPin className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-300">Location</p>
                <p className="font-medium">{event.location}</p>
              </div>
            </div>

            {/* Personalities Section */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-400" />
                Personalities
              </h4>
              <div className="flex gap-2 flex-wrap">
                {event.personalities.map((person) => (
                  <div
                    key={person.id}
                    className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
                  >
                    <Avatar className="h-8 w-8 border border-white/20">
                      <img src={person.avatar} alt={person.name} />
                    </Avatar>
                    <span className="text-sm">{person.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Speakers Section */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg flex items-center gap-2">
                <Users className="w-5 h-5 text-yellow-400" />
                Speakers
              </h4>
              <div className="flex gap-2 flex-wrap">
                {event.speakers.map((speaker) => (
                  <div
                    key={speaker.id}
                    className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
                  >
                    <Avatar className="h-8 w-8 border border-white/20">
                      <img src={speaker.avatar} alt={speaker.name} />
                    </Avatar>
                    <span className="text-sm">{speaker.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Request Button */}
            <button
              className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-500 transform hover:scale-[1.02] transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
            >
              Request to Join
            </button>
          </div>
        </CardContent>
      </div>

      {/* Expansion Indicator */}
      <div
        className={`absolute right-4 bottom-4 transform transition-transform duration-300 ${
          isExpanded ? "rotate-90" : "rotate-0"
        }`}
      >
        <ChevronRight className="w-6 h-6 text-white/80" />
      </div>
    </Card>
  );
};

const Trending = () => {
  const [expandedEventId, setExpandedEventId] = useState(null);

  const events = [
    {
      id: 1,
      title: "Home Coming Ceremony",
      date: "12TH NOV",
      coverImage: "https://images.pexels.com/photos/28976233/pexels-photo-28976233/free-photo-of-rustic-cheese-board-with-cold-cuts-and-bread.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: "Grand Ballroom, Central Hotel",
      likes: 32,
      organizer: { name: "Johnny", avatar: "https://images.pexels.com/photos/29846889/pexels-photo-29846889/free-photo-of-portrait-of-woman-by-lake-in-kaduna-nigeria.jpeg?auto=compress&cs=tinysrgb&w=600" },
      personalities: [
        { id: 1, name: "Harry Potter", avatar: "https://images.pexels.com/photos/15566416/pexels-photo-15566416/free-photo-of-beautiful-woman-with-necklace-on-hill.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 2, name: "Pete Davidson", avatar: "https://images.pexels.com/photos/29783131/pexels-photo-29783131/free-photo-of-silhouette-of-man-in-profile-wearing-hat-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 3, name: "Emma Watson", avatar: "https://images.pexels.com/photos/3743389/pexels-photo-3743389.jpeg?auto=compress&cs=tinysrgb&w=600" },
      ],
      speakers: [
        { id: 1, name: "Dr. Mary Johnson", avatar: "https://images.pexels.com/photos/30039441/pexels-photo-30039441/free-photo-of-emotional-portrait-of-a-woman-in-low-light.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 2, name: "Prof. John Smith", avatar: "https://images.pexels.com/photos/29976870/pexels-photo-29976870/free-photo-of-contemplative-young-adult-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=600" },
      ],
    },
    {
      id: 2,
      title: "Sports Day Championship",
      date: "12TH FEB",
      likes: 43,
      coverImage: "https://images.pexels.com/photos/7944240/pexels-photo-7944240.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: "Olympic Sports Complex",
      organizer: { name: "Michael", avatar: "https://images.pexels.com/photos/30007344/pexels-photo-30007344/free-photo-of-dynamic-portrait-of-a-woman-with-flowing-hair.jpeg?auto=compress&cs=tinysrgb&w=600" },
      personalities: [
        { id: 3, name: "Sam Wilson", avatar: "https://images.pexels.com/photos/30039441/pexels-photo-30039441/free-photo-of-emotional-portrait-of-a-woman-in-low-light.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 4, name: "Alex Morgan", avatar: "https://images.pexels.com/photos/29976870/pexels-photo-29976870/free-photo-of-contemplative-young-adult-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 5, name: "Chris Evans", avatar: "/api/placeholder/40/40" },
      ],
      speakers: [
        { id: 3, name: "Coach Timothy", avatar: "https://images.pexels.com/photos/15566416/pexels-photo-15566416/free-photo-of-beautiful-woman-with-necklace-on-hill.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 4, name: "Coach Sarah", avatar: "https://images.pexels.com/photos/29783131/pexels-photo-29783131/free-photo-of-silhouette-of-man-in-profile-wearing-hat-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600" },
      ],
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      <div className="space-y-6 rounded-[30px]">
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            isExpanded={expandedEventId === event.id}
            onClick={() => setExpandedEventId(expandedEventId === event.id ? null : event.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Trending;
