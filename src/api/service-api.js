/**
 * API Endpoints for Service Management
 *
 * This file documents the API endpoints needed for service-related functionality.
 * It's intended for the backend team to implement these endpoints.
 */

// Base URL
const BASE_URL = "/api"

// Service API Endpoints
export const SERVICE_API_ENDPOINTS = {
  // Get all services
  GET_SERVICES: `${BASE_URL}/services`,

  // Get service by ID
  GET_SERVICE_BY_ID: `${BASE_URL}/services/:serviceId`,

  // Create a new service
  CREATE_SERVICE: `${BASE_URL}/services`,

  // Update an existing service
  UPDATE_SERVICE: `${BASE_URL}/services/:serviceId`,

  // Delete a service
  DELETE_SERVICE: `${BASE_URL}/services/:serviceId`,

  // Get service categories
  GET_SERVICE_CATEGORIES: `${BASE_URL}/services/categories`,

  // Get services by category
  GET_SERVICES_BY_CATEGORY: `${BASE_URL}/services/categories/:categoryId`,

  // Get user services (services offered by a specific user)
  GET_USER_SERVICES: `${BASE_URL}/users/:userId/services`,

  // Get service reviews
  GET_SERVICE_REVIEWS: `${BASE_URL}/services/:serviceId/reviews`,

  // Add a review to a service
  ADD_SERVICE_REVIEW: `${BASE_URL}/services/:serviceId/reviews`,

  // Update a review
  UPDATE_SERVICE_REVIEW: `${BASE_URL}/services/:serviceId/reviews/:reviewId`,

  // Delete a review
  DELETE_SERVICE_REVIEW: `${BASE_URL}/services/:serviceId/reviews/:reviewId`,

  // Upload service images
  UPLOAD_SERVICE_IMAGES: `${BASE_URL}/services/:serviceId/images`,

  // Get trending services
  GET_TRENDING_SERVICES: `${BASE_URL}/services/trending`,

  // Get service provider profile
  GET_SERVICE_PROVIDER: `${BASE_URL}/services/:serviceId/provider`,
  
  // Contact service provider via email
  CONTACT_SERVICE_PROVIDER_EMAIL: `${BASE_URL}/services/:serviceId/contact/email`,
  
  // Contact service provider via phone
  CONTACT_SERVICE_PROVIDER_PHONE: `${BASE_URL}/services/:serviceId/contact/phone`,
  
  // Book a service
  BOOK_SERVICE: `${BASE_URL}/services/:serviceId/book`,
  
  // Get bookings for a service (for service providers)
  GET_SERVICE_BOOKINGS: `${BASE_URL}/services/:serviceId/bookings`,
  
  // Get user's service bookings (services booked by a user)
  GET_USER_SERVICE_BOOKINGS: `${BASE_URL}/users/:userId/service-bookings`,
  
  // Update booking status (confirm, reject, complete)
  UPDATE_BOOKING_STATUS: `${BASE_URL}/services/bookings/:bookingId/status`,
}

/**
 * API Request/Response Examples
 */

// Example GET Services Request
export const getServicesRequest = {
  method: "GET",
  url: `${BASE_URL}/services`,
  headers: {
    Authorization: "Bearer {token}",
  },
}

// Example GET Services Response
export const getServicesResponse = {
  status: 200,
  data: [
    {
      id: 1,
      name: "John Smith",
      specialization: "Web Development",
      rating: 4.9,
      price: "$50/hr",
      description: "Professional web developer with 5+ years experience specializing in React and Node.js",
      profileData: {
        profile: "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg",
        online: true,
        userId: 101
      },
      reviews: {
        count: 120,
        average: 4.9
      },
      portfolio: [
        "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
        "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg"
      ],
      availability: {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        hours: "9:00 AM - 5:00 PM"
      },
      contactInfo: {
        email: "john.smith@example.com",
        phone: "+1234567890"
      }
    }
  ],
}

// Example GET Service by ID Request
export const getServiceByIdRequest = {
  method: "GET",
  url: `${BASE_URL}/services/1`,
  headers: {
    Authorization: "Bearer {token}",
  },
}

// Example GET Service by ID Response
export const getServiceByIdResponse = {
  status: 200,
  data: {
    id: 1,
    name: "John Smith",
    specialization: "Web Development",
    rating: 4.9,
    price: "$50/hr",
    description: "Professional web developer with 5+ years experience specializing in React and Node.js",
    profileData: {
      profile: "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg",
      online: true,
      userId: 101
    },
    reviews: {
      count: 120,
      average: 4.9,
      items: [
        {
          id: 201,
          userId: 102,
          userName: "Sarah Johnson",
          userProfile: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",
          rating: 5,
          comment: "Excellent service, very professional and delivered on time!",
          date: "2025-03-15T10:30:00Z"
        },
        {
          id: 202,
          userId: 103,
          userName: "Michael Brown",
          userProfile: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg",
          rating: 4.5,
          comment: "Great work, would hire again.",
          date: "2025-03-10T14:20:00Z"
        }
      ]
    },
    portfolio: [
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg"
    ],
    availability: {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      hours: "9:00 AM - 5:00 PM"
    },
    contactInfo: {
      email: "john.smith@example.com",
      phone: "+1234567890"
    },
    skills: ["React", "Node.js", "JavaScript", "HTML", "CSS"],
    languages: ["English", "Spanish"],
    education: [
      {
        degree: "B.S. Computer Science",
        institution: "University of Technology",
        year: "2020"
      }
    ],
    certifications: [
      {
        name: "AWS Certified Developer",
        issuer: "Amazon Web Services",
        year: "2022"
      }
    ]
  },
}

// Example CREATE Service Request
export const createServiceRequest = {
  method: "POST",
  url: `${BASE_URL}/services`,
  headers: {
    Authorization: "Bearer {token}",
    "Content-Type": "application/json",
  },
  body: {
    name: "John Smith",
    specialization: "Web Development",
    price: "$50/hr",
    description: "Professional web developer with 5+ years experience specializing in React and Node.js",
    profileData: {
      userId: 101
    },
    availability: {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      hours: "9:00 AM - 5:00 PM"
    },
    contactInfo: {
      email: "john.smith@example.com",
      phone: "+1234567890"
    },
    skills: ["React", "Node.js", "JavaScript", "HTML", "CSS"],
    languages: ["English", "Spanish"],
    education: [
      {
        degree: "B.S. Computer Science",
        institution: "University of Technology",
        year: "2020"
      }
    ],
    certifications: [
      {
        name: "AWS Certified Developer",
        issuer: "Amazon Web Services",
        year: "2022"
      }
    ]
  },
}

// Example CREATE Service Response
export const createServiceResponse = {
  status: 201,
  data: {
    id: 11,
    name: "John Smith",
    specialization: "Web Development",
    rating: 0,
    price: "$50/hr",
    description: "Professional web developer with 5+ years experience specializing in React and Node.js",
    profileData: {
      profile: "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg",
      online: true,
      userId: 101
    },
    reviews: {
      count: 0,
      average: 0
    }
  },
}

// Example UPDATE Service Request
export const updateServiceRequest = {
  method: "PATCH",
  url: `${BASE_URL}/services/11`,
  headers: {
    Authorization: "Bearer {token}",
    "Content-Type": "application/json",
  },
  body: {
    price: "$60/hr",
    description: "Updated service description with new skills",
    availability: {
      days: ["Monday", "Wednesday", "Friday"],
      hours: "10:00 AM - 6:00 PM"
    }
  },
}

// Example UPDATE Service Response
export const updateServiceResponse = {
  status: 200,
  data: {
    id: 11,
    price: "$60/hr",
    description: "Updated service description with new skills",
    availability: {
      days: ["Monday", "Wednesday", "Friday"],
      hours: "10:00 AM - 6:00 PM"
    }
  },
}

// Example DELETE Service Request
export const deleteServiceRequest = {
  method: "DELETE",
  url: `${BASE_URL}/services/11`,
  headers: {
    Authorization: "Bearer {token}",
  },
}

// Example DELETE Service Response
export const deleteServiceResponse = {
  status: 204,
}

// Example ADD REVIEW Request
export const addServiceReviewRequest = {
  method: "POST",
  url: `${BASE_URL}/services/1/reviews`,
  headers: {
    Authorization: "Bearer {token}",
    "Content-Type": "application/json",
  },
  body: {
    userId: 104,
    rating: 4.5,
    comment: "Very professional service, would recommend!"
  },
}

// Example ADD REVIEW Response
export const addServiceReviewResponse = {
  status: 201,
  data: {
    id: 203,
    serviceId: 1,
    userId: 104,
    userName: "Emily Wilson",
    userProfile: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg",
    rating: 4.5,
    comment: "Very professional service, would recommend!",
    date: "2025-04-20T09:15:00Z"
  },
}

// Example CONTACT SERVICE PROVIDER via Email Request
export const contactServiceProviderEmailRequest = {
  method: "POST",
  url: `${BASE_URL}/services/1/contact/email`,
  headers: {
    Authorization: "Bearer {token}",
    "Content-Type": "application/json",
  },
  body: {
    userId: 105,
    subject: "Project Inquiry",
    message: "I'm interested in discussing a potential web development project."
  },
}

// Example CONTACT SERVICE PROVIDER via Email Response
export const contactServiceProviderEmailResponse = {
  status: 200,
  data: {
    success: true,
    messageId: "msg_12345",
    sent: true,
    timestamp: "2025-04-20T10:30:45Z"
  },
}

// Example BOOK SERVICE Request
export const bookServiceRequest = {
  method: "POST",
  url: `${BASE_URL}/services/1/book`,
  headers: {
    Authorization: "Bearer {token}",
    "Content-Type": "application/json",
  },
  body: {
    userId: 105,
    date: "2025-05-10",
    time: "14:00",
    duration: 2, // hours
    details: "Need help with building a landing page for my business",
    contactPreference: "email"
  },
}

// Example BOOK SERVICE Response
export const bookServiceResponse = {
  status: 201,
  data: {
    bookingId: "booking_67890",
    serviceId: 1,
    userId: 105,
    providerUserId: 101,
    date: "2025-05-10",
    time: "14:00",
    duration: 2,
    details: "Need help with building a landing page for my business",
    status: "pending",
    createdAt: "2025-04-20T11:15:30Z"
  },
}

// Example GET TRENDING SERVICES Request
export const getTrendingServicesRequest = {
  method: "GET",
  url: `${BASE_URL}/services/trending`,
  headers: {
    Authorization: "Bearer {token}",
  },
}

// Example GET TRENDING SERVICES Response
export const getTrendingServicesResponse = {
  status: 200,
  data: [
    {
      id: 1,
      name: "John Smith",
      specialization: "Web Development",
      rating: 4.9,
      price: "$50/hr",
      profileData: {
        profile: "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg",
        online: true,
        userId: 101
      },
      reviews: {
        count: 120,
        average: 4.9
      }
    },
    {
      id: 2,
      name: "Sarah Lee",
      specialization: "Graphic Design",
      rating: 4.8,
      price: "$45/hr",
      profileData: {
        profile: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",
        online: false,
        userId: 102
      },
      reviews: {
        count: 95,
        average: 4.8
      }
    },
    // Additional trending services would be listed here
  ],
}

// Example UPDATE BOOKING STATUS Request
export const updateBookingStatusRequest = {
  method: "PATCH",
  url: `${BASE_URL}/services/bookings/booking_67890/status`,
  headers: {
    Authorization: "Bearer {token}",
    "Content-Type": "application/json",
  },
  body: {
    status: "confirmed", // or "rejected", "completed"
    message: "Looking forward to working with you!"
  },
}

// Example UPDATE BOOKING STATUS Response
export const updateBookingStatusResponse = {
  status: 200,
  data: {
    bookingId: "booking_67890",
    serviceId: 1,
    status: "confirmed",
    updatedAt: "2025-04-20T12:30:15Z",
    message: "Looking forward to working with you!"
  },
}

/**
 * Database Schema Recommendations for Services and Bookings
 * 
 * These schemas are provided as guidance for the backend team to implement
 * the database structure required for storing services and bookings.
 */

export const dbSchemaRecommendations = {
  Services: {
    id: "UUID or Integer (Primary Key)",
    userId: "Foreign Key to Users table (the service provider)",
    name: "String (name displayed for the service - usually provider's name)",
    specialization: "String (main service category)",
    description: "Text (detailed description of services offered)",
    price: "String (price information with currency and unit - e.g. $50/hr)",
    rating: "Float (average rating from 0-5)",
    skills: "Array of Strings (skills/technologies/methods offered)",
    languages: "Array of Strings (languages spoken by provider)",
    availability: "JSON (contains days and hours of availability)",
    contactInfo: "JSON (contains email and phone)",
    education: "Array of JSONs (educational background)",
    certifications: "Array of JSONs (professional certifications)",
    portfolioImages: "Array of Strings (URLs to portfolio images)",
    createdAt: "Timestamp",
    updatedAt: "Timestamp",
    isActive: "Boolean (whether the service is currently active)"
  },
  
  ServiceReviews: {
    id: "UUID or Integer (Primary Key)",
    serviceId: "Foreign Key to Services table",
    userId: "Foreign Key to Users table (the reviewer)",
    rating: "Float (rating from 0-5)",
    comment: "Text (review content)",
    createdAt: "Timestamp",
    updatedAt: "Timestamp",
    isPublic: "Boolean (whether the review is publicly visible)"
  },
  
  ServiceBookings: {
    id: "UUID or Integer (Primary Key)",
    serviceId: "Foreign Key to Services table",
    userId: "Foreign Key to Users table (the client)",
    date: "Date (scheduled date of service)",
    time: "Time (scheduled time of service)",
    duration: "Integer (duration in hours)",
    details: "Text (details about the booking request)",
    status: "String (pending, confirmed, rejected, completed, cancelled)",
    contactPreference: "String (preferred contact method)",
    message: "Text (additional message from provider or client)",
    createdAt: "Timestamp",
    updatedAt: "Timestamp",
    completedAt: "Timestamp (when service was completed)"
  }
}

/**
 * Email Template Structure for Service Booking Confirmation
 * 
 * This is a suggestion for the email template structure to be sent to users
 * when they book a service.
 */

export const serviceBookingEmailTemplate = {
  subject: "Your Service Booking Confirmation with [Provider Name]",
  from: "services@example.com",
  template: `
    <html>
      <head>
        <style>
          /* Email styles would go here */
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <img src="[Company Logo]" alt="[Company Name]" />
          </header>
          
          <main>
            <h1>Your Booking is Confirmed!</h1>
            <p>Hello [Client Name],</p>
            <p>Your booking with [Provider Name] has been confirmed.</p>
            
            <div class="booking-details">
              <h2>Booking Details</h2>
              <p><strong>Service:</strong> [Service Specialization]</p>
              <p><strong>Provider:</strong> [Provider Name]</p>
              <p><strong>Date:</strong> [Booking Date]</p>
              <p><strong>Time:</strong> [Booking Time]</p>
              <p><strong>Duration:</strong> [Duration] hours</p>
              <p><strong>Booking ID:</strong> [Booking ID]</p>
            </div>
            
            <div class="provider-info">
              <h3>About Your Service Provider</h3>
              <div class="provider-profile">
                <img src="[Provider Profile Image]" alt="[Provider Name]" />
                <div>
                  <p><strong>Name:</strong> [Provider Name]</p>
                  <p><strong>Specialization:</strong> [Service Specialization]</p>
                  <p><strong>Rating:</strong> [Provider Rating]/5 ([Review Count] reviews)</p>
                </div>
              </div>
            </div>
            
            <div class="next-steps">
              <h3>Next Steps</h3>
              <p>The service provider will contact you via your preferred method ([Contact Preference]) to discuss details.</p>
              <p>You can manage your booking by logging into your account and viewing your bookings.</p>
            </div>
          </main>
          
          <footer>
            <p>If you have any questions, please contact support@example.com</p>
            <p>© [Current Year] [Company Name]. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  `
}