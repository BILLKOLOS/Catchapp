/**
 * API Endpoints for Service Provider Profiles
 *
 * This file defines the API endpoints specifically for service provider profiles
 * and extends the existing service API structure.
 */

// Import base configuration
import { BASE_URL } from './serviceApi';

// Service Provider Profile API Endpoints
export const PROFILE_API_ENDPOINTS = {
  // Get profile by ID
  GET_PROFILE: `${BASE_URL}/profiles/:id`,

  // Update profile 
  UPDATE_PROFILE: `${BASE_URL}/profiles/:id`,

  // Get profile gallery images
  GET_PROFILE_GALLERY: `${BASE_URL}/profiles/:id/gallery`,

  // Upload profile gallery images
  UPLOAD_PROFILE_GALLERY: `${BASE_URL}/profiles/:id/gallery`,

  // Delete profile gallery image
  DELETE_PROFILE_GALLERY_IMAGE: `${BASE_URL}/profiles/:id/gallery/:imageId`,

  // Get profile events/albums
  GET_PROFILE_EVENTS: `${BASE_URL}/profiles/:id/events`,

  // Get specific album
  GET_PROFILE_ALBUM: `${BASE_URL}/profiles/:id/album/:albumId`,

  // Create new event/album
  CREATE_PROFILE_EVENT: `${BASE_URL}/profiles/:id/events`,

  // Update event/album
  UPDATE_PROFILE_EVENT: `${BASE_URL}/profiles/:id/events/:eventId`,

  // Delete event/album
  DELETE_PROFILE_EVENT: `${BASE_URL}/profiles/:id/events/:eventId`,

  // Add images to event/album
  ADD_IMAGES_TO_EVENT: `${BASE_URL}/profiles/:id/events/:eventId/images`,

  // Remove image from event/album
  REMOVE_IMAGE_FROM_EVENT: `${BASE_URL}/profiles/:id/events/:eventId/images/:imageId`,

  // Get profile reviews
  GET_PROFILE_REVIEWS: `${BASE_URL}/profiles/:id/reviews`,

  // Add review to profile
  ADD_PROFILE_REVIEW: `${BASE_URL}/profiles/:id/reviews`,

  // Update review
  UPDATE_PROFILE_REVIEW: `${BASE_URL}/profiles/:id/reviews/:reviewId`,

  // Delete review
  DELETE_PROFILE_REVIEW: `${BASE_URL}/profiles/:id/reviews/:reviewId`,

  // Follow a profile
  FOLLOW_PROFILE: `${BASE_URL}/profiles/:id/follow`,

  // Unfollow a profile
  UNFOLLOW_PROFILE: `${BASE_URL}/profiles/:id/unfollow`,

  // Get followers list
  GET_PROFILE_FOLLOWERS: `${BASE_URL}/profiles/:id/followers`,

  // Get following list
  GET_PROFILE_FOLLOWING: `${BASE_URL}/profiles/:id/following`,

  // Contact profile via email
  CONTACT_PROFILE_EMAIL: `${BASE_URL}/profiles/:id/contact/email`,

  // Contact profile via phone
  CONTACT_PROFILE_PHONE: `${BASE_URL}/profiles/:id/contact/phone`,

  // Like a gallery image
  LIKE_GALLERY_IMAGE: `${BASE_URL}/profiles/:id/gallery/:imageId/like`,

  // Unlike a gallery image
  UNLIKE_GALLERY_IMAGE: `${BASE_URL}/profiles/:id/gallery/:imageId/unlike`,
};

/**
 * Example API Requests and Responses
 */

// Example GET Profile Request
export const getProfileRequest = {
  method: "GET",
  url: `${BASE_URL}/profiles/101`,
  headers: {
    Authorization: "Bearer {token}",
  },
};

// Example GET Profile Response
export const getProfileResponse = {
  status: 200,
  data: {
    id: "101",
    username: "JohnDoe",
    subtext: "Professional Photographer",
    profile: "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg",
    following: 253,
    followers: 1024,
    specialties: ["Wedding", "Portrait", "Landscape", "Commercial"],
    galleryImages: [
      {
        id: "img1",
        src: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
        location: "New York City",
        date: {
          day: "12",
          month: "Apr"
        },
        album: [
          {
            id: "album1",
            title: "Downtown Wedding"
          }
        ]
      },
      {
        id: "img2",
        src: "https://images.pexels.com/photos/1959805/pexels-photo-1959805.jpeg",
        location: "Los Angeles",
        date: {
          day: "24",
          month: "Mar"
        }
      }
    ],
    contactInfo: {
      email: "john.doe@example.com",
      phone: "+1234567890"
    }
  }
};

// Example UPDATE Profile Request
export const updateProfileRequest = {
  method: "PATCH",
  url: `${BASE_URL}/profiles/101`,
  headers: {
    Authorization: "Bearer {token}",
    "Content-Type": "application/json",
  },
  body: {
    username: "JohnDoe",
    subtext: "Professional Photographer & Videographer",
    specialties: ["Wedding", "Portrait", "Landscape", "Commercial", "Video"]
  },
};

// Example UPDATE Profile Response
export const updateProfileResponse = {
  status: 200,
  data: {
    id: "101",
    username: "JohnDoe",
    subtext: "Professional Photographer & Videographer",
    specialties: ["Wedding", "Portrait", "Landscape", "Commercial", "Video"]
  }
};

// Example GET Profile Gallery Request
export const getProfileGalleryRequest = {
  method: "GET",
  url: `${BASE_URL}/profiles/101/gallery`,
  headers: {
    Authorization: "Bearer {token}",
  },
};

// Example GET Profile Gallery Response
export const getProfileGalleryResponse = {
  status: 200,
  data: [
    {
      id: "img1",
      src: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
      location: "New York City",
      date: {
        day: "12",
        month: "Apr"
      },
      likes: 152,
      hasUserLiked: true
    },
    {
      id: "img2",
      src: "https://images.pexels.com/photos/1959805/pexels-photo-1959805.jpeg",
      location: "Los Angeles",
      date: {
        day: "24",
        month: "Mar"
      },
      likes: 98,
      hasUserLiked: false
    }
  ]
};

// Example GET Profile Album Request
export const getProfileAlbumRequest = {
  method: "GET",
  url: `${BASE_URL}/profiles/101/album/album1`,
  headers: {
    Authorization: "Bearer {token}",
  },
};

// Example GET Profile Album Response
export const getProfileAlbumResponse = {
  status: 200,
  data: {
    id: "album1",
    title: "Downtown Wedding",
    description: "Beautiful wedding at the Plaza Hotel",
    date: "2025-04-12",
    location: "New York City",
    coverImage: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
    images: [
      {
        id: "img1",
        src: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
        caption: "Ceremony",
        likes: 152
      },
      {
        id: "img3",
        src: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg",
        caption: "Reception",
        likes: 87
      },
      {
        id: "img4",
        src: "https://images.pexels.com/photos/2062320/pexels-photo-2062320.jpeg",
        caption: "First Dance",
        likes: 124
      }
    ]
  }
};

// Example GET Profile Reviews Request
export const getProfileReviewsRequest = {
  method: "GET",
  url: `${BASE_URL}/profiles/101/reviews`,
  headers: {
    Authorization: "Bearer {token}",
  },
};

// Example GET Profile Reviews Response
export const getProfileReviewsResponse = {
  status: 200,
  data: {
    averageRating: 4.8,
    totalReviews: 65,
    reviews: [
      {
        id: "rev1",
        userId: "user1",
        username: "Sarah Johnson",
        avatar: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",
        rating: 5,
        content: "John was amazing at our wedding! The photos are breathtaking and he captured every special moment.",
        date: "2025-03-20T14:30:00Z",
        event: "Wedding Photography"
      },
      {
        id: "rev2",
        userId: "user2",
        username: "Michael Brown",
        avatar: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg",
        rating: 4.5,
        content: "Great portrait session. Very professional and made us feel comfortable.",
        date: "2025-02-15T10:15:00Z",
        event: "Family Portraits"
      }
    ]
  }
};

// Example FOLLOW Profile Request
export const followProfileRequest = {
  method: "POST",
  url: `${BASE_URL}/profiles/101/follow`,
  headers: {
    Authorization: "Bearer {token}",
  },
};

// Example FOLLOW Profile Response
export const followProfileResponse = {
  status: 200,
  data: {
    success: true,
    followers: 1025,
    isFollowing: true
  }
};

// Example Contact Profile via Email Request
export const contactProfileEmailRequest = {
  method: "POST",
  url: `${BASE_URL}/profiles/101/contact/email`,
  headers: {
    Authorization: "Bearer {token}",
    "Content-Type": "application/json",
  },
  body: {
    subject: "Wedding Photography Inquiry",
    message: "Hi John, I'm interested in booking you for my wedding on June 15, 2026. Are you available?",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    phone: "+1987654321"
  },
};

// Example Contact Profile via Email Response
export const contactProfileEmailResponse = {
  status: 200,
  data: {
    success: true,
    messageId: "msg_45678",
    sent: true,
    timestamp: "2025-04-20T15:42:10Z"
  }
};

/**
 * Database Schema Recommendations for Profiles
 */

export const profileDbSchemaRecommendations = {
  Profiles: {
    id: "UUID or Integer (Primary Key)",
    userId: "Foreign Key to Users table",
    username: "String",
    subtext: "String (tagline or short bio)",
    profile: "String (URL to profile image)",
    biography: "Text (detailed biography)",
    specialties: "Array of Strings",
    contactInfo: "JSON (contains email and phone)",
    isVerified: "Boolean",
    createdAt: "Timestamp",
    updatedAt: "Timestamp"
  },
  
  ProfileGalleryImages: {
    id: "UUID or Integer (Primary Key)",
    profileId: "Foreign Key to Profiles table",
    src: "String (URL to image)",
    location: "String",
    dateDay: "String",
    dateMonth: "String",
    fullDate: "Date",
    likes: "Integer",
    albumId: "Foreign Key to Events table (optional)",
    createdAt: "Timestamp",
    updatedAt: "Timestamp"
  },
  
  ProfileEvents: {
    id: "UUID or Integer (Primary Key)",
    profileId: "Foreign Key to Profiles table",
    title: "String",
    description: "Text",
    date: "Date",
    location: "String",
    coverImageId: "Foreign Key to ProfileGalleryImages table",
    createdAt: "Timestamp",
    updatedAt: "Timestamp"
  },
  
  ProfileReviews: {
    id: "UUID or Integer (Primary Key)",
    profileId: "Foreign Key to Profiles table",
    userId: "Foreign Key to Users table (reviewer)",
    rating: "Float (0-5)",
    content: "Text",
    event: "String (type of service reviewed)",
    eventDate: "Date (optional)",
    isVerified: "Boolean (if this was a verified purchase/service)",
    createdAt: "Timestamp",
    updatedAt: "Timestamp"
  },
  
  ProfileFollowers: {
    id: "UUID or Integer (Primary Key)",
    profileId: "Foreign Key to Profiles table",
    followerId: "Foreign Key to Users table",
    createdAt: "Timestamp"
  },
  
  ProfileImageLikes: {
    id: "UUID or Integer (Primary Key)",
    imageId: "Foreign Key to ProfileGalleryImages table",
    userId: "Foreign Key to Users table",
    createdAt: "Timestamp"
  }
};