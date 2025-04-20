/**
 * API Endpoints for Live Events Management
 *
 * This file documents the API endpoints needed for live events functionality.
 * It's intended for the backend team to implement these endpoints.
 */

// Base URL (reusing the existing BASE_URL)
const BASE_URL = "/api"

// Live Event API Endpoints
export const LIVE_EVENT_API_ENDPOINTS = {
  // Get all currently live events
  GET_LIVE_EVENTS: `${BASE_URL}/live-events`,

  // Get specific live event by ID
  GET_LIVE_EVENT_BY_ID: `${BASE_URL}/live-events/:eventId`,

  // Start a new live event
  START_LIVE_EVENT: `${BASE_URL}/live-events/start`,

  // End a live event
  END_LIVE_EVENT: `${BASE_URL}/live-events/:eventId/end`,

  // Get comments for a live event
  GET_LIVE_EVENT_COMMENTS: `${BASE_URL}/live-events/:eventId/comments`,

  // Post a comment to a live event
  POST_LIVE_EVENT_COMMENT: `${BASE_URL}/live-events/:eventId/comments`,

  // Like a live event
  LIKE_LIVE_EVENT: `${BASE_URL}/live-events/:eventId/like`,

  // Unlike a live event
  UNLIKE_LIVE_EVENT: `${BASE_URL}/live-events/:eventId/unlike`,

  // Get active viewers for a live event
  GET_LIVE_EVENT_ACTIVE_VIEWERS: `${BASE_URL}/live-events/:eventId/viewers`,

  // Join a live event as a viewer
  JOIN_LIVE_EVENT: `${BASE_URL}/live-events/:eventId/join`,

  // Leave a live event as a viewer
  LEAVE_LIVE_EVENT: `${BASE_URL}/live-events/:eventId/leave`,

  // Subscribe to a channel hosting a live event
  SUBSCRIBE_TO_CHANNEL: `${BASE_URL}/channels/:channelId/subscribe`,

  // Unsubscribe from a channel
  UNSUBSCRIBE_FROM_CHANNEL: `${BASE_URL}/channels/:channelId/unsubscribe`,

  // Share a live event
  SHARE_LIVE_EVENT: `${BASE_URL}/live-events/:eventId/share`,

  // Get trending live events
  GET_TRENDING_LIVE_EVENTS: `${BASE_URL}/live-events/trending`,
}

/**
 * API Request/Response Examples
 */

// Example GET Live Events Request
export const getLiveEventsRequest = {
  method: "GET",
  url: `${BASE_URL}/live-events`,
  headers: {
    Authorization: "Bearer {token}",
  },
}

// Example GET Live Events Response
export const getLiveEventsResponse = {
  status: 200,
  data: [
    {
      id: 1,
      title: "Live Music Performance at Kasarani Stadium",
      host: {
        id: 101,
        name: "Wesley",
        username: "wesley_channel",
        avatar: "https://images.pexels.com/photos/30447781/pexels-photo-30447781/free-photo-of-portrait-of-woman-in-red-sweater-with-festive-greenery.jpeg",
      },
      thumbnail: "https://images.pexels.com/photos/30433578/pexels-photo-30433578/free-photo-of-vibrant-concert-crowd-with-stage-lights.jpeg",
      startedAt: "2025-04-20T10:15:30Z",
      activeViewers: 132,
      location: "Nairobi, Kasarani",
      likes: 12000,
      isLive: true,
    },
    {
      id: 2,
      title: "Art Gallery Opening",
      host: {
        id: 102,
        name: "Susan",
        username: "artgallery_susan",
        avatar: "https://images.pexels.com/photos/29846889/pexels-photo-29846889/free-photo-of-portrait-of-woman-by-lake-in-kaduna-nigeria.jpeg",
      },
      thumbnail: "https://images.pexels.com/photos/3004909/pexels-photo-3004909.jpeg",
      startedAt: "2025-04-20T11:30:00Z",
      activeViewers: 78,
      location: "Nairobi, Downtown",
      likes: 5600,
      isLive: true,
    },
    // Additional live events would be listed here
  ],
}

// Example GET Live Event by ID Request
export const getLiveEventByIdRequest = {
  method: "GET",
  url: `${BASE_URL}/live-events/1`,
  headers: {
    Authorization: "Bearer {token}",
  },
}

// Example GET Live Event by ID Response
export const getLiveEventByIdResponse = {
  status: 200,
  data: {
    id: 1,
    title: "Live Music Performance at Kasarani Stadium",
    description: "Join us for an amazing live performance featuring local artists",
    host: {
      id: 101,
      name: "Wesley",
      username: "wesley_channel",
      avatar: "https://images.pexels.com/photos/30447781/pexels-photo-30447781/free-photo-of-portrait-of-woman-in-red-sweater-with-festive-greenery.jpeg",
      subscribers: 23400,
      isSubscribed: false,
    },
    streamUrl: "rtmp://example.com/live/stream123",
    hlsUrl: "https://example.com/hls/stream123.m3u8",
    thumbnail: "https://images.pexels.com/photos/30433578/pexels-photo-30433578/free-photo-of-vibrant-concert-crowd-with-stage-lights.jpeg",
    startedAt: "2025-04-20T10:15:30Z",
    activeViewers: 132,
    location: "Nairobi, Kasarani",
    likes: 12000,
    hasLiked: false,
    isLive: true,
    comments: [
      {
        id: 101,
        user: {
          id: 201,
          username: "timothy",
          avatar: "https://images.pexels.com/photos/30392508/pexels-photo-30392508/free-photo-of-elegant-woman-in-bright-pink-blouse-posing.jpeg",
        },
        text: "This event is amazing! 🔥",
        timestamp: "2025-04-20T10:30:45Z",
        timeAgo: "2m ago",
        likes: 12,
        hasLiked: false,
      },
      {
        id: 102,
        user: {
          id: 202,
          username: "andrew",
          avatar: "https://images.pexels.com/photos/29976870/pexels-photo-29976870/free-photo-of-contemplative-young-adult-in-urban-setting.jpeg",
        },
        text: "Can't wait to see what happens next",
        timestamp: "2025-04-20T10:31:15Z",
        timeAgo: "1m ago",
        likes: 5,
        hasLiked: false,
      },
      // Additional comments would be listed here
    ],
    activeUsers: [
      {
        id: 201,
        username: "timothy",
        avatar: "https://images.pexels.com/photos/30392508/pexels-photo-30392508/free-photo-of-elegant-woman-in-bright-pink-blouse-posing.jpeg",
        isOnline: true,
      },
      {
        id: 202,
        username: "andrew",
        avatar: "https://images.pexels.com/photos/29976870/pexels-photo-29976870/free-photo-of-contemplative-young-adult-in-urban-setting.jpeg",
        isOnline: true,
      },
      // Additional active users would be listed here
    ],
  },
}

// Example POST Comment Request
export const postLiveEventCommentRequest = {
  method: "POST",
  url: `${BASE_URL}/live-events/1/comments`,
  headers: {
    Authorization: "Bearer {token}",
    "Content-Type": "application/json",
  },
  body: {
    text: "This is amazing! Love the performance!",
  },
}

// Example POST Comment Response
export const postLiveEventCommentResponse = {
  status: 201,
  data: {
    id: 105,
    user: {
      id: 456,
      username: "current_user",
      avatar: "https://images.pexels.com/photos/29976870/pexels-photo-29976870/free-photo-of-contemplative-young-adult-in-urban-setting.jpeg",
    },
    text: "This is amazing! Love the performance!",
    timestamp: "2025-04-20T10:42:18Z",
    timeAgo: "just now",
    likes: 0,
    hasLiked: false,
  },
}

// Example LIKE Live Event Request
export const likeLiveEventRequest = {
  method: "POST",
  url: `${BASE_URL}/live-events/1/like`,
  headers: {
    Authorization: "Bearer {token}",
  },
}

// Example LIKE Live Event Response
export const likeLiveEventResponse = {
  status: 200,
  data: {
    eventId: 1,
    likes: 12001,
    hasLiked: true,
  },
}

// Example JOIN Live Event Request
export const joinLiveEventRequest = {
  method: "POST",
  url: `${BASE_URL}/live-events/1/join`,
  headers: {
    Authorization: "Bearer {token}",
  },
}

// Example JOIN Live Event Response
export const joinLiveEventResponse = {
  status: 200,
  data: {
    eventId: 1,
    userId: 456,
    joinedAt: "2025-04-20T10:45:30Z",
    sessionId: "live_session_12345",
  },
}

/**
 * Database Schema Recommendations for Live Events
 * 
 * These schemas are provided as guidance for the backend team to implement
 * the database structure required for storing live event data.
 */

export const dbSchemaRecommendations = {
  LiveEvents: {
    id: "UUID or Integer (Primary Key)",
    title: "String (event title)",
    description: "Text (event description)",
    hostId: "Foreign Key to Users table (event host/channel owner)",
    streamKey: "String (unique stream key for broadcasting)",
    streamUrl: "String (URL for the stream server)",
    hlsUrl: "String (HLS streaming URL for viewers)",
    thumbnail: "String (URL to thumbnail image)",
    coverImage: "String (URL to cover image)",
    startedAt: "Timestamp (when the stream started)",
    endedAt: "Timestamp (when the stream ended, null if still live)",
    location: "String (physical location or virtual location)",
    isLive: "Boolean (whether the event is currently live)",
    maxViewers: "Integer (peak concurrent viewers)",
    totalViews: "Integer (total views including non-concurrent)",
    createdAt: "Timestamp",
    updatedAt: "Timestamp",
  },
  
  LiveEventViewers: {
    id: "UUID or Integer (Primary Key)",
    eventId: "Foreign Key to LiveEvents table",
    userId: "Foreign Key to Users table",
    sessionId: "String (unique session identifier)",
    joinedAt: "Timestamp (when user joined the stream)",
    leftAt: "Timestamp (when user left the stream, null if still watching)",
    deviceInfo: "JSON (information about viewer's device)",
    ipAddress: "String (viewer's IP address)",
    createdAt: "Timestamp",
    updatedAt: "Timestamp",
  },
  
  LiveEventComments: {
    id: "UUID or Integer (Primary Key)",
    eventId: "Foreign Key to LiveEvents table",
    userId: "Foreign Key to Users table",
    text: "Text (comment content)",
    timestamp: "Timestamp (when comment was posted)",
    isHidden: "Boolean (moderation status)",
    createdAt: "Timestamp",
    updatedAt: "Timestamp",
  },
  
  LiveEventCommentLikes: {
    id: "UUID or Integer (Primary Key)",
    commentId: "Foreign Key to LiveEventComments table",
    userId: "Foreign Key to Users table",
    createdAt: "Timestamp",
  },
  
  LiveEventLikes: {
    id: "UUID or Integer (Primary Key)",
    eventId: "Foreign Key to LiveEvents table",
    userId: "Foreign Key to Users table",
    createdAt: "Timestamp",
  },
  
  ChannelSubscriptions: {
    id: "UUID or Integer (Primary Key)",
    channelId: "Foreign Key to Users table (channel/creator user)",
    subscriberId: "Foreign Key to Users table (subscriber user)",
    createdAt: "Timestamp",
    updatedAt: "Timestamp",
  }
}