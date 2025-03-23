// src/data/notification.js

import { Bell, Phone, Calendar, Heart, Star, MessageSquare, UserPlus, Check, Tag, PhoneMissed, PhoneCall } from 'lucide-react';
import React from 'react';

export const notificationData = {
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

export const categories = [
  { id: 'general', title: 'General', icon: <Bell className="h-4 w-4" /> },
  { id: 'approved', title: 'Approved', icon: <Check className="h-4 w-4" /> },
  { id: 'calls', title: 'Calls', icon: <Phone className="h-4 w-4" /> }
];