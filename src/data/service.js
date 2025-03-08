export const serviceData = [
    {
        id: 1,
        title: "Photography",
        description: "Professional photographers for your special moments",
        services: [
            {
                id: 11,
                name: "James Wilson",
                rating: 4.5,
                specialization: "Wedding Photography",
                price: "$500/day",
                profileData: {
                    id: 111,
                    username: 'mk photography',
                    subtext: "i'm a passionate photographer and inc",
                    profile: 'https://images.pexels.com/photos/1903308/pexels-photo-1903308.jpeg?auto=compress&cs=tinysrgb&w=600',
                    following: 234,
                    followers: 234,
                    specialties: ['Events', 'Wedding', 'Portrait', 'Session', 'Nature'],
                    // Add this to the profileData object for each service provider
                    reviews: [
                        {
                        id: 1001,
                        name: "Sarah Johnson",
                        rating: 4.8,
                        date: "2024-12-10",
                        comment: "James captured our wedding beautifully! Every moment was documented with such care and professionalism. Highly recommend!",
                        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
                        },
                        {
                        id: 1002,
                        name: "Michael Brown",
                        rating: 4.5,
                        date: "2024-11-28",
                        comment: "Great photographer with a keen eye for detail. Made everyone comfortable during our family photoshoot.",
                        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
                        },
                        {
                        id: 1003,
                        name: "Emily Davis",
                        rating: 5.0,
                        date: "2024-11-15",
                        comment: "Absolutely stunning photos from our corporate event! James has a gift for capturing the perfect moments.",
                        avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
                        },
                        {
                        id: 1004,
                        name: "Daniel Wilson",
                        rating: 4.7,
                        date: "2024-10-25",
                        comment: "I hired James for product photography and the results exceeded my expectations. Very responsive and professional.",
                        avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                        }
                    ],
                    galleryImages: [
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
                    ],
                }
            },
            {
                id: 12,
                name: "Sunny Lee",
                rating: 4.8,
                specialization: "Portrait & Events",
                price: "$400/day",
                profileData: {
                    id: 121,
                    username: 'sunny_captures',
                    subtext: "Capturing life's beautiful moments",
                    profile: 'https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=600',
                    following: 456,
                    followers: 789,
                    specialties: ['Portrait', 'Events', 'Street', 'Corporate', 'Family'],
                    reviews: [
                        {
                        id: 1001,
                        name: "Sarah Johnson",
                        rating: 4.8,
                        date: "2024-12-10",
                        comment: "James captured our wedding beautifully! Every moment was documented with such care and professionalism. Highly recommend!",
                        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
                        },
                        {
                        id: 1002,
                        name: "Michael Brown",
                        rating: 4.5,
                        date: "2024-11-28",
                        comment: "Great photographer with a keen eye for detail. Made everyone comfortable during our family photoshoot.",
                        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
                        },
                        {
                        id: 1003,
                        name: "Emily Davis",
                        rating: 5.0,
                        date: "2024-11-15",
                        comment: "Absolutely stunning photos from our corporate event! James has a gift for capturing the perfect moments.",
                        avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
                        },
                        {
                        id: 1004,
                        name: "Daniel Wilson",
                        rating: 4.7,
                        date: "2024-10-25",
                        comment: "I hired James for product photography and the results exceeded my expectations. Very responsive and professional.",
                        avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                        }
                    ],
                    galleryImages: [
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
                }
            },
            {
                "id": 13,
                "name": "Maria Garcia",
                "rating": 5.0,
                "specialization": "Fashion Photography",
                "price": "$600/day",
                "profileData": {
                    "id": 131,
                    "username": "maria_fashion",
                    "subtext": "Fashion through my lens",
                    "profile": "https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "following": 567,
                    "followers": 892,
                    "specialties": ["Fashion", "Editorial", "Runway", "Portraits", "Studio"],
                    // Add this to the profileData object for each service provider
                    reviews: [
                        {
                        id: 1001,
                        name: "Sarah Johnson",
                        rating: 4.8,
                        date: "2024-12-10",
                        comment: "James captured our wedding beautifully! Every moment was documented with such care and professionalism. Highly recommend!",
                        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
                        },
                        {
                        id: 1002,
                        name: "Michael Brown",
                        rating: 4.5,
                        date: "2024-11-28",
                        comment: "Great photographer with a keen eye for detail. Made everyone comfortable during our family photoshoot.",
                        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
                        },
                        {
                        id: 1003,
                        name: "Emily Davis",
                        rating: 5.0,
                        date: "2024-11-15",
                        comment: "Absolutely stunning photos from our corporate event! James has a gift for capturing the perfect moments.",
                        avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
                        },
                        {
                        id: 1004,
                        name: "Daniel Wilson",
                        rating: 4.7,
                        date: "2024-10-25",
                        comment: "I hired James for product photography and the results exceeded my expectations. Very responsive and professional.",
                        avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                        }
                    ],
                    "galleryImages": [
                        {
                            "id": 3001,
                            "src": "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "location": "Milan Fashion Studio",
                            "date": { "day": "12", "month": "Jan" },
                            "tag": "fashion",
                            "album": [
                                {
                                    "id": 30011,
                                    "name": "Spring Collection",
                                    "date": "wednesday, january 12",
                                    "time": "10:00 AM - 6:00 PM",
                                    "location": "Milan Fashion Studio",
                                    "images": [
                                        { "src": "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "row-span-2 col-span-1", "alt": "Fashion model in studio" },
                                        { "src": "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Editorial fashion shot" },
                                        { "src": "https://images.pexels.com/photos/1926768/pexels-photo-1926768.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Fashion detail shot" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": 3002,
                            "src": "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "location": "Paris Runway",
                            "date": { "day": "15", "month": "Feb" },
                            "tag": "runway",
                            "album": [
                                {
                                    "id": 30021,
                                    "name": "Fashion Week",
                                    "date": "thursday, february 15",
                                    "time": "2:00 PM - 9:00 PM",
                                    "location": "Paris Fashion Week Venue",
                                    "images": [
                                        { "src": "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "row-span-2 col-span-1", "alt": "Runway show" },
                                        { "src": "https://images.pexels.com/photos/1926768/pexels-photo-1926768.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Backstage preparation" },
                                        { "src": "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Model lineup" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": 3003,
                            "src": "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "location": "New York Studio",
                            "date": { "day": "20", "month": "Mar" },
                            "tag": "editorial",
                            "album": [
                                {
                                    "id": 30031,
                                    "name": "Vogue Editorial",
                                    "date": "monday, march 20",
                                    "time": "9:00 AM - 7:00 PM",
                                    "location": "Manhattan Studio",
                                    "images": [
                                        { "src": "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "row-span-2 col-span-1", "alt": "High fashion editorial" },
                                        { "src": "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Fashion close-up" },
                                        { "src": "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Designer showcase" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": 3004,
                            "src": "https://images.pexels.com/photos/2887766/pexels-photo-2887766.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "location": "London Fashion Week",
                            "date": { "day": "25", "month": "Mar" },
                            "tag": "couture",
                            "album": [
                                {
                                    "id": 30041,
                                    "name": "Couture Collection",
                                    "date": "saturday, march 25",
                                    "time": "1:00 PM - 8:00 PM",
                                    "location": "London Fashion District",
                                    "images": [
                                        { "src": "https://images.pexels.com/photos/2887766/pexels-photo-2887766.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "row-span-2 col-span-1", "alt": "Couture runway" },
                                        { "src": "https://images.pexels.com/photos/2887766/pexels-photo-2887766.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Designer fitting" },
                                        { "src": "https://images.pexels.com/photos/2887766/pexels-photo-2887766.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Couture details" }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": 14,
                "name": "Alex Chen",
                "rating": 4.7,
                "specialization": "Commercial Shoots",
                "price": "$450/day",
                "profileData": {
                    "id": 141,
                    "username": "chen_commercial",
                    "subtext": "Making brands shine",
                    "profile": "https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "following": 345,
                    "followers": 678,
                    "specialties": ["Commercial", "Product", "Corporate", "Architecture", "Industrial"],
                    "galleryImages": [
                        {
                            "id": 4001,
                            "src": "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "location": "Tech Product Studio",
                            "date": { "day": "5", "month": "Mar" },
                            "tag": "product",
                            "album": [
                                {
                                    "id": 40011,
                                    "name": "Tech Product Launch",
                                    "date": "monday, march 5",
                                    "time": "9:00 AM - 5:00 PM",
                                    "location": "Professional Studio",
                                    "images": [
                                        { "src": "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "row-span-2 col-span-1", "alt": "Product photography" },
                                        { "src": "https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Detail product shot" },
                                        { "src": "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Product lifestyle" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": 4002,
                            "src": "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "location": "Corporate Office",
                            "date": { "day": "20", "month": "Mar" },
                            "tag": "corporate",
                            "album": [
                                {
                                    "id": 40021,
                                    "name": "Corporate Branding",
                                    "date": "tuesday, march 20",
                                    "time": "8:00 AM - 4:00 PM",
                                    "location": "Downtown Office Building",
                                    "images": [
                                        { "src": "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "row-span-2 col-span-1", "alt": "Corporate environment" },
                                        { "src": "https://images.pexels.com/photos/3182826/pexels-photo-3182826.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Business meeting" },
                                        { "src": "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Office culture" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": 4003,
                            "src": "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "location": "Architectural Site",
                            "date": { "day": "15", "month": "Apr" },
                            "tag": "architecture",
                            "album": [
                                {
                                    "id": 40031,
                                    "name": "Modern Architecture",
                                    "date": "friday, april 15",
                                    "time": "7:00 AM - 6:00 PM",
                                    "location": "Downtown District",
                                    "images": [
                                        { "src": "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "row-span-2 col-span-1", "alt": "Modern building exterior" },
                                        { "src": "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Interior architecture" },
                                        { "src": "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Architectural details" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": 4004,
                            "src": "https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "location": "Industrial Complex",
                            "date": { "day": "22", "month": "Apr" },
                            "tag": "industrial",
                            "album": [
                                {
                                    "id": 40041,
                                    "name": "Industrial Series",
                                    "date": "friday, april 22",
                                    "time": "10:00 AM - 5:00 PM",
                                    "location": "Manufacturing Plant",
                                    "images": [
                                        { "src": "https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "row-span-2 col-span-1", "alt": "Industrial machinery" },
                                        { "src": "https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Factory floor" },
                                        { "src": "https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Industrial process" }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": 15,
                "name": "Sarah Brown",
                "rating": 4.9,
                "specialization": "Family Portraits",
                "price": "$350/day",
                "profileData": {
                    "id": 151,
                    "username": "sarah_portraits",
                    "subtext": "Preserving family memories",
                    "profile": "https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "following": 234,
                    "followers": 567,
                    "specialties": ["Family", "Children", "Portraits", "Lifestyle", "Outdoor"],
                    "galleryImages": [
                        {
                            "id": 5001,
                            "src": "https://images.pexels.com/photos/3867208/pexels-photo-3867208.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "location": "Sunset Beach",
                            "date": { "day": "10", "month": "Apr" },
                            "tag": "family",
                            "album": [
                                {
                                    "id": 50011,
                                    "name": "Johnson Family",
                                    "date": "sunday, april 10",
                                    "time": "4:00 PM - 7:00 PM",
                                    "location": "Crystal Beach Park",
                                    "images": [
                                        { "src": "https://images.pexels.com/photos/3867208/pexels-photo-3867208.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "row-span-2 col-span-1", "alt": "Family beach portrait" },
                                        { "src": "https://images.pexels.com/photos/3755501/pexels-photo-3755501.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Family candid moment" },
                                        { "src": "https://images.pexels.com/photos/3867212/pexels-photo-3867212.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Children playing" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": 5002,
                            "src": "https://images.pexels.com/photos/3875080/pexels-photo-3875080.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "location": "Wildflower Meadow",
                            "date": { "day": "15", "month": "Apr" },
                            "tag": "children",
                            "album": [
                                {
                                    "id": 50021,
                                    "name": "Spring Portraits",
                                    "date": "friday, april 15",
                                    "time": "3:00 PM - 6:00 PM",
                                    "location": "Botanical Gardens",
                                    "images": [
                                        { "src": "https://images.pexels.com/photos/3875080/pexels-photo-3875080.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "row-span-2 col-span-1", "alt": "Children in flowers" },
                                        { "src": "https://images.pexels.com/photos/3875088/pexels-photo-3875088.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Kids candid shots" },
                                        { "src": "https://images.pexels.com/photos/3875079/pexels-photo-3875079.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Playful moments" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": 5003,
                            "src": "https://images.pexels.com/photos/3768912/pexels-photo-3768912.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "location": "Urban Park",
                            "date": { "day": "20", "month": "Apr" },
                            "tag": "lifestyle",
                            "album": [
                                {
                                    "id": 50031,
                                    "name": "Family Lifestyle",
                                    "date": "wednesday, april 20",
                                    "time": "10:00 AM - 2:00 PM",
                                    "location": "Central Park",
                                    "images": [
                                        { "src": "https://images.pexels.com/photos/3768912/pexels-photo-3768912.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "row-span-2 col-span-1", "alt": "Family lifestyle" },
                                        { "src": "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Natural family moments" },
                                        { "src": "https://images.pexels.com/photos/3768910/pexels-photo-3768910.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Family interaction" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": 5004,
                            "src": "https://images.pexels.com/photos/3811082/pexels-photo-3811082.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "location": "Studio",
                            "date": { "day": "25", "month": "Apr" },
                            "tag": "portraits",
                            "album": [
                                {
                                    "id": 50041,
                                    "name": "Classic Portraits",
                                    "date": "monday, april 25",
                                    "time": "9:00 AM - 4:00 PM",
                                    "location": "Professional Studio",
                                    "images": [
                                        { "src": "https://images.pexels.com/photos/3811082/pexels-photo-3811082.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "row-span-2 col-span-1", "alt": "Studio family portrait" },
                                        { "src": "https://images.pexels.com/photos/3811089/pexels-photo-3811089.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Individual portraits" },
                                        { "src": "https://images.pexels.com/photos/3811081/pexels-photo-3811081.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Group portrait" }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": 16,
                "name": "David Kim",
                "rating": 4.6,
                "specialization": "Product Photography",
                "price": "$550/day",
                "profileData": {
                    "id": 161,
                    "username": "kim_products",
                    "subtext": "Making products pop",
                    "profile": "https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "following": 456,
                    "followers": 789,
                    "specialties": ["Product", "Still Life", "E-commerce", "Food", "Jewelry"],
                    "galleryImages": [
                        {
                            "id": 6001,
                            "src": "https://images.pexels.com/photos/3714237/pexels-photo-3714237.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "location": "Product Studio",
                            "date": { "day": "5", "month": "May" },
                            "tag": "jewelry",
                            "album": [
                                {
                                    "id": 60011,
                                    "name": "Luxury Jewelry Collection",
                                    "date": "friday, may 5",
                                    "time": "9:00 AM - 5:00 PM",
                                    "location": "Professional Studio",
                                    "images": [
                                        { "src": "https://images.pexels.com/photos/3714237/pexels-photo-3714237.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "row-span-2 col-span-1", "alt": "Jewelry collection" },
                                        { "src": "https://images.pexels.com/photos/3714238/pexels-photo-3714238.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Ring close-up" },
                                        { "src": "https://images.pexels.com/photos/3714236/pexels-photo-3714236.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Necklace detail" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": 6002,
                            "src": "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "location": "Food Studio",
                            "date": { "day": "10", "month": "May" },
                            "tag": "food",
                            "album": [
                                {
                                    "id": 60021,
                                    "name": "Gourmet Food",
                                    "date": "wednesday, may 10",
                                    "time": "10:00 AM - 6:00 PM",
                                    "location": "Culinary Studio",
                                    "images": [
                                        { "src": "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "row-span-2 col-span-1", "alt": "Gourmet dish" },
                                        { "src": "https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Food styling" },
                                        { "src": "https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Plating details" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": 6003,
                            "src": "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "location": "E-commerce Studio",
                            "date": { "day": "15", "month": "May" },
                            "tag": "e-commerce",
                            "album": [
                                {
                                    "id": 60031,
                                    "name": "Fashion E-commerce",
                                    "date": "monday, may 15",
                                    "time": "8:00 AM - 6:00 PM",
                                    "location": "Digital Studio",
                                    "images": [
                                        { "src": "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "row-span-2 col-span-1", "alt": "Product flatlay" },
                                        { "src": "https://images.pexels.com/photos/404281/pexels-photo-404281.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Product details" },
                                        { "src": "https://images.pexels.com/photos/404282/pexels-photo-404282.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Lifestyle product" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": 6004,
                            "src": "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "location": "Still Life Studio",
                            "date": { "day": "20", "month": "May" },
                            "tag": "still-life",
                            "album": [
                                {
                                    "id": 60041,
                                    "name": "Artistic Still Life",
                                    "date": "saturday, may 20",
                                    "time": "11:00 AM - 5:00 PM",
                                    "location": "Art Studio",
                                    "images": [
                                        { "src": "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "row-span-2 col-span-1", "alt": "Still life composition" },
                                        { "src": "https://images.pexels.com/photos/3780682/pexels-photo-3780682.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Artistic arrangement" },
                                        { "src": "https://images.pexels.com/photos/3780683/pexels-photo-3780683.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        "gridClass": "col-span-1", "alt": "Detail shot" }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            } 
        ]
    },
    {
        id: 3,
        title: "MCs & Hosts",
        description: "Experienced hosts to keep your event engaging",
        services: [
            {
                id: 31,
                name: "Kennedy Walsh",
                rating: 4.8,
                specialization: "Wedding MC",
                price: "$300/event",
                profileData: {
                    id: 311,
                    username: 'kennedy_events',
                    subtext: "Your event's perfect voice",
                    profile: 'https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&cs=tinysrgb&w=600',
                    following: 345,
                    followers: 678,
                    specialties: ['Weddings', 'Corporate Events', 'Award Ceremonies', 'Galas', 'Social Events'],
                    galleryImages: [
                        {
                            id: 3111,
                            src: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
                            location: 'Manchester',
                            date: { day: '12', month: 'Aug' },
                            price: 350,
                            tag: 'Corporate',
                            album: [
                                {
                                    id: 31111,
                                    name: "Tech Awards 2024",
                                    subheading: "Annual Awards Ceremony",
                                    date: "friday, august 12",
                                    time: "6:00 pm - 11:00pm",
                                    location: "grand hotel",
                                    images: [
                                        { src: "https://images.pexels.com/photos/2774557/pexels-photo-2774557.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        gridClass: "row-span-2 col-span-1", alt: "Awards ceremony" },
                                        // Additional album images...
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            { 
                id: 32,
                name: "James Carter",
                rating: 4.7,
                specialization: "Corporate Host",
                price: "$400/event",
                profileData: {
                    id: 312,
                    username: 'James_ke',
                    subtext: "Your event's perfect voice",
                    profile: 'https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&cs=tinysrgb&w=600',
                    following: 345,
                    followers: 678,
                    specialties: ['Weddings', 'Corporate Events', 'Award Ceremonies', 'Galas', 'Social Events'],
                    galleryImages: [
                        {
                            id: 3111,
                            src: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
                            location: 'Manchester',
                            date: { day: '12', month: 'Aug' },
                            price: 350,
                            tag: 'Corporate',
                            album: [
                                {
                                    id: 31111,
                                    name: "Tech Awards 2024",
                                    subheading: "Annual Awards Ceremony",
                                    date: "friday, august 12",
                                    time: "6:00 pm - 11:00pm",
                                    location: "grand hotel",
                                    images: [
                                        { src: "https://images.pexels.com/photos/2774557/pexels-photo-2774557.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        gridClass: "row-span-2 col-span-1", alt: "Awards ceremony" },

                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            { 
                id: 33,
                name: "Michelle Lee",
                rating: 4.9,
                specialization: "Bilingual MC",
                price: "$450/event",
                profileData: {
                    id: 311,
                    username: 'kennedy_events',
                    subtext: "Your event's perfect voice",
                    profile: 'https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&cs=tinysrgb&w=600',
                    following: 345,
                    followers: 678,
                    specialties: ['Weddings', 'Corporate Events', 'Award Ceremonies', 'Galas', 'Social Events'],
                    galleryImages: [
                        {
                            id: 3111,
                            src: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
                            location: 'Manchester',
                            date: { day: '12', month: 'Aug' },
                            price: 350,
                            tag: 'Corporate',
                            album: [
                                {
                                    id: 31111,
                                    name: "Tech Awards 2024",
                                    subheading: "Annual Awards Ceremony",
                                    date: "friday, august 12",
                                    time: "6:00 pm - 11:00pm",
                                    location: "grand hotel",
                                    images: [
                                        { src: "https://images.pexels.com/photos/2774557/pexels-photo-2774557.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        gridClass: "row-span-2 col-span-1", alt: "Awards ceremony" },
                                        // Additional album images...
                                    ]
                                }
                            ]
                        }
                    ]
                }

            },
            { 
                id: 34,
                name: "Robert King",
                rating: 4.6,
                specialization: "Entertainment Host",
                price: "$350/event",
                profileData: {
                    id: 311,
                    username: 'kennedy_events',
                    subtext: "Your event's perfect voice",
                    profile: 'https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&cs=tinysrgb&w=600',
                    following: 345,
                    followers: 678,
                    specialties: ['Weddings', 'Corporate Events', 'Award Ceremonies', 'Galas', 'Social Events'],
                    galleryImages: [
                        {
                            id: 3111,
                            src: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
                            location: 'Manchester',
                            date: { day: '12', month: 'Aug' },
                            price: 350,
                            tag: 'Corporate',
                            album: [
                                {
                                    id: 31111,
                                    name: "Tech Awards 2024",
                                    subheading: "Annual Awards Ceremony",
                                    date: "friday, august 12",
                                    time: "6:00 pm - 11:00pm",
                                    location: "grand hotel",
                                    images: [
                                        { src: "https://images.pexels.com/photos/2774557/pexels-photo-2774557.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        gridClass: "row-span-2 col-span-1", alt: "Awards ceremony" },
                                        // Additional album images...
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            { 
                id: 35,
                name: "Lisa Chen",
                rating: 4.8,
                specialization: "Ceremony Master",
                price: "$500/event",
                profileData: {
                    id: 311,
                    username: 'kennedy_events',
                    subtext: "Your event's perfect voice",
                    profile: 'https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&cs=tinysrgb&w=600',
                    following: 345,
                    followers: 678,
                    specialties: ['Weddings', 'Corporate Events', 'Award Ceremonies', 'Galas', 'Social Events'],
                    galleryImages: [
                        {
                            id: 3111,
                            src: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
                            location: 'Manchester',
                            date: { day: '12', month: 'Aug' },
                            price: 350,
                            tag: 'Corporate',
                            album: [
                                {
                                    id: 31111,
                                    name: "Tech Awards 2024",
                                    subheading: "Annual Awards Ceremony",
                                    date: "friday, august 12",
                                    time: "6:00 pm - 11:00pm",
                                    location: "grand hotel",
                                    images: [
                                        { src: "https://images.pexels.com/photos/2774557/pexels-photo-2774557.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        gridClass: "row-span-2 col-span-1", alt: "Awards ceremony" },
                                        // Additional album images...
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            { 
                id: 36,
                name: "Tom Harris",
                rating: 4.7,
                specialization: "Awards Night Host",
                price: "$600/event",
                profileData: {
                    id: 311,
                    username: 'kennedy_events',
                    subtext: "Your event's perfect voice",
                    profile: 'https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&cs=tinysrgb&w=600',
                    following: 345,
                    followers: 678,
                    specialties: ['Weddings', 'Corporate Events', 'Award Ceremonies', 'Galas', 'Social Events'],
                    galleryImages: [
                        {
                            id: 3111,
                            src: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
                            location: 'Manchester',
                            date: { day: '12', month: 'Aug' },
                            price: 350,
                            tag: 'Corporate',
                            album: [
                                {
                                    id: 31111,
                                    name: "Tech Awards 2024",
                                    subheading: "Annual Awards Ceremony",
                                    date: "friday, august 12",
                                    time: "6:00 pm - 11:00pm",
                                    location: "grand hotel",
                                    images: [
                                        { src: "https://images.pexels.com/photos/2774557/pexels-photo-2774557.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        gridClass: "row-span-2 col-span-1", alt: "Awards ceremony" },
                                        // Additional album images...
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        id: 4,
        title: "Catering Services",
        description: "Delicious food and professional service",
        services: [
            {
                id: 41,
                name: "Gourmet Delights",
                rating: 4.9,
                specialization: "Fine Dining",
                price: "$50/person",
                profileData: {
                    id: 411,
                    username: 'gourmet_delights',
                    subtext: "Exquisite culinary experiences",
                    profile: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600',
                    following: 789,
                    followers: 1567,
                    specialties: ['Fine Dining', 'Wine Pairing', 'Desserts', 'International Cuisine', 'Vegetarian'],
                    galleryImages: [
                        {
                            id: 4111,
                            src: 'https://images.pexels.com/photos/3184187/pexels-photo-3184187.jpeg?auto=compress&cs=tinysrgb&w=600',
                            location: 'Paris',
                            date: { day: '25', month: 'Jul' },
                            price: 75,
                            tag: 'Fine Dining',
                            album: [
                                {
                                    id: 41111,
                                    name: "Executive Gala Dinner",
                                    subheading: "5-Course Fine Dining Experience",
                                    date: "saturday, july 25",
                                    time: "7:00 pm - 11:00pm",
                                    location: "le grand palace",
                                    images: [
                                        { src: "https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        gridClass: "row-span-2 col-span-1", alt: "Gala dinner setup" },
                                        // Additional album images...
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            { 
                name: "Fresh Feast",
                rating: 4.7,
                specialization: "Buffet Service",
                price: "$35/person",
                profileData: {
                    id: 411,
                    username: 'gourmet_delights',
                    subtext: "Exquisite culinary experiences",
                    profile: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600',
                    following: 789,
                    followers: 1567,
                    specialties: ['Fine Dining', 'Wine Pairing', 'Desserts', 'International Cuisine', 'Vegetarian'],
                    galleryImages: [
                        {
                            id: 4111,
                            src: 'https://images.pexels.com/photos/3184187/pexels-photo-3184187.jpeg?auto=compress&cs=tinysrgb&w=600',
                            location: 'Paris',
                            date: { day: '25', month: 'Jul' },
                            price: 75,
                            tag: 'Fine Dining',
                            album: [
                                {
                                    id: 41111,
                                    name: "Executive Gala Dinner",
                                    subheading: "5-Course Fine Dining Experience",
                                    date: "saturday, july 25",
                                    time: "7:00 pm - 11:00pm",
                                    location: "le grand palace",
                                    images: [
                                        { src: "https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        gridClass: "row-span-2 col-span-1", alt: "Gala dinner setup" },
                                        // Additional album images...
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            { 
                name: "Sweet Sensations",
                rating: 4.8,
                specialization: "Dessert Bar",
                price: "$25/person",
                profileData: {
                    id: 411,
                    username: 'gourmet_delights',
                    subtext: "Exquisite culinary experiences",
                    profile: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600',
                    following: 789,
                    followers: 1567,
                    specialties: ['Fine Dining', 'Wine Pairing', 'Desserts', 'International Cuisine', 'Vegetarian'],
                    galleryImages: [
                        {
                            id: 4111,
                            src: 'https://images.pexels.com/photos/3184187/pexels-photo-3184187.jpeg?auto=compress&cs=tinysrgb&w=600',
                            location: 'Paris',
                            date: { day: '25', month: 'Jul' },
                            price: 75,
                            tag: 'Fine Dining',
                            album: [
                                {
                                    id: 41111,
                                    name: "Executive Gala Dinner",
                                    subheading: "5-Course Fine Dining Experience",
                                    date: "saturday, july 25",
                                    time: "7:00 pm - 11:00pm",
                                    location: "le grand palace",
                                    images: [
                                        { src: "https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        gridClass: "row-span-2 col-span-1", alt: "Gala dinner setup" },
                                        // Additional album images...
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            { 
                name: "World Cuisine",
                rating: 4.6,
                specialization: "International Food",
                price: "$45/person",
                profileData: {
                    id: 411,
                    username: 'gourmet_delights',
                    subtext: "Exquisite culinary experiences",
                    profile: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600',
                    following: 789,
                    followers: 1567,
                    specialties: ['Fine Dining', 'Wine Pairing', 'Desserts', 'International Cuisine', 'Vegetarian'],
                    galleryImages: [
                        {
                            id: 4111,
                            src: 'https://images.pexels.com/photos/3184187/pexels-photo-3184187.jpeg?auto=compress&cs=tinysrgb&w=600',
                            location: 'Paris',
                            date: { day: '25', month: 'Jul' },
                            price: 75,
                            tag: 'Fine Dining',
                            album: [
                                {
                                    id: 41111,
                                    name: "Executive Gala Dinner",
                                    subheading: "5-Course Fine Dining Experience",
                                    date: "saturday, july 25",
                                    time: "7:00 pm - 11:00pm",
                                    location: "le grand palace",
                                    images: [
                                        { src: "https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        gridClass: "row-span-2 col-span-1", alt: "Gala dinner setup" },
                                        // Additional album images...
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            { 
                name: "Green Table",
                rating: 4.8,
                specialization: "Vegan Options",
                price: "$40/person",
                profileData: {
                    id: 411,
                    username: 'gourmet_delights',
                    subtext: "Exquisite culinary experiences",
                    profile: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600',
                    following: 789,
                    followers: 1567,
                    specialties: ['Fine Dining', 'Wine Pairing', 'Desserts', 'International Cuisine', 'Vegetarian'],
                    galleryImages: [
                        {
                            id: 4111,
                            src: 'https://images.pexels.com/photos/3184187/pexels-photo-3184187.jpeg?auto=compress&cs=tinysrgb&w=600',
                            location: 'Paris',
                            date: { day: '25', month: 'Jul' },
                            price: 75,
                            tag: 'Fine Dining',
                            album: [
                                {
                                    id: 41111,
                                    name: "Executive Gala Dinner",
                                    subheading: "5-Course Fine Dining Experience",
                                    date: "saturday, july 25",
                                    time: "7:00 pm - 11:00pm",
                                    location: "le grand palace",
                                    images: [
                                        { src: "https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        gridClass: "row-span-2 col-span-1", alt: "Gala dinner setup" },
                                        // Additional album images...
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            { 
                name: "Party Bites",
                rating: 4.7,
                specialization: "Cocktail Service",
                price: "$30/person",
                profileData: {
                    id: 411,
                    username: 'gourmet_delights',
                    subtext: "Exquisite culinary experiences",
                    profile: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600',
                    following: 789,
                    followers: 1567,
                    specialties: ['Fine Dining', 'Wine Pairing', 'Desserts', 'International Cuisine', 'Vegetarian'],
                    galleryImages: [
                        {
                            id: 4111,
                            src: 'https://images.pexels.com/photos/3184187/pexels-photo-3184187.jpeg?auto=compress&cs=tinysrgb&w=600',
                            location: 'Paris',
                            date: { day: '25', month: 'Jul' },
                            price: 75,
                            tag: 'Fine Dining',
                            album: [
                                {
                                    id: 41111,
                                    name: "Executive Gala Dinner",
                                    subheading: "5-Course Fine Dining Experience",
                                    date: "saturday, july 25",
                                    time: "7:00 pm - 11:00pm",
                                    location: "le grand palace",
                                    images: [
                                        { src: "https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=600",
                                        gridClass: "row-span-2 col-span-1", alt: "Gala dinner setup" },
                                        // Additional album images...
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
        ]
    }
];

export default serviceData;