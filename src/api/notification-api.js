/**
 * API Endpoints for Notification Management
 *
 * This file documents the API endpoints needed for notification functionality.
 * It's intended for the backend team to implement these endpoints.
 */

// Base URL
const BASE_URL = "/api"

// Notification API Endpoints
export const NOTIFICATION_ENDPOINTS = {
  // Get all notifications for a user
  GET_ALL_NOTIFICATIONS: `${BASE_URL}/users/:userId/notifications`,
  
  // Get notifications by category (general, approved, calls, etc.)
  GET_NOTIFICATIONS_BY_CATEGORY: `${BASE_URL}/users/:userId/notifications/:category`,
  
  // Get unread notification count
  GET_UNREAD_COUNT: `${BASE_URL}/users/:userId/notifications/unread/count`,
  
  // Mark a specific notification as read
  MARK_AS_READ: `${BASE_URL}/users/:userId/notifications/:notificationId/read`,
  
  // Mark all notifications as read
  MARK_ALL_AS_READ: `${BASE_URL}/users/:userId/notifications/read`,
  
  // Mark all notifications in a category as read
  MARK_CATEGORY_AS_READ: `${BASE_URL}/users/:userId/notifications/:category/read`,
  
  // Delete a specific notification
  DELETE_NOTIFICATION: `${BASE_URL}/users/:userId/notifications/:notificationId`,
  
  // Update notification settings
  UPDATE_NOTIFICATION_SETTINGS: `${BASE_URL}/users/:userId/notification-settings`,
  
  // Get notification settings
  GET_NOTIFICATION_SETTINGS: `${BASE_URL}/users/:userId/notification-settings`,
  
  // Enable/disable push notifications
  TOGGLE_PUSH_NOTIFICATIONS: `${BASE_URL}/users/:userId/notification-settings/push`,
  
  // Register device for push notifications
  REGISTER_DEVICE: `${BASE_URL}/users/:userId/devices`,
  
  // Unregister device from push notifications
  UNREGISTER_DEVICE: `${BASE_URL}/users/:userId/devices/:deviceId`,
  
  // Approve an event invitation (for notification actions)
  APPROVE_EVENT_INVITATION: `${BASE_URL}/users/:userId/events/:eventId/approve`,
  
  // Decline an event invitation (for notification actions)
  DECLINE_EVENT_INVITATION: `${BASE_URL}/users/:userId/events/:eventId/decline`,
  
  // Join call (for call notifications)
  JOIN_CALL: `${BASE_URL}/calls/:callId/join`,
}

/**
 * API Request/Response Examples for Notifications
 */

// Example Get All Notifications Request
export const getAllNotificationsRequest = {
  method: "GET",
  url: `${BASE_URL}/users/usr_123456789/notifications`,
  headers: {
    "Authorization": "Bearer {token}",
  },
  query: {
    page: 1,
    limit: 20,
    sortBy: "timestamp",
    order: "desc",
  },
}

// Example Get All Notifications Response
export const getAllNotificationsResponse = {
  status: 200,
  data: {
    notifications: [
      {
        id: "notif_123456789",
        category: "general",
        type: "event_reminder",
        message: "Upcoming event: Design Workshop in 1 hour",
        read: false,
        createdAt: "2023-04-20T13:30:00Z",
        user: null,
        icon: "Calendar",
        data: {
          eventId: "evt_987654321",
          eventTitle: "Design Workshop",
          eventTime: "2023-04-20T14:30:00Z",
          location: "Virtual",
        },
        actions: [
          {
            type: "view_event",
            label: "View Event",
            endpoint: "/events/evt_987654321",
          },
          {
            type: "snooze",
            label: "Snooze",
            endpoint: "/api/users/usr_123456789/notifications/notif_123456789/snooze",
          },
        ],
      },
      {
        id: "notif_123456790",
        category: "approved",
        type: "event_invitation_approved",
        message: "Your request to attend Creative Workshop has been approved",
        read: true,
        createdAt: "2023-04-19T10:15:00Z",
        user: "Event Manager",
        avatar: "/images/users/event-manager.jpg",
        icon: "CheckCircle",
        data: {
          eventId: "evt_987654322",
          eventTitle: "Creative Workshop",
          eventTime: "2023-04-25T13:00:00Z",
          location: "Nairobi Art Hub",
        },
        actions: [
          {
            type: "view_event",
            label: "View Event",
            endpoint: "/events/evt_987654322",
          },
        ],
      },
      {
        id: "notif_123456791",
        category: "calls",
        type: "missed_call",
        message: "You missed a call from Sarah Johnson",
        read: false,
        createdAt: "2023-04-20T09:45:00Z",
        user: "Sarah Johnson",
        avatar: "/images/users/sarah-johnson.jpg",
        callType: "missed",
        duration: "00:00",
        data: {
          callId: "call_987654323",
          userId: "usr_987654321",
        },
        actions: [
          {
            type: "call_back",
            label: "Call Back",
            endpoint: "/api/calls/create",
            params: {
              recipient: "usr_987654321",
            },
          },
          {
            type: "message",
            label: "Message",
            endpoint: "/messages/usr_987654321",
          },
        ],
      },
    ],
    pagination: {
      totalItems: 24,
      totalPages: 2,
      currentPage: 1,
      limit: 20,
    },
  },
}

// Example Get Notifications By Category Request
export const getNotificationsByCategoryRequest = {
  method: "GET",
  url: `${BASE_URL}/users/usr_123456789/notifications/general`,
  headers: {
    "Authorization": "Bearer {token}",
  },
  query: {
    page: 1,
    limit: 20,
  },
}

// Example Get Notifications By Category Response
export const getNotificationsByCategoryResponse = {
  status: 200,
  data: {
    category: "general",
    notifications: [
      {
        id: "notif_123456789",
        category: "general",
        type: "event_reminder",
        message: "Upcoming event: Design Workshop in 1 hour",
        read: false,
        createdAt: "2023-04-20T13:30:00Z",
        icon: "Calendar",
        data: {
          eventId: "evt_987654321",
          eventTitle: "Design Workshop",
          eventTime: "2023-04-20T14:30:00Z",
          location: "Virtual",
        },
        actions: [
          {
            type: "view_event",
            label: "View Event",
            endpoint: "/events/evt_987654321",
          },
          {
            type: "snooze",
            label: "Snooze",
            endpoint: "/api/users/usr_123456789/notifications/notif_123456789/snooze",
          },
        ],
      },
      // More general notifications...
    ],
    pagination: {
      totalItems: 10,
      totalPages: 1,
      currentPage: 1,
      limit: 20,
    },
  },
}

// Example Get Unread Count Request
export const getUnreadCountRequest = {
  method: "GET",
  url: `${BASE_URL}/users/usr_123456789/notifications/unread/count`,
  headers: {
    "Authorization": "Bearer {token}",
  },
}

// Example Get Unread Count Response
export const getUnreadCountResponse = {
  status: 200,
  data: {
    total: 5,
    byCategory: {
      general: 2,
      approved: 0,
      calls: 3,
    },
  },
}

// Example Mark as Read Request
export const markAsReadRequest = {
  method: "PATCH",
  url: `${BASE_URL}/users/usr_123456789/notifications/notif_123456789/read`,
  headers: {
    "Authorization": "Bearer {token}",
  },
}

// Example Mark as Read Response
export const markAsReadResponse = {
  status: 200,
  data: {
    id: "notif_123456789",
    read: true,
    readAt: "2023-04-20T14:00:00Z",
  },
}

// Example Mark All as Read Request
export const markAllAsReadRequest = {
  method: "PATCH",
  url: `${BASE_URL}/users/usr_123456789/notifications/read`,
  headers: {
    "Authorization": "Bearer {token}",
  },
}

// Example Mark All as Read Response
export const markAllAsReadResponse = {
  status: 200,
  data: {
    count: 5,
    readAt: "2023-04-20T14:00:00Z",
  },
}

// Example Mark Category as Read Request
export const markCategoryAsReadRequest = {
  method: "PATCH",
  url: `${BASE_URL}/users/usr_123456789/notifications/general/read`,
  headers: {
    "Authorization": "Bearer {token}",
  },
}

// Example Mark Category as Read Response
export const markCategoryAsReadResponse = {
  status: 200,
  data: {
    category: "general",
    count: 2,
    readAt: "2023-04-20T14:00:00Z",
  },
}

// Example Approve Event Invitation Request
export const approveEventInvitationRequest = {
  method: "POST",
  url: `${BASE_URL}/users/usr_123456789/events/evt_987654321/approve`,
  headers: {
    "Authorization": "Bearer {token}",
  },
}

// Example Approve Event Invitation Response
export const approveEventInvitationResponse = {
  status: 200,
  data: {
    eventId: "evt_987654321",
    status: "approved",
    notificationId: "notif_123456789",
    message: "Event invitation approved successfully",
  },
}

// Example Get Notification Settings Request
export const getNotificationSettingsRequest = {
  method: "GET",
  url: `${BASE_URL}/users/usr_123456789/notification-settings`,
  headers: {
    "Authorization": "Bearer {token}",
  },
}

// Example Get Notification Settings Response
export const getNotificationSettingsResponse = {
  status: 200,
  data: {
    email: {
      events: true,
      messages: true,
      updates: false,
      marketing: false,
      eventReminders: true,
      friendActivity: true,
      digest: "weekly", // "daily", "weekly", "monthly", or null
    },
    push: {
      enabled: true,
      events: true,
      messages: true,
      calls: true,
      updates: false,
      eventReminders: true,
      friendActivity: true,
      quietHours: {
        enabled: true,
        start: "22:00",
        end: "07:00",
        timezone: "Africa/Nairobi",
      },
    },
    inApp: {
      events: true,
      messages: true,
      updates: true,
      eventReminders: true,
      friendActivity: true,
    },
  },
}

// Example Update Notification Settings Request
export const updateNotificationSettingsRequest = {
  method: "PATCH",
  url: `${BASE_URL}/users/usr_123456789/notification-settings`,
  headers: {
    "Authorization": "Bearer {token}",
    "Content-Type": "application/json",
  },
  body: {
    email: {
      marketing: true,
      digest: "daily",
    },
    push: {
      quietHours: {
        enabled: true,
        start: "23:00",
        end: "06:00",
      },
    },
  },
}

// Example Update Notification Settings Response
export const updateNotificationSettingsResponse = {
  status: 200,
  data: {
    email: {
      events: true,
      messages: true,
      updates: false,
      marketing: true, // Updated
      eventReminders: true,
      friendActivity: true,
      digest: "daily", // Updated
    },
    push: {
      enabled: true,
      events: true,
      messages: true,
      calls: true,
      updates: false,
      eventReminders: true,
      friendActivity: true,
      quietHours: {
        enabled: true,
        start: "23:00", // Updated
        end: "06:00", // Updated
        timezone: "Africa/Nairobi",
      },
    },
    inApp: {
      events: true,
      messages: true,
      updates: true,
      eventReminders: true,
      friendActivity: true,
    },
  },
}

// Example Register Device for Push Notifications Request
export const registerDeviceRequest = {
  method: "POST",
  url: `${BASE_URL}/users/usr_123456789/devices`,
  headers: {
    "Authorization": "Bearer {token}",
    "Content-Type": "application/json",
  },
  body: {
    deviceType: "ios", // or "android", "web"
    deviceToken: "device-token-from-fcm-or-apns",
    deviceName: "iPhone 12 Pro",
    appVersion: "1.2.0",
  },
}

// Example Register Device Response
export const registerDeviceResponse = {
  status: 201,
  data: {
    deviceId: "dev_123456789",
    deviceType: "ios",
    deviceName: "iPhone 12 Pro",
    registeredAt: "2023-04-20T14:30:00Z",
    pushEnabled: true,
  },
}

// Example Toggle Push Notifications Request
export const togglePushNotificationsRequest = {
  method: "PATCH",
  url: `${BASE_URL}/users/usr_123456789/notification-settings/push`,
  headers: {
    "Authorization": "Bearer {token}",
    "Content-Type": "application/json",
  },
  body: {
    enabled: false,
  },
}

// Example Toggle Push Notifications Response
export const togglePushNotificationsResponse = {
  status: 200,
  data: {
    push: {
      enabled: false, // Updated
      events: true,
      messages: true,
      calls: true,
      updates: false,
      eventReminders: true,
      friendActivity: true,
      quietHours: {
        enabled: true,
        start: "23:00",
        end: "06:00",
        timezone: "Africa/Nairobi",
      },
    },
  },
}

// Example Error Response
export const errorResponse = {
  status: 400,
  data: {
    error: "Bad Request",
    message: "Invalid notification settings",
    details: [
      {
        field: "email.digest",
        message: "Must be one of: daily, weekly, monthly",
      },
    ],
  },
}

// Example Guest User Limitations
export const guestNotificationLimitations = {
  status: 403,
  data: {
    error: "Forbidden",
    message: "Guest users cannot update notification preferences",
    details: {
      isGuest: true,
      requiredAction: "register",
    },
  },
}