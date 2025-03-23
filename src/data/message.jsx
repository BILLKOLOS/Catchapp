// src/data/messaging.js

import React from 'react';
import { MessageSquare } from 'lucide-react';

export const messagingData = {
  all: [
    {
      id: 1,
      iconName: "MessageSquare",
      message: "Hey, are we still on for lunch?",
      time: "10:30 AM",
      user: "Sarah Johnson",
      avatar: "https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?auto=compress&cs=tinysrgb&w=600",
      online: true,
      read: false
    },
    {
      id: 2,
      iconName: "MessageSquare",
      message: "I've sent you the project files",
      time: "9:15 AM",
      user: "Mike Peters",
      avatar: "https://images.pexels.com/photos/3916850/pexels-photo-3916850.jpeg?auto=compress&cs=tinysrgb&w=600",
      online: true,
      read: false
    },
    {
      id: 3,
      iconName: "MessageSquare",
      message: "Thanks for your help yesterday with the presentation. It went really well and everyone was impressed!",
      time: "Yesterday",
      user: "Emma Wilson",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      online: false,
      read: true
    },
    {
      id: 4,
      iconName: "MessageSquare",
      message: "Let's catch up soon about the upcoming conference",
      time: "Yesterday",
      user: "David Brown",
      avatar: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600",
      online: false,
      read: false
    },
    {
      id: 5,
      iconName: "MessageSquare",
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
      iconName: "MessageSquare",
      message: "Hey, are we still on for lunch?",
      time: "10:30 AM",
      user: "Sarah Johnson",
      avatar: "/api/placeholder/40/40",
      online: true,
      read: false
    },
    {
      id: 2,
      iconName: "MessageSquare",
      message: "I've sent you the project files",
      time: "9:15 AM",
      user: "Mike Peters",
      avatar: "/api/placeholder/40/40",
      online: true,
      read: false
    },
    {
      id: 4,
      iconName: "MessageSquare",
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
      iconName: "MessageSquare",
      message: "Hey, are we still on for lunch?",
      time: "10:30 AM",
      user: "Sarah Johnson",
      avatar: "/api/placeholder/40/40",
      online: true,
      read: false
    },
    {
      id: 2,
      iconName: "MessageSquare",
      message: "I've sent you the project files",
      time: "9:15 AM",
      user: "Mike Peters",
      avatar: "/api/placeholder/40/40",
      online: true,
      read: false
    },
    {
      id: 3,
      iconName: "MessageSquare",
      message: "Thanks for your help yesterday with the presentation. It went really well and everyone was impressed!",
      time: "Yesterday",
      user: "Emma Wilson",
      avatar: "/api/placeholder/40/40",
      online: false,
      read: true
    }
  ]
};

export const messageCategories = [
  { id: 'all', title: 'All Messages', iconName: 'MessageSquare' },
  { id: 'unread', title: 'Unread', iconName: 'MessageSquare' },
  { id: 'direct', title: 'Direct', iconName: 'MessageSquare' }
];