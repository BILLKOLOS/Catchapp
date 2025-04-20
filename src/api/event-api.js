/**
 * API Endpoints for Event Management
 *
 * This file documents the API endpoints needed for event-related functionality.
 * It's intended for the backend team to implement these endpoints.
 */

// Base URL
const BASE_URL = "/api"

// Event API Endpoints
export const EVENT_API_ENDPOINTS = {
  // Get all events
  GET_EVENTS: `${BASE_URL}/events`,

  // Get event by ID
  GET_EVENT_BY_ID: `${BASE_URL}/events/:eventId`,

  // Create a new event
  CREATE_EVENT: `${BASE_URL}/events`,

  // Update an existing event
  UPDATE_EVENT: `${BASE_URL}/events/:eventId`,

  // Delete an event
  DELETE_EVENT: `${BASE_URL}/events/:eventId`,

  // Get attendees for an event
  GET_EVENT_ATTENDEES: `${BASE_URL}/events/:eventId/attendees`,

  // Add an attendee to an event
  ADD_EVENT_ATTENDEE: `${BASE_URL}/events/:eventId/attendees`,

  // Remove an attendee from an event
  REMOVE_EVENT_ATTENDEE: `${BASE_URL}/events/:eventId/attendees/:attendeeId`,

  // Get event categories
  GET_EVENT_CATEGORIES: `${BASE_URL}/events/categories`,

  // Update event categories
  UPDATE_EVENT_CATEGORIES: `${BASE_URL}/events/:eventId/categories`,

  // Upload event cover image
  UPLOAD_EVENT_COVER_IMAGE: `${BASE_URL}/events/:eventId/cover-image`,

  // Upload event gallery images
  UPLOAD_EVENT_GALLERY_IMAGES: `${BASE_URL}/events/:eventId/gallery-images`,
  
  // Like an event
  LIKE_EVENT: `${BASE_URL}/events/:eventId/like`,
  
  // Unlike an event
  UNLIKE_EVENT: `${BASE_URL}/events/:eventId/unlike`,
  
  // Share an event
  SHARE_EVENT: `${BASE_URL}/events/:eventId/share`,
  
  // Request invite to an event (for logged-in users)
  REQUEST_INVITE: `${BASE_URL}/events/:eventId/request-invite`,
  
  // Request invite to an event (for guests/non-logged in users)
  REQUEST_GUEST_INVITE: `${BASE_URL}/events/:eventId/request-guest-invite`,
  
  // Verify RSVP ticket
  VERIFY_RSVP: `${BASE_URL}/events/verify-rsvp/:ticketId`,
  
  // Get trending events
  GET_TRENDING_EVENTS: `${BASE_URL}/events/trending`,
  
  // Get event organizer details
  GET_EVENT_ORGANIZER: `${BASE_URL}/events/:eventId/organizer`,
  
  // Get user's liked events
  GET_USER_LIKED_EVENTS: `${BASE_URL}/users/:userId/liked-events`,
}

/**
 * API Request/Response Examples
 */

// Example GET Events Request
export const getEventsRequest = {
  method: "GET",
  url: `${BASE_URL}/events`,
  headers: {
    Authorization: "Bearer {token}",
  },
}

// Example GET Events Response
export const getEventsResponse = {
  status: 200,
  data: [
    {
      id: 1,
      title: "Nyanshinski Concert",
      date: "16th May",
      time: "7:00 PM - 11:00 PM",
      description: "Welcome to Nyanshinski Concert featuring his latest album",
      coverImage: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
      location: "Grand Ballroom, Central Hotel",
      likes: 32,
      capacity: "78/100",
      organizer: {
        id: 101,
        name: "Johnny",
        username: "johnny_events",
        bio: "Professional event organizer with 5+ years experience in concert planning",
        src: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg",
      },
      categories: {
        menu: {
          title: "Food & Refreshments",
          items: [
            { name: "Gourmet Sandwiches", type: "food" },
            { name: "Signature Cocktails", type: "beverage" },
          ],
        },
        requirements: {
          title: "Entry Requirements",
          items: [
            { name: "Concert Ticket", type: "document" },
            { name: "Photo ID", type: "document" },
          ],
        },
      },
    },
  ],
}

// Example GET Event by ID Request
export const getEventByIdRequest = {
  method: "GET",
  url: `${BASE_URL}/events/1`,
  headers: {
    Authorization: "Bearer {token}",
  },
}

// Example GET Event by ID Response
export const getEventByIdResponse = {
  status: 200,
  data: {
    id: 1,
    title: "Nyanshinski Concert",
    date: "16th May",
    time: "7:00 PM - 11:00 PM",
    description: "Welcome to Nyanshinski Concert featuring his latest album",
    coverImage: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    location: "Grand Ballroom, Central Hotel",
    likes: 32,
    capacity: "78/100",
    organizer: {
      id: 101,
      name: "Johnny",
      username: "johnny_events",
      bio: "Professional event organizer with 5+ years experience in concert planning",
      src: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg",
    },
    categories: {
      menu: {
        title: "Food & Refreshments",
        items: [
          { name: "Gourmet Sandwiches", type: "food" },
          { name: "Signature Cocktails", type: "beverage" },
        ],
      },
      requirements: {
        title: "Entry Requirements",
        items: [
          { name: "Concert Ticket", type: "document" },
          { name: "Photo ID", type: "document" },
        ],
      },
    },
  },
}

// Example CREATE Event Request
export const createEventRequest = {
  method: "POST",
  url: `${BASE_URL}/events`,
  headers: {
    Authorization: "Bearer {token}",
    "Content-Type": "application/json",
  },
  body: {
    title: "New Event Title",
    date: "2024-12-31",
    time: "18:00 - 22:00",
    description: "Description of the new event",
    location: "Event Location",
    capacity: 100,
    categories: {},
    organizerId: 101,
  },
}

// Example CREATE Event Response
export const createEventResponse = {
  status: 201,
  data: {
    id: 11,
    title: "New Event Title",
    date: "2024-12-31",
    time: "18:00 - 22:00",
    description: "Description of the new event",
    location: "Event Location",
    capacity: 100,
    categories: {},
    organizerId: 101,
  },
}

// Example UPDATE Event Request
export const updateEventRequest = {
  method: "PATCH",
  url: `${BASE_URL}/events/11`,
  headers: {
    Authorization: "Bearer {token}",
    "Content-Type": "application/json",
  },
  body: {
    title: "Updated Event Title",
    description: "Updated description",
  },
}

// Example UPDATE Event Response
export const updateEventResponse = {
  status: 200,
  data: {
    id: 11,
    title: "Updated Event Title",
    description: "Updated description",
  },
}

// Example DELETE Event Request
export const deleteEventRequest = {
  method: "DELETE",
  url: `${BASE_URL}/events/11`,
  headers: {
    Authorization: "Bearer {token}",
  },
}

// Example DELETE Event Response
export const deleteEventResponse = {
  status: 204,
}

// Example LIKE Event Request
export const likeEventRequest = {
  method: "POST",
  url: `${BASE_URL}/events/1/like`,
  headers: {
    Authorization: "Bearer {token}",
  },
}

// Example LIKE Event Response
export const likeEventResponse = {
  status: 200,
  data: {
    eventId: 1,
    likes: 33,
  },
}

// Example UNLIKE Event Request
export const unlikeEventRequest = {
  method: "POST",
  url: `${BASE_URL}/events/1/unlike`,
  headers: {
    Authorization: "Bearer {token}",
  },
}

// Example UNLIKE Event Response
export const unlikeEventResponse = {
  status: 200,
  data: {
    eventId: 1,
    likes: 32,
  },
}

// Example REQUEST INVITE Request (for logged-in users)
export const requestInviteRequest = {
  method: "POST",
  url: `${BASE_URL}/events/1/request-invite`,
  headers: {
    Authorization: "Bearer {token}",
    "Content-Type": "application/json",
  },
  body: {
    userId: 456,
    message: "I would love to attend this event!",
  },
}

// Example REQUEST INVITE Response (for logged-in users)
export const requestInviteResponse = {
  status: 201,
  data: {
    requestId: 789,
    eventId: 1,
    userId: 456,
    status: "pending",
    requestedAt: "2025-04-15T12:34:56Z",
    ticketId: "TICKET-123456", // RSVP ticket ID
    ticketUrl: "https://example.com/rsvp/TICKET-123456", // URL to view the ticket
  },
}

// Example REQUEST GUEST INVITE Request (for non-logged in users)
export const requestGuestInviteRequest = {
  method: "POST",
  url: `${BASE_URL}/events/1/request-guest-invite`,
  headers: {
    "Content-Type": "application/json",
  },
  body: {
    name: "John Doe",
    email: "john.doe@example.com",
    message: "I would love to attend this event!",
  },
}

// Example REQUEST GUEST INVITE Response
export const requestGuestInviteResponse = {
  status: 201,
  data: {
    requestId: 790,
    eventId: 1,
    guestName: "John Doe",
    guestEmail: "john.doe@example.com",
    status: "pending",
    requestedAt: "2025-04-15T12:45:23Z",
    ticketId: "GUEST-TICKET-789012",
    message: "RSVP ticket has been sent to your email",
  },
}

// Example VERIFY RSVP Request
export const verifyRsvpRequest = {
  method: "GET",
  url: `${BASE_URL}/events/verify-rsvp/TICKET-123456`,
}

// Example VERIFY RSVP Response
export const verifyRsvpResponse = {
  status: 200,
  data: {
    valid: true,
    ticketId: "TICKET-123456",
    eventId: 1,
    eventTitle: "Nyanshinski Concert",
    attendeeName: "John Doe",
    attendeeEmail: "john.doe@example.com",
    date: "16th May",
    time: "7:00 PM - 11:00 PM",
    location: "Grand Ballroom, Central Hotel",
    ticketStatus: "confirmed", // or "pending", "cancelled", etc.
    qrCode: "data:image/png;base64,iVBORw0KGgoAAA...", // Base64 encoded QR code image
  },
}

// Example GET TRENDING EVENTS Request
export const getTrendingEventsRequest = {
  method: "GET",
  url: `${BASE_URL}/events/trending`,
  headers: {
    Authorization: "Bearer {token}",
  },
}

// Example GET TRENDING EVENTS Response
export const getTrendingEventsResponse = {
  status: 200,
  data: [
    {
      id: 1,
      title: "Nyanshinski Concert",
      date: "16th May",
      time: "7:00 PM - 11:00 PM",
      description: "Welcome to Nyanshinski Concert featuring his latest album",
      coverImage: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
      location: "Grand Ballroom, Central Hotel",
      likes: 32,
      capacity: "78/100",
      organizer: {
        id: 101,
        name: "Johnny",
        username: "johnny_events",
        bio: "Professional event organizer with 5+ years experience in concert planning",
        src: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg",
      },
      categories: {
        menu: {
          title: "Food & Refreshments",
          items: [
            { name: "Gourmet Sandwiches", type: "food" },
            { name: "Signature Cocktails", type: "beverage" },
          ],
        },
        requirements: {
          title: "Entry Requirements",
          items: [
            { name: "Concert Ticket", type: "document" },
            { name: "Photo ID", type: "document" },
          ],
        },
        personalities: {
          title: "Featured Artists",
          sections: {
            "main acts": [
              {
                name: "Nyanshinski",
                image: "https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg"
              },
              {
                name: "DJ Mellow",
                image: "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg"
              }
            ],
            "opening acts": [
              {
                name: "Sarah Voice",
                image: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg"
              }
            ]
          }
        },
        activities: {
          title: "Event Activities",
          items: [
            { name: "Live Performance", type: "activity" },
            { name: "Meet & Greet", type: "activity" },
            { name: "Photo Booth", type: "activity" }
          ]
        }
      },
    },
    // Additional trending events would be listed here
  ],
}

// Example GET USER'S LIKED EVENTS Request
export const getUserLikedEventsRequest = {
  method: "GET",
  url: `${BASE_URL}/users/456/liked-events`,
  headers: {
    Authorization: "Bearer {token}",
  },
}

// Example GET USER'S LIKED EVENTS Response
export const getUserLikedEventsResponse = {
  status: 200,
  data: [
    {
      id: 1,
      title: "Nyanshinski Concert",
      date: "16th May",
      time: "7:00 PM - 11:00 PM",
      description: "Welcome to Nyanshinski Concert featuring his latest album",
      coverImage: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
      // Other event details would be here
    },
    // Other liked events would be listed here
  ],
}

// Example SHARE EVENT Request
export const shareEventRequest = {
  method: "POST",
  url: `${BASE_URL}/events/1/share`,
  headers: {
    Authorization: "Bearer {token}",
    "Content-Type": "application/json",
  },
  body: {
    platform: "email", // or "facebook", "twitter", "whatsapp", etc.
    recipients: ["user@example.com"], // Email addresses or user IDs depending on platform
    message: "Check out this awesome event!",
  },
}

// Example SHARE EVENT Response
export const shareEventResponse = {
  status: 200,
  data: {
    success: true,
    shareId: "share_123456",
    eventId: 1,
    sharedAt: "2025-04-20T15:30:45Z",
  },
}

/**
 * Database Schema Recommendations for RSVPs and Guest Invites
 * 
 * These schemas are provided as guidance for the backend team to implement
 * the database structure required for storing event invites and RSVPs.
 */

export const dbSchemaRecommendations = {
  EventInvites: {
    id: "UUID or Integer (Primary Key)",
    eventId: "Foreign Key to Events table",
    userId: "Foreign Key to Users table (null for guests)",
    guestName: "String (null for registered users)",
    guestEmail: "String (null for registered users)",
    status: "String (pending, approved, declined, cancelled)",
    message: "Text (optional message from requester)",
    ticketId: "String (unique identifier for the RSVP ticket)",
    createdAt: "Timestamp",
    updatedAt: "Timestamp",
    emailSent: "Boolean (whether the RSVP email was sent)",
    emailSentAt: "Timestamp (when the RSVP email was sent)",
    checkedIn: "Boolean (whether the attendee has checked in)",
    checkedInAt: "Timestamp (when the attendee checked in)",
  }
}

/**
 * Email Template Structure for RSVP Tickets
 * 
 * This is a suggestion for the email template structure to be sent to users
 * when they request an invite to an event.
 */

export const rsvpEmailTemplate = {
  subject: "Your RSVP Ticket for [Event Name]",
  from: "events@example.com",
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
            <img src="[Event Logo or Banner]" alt="[Event Name]" />
          </header>
          
          <main>
            <h1>Your RSVP Ticket</h1>
            <p>Hello [Guest Name],</p>
            <p>Thank you for requesting to attend [Event Name]!</p>
            
            <div class="ticket">
              <div class="ticket-header">
                <h2>[Event Name]</h2>
                <p>[Event Date] • [Event Time]</p>
              </div>
              
              <div class="ticket-details">
                <p><strong>Location:</strong> [Event Location]</p>
                <p><strong>Attendee:</strong> [Guest Name]</p>
                <p><strong>Ticket ID:</strong> [Ticket ID]</p>
              </div>
              
              <div class="qr-code">
                <img src="[QR Code Image]" alt="Scan this QR code at the event" />
                <p>Present this ticket at the entrance</p>
              </div>
            </div>
            
            <div class="event-details">
              <h3>Event Details</h3>
              <p>[Event Description]</p>
              
              <h4>Important Information:</h4>
              <ul>
                <li>Please arrive 15 minutes before the event starts</li>
                <li>Don't forget to bring your ID</li>
                <li>Your ticket can be verified at: [Ticket Verification URL]</li>
              </ul>
            </div>
          </main>
          
          <footer>
            <p>If you have any questions, please contact [Organizer Email]</p>
            <p>© [Current Year] [Company/Organization Name]. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  `
}