// events.js
export const eventData = [
  {
    "id": 1,
    "title": "Nyanshinski Concert",
    "date": "16th May",
    "type": "Today",
    "description": "Welcome to Nyanshinski Concert featuring his latest album",
    "coverImage": "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600",
    "location": "Grand Ballroom, Central Hotel",
    "likes": 32,
    "capacity": "78/100",
    "organizer": {
      "id": 101,
      "name": "Johnny",
      "username": "johnny_events",
      "bio": "Professional event organizer with 5+ years experience in concert planning",
      "src": "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=600",
      "following": 245,
      "followers": 1290,
      "specialities": ["Live Music", "Venue Coordination", "Artist Management"],
      "galleryImages": [
        {
          "id": 1001,
          "src": "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600",
          "location": "Nairobi Concert Hall",
          date: { day: "12", month: "Nov" },
          "tag": "music",
          "album": [
            {
              id: 10011,
              name: "sarah",
              subheading: "wedding",
              date: "saturday, june 15",
              time: "9:00 am - 4:00pm",
              location: "egret center nairobi",
              images: [
                { src: "https://images.pexels.com/photos/1756609/pexels-photo-1756609.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  gridClass: "row-span-2 col-span-1", alt: "Photographer in yellow jacket" },
                { src: "https://images.pexels.com/photos/1784280/pexels-photo-1784280.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  gridClass: "col-span-1", alt: "Conference room meeting" },
                { src: "https://images.pexels.com/photos/106011/pexels-photo-106011.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  gridClass: "col-span-1", alt: "Office space" },
                { src: "https://images.pexels.com/photos/30567465/pexels-photo-30567465/free-photo-of-stylish-model-in-sunglasses-and-leather-jacket.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  gridClass: "col-span-1", alt: "Person in yellow jacket from behind" },
                { src: "https://images.pexels.com/photos/53265/pexels-photo-53265.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  gridClass: "col-span-1", alt: "Empty auditorium" },
                { src: "https://images.pexels.com/photos/30624212/pexels-photo-30624212/free-photo-of-side-profile-portrait-of-stylish-young-man.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  gridClass: "col-span-1", alt: "Group gathering" },
                { src: "https://images.pexels.com/photos/30507957/pexels-photo-30507957/free-photo-of-close-up-of-wedding-rings-with-bouquet.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  gridClass: "col-span-1", alt: "Group gathering" },
                { src: "https://images.pexels.com/photos/3394225/pexels-photo-3394225.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  gridClass: "col-span-1", alt: "Group gathering" }
              ]
            },
          ]
        },
        {
          "id": 1002,
          "src": "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600",
          "location": "Central Plaza",
          "date": { day: "3", month: "Mar" },
          "tag": "performance",
          "album": [
            {
              id: 10021,
              name: "John's Birthday",
              date: "saturday, june 15",
              time: "2:00 PM - 8:00 PM",
              location: "Downtown Arena, Nairobi",
              images: [
                { src: "https://images.pexels.com/photos/7942526/pexels-photo-7942526.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  gridClass: "row-span-2 col-span-1", alt: "Birthday cake" },
                { src: "https://images.pexels.com/photos/11625530/pexels-photo-11625530.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  gridClass: "row-span-1 col-span-1", alt: "Friends celebrating" },
                { src: "https://images.pexels.com/photos/12845899/pexels-photo-12845899.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  gridClass: "row-span-1 col-span-1", alt: "Gift opening" },
                { src: "https://images.pexels.com/photos/30636213/pexels-photo-30636213/free-photo-of-cosplay-group-in-san-jose-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  gridClass: "row-span-1 col-span-1", alt: "Dance floor" },
                { src: "https://images.pexels.com/photos/30586672/pexels-photo-30586672/free-photo-of-energetic-youth-party-with-bright-lights.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  gridClass: "row-span-1 col-span-1", alt: "Group selfie" },
                { src: "https://images.pexels.com/photos/30609629/pexels-photo-30609629/free-photo-of-joyful-african-wedding-celebration-ceremony.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  gridClass: "row-span-1 col-span-1", alt: "Surprise moment" }
              ]
            }
          ]
        },
        {
          "id": 1003,
          "src": "https://images.pexels.com/photos/144428/pexels-photo-144428.jpeg?auto=compress&cs=tinysrgb&w=600",
          "location": "Riverside Amphitheater",
          "date": { "day": "7", "month": "Apr" },
          "tag": "concert",
          "album": [
            {
              "id": 10031,
              "name": "Summer Festival",
              "date": "sunday, july 20",
              "time": "4:00 PM - 11:00 PM",
              "location": "Riverside Park, Nairobi",
              "images": [
                { "src": "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  "gridClass": "row-span-2 col-span-1", "alt": "Festival main stage" },
                { "src": "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  "gridClass": "row-span-1 col-span-1", "alt": "Concert crowd" },
                { "src": "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  "gridClass": "row-span-1 col-span-1", "alt": "Live performance" }
              ]
            }
          ]
        },
        {
          "id": 1004,
          "src": "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600",
          "location": "Cultural Center",
          "date": { "day": "15", "month": "May" },
          "tag": "art",
          "album": [
            {
              "id": 10041,
              "name": "Art Exhibition",
              "date": "friday, may 15",
              "time": "10:00 AM - 6:00 PM",
              "location": "Cultural Center Gallery",
              "images": [
                { "src": "https://images.pexels.com/photos/20967/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600", 
                  "gridClass": "row-span-2 col-span-1", "alt": "Art gallery view" },
                { "src": "https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  "gridClass": "row-span-1 col-span-1", "alt": "Sculpture display" },
                { "src": "https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  "gridClass": "row-span-1 col-span-1", "alt": "Artist workshop" }
              ]
            }
          ]
        },
        {
          "id": 1005,
          "src": "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=600",
          "location": "Urban Square",
          "date": { "day": "22", "month": "May" },
          "tag": "dance",
          "album": [
            {
              "id": 10051,
              "name": "Dance Festival",
              "date": "friday, may 22",
              "time": "3:00 PM - 9:00 PM",
              "location": "Urban Square Plaza",
              "images": [
                { "src": "https://images.pexels.com/photos/1701202/pexels-photo-1701202.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  "gridClass": "row-span-2 col-span-1", "alt": "Dance performance" },
                { "src": "https://images.pexels.com/photos/2188012/pexels-photo-2188012.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  "gridClass": "row-span-1 col-span-1", "alt": "Street dancers" },
                { "src": "https://images.pexels.com/photos/2820896/pexels-photo-2820896.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  "gridClass": "row-span-1 col-span-1", "alt": "Dance workshop" }
              ]
            }
          ]
        },
        {
          "id": 1006,
          "src": "https://images.pexels.com/photos/2747447/pexels-photo-2747447.jpeg?auto=compress&cs=tinysrgb&w=600",
          "location": "Tech Hub",
          "date": { "day": "28", "month": "May" },
          "tag": "technology",
          "album": [
            {
              "id": 10061,
              "name": "Tech Conference",
              "date": "thursday, may 28",
              "time": "9:00 AM - 5:00 PM",
              "location": "Innovation Center",
              "images": [
                { "src": "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  "gridClass": "row-span-2 col-span-1", "alt": "Conference hall" },
                { "src": "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  "gridClass": "row-span-1 col-span-1", "alt": "Tech presentation" },
                { "src": "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  "gridClass": "row-span-1 col-span-1", "alt": "Workshop session" }
              ]
            }
          ]
        }
      ]
    },
    "categories": {
      "menu": {
        "title": "Food & Refreshments",
        "icon": "Utensils",
        "items": [
          { "name": "Gourmet Sandwiches", "type": "food" },
          { "name": "Signature Cocktails", "type": "beverage" },
          { "name": "Vegan Options", "type": "food" }
        ]
      },
      "requirements": {
        "title": "Entry Requirements",
        "icon": "Clipboard",
        "items": [
          { "name": "Concert Ticket", "type": "document" },
          { "name": "Photo ID", "type": "document" },
          { "name": "Electronic Wristband", "type": "accessory" }
        ]
      },
      "activities": {
        "title": "Entertainment",
        "icon": "Music",
        "items": [
          { "name": "Meet & Greet", "type": "vip" },
          { "name": "Photo Booth", "type": "entertainment" },
          { "name": "Merchandise Shop", "type": "shopping" }
        ]
      },
      "personalities": {
        "title": "Featured Artists",
        "icon": "Star",
        "sections": {
          "guests": [
            { "name": "Samantha", "image": "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { "name": "Marcus", "image": "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { "name": "Elena", "image": "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=600" }
          ],
          "speakers": [
            { "name": "David", "image": "https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { "name": "Sara", "image": "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600" }
          ],
          "performers": [
            { "name": "Nyanshinski", "image": "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { "name": "DJ Lydia", "image": "https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=600" }
          ]
        }
      }
    }
  },
  {
    "id": 2,
    "title": "Sports Day",
    "date": "12th Feb",
    "type": "Today",
    "description": "Annual community sports day featuring multiple competitions and family activities",
    "coverImage": "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600",
    "location": "Kilimani Sports Complex",
    "likes": 56,
    "capacity": "78/100",
    "organizer": {
      "id": 102,
      "name": "Michael",
      "username": "mike_sports",
      "bio": "Sports enthusiast and event coordinator specializing in athletic competitions",
      "src": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      "following": 320,
      "followers": 1850,
      "specialities": ["Sports Events", "Team Building", "Athletic Training"],
      "galleryImages": [
        {
          "id": 2001,
          "src": "https://images.pexels.com/photos/3916850/pexels-photo-3916850.jpeg?auto=compress&cs=tinysrgb&w=600",
          "location": "Kilimani Sports Complex",
          "date": { "day": "5", "month": "Jan" },
          "tag": "soccer",
          "album": [
            {
              "id": 20011,
              "name": "Soccer Tournament",
              "date": "saturday, january 5",
              "time": "9:00 AM - 6:00 PM",
              "location": "Kilimani Sports Complex",
              "images": [
                { "src": "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  "gridClass": "row-span-2 col-span-1", "alt": "Soccer match" },
                { "src": "https://images.pexels.com/photos/3076516/pexels-photo-3076516.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  "gridClass": "col-span-1", "alt": "Team huddle" },
                { "src": "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  "gridClass": "col-span-1", "alt": "Soccer field" }
              ]
            }
          ]
        },
        {
          "id": 2002,
          "src": "https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?auto=compress&cs=tinysrgb&w=600",
          "location": "National Stadium",
          "date": { "day": "20", "month": "Dec" },
          "tag": "athletics",
          "album": [
            {
              "id": 20021,
              "name": "Track & Field Championships",
              "date": "sunday, december 20",
              "time": "8:00 AM - 5:00 PM",
              "location": "National Stadium",
              "images": [
                { "src": "https://images.pexels.com/photos/3621538/pexels-photo-3621538.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  "gridClass": "row-span-2 col-span-1", "alt": "Sprint race" },
                { "src": "https://images.pexels.com/photos/3764014/pexels-photo-3764014.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  "gridClass": "col-span-1", "alt": "Long jump" },
                { "src": "https://images.pexels.com/photos/3657156/pexels-photo-3657156.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  "gridClass": "col-span-1", "alt": "Relay race" }
              ]
            }
          ]
        },
        {
          "id": 2003,
          "src": "https://images.pexels.com/photos/2094697/pexels-photo-2094697.jpeg?auto=compress&cs=tinysrgb&w=600",
          "location": "Community Field",
          "date": { "day": "15", "month": "Feb" },
          "tag": "training",
          "album": [
            {
              "id": 20031,
              "name": "Sports Training Camp",
              "date": "friday, february 15",
              "time": "7:00 AM - 4:00 PM",
              "location": "Community Field",
              "images": [
                { "src": "https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  "gridClass": "row-span-2 col-span-1", "alt": "Training session" },
                { "src": "https://images.pexels.com/photos/3768913/pexels-photo-3768913.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  "gridClass": "col-span-1", "alt": "Stretching exercises" },
                { "src": "https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  "gridClass": "col-span-1", "alt": "Fitness drills" }
              ]
            }
          ]
        },
        {
          "id": 2004,
          "src": "https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg?auto=compress&cs=tinysrgb&w=600",
          "location": "Riverside Park",
          "date": { "day": "3", "month": "Mar" },
          "tag": "marathon",
          "album": [
            {
              "id": 20041,
              "name": "City Marathon",
              "date": "sunday, march 3",
              "time": "6:00 AM - 2:00 PM",
              "location": "Riverside Park",
              "images": [
                { "src": "https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  "gridClass": "row-span-2 col-span-1", "alt": "Marathon start" },
                { "src": "https://images.pexels.com/photos/2403047/pexels-photo-2403047.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  "gridClass": "col-span-1", "alt": "Runner hydration" },
                { "src": "https://images.pexels.com/photos/2524749/pexels-photo-2524749.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  "gridClass": "col-span-1", "alt": "Finish line" }
              ]
            }
          ]
        },
        {
          "id": 2005,
          "src": "https://images.pexels.com/photos/8028917/pexels-photo-8028917.jpeg?auto=compress&cs=tinysrgb&w=600",
          "location": "Sports Complex",
          "date": { "day": "10", "month": "Mar" },
          "tag": "basketball",
          "album": [
            {
              "id": 20051,
              "name": "Basketball Tournament",
              "date": "sunday, march 10",
              "time": "10:00 AM - 6:00 PM",
              "location": "Sports Complex",
              "images": [
                { "src": "https://images.pexels.com/photos/3763503/pexels-photo-3763503.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  "gridClass": "row-span-2 col-span-1", "alt": "Basketball game" },
                { "src": "https://images.pexels.com/photos/3755442/pexels-photo-3755442.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  "gridClass": "col-span-1", "alt": "Team practice" },
                { "src": "https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  "gridClass": "col-span-1", "alt": "Court view" }
              ]
            }
          ]
        },
        {
          "id": 2006,
          "src": "https://images.pexels.com/photos/163444/sport-treadmill-tor-route-163444.jpeg?auto=compress&cs=tinysrgb&w=600",
          "location": "Fitness Center",
          "date": { "day": "15", "month": "Mar" },
          "tag": "fitness",
          "album": [
            {
              "id": 20061,
              "name": "Fitness Challenge",
              "date": "friday, march 15",
              "time": "8:00 AM - 4:00 PM",
              "location": "Fitness Center",
              "images": [
                { "src": "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  "gridClass": "row-span-2 col-span-1", "alt": "Workout session" },
                { "src": "https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  "gridClass": "col-span-1", "alt": "Weight training" },
                { "src": "https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg?auto=compress&cs=tinysrgb&w=600", 
                  "gridClass": "col-span-1", "alt": "Gym equipment" }
              ]
            }
          ]
        }
      ]
    },
    "categories": {
      "menu": {
        "title": "Nutrition Station",
        "icon": "Apple",
        "items": [
          { "name": "Energy Bars", "type": "food" },
          { "name": "Sports Drinks", "type": "beverage" },
          { "name": "Protein Packs", "type": "food" }
        ]
      },
      "requirements": {
        "title": "Participant Needs",
        "icon": "Clipboard",
        "items": [
          { "name": "Registration Form", "type": "document" },
          { "name": "Sports Attire", "type": "clothing" },
          { "name": "Medical Clearance", "type": "health" }
        ]
      },
      "activities": {
        "title": "Event Schedule",
        "icon": "Calendar",
        "items": [
          { "name": "Track & Field", "type": "competition" },
          { "name": "Swimming Races", "type": "water" },
          { "name": "Team Sports", "type": "group" }
        ]
      },
      "personalities": {
        "title": "Sports Personalities",
        "icon": "Award",
        "sections": {
          "guests": [
            { "name": "James", "image": "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { "name": "Olivia", "image": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { "name": "Thomas", "image": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" }
          ],
          "speakers": [
            { "name": "Coach Lisa", "image": "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { "name": "Dr. Martin", "image": "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600" }
          ],
          "performers": [
            { "name": "Olympic Medalist John", "image": "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { "name": "Fitness Instructor Sarah", "image": "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600" }
          ]
        }
      }
    }
  },
    {
      "id": 3,
      "title": "Luo Cultural Homecoming Ceremony",
      "date": "12th Nov",
      "type": "Today",
      "description": "Experience the richness of Luo traditions at our annual homecoming celebration featuring authentic music, dance, and cuisine",
      "coverImage": "https://images.pexels.com/photos/3810832/pexels-photo-3810832.jpeg?auto=compress&cs=tinysrgb&w=600",
      "location": "Kisumu, Central Hotel & Cultural Center",
      "likes": 32,
      "capacity": "78/100",
      "organizer": {
        "id": 103,
        "name": "Ochieng",
        "username": "ochieng_events",
        "bio": "Cultural event specialist with 15 years experience preserving and celebrating Luo heritage through community gatherings",
        "src": "https://images.pexels.com/photos/8957086/pexels-photo-8957086.jpeg?auto=compress&cs=tinysrgb&w=600",
        "following": 190,
        "followers": 980,
        "specialities": ["Cultural Ceremonies", "Traditional Dance", "Community Festivals"],
        "galleryImages": [
          {
            "id": 3001,
            "src": "https://images.pexels.com/photos/5604787/pexels-photo-5604787.jpeg?auto=compress&cs=tinysrgb&w=600",
            "location": "Kisumu Cultural Center",
            "date": { "day": "25", "month": "Sep" },
            "tag": "dancers",
            "album": [
              {
                "id": 30011,
                "name": "Traditional Dance Festival",
                "date": "wednesday, september 25",
                "time": "2:00 PM - 8:00 PM",
                "location": "Kisumu Cultural Center",
                "images": [
                  { "src": "https://images.pexels.com/photos/5604787/pexels-photo-5604787.jpeg?auto=compress&cs=tinysrgb&w=600", 
                    "gridClass": "row-span-2 col-span-1", "alt": "Traditional dancers" },
                  { "src": "https://images.pexels.com/photos/5604941/pexels-photo-5604941.jpeg?auto=compress&cs=tinysrgb&w=600", 
                    "gridClass": "col-span-1", "alt": "Dance performance" },
                  { "src": "https://images.pexels.com/photos/5604806/pexels-photo-5604806.jpeg?auto=compress&cs=tinysrgb&w=600", 
                    "gridClass": "col-span-1", "alt": "Cultural celebration" }
                ]
              }
            ]
          },
          {
            "id": 3002,
            "src": "https://images.pexels.com/photos/3810811/pexels-photo-3810811.jpeg?auto=compress&cs=tinysrgb&w=600",
            "location": "Lake Victoria Shore",
            "date": { "day": "10", "month": "Aug" },
            "tag": "ceremony",
            "album": [
              {
                "id": 30021,
                "name": "Lakeside Ceremony",
                "date": "saturday, august 10",
                "time": "4:00 PM - 9:00 PM",
                "location": "Lake Victoria Shore",
                "images": [
                  { "src": "https://images.pexels.com/photos/3810811/pexels-photo-3810811.jpeg?auto=compress&cs=tinysrgb&w=600", 
                    "gridClass": "row-span-2 col-span-1", "alt": "Ceremonial gathering" },
                  { "src": "https://images.pexels.com/photos/3810832/pexels-photo-3810832.jpeg?auto=compress&cs=tinysrgb&w=600", 
                    "gridClass": "col-span-1", "alt": "Traditional rituals" },
                  { "src": "https://images.pexels.com/photos/3810766/pexels-photo-3810766.jpeg?auto=compress&cs=tinysrgb&w=600", 
                    "gridClass": "col-span-1", "alt": "Cultural music" }
                ]
              }
            ]
          },
          {
            "id": 3003,
            "src": "https://images.pexels.com/photos/5604806/pexels-photo-5604806.jpeg?auto=compress&cs=tinysrgb&w=600",
            "location": "Community Gathering Place",
            "date": { "day": "5", "month": "Oct" },
            "tag": "traditional",
            "album": [
              {
                "id": 30031,
                "name": "Community Celebration",
                "date": "saturday, october 5",
                "time": "11:00 AM - 7:00 PM",
                "location": "Community Gathering Place",
                "images": [
                  { "src": "https://images.pexels.com/photos/5604806/pexels-photo-5604806.jpeg?auto=compress&cs=tinysrgb&w=600", 
                    "gridClass": "row-span-2 col-span-1", "alt": "Community gathering" },
                  { "src": "https://images.pexels.com/photos/5604847/pexels-photo-5604847.jpeg?auto=compress&cs=tinysrgb&w=600", 
                    "gridClass": "col-span-1", "alt": "Traditional ceremony" },
                  { "src": "https://images.pexels.com/photos/5604787/pexels-photo-5604787.jpeg?auto=compress&cs=tinysrgb&w=600", 
                    "gridClass": "col-span-1", "alt": "Cultural performance" }
                ]
              }
            ]
          },
          {
            "id": 3004,
            "src": "https://images.pexels.com/photos/5604941/pexels-photo-5604941.jpeg?auto=compress&cs=tinysrgb&w=600",
            "location": "Victoria Gardens",
            "date": { "day": "30", "month": "Jul" },
            "tag": "celebration",
            "album": [
              {
                "id": 30041,
                "name": "Heritage Festival",
                "date": "tuesday, july 30",
                "time": "1:00 PM - 8:00 PM",
                "location": "Victoria Gardens",
                "images": [
                  { "src": "https://images.pexels.com/photos/5604941/pexels-photo-5604941.jpeg?auto=compress&cs=tinysrgb&w=600", 
                    "gridClass": "row-span-2 col-span-1", "alt": "Festival celebration" },
                  { "src": "https://images.pexels.com/photos/5604847/pexels-photo-5604847.jpeg?auto=compress&cs=tinysrgb&w=600", 
                    "gridClass": "col-span-1", "alt": "Heritage display" },
                  { "src": "https://images.pexels.com/photos/5604806/pexels-photo-5604806.jpeg?auto=compress&cs=tinysrgb&w=600", 
                    "gridClass": "col-span-1", "alt": "Cultural showcase" }
                ]
              }
            ]
          },
          {
            "id": 3005,
            "src": "https://images.pexels.com/photos/5604847/pexels-photo-5604847.jpeg?auto=compress&cs=tinysrgb&w=600",
            "location": "Nyanza Heritage Center",
            "date": { "day": "15", "month": "Nov" },
            "tag": "heritage",
            "album": [
              {
                "id": 30051,
                "name": "Cultural Heritage Day",
                "date": "friday, november 15",
                "time": "10:00 AM - 6:00 PM",
                "location": "Nyanza Heritage Center",
                "images": [
                  { "src": "https://images.pexels.com/photos/5604847/pexels-photo-5604847.jpeg?auto=compress&cs=tinysrgb&w=600", 
                    "gridClass": "row-span-2 col-span-1", "alt": "Heritage celebration" },
                  { "src": "https://images.pexels.com/photos/5604787/pexels-photo-5604787.jpeg?auto=compress&cs=tinysrgb&w=600", 
                    "gridClass": "col-span-1", "alt": "Traditional performance" },
                  { "src": "https://images.pexels.com/photos/3810811/pexels-photo-3810811.jpeg?auto=compress&cs=tinysrgb&w=600", 
                    "gridClass": "col-span-1", "alt": "Cultural gathering" }
                ]
              }
            ]
          },
          {
            "id": 3006,
            "src": "https://images.pexels.com/photos/3810766/pexels-photo-3810766.jpeg?auto=compress&cs=tinysrgb&w=600",
            "location": "Lakeside Cultural Park",
            "date": { "day": "20", "month": "Dec" },
            "tag": "festival",
            "album": [
              {
                "id": 30061,
                "name": "Year-End Cultural Festival",
                "date": "friday, december 20",
                "time": "3:00 PM - 10:00 PM",
                "location": "Lakeside Cultural Park",
                "images": [
                  { "src": "https://images.pexels.com/photos/3810766/pexels-photo-3810766.jpeg?auto=compress&cs=tinysrgb&w=600", 
                    "gridClass": "row-span-2 col-span-1", "alt": "Festival performance" },
                  { "src": "https://images.pexels.com/photos/3810832/pexels-photo-3810832.jpeg?auto=compress&cs=tinysrgb&w=600", 
                    "gridClass": "col-span-1", "alt": "Cultural rituals" },
                  { "src": "https://images.pexels.com/photos/5604941/pexels-photo-5604941.jpeg?auto=compress&cs=tinysrgb&w=600", 
                    "gridClass": "col-span-1", "alt": "Traditional dance" }
                ]
              }
            ]
          }
        ]
      },
      "categories": {
        "menu": {
          "title": "Traditional Cuisine",
          "icon": "Coffee",
          "items": [
            { "name": "Tilapia & Ugali", "type": "main" },
            { "name": "Nyuka Na Nyama", "type": "side" },
            { "name": "Busaa", "type": "beverage" }
          ]
        },
        "requirements": {
          "title": "Requirements",
          "icon": "Calendar",
          "items": [
            { "name": "Traditional attire", "type": "clothing" },
            { "name": "Family lineage card", "type": "document" },
            { "name": "Respect for elders", "type": "behavior" }
          ]
        },
        "activities": {
          "title": "Cultural Activities",
          "icon": "Activity",
          "items": [
            { "name": "Ohangla dance", "type": "performance" },
            { "name": "Story telling", "type": "tradition" },
            { "name": "Dudu ceremony", "type": "ritual" }
          ]
        },
        "personalities": {
          "title": "Community Members",
          "icon": "Users",
          "sections": {
            "guests": [
              { "name": "Elder Otieno", "image": "https://images.pexels.com/photos/8957133/pexels-photo-8957133.jpeg?auto=compress&cs=tinysrgb&w=600" },
              { "name": "Mama Akinyi", "image": "https://images.pexels.com/photos/8956820/pexels-photo-8956820.jpeg?auto=compress&cs=tinysrgb&w=600" },
              { "name": "Chief Okello", "image": "https://images.pexels.com/photos/5437512/pexels-photo-5437512.jpeg?auto=compress&cs=tinysrgb&w=600" }
            ],
            "speakers": [
              { "name": "Community Elder", "image": "https://images.pexels.com/photos/8957137/pexels-photo-8957137.jpeg?auto=compress&cs=tinysrgb&w=600" },
              { "name": "Cultural Historian", "image": "https://images.pexels.com/photos/8956851/pexels-photo-8956851.jpeg?auto=compress&cs=tinysrgb&w=600" }
            ],
            "performers": [
              { "name": "Traditional Dancers", "image": "https://images.pexels.com/photos/5604847/pexels-photo-5604847.jpeg?auto=compress&cs=tinysrgb&w=600" },
              { "name": "Nyatiti Players", "image": "https://images.pexels.com/photos/3810766/pexels-photo-3810766.jpeg?auto=compress&cs=tinysrgb&w=600" }
            ]
          }
        }
      }
    },
    {
      "id": 4,
      "title": "Vincentia Spiritual Retreat",
      "date": "12th July",
      "description": "Find peace, renewal and spiritual growth at our annual prayer retreat in serene surroundings",
      "type": "Today",
      "coverImage": "https://images.pexels.com/photos/7176304/pexels-photo-7176304.jpeg?auto=compress&cs=tinysrgb&w=600",
      "location": "Thika Road Retreat Center",
      "likes": 56,
      "capacity": "78/100",
      "organizer": {
        "id": 104,
        "name": "Pastor Michael",
        "username": "mike_vin",
        "bio": "Spiritual retreat facilitator with 10 years experience guiding prayer gatherings and faith-based events",
        "src": "https://images.pexels.com/photos/5989167/pexels-photo-5989167.jpeg?auto=compress&cs=tinysrgb&w=600",
        "following": 320,
        "followers": 1850,
        "specialities": ["Spiritual Retreats", "Prayer Workshops", "Faith Counseling"],
        "galleryImages": [
          {
            "id": 4001,
            "src": "https://images.pexels.com/photos/7176307/pexels-photo-7176307.jpeg?auto=compress&cs=tinysrgb&w=600",
            "location": "Thika Retreat Garden",
            "date": { "day": "5", "month": "Jan" },
            "tag": "prayer",
            "album": [
              {
                "id": 40011,
                "name": "New Year Prayer Retreat",
                "date": "sunday, january 5",
                "time": "6:00 AM - 12:00 PM",
                "location": "Thika Retreat Garden",
                "images": [
                  { "src": "https://images.pexels.com/photos/7176307/pexels-photo-7176307.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "gridClass": "row-span-2 col-span-1", "alt": "Morning prayer gathering" },
                  { "src": "https://images.pexels.com/photos/7002816/pexels-photo-7002816.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "gridClass": "col-span-1", "alt": "Group worship" },
                  { "src": "https://images.pexels.com/photos/8955311/pexels-photo-8955311.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "gridClass": "col-span-1", "alt": "Outdoor meditation" }
                ]
              }
            ]
          },
          {
            "id": 4002,
            "src": "https://images.pexels.com/photos/7002816/pexels-photo-7002816.jpeg?auto=compress&cs=tinysrgb&w=600",
            "location": "Riverside Chapel",
            "date": { "day": "20", "month": "Dec" },
            "tag": "worship",
            "album": [
              {
                "id": 40021,
                "name": "Christmas Worship Service",
                "date": "friday, december 20",
                "time": "4:00 PM - 8:00 PM",
                "location": "Riverside Chapel",
                "images": [
                  { "src": "https://images.pexels.com/photos/7002816/pexels-photo-7002816.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "gridClass": "row-span-2 col-span-1", "alt": "Christmas worship celebration" },
                  { "src": "https://images.pexels.com/photos/7176307/pexels-photo-7176307.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "gridClass": "col-span-1", "alt": "Evening prayer service" },
                  { "src": "https://images.pexels.com/photos/8955311/pexels-photo-8955311.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "gridClass": "col-span-1", "alt": "Congregational gathering" }
                ]
              }
            ]
          },
          {
            "id": 4003,
            "src": "https://images.pexels.com/photos/8955311/pexels-photo-8955311.jpeg?auto=compress&cs=tinysrgb&w=600",
            "location": "Mountain Prayer Site",
            "date": { "day": "15", "month": "Feb" },
            "tag": "meditation",
            "album": [
              {
                "id": 40031,
                "name": "Mountain Meditation Retreat",
                "date": "saturday, february 15",
                "time": "5:30 AM - 6:00 PM",
                "location": "Mountain Prayer Site",
                "images": [
                  { "src": "https://images.pexels.com/photos/8955311/pexels-photo-8955311.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "gridClass": "row-span-2 col-span-1", "alt": "Mountain meditation gathering" },
                  { "src": "https://images.pexels.com/photos/7176307/pexels-photo-7176307.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "gridClass": "col-span-1", "alt": "Sunrise prayer session" },
                  { "src": "https://images.pexels.com/photos/7002816/pexels-photo-7002816.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "gridClass": "col-span-1", "alt": "Group spiritual session" }
                ]
              }
            ]
          },
          {
            "id": 4004,
            "src": "https://images.pexels.com/photos/7176307/pexels-photo-7176307.jpeg?auto=compress&cs=tinysrgb&w=600",
            "location": "Serene Valley Center",
            "date": { "day": "25", "month": "Mar" },
            "tag": "retreat",
            "album": [
              {
                "id": 40041,
                "name": "Spring Spiritual Retreat",
                "date": "tuesday, march 25",
                "time": "7:00 AM - 5:00 PM",
                "location": "Serene Valley Center",
                "images": [
                  { "src": "https://images.pexels.com/photos/7176307/pexels-photo-7176307.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "gridClass": "row-span-2 col-span-1", "alt": "Spring retreat gathering" },
                  { "src": "https://images.pexels.com/photos/8955311/pexels-photo-8955311.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "gridClass": "col-span-1", "alt": "Morning meditation" },
                  { "src": "https://images.pexels.com/photos/7002816/pexels-photo-7002816.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "gridClass": "col-span-1", "alt": "Group prayer session" }
                ]
              }
            ]
          },
          {
            "id": 4005,
            "src": "https://images.pexels.com/photos/7002816/pexels-photo-7002816.jpeg?auto=compress&cs=tinysrgb&w=600",
            "location": "Peace Gardens",
            "date": { "day": "10", "month": "Apr" },
            "tag": "fellowship",
            "album": [
              {
                "id": 40051,
                "name": "Community Fellowship Day",
                "date": "wednesday, april 10",
                "time": "9:00 AM - 3:00 PM",
                "location": "Peace Gardens",
                "images": [
                  { "src": "https://images.pexels.com/photos/7002816/pexels-photo-7002816.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "gridClass": "row-span-2 col-span-1", "alt": "Community fellowship" },
                  { "src": "https://images.pexels.com/photos/7176307/pexels-photo-7176307.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "gridClass": "col-span-1", "alt": "Group prayer time" },
                  { "src": "https://images.pexels.com/photos/8955311/pexels-photo-8955311.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "gridClass": "col-span-1", "alt": "Outdoor worship" }
                ]
              }
            ]
          },
          {
            "id": 4006,
            "src": "https://images.pexels.com/photos/8955311/pexels-photo-8955311.jpeg?auto=compress&cs=tinysrgb&w=600",
            "location": "Hillside Sanctuary",
            "date": { "day": "30", "month": "May" },
            "tag": "contemplation",
            "album": [
              {
                "id": 40061,
                "name": "Silent Contemplation Day",
                "date": "thursday, may 30",
                "time": "6:30 AM - 7:30 PM",
                "location": "Hillside Sanctuary",
                "images": [
                  { "src": "https://images.pexels.com/photos/8955311/pexels-photo-8955311.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "gridClass": "row-span-2 col-span-1", "alt": "Silent contemplation" },
                  { "src": "https://images.pexels.com/photos/7002816/pexels-photo-7002816.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "gridClass": "col-span-1", "alt": "Peaceful gathering" },
                  { "src": "https://images.pexels.com/photos/7176307/pexels-photo-7176307.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "gridClass": "col-span-1", "alt": "Morning devotion" }
                ]
              }
            ]
          }
        ]
      },
      "categories": {
        "menu": {
          "title": "Meals & Refreshments",
          "icon": "Coffee",
          "items": [
            { "name": "Vegetarian meals", "type": "food" },
            { "name": "Fruit platters", "type": "snack" },
            { "name": "Herbal tea", "type": "beverage" }
          ]
        },
        "requirements": {
          "title": "Requirements",
          "icon": "Calendar",
          "items": [
            { "name": "Bible/prayer book", "type": "religious" },
            { "name": "Retreat registration", "type": "document" },
            { "name": "Modest clothing", "type": "attire" }
          ]
        },
        "activities": {
          "title": "Spiritual Activities",
          "icon": "Activity",
          "items": [
            { "name": "Group prayer", "type": "worship" },
            { "name": "Silent meditation", "type": "reflection" },
            { "name": "Scripture study", "type": "learning" }
          ]
        },
        "personalities": {
          "title": "Retreat Leaders",
          "icon": "Users",
          "sections": {
            "guests": [
              { "name": "Sister Mary", "image": "https://images.pexels.com/photos/5667637/pexels-photo-5667637.jpeg?auto=compress&cs=tinysrgb&w=600" },
              { "name": "Brother James", "image": "https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=600" },
              { "name": "Deacon Paul", "image": "https://images.pexels.com/photos/6646905/pexels-photo-6646905.jpeg?auto=compress&cs=tinysrgb&w=600" }
            ],
            "speakers": [
              { "name": "Bishop Thomas", "image": "https://images.pexels.com/photos/6647113/pexels-photo-6647113.jpeg?auto=compress&cs=tinysrgb&w=600" },
              { "name": "Reverend Sarah", "image": "https://images.pexels.com/photos/6647117/pexels-photo-6647117.jpeg?auto=compress&cs=tinysrgb&w=600" }
            ],
            "performers": [
              { "name": "Worship Choir", "image": "https://images.pexels.com/photos/3285408/pexels-photo-3285408.jpeg?auto=compress&cs=tinysrgb&w=600" },
              { "name": "Gospel Band", "image": "https://images.pexels.com/photos/9399471/pexels-photo-9399471.jpeg?auto=compress&cs=tinysrgb&w=600" }
            ]
          }
        }
      }
    },
      {
        "id": 5,
        "title": "Graduation Celebration",
        "date": "12th Feb",
        "type": "Tomorrow",
        "description": "Join us for an unforgettable Graduation celebration as we honor achievements and new beginnings",
        "coverImage": "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600",
        "location": "Kilimani University Hall",
        "likes": 78,
        "capacity": "78/100",
        "organizer": {
          "id": 105,
          "name": "James",
          "username": "James01",
          "bio": "Event enthusiast and certified event planner specializing in academic celebrations",
          "src": "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
          "following": 320,
          "followers": 1850,
          "specialities": ["Academic Events", "Team Building", "Graduation Ceremonies"],
          "galleryImages": [
            {
              "id": 5001,
              "src": "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600",
              "location": "Kilimani University Hall",
              "date": "5th January 2025",
              "tag": "graduation"
            },
            {
              "id": 5002,
              "src": "https://images.pexels.com/photos/399158/pexels-photo-399158.jpeg?auto=compress&cs=tinysrgb&w=600",
              "location": "City Conference Center",
              "date": "20th December 2024",
              "tag": "ceremony"
            },
            {
              "id": 5003,
              "src": "https://images.pexels.com/photos/6257086/pexels-photo-6257086.jpeg?auto=compress&cs=tinysrgb&w=600",
              "location": "Community College",
              "date": "15th February 2025",
              "tag": "celebration"
            }
          ]
        },
        "categories": {
          "menu": {
            "title": "Meals & Refreshments",
            "icon": "Coffee",
            "items": [
              { "name": "Gourmet Canapés", "type": "food" },
              { "name": "Graduation Cake", "type": "dessert" },
              { "name": "Champagne", "type": "beverage" }
            ]
          },
          "requirements": {
            "title": "Requirements",
            "icon": "Calendar",
            "items": [
              { "name": "Formal attire", "type": "clothing" },
              { "name": "Invitation card", "type": "document" },
              { "name": "Graduation cap", "type": "accessory" }
            ]
          },
          "activities": {
            "title": "Activities",
            "icon": "Activity",
            "items": [
              { "name": "Award ceremony", "type": "formal" },
              { "name": "Photo session", "type": "entertainment" },
              { "name": "Graduation dance", "type": "celebration" }
            ]
          },
          "personalities": {
            "title": "Personalities",
            "icon": "Users",
            "sections": {
              "guests": [
                { "name": "Dean Roberts", "image": "https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=600" },
                { "name": "Prof. Johnson", "image": "https://images.pexels.com/photos/5553050/pexels-photo-5553050.jpeg?auto=compress&cs=tinysrgb&w=600" },
                { "name": "Dr. Amina", "image": "https://images.pexels.com/photos/6326377/pexels-photo-6326377.jpeg?auto=compress&cs=tinysrgb&w=600" }
              ],
              "speakers": [
                { "name": "Valedictorian", "image": "https://images.pexels.com/photos/8617946/pexels-photo-8617946.jpeg?auto=compress&cs=tinysrgb&w=600" },
                { "name": "Alumni Rep", "image": "https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&w=600" }
              ],
              "performers": [
                { "name": "University Choir", "image": "https://images.pexels.com/photos/6968175/pexels-photo-6968175.jpeg?auto=compress&cs=tinysrgb&w=600" },
                { "name": "DJ Gradwell", "image": "https://images.pexels.com/photos/1540319/pexels-photo-1540319.jpeg?auto=compress&cs=tinysrgb&w=600" }
              ]
            }
          }
        }
      },
      {
        "id": 6,
        "title": "Silver Wedding Anniversary",
        "date": "5th Jan",
        "description": "Celebrate 25 years of love and commitment with the Johnsons as they renew their vows",
        "type": "ThisYear",
        "coverImage": "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=600",
        "location": "Nairobi Botanical Gardens",
        "likes": 104,
        "capacity": "78/100",
        "organizer": {
          "id": 106,
          "name": "Andrew",
          "username": "andrew_ke",
          "bio": "Wedding planner specializing in anniversaries and vow renewals with 15 years experience",
          "src": "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",
          "following": 320,
          "followers": 1850,
          "specialities": ["Anniversaries", "Vow Renewals", "Romantic Events"],
          "galleryImages": [
            {
              "id": 6001,
              "src": "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=600",
              "location": "Serena Hotel Gardens",
              "date": "5th January 2025",
              "tag": "anniversary"
            },
            {
              "id": 6002,
              "src": "https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=600",
              "location": "Coastal Resort",
              "date": "20th December 2024",
              "tag": "wedding"
            },
            {
              "id": 6003,
              "src": "https://images.pexels.com/photos/3571818/pexels-photo-3571818.jpeg?auto=compress&cs=tinysrgb&w=600",
              "location": "Nairobi Arboretum",
              "date": "15th February 2025",
              "tag": "renewal"
            }
          ]
        },
        "categories": {
          "menu": {
            "title": "Anniversary Feast",
            "icon": "Coffee",
            "items": [
              { "name": "Gourmet Dinner", "type": "food" },
              { "name": "Anniversary Cake", "type": "dessert" },
              { "name": "Vintage Wine", "type": "beverage" }
            ]
          },
          "requirements": {
            "title": "Requirements",
            "icon": "Calendar",
            "items": [
              { "name": "Semi-formal attire", "type": "clothing" },
              { "name": "Invitation RSVP", "type": "document" },
              { "name": "Anniversary gift", "type": "item" }
            ]
          },
          "activities": {
            "title": "Activities",
            "icon": "Activity",
            "items": [
              { "name": "Vow renewal", "type": "ceremony" },
              { "name": "Memory slideshow", "type": "entertainment" },
              { "name": "Couple's dance", "type": "tradition" }
            ]
          },
          "personalities": {
            "title": "Personalities",
            "icon": "Users",
            "sections": {
              "guests": [
                { "name": "Family members", "image": "https://images.pexels.com/photos/3985346/pexels-photo-3985346.jpeg?auto=compress&cs=tinysrgb&w=600" },
                { "name": "Original witnesses", "image": "https://images.pexels.com/photos/1682497/pexels-photo-1682497.jpeg?auto=compress&cs=tinysrgb&w=600" },
                { "name": "Close friends", "image": "https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=600" }
              ],
              "speakers": [
                { "name": "Marriage counselor", "image": "https://images.pexels.com/photos/5325881/pexels-photo-5325881.jpeg?auto=compress&cs=tinysrgb&w=600" },
                { "name": "Best friend", "image": "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=600" }
              ],
              "performers": [
                { "name": "String quartet", "image": "https://images.pexels.com/photos/7097455/pexels-photo-7097455.jpeg?auto=compress&cs=tinysrgb&w=600" },
                { "name": "Ballroom dancers", "image": "https://images.pexels.com/photos/8437816/pexels-photo-8437816.jpeg?auto=compress&cs=tinysrgb&w=600" }
              ]
            }
          }
        }
      },
      {
        "id": 7,
        "title": "Tech Innovation Summit",
        "date": "23rd Mar",
        "type": "NextMonth",
        "description": "Join us for a ground breaking tech summit at westlands Nairobi",
        "coverImage": "https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=600",
        "location": "Westlands",
        "likes": 234,
        "capacity": "78/100",
        "organizer": {
          "id": 102,
          "name": "Ochieng",
          "username": "Eng.Ochieng",
          "bio": "Tech enthusiast and event coordinator specializing in hackathon competitions",
          "src": "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
          "following": 320,
          "followers": 1850,
          "specialities": ["Tech events", "Team Building", "Tech Training"],
          "galleryImages": [
            {
              "id": 7001,
              "src": "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
              "location": "Innovation Hub",
              "date": "5th January 2025",
              "tag": "conference"
            },
            {
              "id": 7002,
              "src": "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600",
              "location": "Tech Park",
              "date": "20th December 2024",
              "tag": "summit"
            },
            {
              "id": 7003,
              "src": "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=600",
              "location": "Digital Hub",
              "date": "15th February 2025",
              "tag": "workshop"
            }
          ]
        },
        "categories": {
          "menu": {
            "title": "Meals & Drinks",
            "icon": "Coffee",
            "items": [
              { "name": "Gourmet sandwiches", "type": "food" },
              { "name": "Protein bowls", "type": "food" },
              { "name": "Artisanal coffee", "type": "beverage" },
              { "name": "Smoothies", "type": "beverage" }
            ]
          },
          "requirements": {
            "title": "Requirements",
            "icon": "Laptop",
            "items": [
              { "name": "Laptop/tablet", "type": "equipment" },
              { "name": "ID card", "type": "document" },
              { "name": "Business cards", "type": "networking" }
            ]
          },
          "activities": {
            "title": "Activities",
            "icon": "Lightbulb",
            "items": [
              { "name": "Panel discussions", "type": "learning" },
              { "name": "Networking sessions", "type": "social" },
              { "name": "Tech demos", "type": "showcase" },
              { "name": "Innovation workshops", "type": "participation" }
            ]
          },
          "personalities": {
            "title": "Personalities",
            "icon": "Users",
            "sections": {
              "guests": [
                { "name": "Tech CEOs", "image": "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600" },
                { "name": "Startup Founders", "image": "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600" },
                { "name": "Venture Capitalists", "image": "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600" }
              ],
              "speakers": [
                { "name": "Tech Visionaries", "image": "https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=600" },
                { "name": "Industry Leaders", "image": "https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=600" }
              ],
              "performers": [
                { "name": "Tech Demo Teams", "image": "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600" },
                { "name": "Innovation Awards Hosts", "image": "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600" }
              ]
            }
          }
        }
      },
      {
        "id": 8,
        "title": "HealthTech Conference",
        "date": "1st Feb",
        "type": "NextMonth",
        "description": "Exploring innovations in healthcare technology and telemedicine.",
        "coverImage": "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=600",
        "location": "Kenyatta Hospital",
        "likes": 78,
        "capacity": "78/100",
        "organizer": {
          "id": 108,
          "name": "Dr. Paul",
          "username": "paul_001",
          "bio": "Health enthusiast and clinic coordinator specializing in radiology",
          "src": "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600",
          "following": 320,
          "followers": 1850,
          "specialities": ["Medical Innovation", "Health Technology", "Telemedicine"],
          "galleryImages": [
            {
              "id": 8001,
              "src": "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=600",
              "location": "Medical Research Center",
              "date": "5th January 2025",
              "tag": "research"
            },
            {
              "id": 8002,
              "src": "https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=600",
              "location": "Digital Health Lab",
              "date": "20th December 2024",
              "tag": "technology"
            },
            {
              "id": 8003,
              "src": "https://images.pexels.com/photos/7088476/pexels-photo-7088476.jpeg?auto=compress&cs=tinysrgb&w=600",
              "location": "Telemedicine Center",
              "date": "15th February 2025",
              "tag": "telemedicine"
            }
          ]
        },
        "categories": {
          "menu": {
            "title": "Meals & Drinks",
            "icon": "Coffee",
            "items": [
              { "name": "Healthy salads", "type": "food" },
              { "name": "Whole grain wraps", "type": "food" },
              { "name": "Fruit-infused water", "type": "beverage" },
              { "name": "Herbal teas", "type": "beverage" }
            ]
          },
          "requirements": {
            "title": "Requirements",
            "icon": "Clipboard",
            "items": [
              { "name": "Medical ID", "type": "document" },
              { "name": "Professional credentials", "type": "qualification" },
              { "name": "Vaccination certificate", "type": "health" }
            ]
          },
          "activities": {
            "title": "Activities",
            "icon": "Activity",
            "items": [
              { "name": "Medical tech exhibitions", "type": "showcase" },
              { "name": "Research presentations", "type": "academic" },
              { "name": "Telemedicine demonstrations", "type": "demonstration" },
              { "name": "Healthcare innovation forums", "type": "discussion" }
            ]
          },
          "personalities": {
            "title": "Personalities",
            "icon": "Users",
            "sections": {
              "guests": [
                { "name": "Medical Researchers", "image": "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600" },
                { "name": "Healthcare Innovators", "image": "https://images.pexels.com/photos/5214961/pexels-photo-5214961.jpeg?auto=compress&cs=tinysrgb&w=600" },
                { "name": "Medical Students", "image": "https://images.pexels.com/photos/5214949/pexels-photo-5214949.jpeg?auto=compress&cs=tinysrgb&w=600" }
              ],
              "speakers": [
                { "name": "Leading Physicians", "image": "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600" },
                { "name": "Health Tech CEOs", "image": "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=600" }
              ],
              "performers": [
                { "name": "Medical Tech Demonstrators", "image": "https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=600" },
                { "name": "Healthcare Solution Teams", "image": "https://images.pexels.com/photos/7088495/pexels-photo-7088495.jpeg?auto=compress&cs=tinysrgb&w=600" }
              ]
            }
          }
        }
      },
      {
        "id": 9,
        "title": "Cybersecurity Workshop",
        "date": "12th March",
        "description": "A hands-on workshop covering the latest cybersecurity threats and solutions.",
        "type": "ThisYear",
        "coverImage": "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600",
        "location": "Nairobi",
        "likes": 109,
        "capacity": "78/100",
        "organizer": {
          "id": 109,
          "name": "John",
          "username": "John@ke",
          "bio": "Cybersecurity enthusiast and hackathon coordinator specializing in ethical hacking competitions",
          "src": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
          "following": 320,
          "followers": 1850,
          "specialities": ["Ethical hacking", "Team Building", "Security Analyst"],
          "galleryImages": [
            {
              "id": 9001,
              "src": "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600",
              "location": "Cybersecurity Conference Hall",
              "date": "5th January 2025",
              "tag": "conference"
            },
            {
              "id": 9002,
              "src": "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=600",
              "location": "Tech Innovation Hub",
              "date": "20th December 2024",
              "tag": "hackathon"
            },
            {
              "id": 9003,
              "src": "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600",
              "location": "Digital Security Lab",
              "date": "15th February 2025",
              "tag": "workshop"
            }
          ]
        },
        "categories": {
          "menu": {
            "title": "Meals & Drinks",
            "icon": "Coffee",
            "items": [
              { "name": "Sandwiches", "type": "food" },
              { "name": "Salads", "type": "food" },
              { "name": "Coffee", "type": "beverage" },
              { "name": "Energy drinks", "type": "beverage" }
            ]
          },
          "requirements": {
            "title": "Requirements",
            "icon": "Laptop",
            "items": [
              { "name": "Laptop", "type": "equipment" },
              { "name": "ID", "type": "document" },
              { "name": "Prior knowledge of networking", "type": "skill" }
            ]
          },
          "activities": {
            "title": "Activities",
            "icon": "Shield",
            "items": [
              { "name": "Ethical hacking demo", "type": "demonstration" },
              { "name": "Network security workshop", "type": "training" },
              { "name": "CTF competition", "type": "competition" }
            ]
          },
          "personalities": {
            "title": "Personalities",
            "icon": "Users",
            "sections": {
              "guests": [
                { "name": "David", "image": "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" },
                { "name": "Sarah", "image": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" },
                { "name": "Michael", "image": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" }
              ],
              "speakers": [
                { "name": "Dr. Lisa", "image": "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600" },
                { "name": "Prof. James", "image": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" }
              ],
              "performers": [
                { "name": "Ethical Hackers Team", "image": "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600" },
                { "name": "Security Experts Panel", "image": "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600" }
              ]
            }
          }
        }
      },
      {
        "id": 10,
        "title": "Startup Pitch Night",
        "description": "Entrepreneurs showcase their startup ideas to investors.",
        "type": "Tomorrow",
        "date": "12th Feb",
        "coverImage": "https://images.pexels.com/photos/7070/space-desk-workspace-coworking.jpg?auto=compress&cs=tinysrgb&w=600",
        "location": "Kilimani",
        "likes": 56,
        "capacity": "78/100",
        "organizer": {
          "id": 110,
          "name": "Mitchel",
          "username": "mitchy@12",
          "bio": "AI & ML enthusiast and event coordinator specializing in AI & ML",
          "src": "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
          "following": 320,
          "followers": 1850,
          "specialities": ["Data Science", "Team Building", "Machine Learning"],
          "galleryImages": [
            {
              "id": 10001,
              "src": "https://images.pexels.com/photos/7070/space-desk-workspace-coworking.jpg?auto=compress&cs=tinysrgb&w=600",
              "location": "Innovation Hub",
              "date": "5th January 2025",
              "tag": "startup"
            },
            {
              "id": 10002,
              "src": "https://images.pexels.com/photos/7095/people-coffee-meeting-team.jpg?auto=compress&cs=tinysrgb&w=600",
              "location": "Tech Incubator",
              "date": "20th December 2024",
              "tag": "team"
            },
            {
              "id": 10003,
              "src": "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
              "location": "Venture Capital Office",
              "date": "15th February 2025",
              "tag": "meeting"
            }
          ]
        },
        "categories": {
          "menu": {
            "title": "Meals & Drinks",
            "icon": "Coffee",
            "items": [
              { "name": "Canapés", "type": "food" },
              { "name": "Finger foods", "type": "food" },
              { "name": "Wine", "type": "beverage" },
              { "name": "Sparkling water", "type": "beverage" }
            ]
          },
          "requirements": {
            "title": "Requirements",
            "icon": "Briefcase",
            "items": [
              { "name": "Business casual attire", "type": "clothing" },
              { "name": "Business cards", "type": "document" },
              { "name": "Pitch deck (for presenters)", "type": "presentation" }
            ]
          },
          "activities": {
            "title": "Activities",
            "icon": "TrendingUp",
            "items": [
              { "name": "Pitch presentations", "type": "presentation" },
              { "name": "Networking", "type": "social" },
              { "name": "Q&A sessions", "type": "discussion" },
              { "name": "Investor meetings", "type": "business" }
            ]
          },
          "personalities": {
            "title": "Personalities",
            "icon": "Users",
            "sections": {
              "guests": [
                { "name": "Emily", "image": "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=600" },
                { "name": "Robert", "image": "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600" },
                { "name": "Sophia", "image": "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600" }
              ],
              "speakers": [
                { "name": "Alex", "image": "https://images.pexels.com/photos/2182981/pexels-photo-2182981.jpeg?auto=compress&cs=tinysrgb&w=600" },
                { "name": "Victoria", "image": "https://images.pexels.com/photos/1181687/pexels-photo-1181687.jpeg?auto=compress&cs=tinysrgb&w=600" }
              ],
              "performers": [
                { "name": "Jazz Trio", "image": "https://images.pexels.com/photos/4088800/pexels-photo-4088800.jpeg?auto=compress&cs=tinysrgb&w=600" },
                { "name": "Tech Demo Team", "image": "https://images.pexels.com/photos/3184310/pexels-photo-3184310.jpeg?auto=compress&cs=tinysrgb&w=600" }
              ]
            }
          }
        }
      }
  ];
  
  export default eventData;