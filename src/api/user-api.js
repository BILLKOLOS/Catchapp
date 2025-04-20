/**
 * API Endpoints for Authentication, User Settings, and Guest User Support
 *
 * This file documents the API endpoints needed for authentication, user settings functionality,
 * and guest user support. It's intended for the backend team to implement these endpoints.
 */

// Base URL
const BASE_URL = "/api"

// Authentication API Endpoints
export const AUTH_ENDPOINTS = {
  // Register a new user
  REGISTER: `${BASE_URL}/auth/register`,
  
  // Login user
  LOGIN: `${BASE_URL}/auth/login`,
  
  // Register/login with Google OAuth
  GOOGLE_AUTH: `${BASE_URL}/auth/google`,
  
  // Create guest account
  CREATE_GUEST: `${BASE_URL}/auth/guest`,
  
  // Convert guest to registered user
  CONVERT_GUEST: `${BASE_URL}/auth/guest/convert`,
  
  // Refresh authentication token
  REFRESH_TOKEN: `${BASE_URL}/auth/refresh`,
  
  // Logout user
  LOGOUT: `${BASE_URL}/auth/logout`,
  
  // Request password reset
  REQUEST_PASSWORD_RESET: `${BASE_URL}/auth/password-reset`,
  
  // Confirm password reset
  CONFIRM_PASSWORD_RESET: `${BASE_URL}/auth/password-reset/confirm`,
  
  // Verify email address
  VERIFY_EMAIL: `${BASE_URL}/auth/verify-email`,
}

// User Settings API Endpoints
export const USER_SETTINGS_ENDPOINTS = {
  // Get user settings
  GET_USER_SETTINGS: `${BASE_URL}/users/:userId/settings`,

  // Update user profile
  UPDATE_PROFILE: `${BASE_URL}/users/:userId/profile`,

  // Update user preferences
  UPDATE_PREFERENCES: `${BASE_URL}/users/:userId/preferences`,

  // Update notification settings
  UPDATE_NOTIFICATIONS: `${BASE_URL}/users/:userId/notifications`,

  // Update privacy settings
  UPDATE_PRIVACY: `${BASE_URL}/users/:userId/privacy`,

  // Update security settings
  UPDATE_SECURITY: `${BASE_URL}/users/:userId/security`,

  // Update appearance settings
  UPDATE_APPEARANCE: `${BASE_URL}/users/:userId/appearance`,

  // Update event preferences
  UPDATE_EVENT_PREFERENCES: `${BASE_URL}/users/:userId/event-preferences`,

  // Upload profile image
  UPLOAD_PROFILE_IMAGE: `${BASE_URL}/users/:userId/profile-image`,

  // Upload cover image
  UPLOAD_COVER_IMAGE: `${BASE_URL}/users/:userId/cover-image`,

  // Change password
  CHANGE_PASSWORD: `${BASE_URL}/users/:userId/password`,

  // Enable/disable two-factor authentication
  TOGGLE_2FA: `${BASE_URL}/users/:userId/2fa`,

  // Get active sessions
  GET_ACTIVE_SESSIONS: `${BASE_URL}/users/:userId/sessions`,

  // Revoke session
  REVOKE_SESSION: `${BASE_URL}/users/:userId/sessions/:sessionId`,

  // Add payment method
  ADD_PAYMENT_METHOD: `${BASE_URL}/users/:userId/payment-methods`,

  // Update payment method
  UPDATE_PAYMENT_METHOD: `${BASE_URL}/users/:userId/payment-methods/:paymentId`,

  // Delete payment method
  DELETE_PAYMENT_METHOD: `${BASE_URL}/users/:userId/payment-methods/:paymentId`,

  // Update billing address
  UPDATE_BILLING_ADDRESS: `${BASE_URL}/users/:userId/billing-address`,
}

/**
 * API Request/Response Examples for Authentication
 */

// Example Register User Request
export const registerUserRequest = {
  method: "POST",
  url: `${BASE_URL}/auth/register`,
  headers: {
    "Content-Type": "application/json",
  },
  body: {
    name: "John Doe",
    email: "john.doe@example.com",
    password: "SecurePassword123",
  },
}

// Example Register User Response
export const registerUserResponse = {
  status: 201,
  data: {
    userId: "usr_123456789",
    email: "john.doe@example.com",
    name: "John Doe",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    isGuest: false,
  },
}

// Example Login Request
export const loginRequest = {
  method: "POST",
  url: `${BASE_URL}/auth/login`,
  headers: {
    "Content-Type": "application/json",
  },
  body: {
    email: "john.doe@example.com",
    password: "SecurePassword123",
  },
}

// Example Login Response
export const loginResponse = {
  status: 200,
  data: {
    userId: "usr_123456789",
    email: "john.doe@example.com",
    name: "John Doe",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    isGuest: false,
  },
}

// Example Create Guest User Request
export const createGuestRequest = {
  method: "POST",
  url: `${BASE_URL}/auth/guest`,
  headers: {
    "Content-Type": "application/json",
  },
}

// Example Create Guest User Response
export const createGuestResponse = {
  status: 201,
  data: {
    userId: "gst_987654321",
    guestId: "gst_987654321",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    isGuest: true,
    expiresAt: "2023-05-20T14:30:00Z", // Guest accounts might have an expiration
  },
}

// Example Convert Guest to Registered User Request
export const convertGuestRequest = {
  method: "POST",
  url: `${BASE_URL}/auth/guest/convert`,
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer {token}",
  },
  body: {
    name: "John Doe",
    email: "john.doe@example.com",
    password: "SecurePassword123",
  },
}

// Example Convert Guest to Registered User Response
export const convertGuestResponse = {
  status: 200,
  data: {
    userId: "usr_123456789", // New permanent user ID
    previousGuestId: "gst_987654321",
    email: "john.doe@example.com",
    name: "John Doe",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", // New token
    refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    isGuest: false,
  },
}

// Example Google Auth Request
export const googleAuthRequest = {
  method: "POST",
  url: `${BASE_URL}/auth/google`,
  headers: {
    "Content-Type": "application/json",
  },
  body: {
    idToken: "google-id-token-from-client", // Google ID token from client-side auth
  },
}

// Example Google Auth Response
export const googleAuthResponse = {
  status: 200,
  data: {
    userId: "usr_123456789",
    email: "john.doe@gmail.com",
    name: "John Doe",
    profileImage: "https://lh3.googleusercontent.com/a/...",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    isGuest: false,
    isNewUser: false, // Indicates if this is a first-time sign in
  },
}

// Example Logout Request
export const logoutRequest = {
  method: "POST",
  url: `${BASE_URL}/auth/logout`,
  headers: {
    "Authorization": "Bearer {token}",
  },
}

// Example Logout Response
export const logoutResponse = {
  status: 200,
  data: {
    message: "Successfully logged out",
  },
}

/**
 * API Request/Response Examples for User Settings
 */

// Example GET User Settings Request
export const getUserSettingsRequest = {
  method: "GET",
  url: `${BASE_URL}/users/usr_123456789/settings`,
  headers: {
    Authorization: "Bearer {token}",
  },
}

// Example GET User Settings Response (Now includes isGuest flag)
export const getUserSettingsResponse = {
  status: 200,
  data: {
    profile: {
      userId: "usr_123456789",
      isGuest: false,
      name: "John Doe",
      username: "@johndoe",
      bio: "Event enthusiast and professional photographer based in Nairobi",
      email: "john.doe@example.com",
      phone: "+254 712 345 678",
      location: "Nairobi, Kenya",
      birthdate: "1990-05-15",
      website: "www.johndoe.com",
      profileImage: "/images/users/john-doe.jpg",
      coverImage: "/images/covers/john-cover.jpg",
      socialLinks: {
        twitter: "twitter.com/johndoe",
        instagram: "instagram.com/johndoe",
        facebook: "facebook.com/johndoe",
        linkedin: "linkedin.com/in/johndoe",
      },
      joinDate: "2022-03-15",
      lastActive: "2023-04-19T14:30:00Z",
      verified: true,
    },
    preferences: {
      darkMode: false,
      language: "en",
      timezone: "Africa/Nairobi",
      currency: "KES",
      notifications: {
        events: true,
        messages: true,
        updates: false,
        marketing: false,
        eventReminders: true,
        friendActivity: true,
        emailDigest: "weekly",
      },
      privacy: {
        profileVisibility: "public",
        showLocation: true,
        showActivity: true,
        allowTagging: true,
        allowMessages: "everyone",
        showEmail: false,
        showPhone: false,
      },
      security: {
        twoFactorEnabled: false,
        loginNotifications: true,
        lastPasswordChange: "2023-01-10",
      },
      appearance: {
        theme: "#E6C2BC",
        fontSize: "medium",
        reducedMotion: false,
        highContrast: false,
      },
    },
    eventPreferences: {
      categories: ["music", "art", "technology", "food"],
      notificationRadius: 25,
      autoAddToCalendar: true,
      defaultPrivacy: "public",
    },
  },
}

// Example Guest User Settings Response
export const getGuestSettingsResponse = {
  status: 200,
  data: {
    profile: {
      userId: "gst_987654321",
      isGuest: true,
      name: "Guest User",
      username: null,
      bio: "",
      email: null,
      phone: null,
      location: null,
      birthdate: null,
      website: null,
      profileImage: "/images/users/default-avatar.jpg",
      coverImage: "/images/covers/default-cover.jpg",
      socialLinks: {},
      joinDate: "2023-04-20T10:15:00Z",
      lastActive: "2023-04-20T10:15:00Z",
      verified: false,
      expiresAt: "2023-05-20T10:15:00Z"
    },
    preferences: {
      darkMode: false,
      language: "en",
      timezone: null,
      currency: "USD",
      notifications: {
        events: false,
        messages: false,
        updates: false,
        marketing: false,
        eventReminders: false,
        friendActivity: false,
        emailDigest: null,
      },
      privacy: {
        profileVisibility: "private",
        showLocation: false,
        showActivity: false,
        allowTagging: false,
        allowMessages: "none",
        showEmail: false,
        showPhone: false,
      },
      security: {
        twoFactorEnabled: false,
        loginNotifications: false,
        lastPasswordChange: null,
      },
      appearance: {
        theme: "default",
        fontSize: "medium",
        reducedMotion: false,
        highContrast: false,
      },
    },
    eventPreferences: {
      categories: [],
      notificationRadius: 10,
      autoAddToCalendar: false,
      defaultPrivacy: "private",
    },
  },
}

// Example Update Profile for Guest User (Converting to Registered)
export const updateGuestProfileRequest = {
  method: "PATCH",
  url: `${BASE_URL}/users/gst_987654321/profile`,
  headers: {
    Authorization: "Bearer {token}",
    "Content-Type": "application/json",
  },
  body: {
    name: "John Doe",
    email: "john.doe@example.com",  // Adding email will trigger guest conversion flow
    password: "SecurePassword123",  // Password required for conversion
    location: "Nairobi, Kenya",
    bio: "New to the platform",
  },
}

// Example Error Response
export const errorResponse = {
  status: 400,
  data: {
    error: "Bad Request",
    message: "Invalid input data",
    details: [
      {
        field: "email",
        message: "Must be a valid email address",
      },
    ],
  },
}

// Example Authorization Error Response
export const authErrorResponse = {
  status: 401,
  data: {
    error: "Unauthorized",
    message: "Authentication token is invalid or expired",
  },
}

// Example Guest Account Limitation Error
export const guestLimitationError = {
  status: 403,
  data: {
    error: "Forbidden",
    message: "This feature requires a registered account",
    details: {
      isGuest: true,
      requiredAction: "register",
    },
  },
}