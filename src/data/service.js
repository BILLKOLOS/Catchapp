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
          username: "mk_photography",
          subtext: "Capturing your special moments with passion and precision",
          profile: "https://images.pexels.com/photos/1903308/pexels-photo-1903308.jpeg?auto=compress&cs=tinysrgb&w=600",
          following: 234,
          followers: 1245,
          specialties: ["Weddings", "Events", "Portrait", "Nature", "Documentary"],
          reviews: [
            {
              id: 1001,
              name: "Sarah Johnson",
              rating: 4.8,
              date: "2024-12-10",
              comment:
                "James captured our wedding beautifully! Every moment was documented with such care and professionalism. Highly recommend!",
              avatar:
                "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 1002,
              name: "Michael Brown",
              rating: 4.5,
              date: "2024-11-28",
              comment:
                "Great photographer with a keen eye for detail. Made everyone comfortable during our family photoshoot.",
              avatar:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 1003,
              name: "Emily Davis",
              rating: 5.0,
              date: "2024-11-15",
              comment:
                "Absolutely stunning photos from our corporate event! James has a gift for capturing the perfect moments.",
              avatar:
                "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 1004,
              name: "Daniel Wilson",
              rating: 4.7,
              date: "2024-10-25",
              comment:
                "I hired James for product photography and the results exceeded my expectations. Very responsive and professional.",
              avatar:
                "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
          ],
          galleryImages: [
            {
              id: 1001,
              src: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600",
              location: "Nairobi Concert Hall",
              date: { day: "12", month: "Nov" },
              tag: "music",
              album: [
                {
                  id: 10011,
                  name: "Sarah & David's Wedding",
                  subheading: "Elegant Garden Ceremony",
                  date: "saturday, june 15",
                  time: "9:00 am - 4:00pm",
                  location: "Egret Center, Nairobi",
                  images: [
                    {
                      src: "https://images.pexels.com/photos/1756609/pexels-photo-1756609.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-2 col-span-1",
                      alt: "Bride and groom exchanging vows",
                    },
                    {
                      src: "https://images.pexels.com/photos/1784280/pexels-photo-1784280.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Wedding reception setup",
                    },
                    {
                      src: "https://images.pexels.com/photos/106011/pexels-photo-106011.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Wedding venue exterior",
                    },
                    {
                      src: "https://images.pexels.com/photos/30567465/pexels-photo-30567465/free-photo-of-stylish-model-in-sunglasses-and-leather-jacket.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Bride portrait",
                    },
                    {
                      src: "https://images.pexels.com/photos/53265/pexels-photo-53265.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Wedding ceremony setup",
                    },
                    {
                      src: "https://images.pexels.com/photos/30624212/pexels-photo-30624212/free-photo-of-side-profile-portrait-of-stylish-young-man.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Groom portrait",
                    },
                    {
                      src: "https://images.pexels.com/photos/30507957/pexels-photo-30507957/free-photo-of-close-up-of-wedding-rings-with-bouquet.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Wedding rings close-up",
                    },
                    {
                      src: "https://images.pexels.com/photos/3394225/pexels-photo-3394225.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Wedding party group photo",
                    },
                  ],
                },
              ],
            },
	     {
              id: 1002,
              src: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600",
              location: "Central Plaza",
              date: { day: "3", month: "Mar" },
              tag: "performance",
              album: [
                {
                  id: 10021,
                  name: "John's 30th Birthday",
                  subheading: "Milestone Celebration",
                  date: "saturday, march 3",
                  time: "2:00 PM - 8:00 PM",
                  location: "Downtown Arena, Nairobi",
                  images: [
                    {
                      src: "https://images.pexels.com/photos/7942526/pexels-photo-7942526.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-2 col-span-1",
                      alt: "Birthday cake with candles",
                    },
                    {
                      src: "https://images.pexels.com/photos/11625530/pexels-photo-11625530.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-1 col-span-1",
                      alt: "Friends celebrating at party",
                    },
                    {
                      src: "https://images.pexels.com/photos/12845899/pexels-photo-12845899.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-1 col-span-1",
                      alt: "Opening gifts moment",
                    },
                    {
                      src: "https://images.pexels.com/photos/30636213/pexels-photo-30636213/free-photo-of-cosplay-group-in-san-jose-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-1 col-span-1",
                      alt: "Dance floor action",
                    },
                    {
                      src: "https://images.pexels.com/photos/30586672/pexels-photo-30586672/free-photo-of-energetic-youth-party-with-bright-lights.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-1 col-span-1",
                      alt: "Group selfie moment",
                    },
                    {
                      src: "https://images.pexels.com/photos/30609629/pexels-photo-30609629/free-photo-of-joyful-african-wedding-celebration-ceremony.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-1 col-span-1",
                      alt: "Surprise moment reaction",
                    },
                  ],
                },
              ],
            },
            {
              id: 1003,
              src: "https://images.pexels.com/photos/144428/pexels-photo-144428.jpeg?auto=compress&cs=tinysrgb&w=600",
              location: "Riverside Amphitheater",
              date: { day: "7", month: "Apr" },
              tag: "concert",
              album: [
                {
                  id: 10031,
                  name: "Summer Music Festival",
                  subheading: "Annual Concert Series",
                  date: "sunday, july 20",
                  time: "4:00 PM - 11:00 PM",
                  location: "Riverside Park, Nairobi",
                  images: [
                    {
                      src: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-2 col-span-1",
                      alt: "Festival main stage with lights",
                    },
                    {
                      src: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-1 col-span-1",
                      alt: "Concert crowd enjoying music",
                    },
                    {
                      src: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-1 col-span-1",
                      alt: "Band performing live on stage",
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        id: 12,
        name: "Sunny Lee",
        rating: 4.8,
        specialization: "Portrait & Events",
        price: "$400/day",
        profileData: {
          id: 121,
          username: "sunny_captures",
          subtext: "Capturing life's beautiful moments with artistic vision",
          profile: "https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=600",
          following: 456,
          followers: 789,
          specialties: ["Portrait", "Events", "Street", "Corporate", "Family"],
          reviews: [
            {
              id: 1201,
              name: "Jennifer Adams",
              rating: 5.0,
              date: "2024-12-05",
              comment:
                "Sunny has an incredible eye for composition. Our family portraits came out better than we could have imagined!",
              avatar:
                "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 1202,
              name: "Robert Chen",
              rating: 4.7,
              date: "2024-11-20",
              comment:
                "Hired Sunny for our corporate event and the photos were perfect for our annual report. Very professional service.",
              avatar:
                "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 1203,
              name: "Priya Sharma",
              rating: 4.9,
              date: "2024-11-02",
              comment:
                "Amazing street photography session! Sunny captured the essence of our neighborhood beautifully.",
              avatar:
                "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 1204,
              name: "Thomas Wright",
              rating: 4.6,
              date: "2024-10-15",
              comment:
                "The portraits Sunny took for my professional headshots were exceptional. Quick turnaround time too!",
              avatar:
                "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
          ],
          galleryImages: [
            {
              id: 2001,
              src: "https://images.pexels.com/photos/3916850/pexels-photo-3916850.jpeg?auto=compress&cs=tinysrgb&w=600",
              location: "Kilimani Sports Complex",
              date: { day: "5", month: "Jan" },
              tag: "soccer",
              album: [
                {
                  id: 20011,
                  name: "Regional Soccer Tournament",
                  subheading: "Championship Finals",
                  date: "saturday, january 5",
                  time: "9:00 AM - 6:00 PM",
                  location: "Kilimani Sports Complex",
                  images: [
                    {
                      src: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-2 col-span-1",
                      alt: "Soccer match action shot",
                    },
                    {
                      src: "https://images.pexels.com/photos/3076516/pexels-photo-3076516.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Team huddle before match",
                    },
                    {
                      src: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Soccer field panoramic view",
                    },
                  ],
                },
              ],
            },
            {
              id: 2002,
              src: "https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?auto=compress&cs=tinysrgb&w=600",
              location: "National Stadium",
              date: { day: "20", month: "Dec" },
              tag: "athletics",
              album: [
                {
                  id: 20021,
                  name: "National Track & Field Championships",
                  subheading: "Annual Athletics Event",
                  date: "sunday, december 20",
                  time: "8:00 AM - 5:00 PM",
                  location: "National Stadium",
                  images: [
                    {
                      src: "https://images.pexels.com/photos/3621538/pexels-photo-3621538.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-2 col-span-1",
                      alt: "100m sprint race finish",
                    },
                    {
                      src: "https://images.pexels.com/photos/3764014/pexels-photo-3764014.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Long jump competition",
                    },
                    {
                      src: "https://images.pexels.com/photos/3657156/pexels-photo-3657156.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "4x100m relay handoff",
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        id: 13,
        name: "Maria Garcia",
        rating: 5.0,
        specialization: "Fashion Photography",
        price: "$600/day",
        profileData: {
          id: 131,
          username: "maria_fashion",
          subtext: "Elevating fashion through the art of photography",
          profile: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=600",
          following: 567,
          followers: 892,
          specialties: ["Fashion", "Editorial", "Runway", "Portraits", "Studio"],
          reviews: [
            {
              id: 1301,
              name: "Victoria Chen",
              rating: 5.0,
              date: "2024-12-15",
              comment:
                "Maria's fashion photography is unmatched! She captured our new collection perfectly for our catalog.",
              avatar:
                "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 1302,
              name: "Alexander Kim",
              rating: 4.9,
              date: "2024-11-30",
              comment:
                "Working with Maria for our magazine editorial was a dream. She brings creative vision to every shot.",
              avatar:
                "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 1303,
              name: "Sophia Martinez",
              rating: 5.0,
              date: "2024-11-10",
              comment:
                "As a model, I've worked with many photographers, but Maria truly knows how to make you look your best.",
              avatar:
                "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 1304,
              name: "James Wilson",
              rating: 4.8,
              date: "2024-10-22",
              comment: "Our runway show photography was exceptional. Maria captured every look perfectly.",
              avatar:
                "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
          ],
          galleryImages: [
            {
              id: 3001,
              src: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600",
              location: "Milan Fashion Studio",
              date: { day: "12", month: "Jan" },
              tag: "fashion",
              album: [
                {
                  id: 30011,
                  name: "Spring Collection Photoshoot",
                  subheading: "Editorial Fashion Series",
                  date: "wednesday, january 12",
                  time: "10:00 AM - 6:00 PM",
                  location: "Milan Fashion Studio",
                  images: [
                    {
                      src: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-2 col-span-1",
                      alt: "Fashion model in studio lighting",
                    },
                    {
                      src: "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Editorial fashion portrait",
                    },
                    {
                      src: "https://images.pexels.com/photos/1926768/pexels-photo-1926768.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Fashion accessory detail shot",
                    },
                  ],
                },
              ],
            },
            {
              id: 3002,
              src: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600",
              location: "Paris Runway",
              date: { day: "15", month: "Feb" },
              tag: "runway",
              album: [
                {
                  id: 30021,
                  name: "Paris Fashion Week",
                  subheading: "Runway Collection Coverage",
                  date: "thursday, february 15",
                  time: "2:00 PM - 9:00 PM",
                  location: "Paris Fashion Week Venue",
                  images: [
                    {
                      src: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-2 col-span-1",
                      alt: "Model walking runway",
                    },
                    {
                      src: "https://images.pexels.com/photos/1926768/pexels-photo-1926768.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Backstage preparation",
                    },
                    {
                      src: "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Models lineup before show",
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
       {
        id: 14,
        name: "Alex Chen",
        rating: 4.7,
        specialization: "Commercial Photography",
        price: "$450/day",
        profileData: {
          id: 141,
          username: "chen_commercial",
          subtext: "Making brands shine through powerful visual storytelling",
          profile: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600",
          following: 345,
          followers: 678,
          specialties: ["Commercial", "Product", "Corporate", "Architecture", "Industrial"],
          reviews: [
            {
              id: 1401,
              name: "Marcus Johnson",
              rating: 4.8,
              date: "2024-12-08",
              comment:
                "Alex's product photography for our e-commerce site increased our conversion rate by 25%. Exceptional work!",
              avatar:
                "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 1402,
              name: "Olivia Thompson",
              rating: 4.6,
              date: "2024-11-22",
              comment:
                "Our architectural firm has used Alex for multiple projects. The attention to detail in capturing our buildings is outstanding.",
              avatar:
                "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 1403,
              name: "David Park",
              rating: 4.9,
              date: "2024-11-05",
              comment:
                "The corporate headshots and office environment photos Alex took for our company website are perfect. Very professional service.",
              avatar:
                "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 1404,
              name: "Rebecca Liu",
              rating: 4.7,
              date: "2024-10-18",
              comment:
                "Alex photographed our industrial facility for our annual report. The images tell our company's story beautifully.",
              avatar:
                "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
          ],
          galleryImages: [
            {
              id: 4001,
              src: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=600",
              location: "Tech Product Studio",
              date: { day: "5", month: "Mar" },
              tag: "product",
              album: [
                {
                  id: 40011,
                  name: "Tech Product Launch",
                  subheading: "E-commerce Photography",
                  date: "monday, march 5",
                  time: "9:00 AM - 5:00 PM",
                  location: "Professional Studio",
                  images: [
                    {
                      src: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-2 col-span-1",
                      alt: "Product on white background",
                    },
                    {
                      src: "https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Product detail close-up",
                    },
                    {
                      src: "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Product lifestyle usage",
                    },
                  ],
                },
              ],
            },
            {
              id: 4002,
              src: "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=600",
              location: "Corporate Office",
              date: { day: "20", month: "Mar" },
              tag: "corporate",
              album: [
                {
                  id: 40021,
                  name: "Corporate Branding Photoshoot",
                  subheading: "Office Environment Series",
                  date: "tuesday, march 20",
                  time: "8:00 AM - 4:00 PM",
                  location: "Downtown Office Building",
                  images: [
                    {
                      src: "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-2 col-span-1",
                      alt: "Modern office environment",
                    },
                    {
                      src: "https://images.pexels.com/photos/3182826/pexels-photo-3182826.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Business team meeting",
                    },
                    {
                      src: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Office culture candid",
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: 2,
    title: "Videography",
    description: "Professional videographers to document your events",
    services: [
      {
        id: 21,
        name: "Michael Rodriguez",
        rating: 4.9,
        specialization: "Wedding Videography",
        price: "$800/day",
        profileData: {
          id: 211,
          username: "rodriguez_films",
          subtext: "Cinematic storytelling for your most precious moments",
          profile: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
          following: 342,
          followers: 1250,
          specialties: ["Weddings", "Events", "Documentaries", "Music Videos", "Aerial"],
          reviews: [
            {
              id: 2101,
              name: "Jessica Williams",
              rating: 5.0,
              date: "2024-12-12",
              comment:
                "Michael created the most beautiful wedding film for us! He captured all the special moments and emotions perfectly.",
              avatar:
                "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 2102,
              name: "Andrew Thompson",
              rating: 4.8,
              date: "2024-11-25",
              comment:
                "Michael's documentary-style approach to our corporate event video was exactly what we wanted. Professional and creative!",
              avatar:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 2103,
              name: "Sophia Garcia",
              rating: 5.0,
              date: "2024-11-08",
              comment:
                "The aerial footage Michael captured for our venue promotional video was breathtaking. Worth every penny!",
              avatar:
                "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 2104,
              name: "Kevin Park",
              rating: 4.7,
              date: "2024-10-20",
              comment:
                "Our music video turned out amazing! Michael has a great eye for creative shots and storytelling.",
              avatar:
                "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
          ],
          galleryImages: [
            {
              id: 2101,
              src: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600",
              location: "Beachfront Resort",
              date: { day: "18", month: "Jun" },
              tag: "wedding",
              album: [
                {
                  id: 21011,
                  name: "Emma & James Wedding",
                  subheading: "Beachfront Ceremony",
                  date: "saturday, june 18",
                  time: "10:00 AM - 8:00 PM",
                  location: "Coastal Paradise Resort",
                  images: [
                    {
                      src: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-2 col-span-1",
                      alt: "Beach wedding ceremony",
                    },
                    {
                      src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Couple first dance",
                    },
                    {
                      src: "https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Wedding reception setup",
                    },
                  ],
                },
              ],
            },
            {
              id: 2102,
              src: "https://images.pexels.com/photos/3379937/pexels-photo-3379937.jpeg?auto=compress&cs=tinysrgb&w=600",
              location: "Downtown Music Venue",
              date: { day: "5", month: "Apr" },
              tag: "music",
              album: [
                {
                  id: 21021,
                  name: "Local Band Music Video",
                  subheading: "Urban Performance Series",
                  date: "friday, april 5",
                  time: "6:00 PM - 2:00 AM",
                  location: "The Underground Club",
                  images: [
                    {
                      src: "https://images.pexels.com/photos/3379937/pexels-photo-3379937.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-2 col-span-1",
                      alt: "Band performing on stage",
                    },
                    {
                      src: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Crowd at concert",
                    },
                    {
                      src: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Close-up of musician",
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        id: 22,
        name: "Olivia Chen",
        rating: 4.8,
        specialization: "Corporate Videos",
        price: "$650/day",
        profileData: {
          id: 221,
          username: "olivia_films",
          subtext: "Professional corporate storytelling through video",
          profile: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
          following: 278,
          followers: 890,
          specialties: ["Corporate", "Promotional", "Training", "Interviews", "Product Launches"],
          reviews: [
            {
              id: 2201,
              name: "Thomas Wilson",
              rating: 4.9,
              date: "2024-12-05",
              comment:
                "Olivia produced an excellent corporate video for our annual report. Clear communication and professional results.",
              avatar:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 2202,
              name: "Sarah Johnson",
              rating: 4.7,
              date: "2024-11-18",
              comment:
                "Our training videos came out perfect. Olivia has a talent for making complex information engaging and clear.",
              avatar:
                "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 2203,
              name: "Mark Davis",
              rating: 5.0,
              date: "2024-10-30",
              comment:
                "The product launch video Olivia created generated tremendous interest. Her work directly contributed to our successful launch.",
              avatar:
                "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 2204,
              name: "Jennifer Lee",
              rating: 4.8,
              date: "2024-10-12",
              comment:
                "Olivia's interview series for our company profiles was exceptional. She made everyone feel comfortable on camera.",
              avatar:
                "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
          ],
          galleryImages: [
            {
              id: 2201,
              src: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600",
              location: "Corporate Headquarters",
              date: { day: "15", month: "Mar" },
              tag: "corporate",
              album: [
                {
                  id: 22011,
                  name: "Annual Company Overview",
                  subheading: "Corporate Video Series",
                  date: "thursday, march 15",
                  time: "9:00 AM - 5:00 PM",
                  location: "TechCorp Headquarters",
                  images: [
                    {
                      src: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-2 col-span-1",
                      alt: "Executive interview setup",
                    },
                    {
                      src: "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Team collaboration footage",
                    },
                    {
                      src: "https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Office environment b-roll",
                    },
                  ],
                },
              ],
            },
            {
              id: 2202,
              src: "https://images.pexels.com/photos/2277784/pexels-photo-2277784.jpeg?auto=compress&cs=tinysrgb&w=600",
              location: "Product Studio",
              date: { day: "22", month: "Apr" },
              tag: "product",
              album: [
                {
                  id: 22021,
                  name: "New Product Launch Video",
                  subheading: "Marketing Campaign",
                  date: "monday, april 22",
                  time: "10:00 AM - 6:00 PM",
                  location: "Creative Studio",
                  images: [
                    {
                      src: "https://images.pexels.com/photos/2277784/pexels-photo-2277784.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-2 col-span-1",
                      alt: "Product showcase setup",
                    },
                    {
                      src: "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Product demonstration",
                    },
                    {
                      src: "https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Product feature close-up",
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    ],
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
          username: "kennedy_events",
          subtext: "Your event's perfect voice and guide",
          profile: "https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&cs=tinysrgb&w=600",
          following: 345,
          followers: 678,
          specialties: ["Weddings", "Corporate Events", "Award Ceremonies", "Galas", "Social Events"],
          reviews: [
            {
              id: 3101,
              name: "Rachel Johnson",
              rating: 5.0,
              date: "2024-12-08",
              comment:
                "Kennedy was the perfect MC for our wedding! Kept everything flowing smoothly and added just the right amount of humor.",
              avatar:
                "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 3102,
              name: "Michael Chen",
              rating: 4.7,
              date: "2024-11-20",
              comment:
                "Very professional and well-prepared. Kennedy took the time to learn about our families and personalized the introductions.",
              avatar:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 3103,
              name: "Sophia Williams",
              rating: 4.9,
              date: "2024-11-05",
              comment:
                "Kennedy has a natural talent for engaging the audience and making everyone feel included in the celebration.",
              avatar:
                "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 3104,
              name: "David Thompson",
              rating: 4.8,
              date: "2024-10-15",
              comment:
                "Excellent voice, perfect timing, and great coordination with our DJ and photographer. Highly recommend!",
              avatar:
                "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
          ],
          galleryImages: [
            {
              id: 3111,
              src: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600",
              location: "Grand Hotel Ballroom",
              date: { day: "12", month: "Aug" },
              tag: "Wedding",
              album: [
                {
                  id: 31111,
                  name: "Smith-Johnson Wedding",
                  subheading: "Elegant Evening Ceremony",
                  date: "saturday, august 12",
                  time: "4:00 pm - 11:00pm",
                  location: "Grand Hotel Ballroom",
                  images: [
                    {
                      src: "https://images.pexels.com/photos/2774557/pexels-photo-2774557.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-2 col-span-1",
                      alt: "MC introducing wedding party",
                    },
                    {
                      src: "https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Reception setup",
                    },
                    {
                      src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Couple's first dance",
                    },
                  ],
                },
              ],
            },
            {
              id: 3112,
              src: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600",
              location: "Beachfront Resort",
              date: { day: "24", month: "Jun" },
              tag: "Wedding",
              album: [
                {
                  id: 31121,
                  name: "Beach Wedding Ceremony",
                  subheading: "Sunset Celebration",
                  date: "saturday, june 24",
                  time: "5:00 pm - 10:00pm",
                  location: "Coastal Paradise Resort",
                  images: [
                    {
                      src: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-2 col-span-1",
                      alt: "Beach ceremony setup",
                    },
                    {
                      src: "https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "MC at outdoor reception",
                    },
                    {
                      src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Evening celebration",
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        id: 32,
        name: "James Carter",
        rating: 4.7,
        specialization: "Corporate Host",
        price: "$400/event",
        profileData: {
          id: 321,
          username: "james_carter",
          subtext: "Elevating corporate events with professional hosting",
          profile: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
          following: 289,
          followers: 542,
          specialties: ["Corporate Events", "Product Launches", "Award Ceremonies", "Conferences", "Seminars"],
          reviews: [
            {
              id: 3201,
              name: "Victoria Chen",
              rating: 4.8,
              date: "2024-12-10",
              comment:
                "James was the perfect host for our annual corporate gala. Professional, well-prepared, and kept the event on schedule.",
              avatar:
                "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 3202,
              name: "Robert Johnson",
              rating: 4.6,
              date: "2024-11-25",
              comment:
                "Our product launch event was a success thanks to James's engaging presentation style and ability to highlight key features.",
              avatar:
                "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 3203,
              name: "Emily Thompson",
              rating: 4.9,
              date: "2024-11-08",
              comment:
                "James handled our tech conference with professionalism and kept the audience engaged throughout the day.",
              avatar:
                "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 3204,
              name: "Daniel Park",
              rating: 4.7,
              date: "2024-10-20",
              comment:
                "Excellent MC for our awards night. James researched our industry thoroughly and made appropriate remarks throughout.",
              avatar:
                "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
          ],
          galleryImages: [
            {
              id: 3211,
              src: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
              location: "Convention Center",
              date: { day: "15", month: "Sep" },
              tag: "Corporate",
              album: [
                {
                  id: 32111,
                  name: "Annual Tech Conference",
                  subheading: "Industry Innovation Summit",
                  date: "friday, september 15",
                  time: "8:00 am - 6:00 pm",
                  location: "Metropolitan Convention Center",
                  images: [
                    {
                      src: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-2 col-span-1",
                      alt: "Host introducing keynote speaker",
                    },
                    {
                      src: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Panel discussion",
                    },
                    {
                      src: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Audience engagement",
                    },
                  ],
                },
              ],
            },
            {
              id: 3212,
              src: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600",
              location: "Grand Hotel",
              date: { day: "10", month: "Nov" },
              tag: "Awards",
              album: [
                {
                  id: 32121,
                  name: "Industry Excellence Awards",
                  subheading: "Annual Recognition Ceremony",
                  date: "friday, november 10",
                  time: "7:00 pm - 11:00 pm",
                  location: "Grand Hotel Ballroom",
                  images: [
                    {
                      src: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-2 col-span-1",
                      alt: "Awards ceremony host",
                    },
                    {
                      src: "https://images.pexels.com/photos/2774557/pexels-photo-2774557.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Award presentation",
                    },
                    {
                      src: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Recipient speech",
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
       {
        id: 33,
        name: "Michelle Lee",
        rating: 4.9,
        specialization: "Bilingual MC",
        price: "$450/event",
        profileData: {
          id: 331,
          username: "michelle_lee",
          subtext: "Bridging cultures through bilingual event hosting",
          profile: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
          following: 412,
          followers: 876,
          specialties: [
            "Bilingual Events",
            "International Conferences",
            "Cultural Celebrations",
            "Weddings",
            "Corporate Functions",
          ],
          reviews: [
            {
              id: 3301,
              name: "Wei Zhang",
              rating: 5.0,
              date: "2024-12-15",
              comment:
                "Michelle's bilingual hosting made our international conference seamless. Her transitions between languages were flawless.",
              avatar:
                "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 3302,
              name: "John Kim",
              rating: 4.8,
              date: "2024-11-28",
              comment:
                "We hired Michelle for our multicultural wedding. She made all our guests feel welcome regardless of language barriers.",
              avatar:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 3303,
              name: "Maria Rodriguez",
              rating: 5.0,
              date: "2024-11-10",
              comment:
                "Michelle's ability to host in multiple languages was perfect for our international business summit.",
              avatar:
                "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 3304,
              name: "Hiroshi Tanaka",
              rating: 4.9,
              date: "2024-10-22",
              comment:
                "Our cultural festival benefited greatly from Michelle's linguistic talents and cultural sensitivity.",
              avatar:
                "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
          ],
          galleryImages: [
            {
              id: 3311,
              src: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
              location: "International Convention Center",
              date: { day: "20", month: "Oct" },
              tag: "Conference",
              album: [
                {
                  id: 33111,
                  name: "Global Business Summit",
                  subheading: "International Trade Conference",
                  date: "friday, october 20",
                  time: "9:00 am - 5:00 pm",
                  location: "International Convention Center",
                  images: [
                    {
                      src: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-2 col-span-1",
                      alt: "Bilingual MC at podium",
                    },
                    {
                      src: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "International panel discussion",
                    },
                    {
                      src: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Audience with translation headsets",
                    },
                  ],
                },
              ],
            },
            {
              id: 3312,
              src: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600",
              location: "Cultural Center",
              date: { day: "15", month: "May" },
              tag: "Cultural",
              album: [
                {
                  id: 33121,
                  name: "International Cultural Festival",
                  subheading: "Celebrating Global Diversity",
                  date: "saturday, may 15",
                  time: "11:00 am - 8:00 pm",
                  location: "Metropolitan Cultural Center",
                  images: [
                    {
                      src: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-2 col-span-1",
                      alt: "MC introducing cultural performances",
                    },
                    {
                      src: "https://images.pexels.com/photos/5604787/pexels-photo-5604787.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Traditional dance performance",
                    },
                    {
                      src: "https://images.pexels.com/photos/5604941/pexels-photo-5604941.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "International food showcase",
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    ],
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
          username: "gourmet_delights",
          subtext: "Exquisite culinary experiences for discerning palates",
          profile: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600",
          following: 789,
          followers: 1567,
          specialties: ["Fine Dining", "Wine Pairing", "Desserts", "International Cuisine", "Vegetarian"],
          reviews: [
            {
              id: 4101,
              name: "Elizabeth Parker",
              rating: 5.0,
              date: "2024-12-18",
              comment:
                "Gourmet Delights catered our wedding and the food was absolutely spectacular. Our guests are still talking about it!",
              avatar:
                "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 4102,
              name: "Jonathan Miller",
              rating: 4.8,
              date: "2024-11-30",
              comment:
                "The wine pairing suggestions were perfect for our corporate dinner. Truly elevated the entire experience.",
              avatar:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 4103,
              name: "Sophia Chen",
              rating: 5.0,
              date: "2024-11-15",
              comment:
                "Their attention to detail with dietary restrictions was impressive. Everyone at our event was accommodated beautifully.",
              avatar:
                "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 4104,
              name: "Marcus Thompson",
              rating: 4.7,
              date: "2024-10-28",
              comment:
                "The presentation of each dish was like a work of art. Gourmet Delights truly lives up to their name.",
              avatar:
                "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
          ],
          galleryImages: [
            {
              id: 4111,
              src: "https://images.pexels.com/photos/3184187/pexels-photo-3184187.jpeg?auto=compress&cs=tinysrgb&w=600",
              location: "Grand Hotel Ballroom",
              date: { day: "25", month: "Jul" },
              tag: "Fine Dining",
              album: [
                {
                  id: 41111,
                  name: "Executive Gala Dinner",
                  subheading: "5-Course Fine Dining Experience",
                  date: "saturday, july 25",
                  time: "7:00 pm - 11:00pm",
                  location: "Le Grand Palace",
                  images: [
                    {
                      src: "https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-2 col-span-1",
                      alt: "Elegant table setting",
                    },
                    {
                      src: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Gourmet appetizer",
                    },
                    {
                      src: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Fine dining main course",
                    },
                  ],
                },
              ],
            },
            {
              id: 4112,
              src: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600",
              location: "Vineyard Estate",
              date: { day: "18", month: "Aug" },
              tag: "Wine Pairing",
              album: [
                {
                  id: 41121,
                  name: "Wine Pairing Dinner",
                  subheading: "Seasonal Tasting Menu",
                  date: "friday, august 18",
                  time: "6:30 pm - 10:30 pm",
                  location: "Hillside Vineyard Estate",
                  images: [
                    {
                      src: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-2 col-span-1",
                      alt: "Wine pairing presentation",
                    },
                    {
                      src: "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Wine glasses and food",
                    },
                    {
                      src: "https://images.pexels.com/photos/1579625/pexels-photo-1579625.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Sommelier presentation",
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        id: 42,
        name: "Fresh Feast",
        rating: 4.7,
        specialization: "Buffet Service",
        price: "$35/person",
        profileData: {
          id: 421,
          username: "fresh_feast",
          subtext: "Abundant variety with fresh, locally-sourced ingredients",
          profile: "https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=600",
          following: 456,
          followers: 890,
          specialties: ["Buffet", "Corporate Events", "Weddings", "Family Gatherings", "International Cuisine"],
          reviews: [
            {
              id: 4201,
              name: "Jennifer Adams",
              rating: 4.8,
              date: "2024-12-12",
              comment:
                "Fresh Feast provided an amazing buffet for our company holiday party. Great variety and everything was delicious!",
              avatar:
                "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 4202,
              name: "Thomas Wilson",
              rating: 4.6,
              date: "2024-11-25",
              comment:
                "The international cuisine options were perfect for our diverse group. Everyone found something they loved.",
              avatar:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 4203,
              name: "Sarah Johnson",
              rating: 4.9,
              date: "2024-11-08",
              comment: "We appreciated their commitment to using local ingredients. The food was fresh and flavorful.",
              avatar:
                "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 4204,
              name: "Michael Chen",
              rating: 4.7,
              date: "2024-10-20",
              comment:
                "The staff was professional and kept the buffet well-stocked throughout our event. Great service!",
              avatar:
                "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
          ],
          galleryImages: [
            {
              id: 4211,
              src: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600",
              location: "Corporate Event Center",
              date: { day: "15", month: "Sep" },
              tag: "Buffet",
              album: [
                {
                  id: 42111,
                  name: "Corporate Luncheon",
                  subheading: "Executive Buffet Service",
                  date: "thursday, september 15",
                  time: "11:30 am - 2:30 pm",
                  location: "Downtown Business Center",
                  images: [
                    {
                      src: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-2 col-span-1",
                      alt: "Corporate buffet setup",
                    },
                    {
                      src: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Fresh salad station",
                    },
                    {
                      src: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Hot entrée selection",
                    },
                  ],
                },
              ],
            },
            {
              id: 4212,
              src: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600",
              location: "Garden Wedding Venue",
              date: { day: "22", month: "Jun" },
              tag: "Wedding",
              album: [
                {
                  id: 42121,
                  name: "Garden Wedding Reception",
                  subheading: "Seasonal Buffet Service",
                  date: "saturday, june 22",
                  time: "4:00 pm - 9:00 pm",
                  location: "Botanical Garden Pavilion",
                  images: [
                    {
                      src: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-2 col-span-1",
                      alt: "Wedding buffet display",
                    },
                    {
                      src: "https://images.pexels.com/photos/1579625/pexels-photo-1579625.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Appetizer station",
                    },
                    {
                      src: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Carving station",
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        id: 43,
        name: "Sweet Sensations",
        rating: 4.8,
        specialization: "Dessert Bar",
        price: "$25/person",
        profileData: {
          id: 431,
          username: "sweet_sensations",
          subtext: "Creating unforgettable dessert experiences",
          profile: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600",
          following: 567,
          followers: 1245,
          specialties: ["Desserts", "Cakes", "Pastries", "Chocolate", "Custom Creations"],
          reviews: [
            {
              id: 4301,
              name: "Amanda Wilson",
              rating: 5.0,
              date: "2024-12-15",
              comment:
                "The dessert bar at our wedding was a showstopper! Guests couldn't stop raving about the variety and quality.",
              avatar:
                "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 4302,
              name: "David Chen",
              rating: 4.7,
              date: "2024-11-28",
              comment:
                "Sweet Sensations created a custom corporate-themed dessert display that impressed all our clients.",
              avatar:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 4303,
              name: "Rachel Johnson",
              rating: 4.9,
              date: "2024-11-10",
              comment:
                "Their chocolate fountain was the highlight of our event. The staff was professional and kept everything perfect.",
              avatar:
                "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 4304,
              name: "Michael Thompson",
              rating: 4.8,
              date: "2024-10-22",
              comment:
                "The custom birthday cake they created exceeded our expectations. Not only beautiful but delicious!",
              avatar:
                "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
          ],
          galleryImages: [
            {
              id: 4311,
              src: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600",
              location: "Wedding Venue",
              date: { day: "18", month: "Jul" },
              tag: "Dessert Bar",
              album: [
                {
                  id: 43111,
                  name: "Elegant Wedding Dessert Bar",
                  subheading: "Custom Sweet Table",
                  date: "saturday, july 18",
                  time: "6:00 pm - 11:00 pm",
                  location: "Grand Ballroom",
                  images: [
                    {
                      src: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-2 col-span-1",
                      alt: "Wedding dessert display",
                    },
                    {
                      src: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Wedding cake",
                    },
                    {
                      src: "https://images.pexels.com/photos/3992131/pexels-photo-3992131.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Assorted pastries",
                    },
                  ],
                },
              ],
            },
            {
              id: 4312,
              src: "https://images.pexels.com/photos/3992131/pexels-photo-3992131.jpeg?auto=compress&cs=tinysrgb&w=600",
              location: "Corporate Event",
              date: { day: "25", month: "Oct" },
              tag: "Corporate",
              album: [
                {
                  id: 43121,
                  name: "Corporate Holiday Party",
                  subheading: "Festive Dessert Station",
                  date: "friday, october 25",
                  time: "7:00 pm - 10:00 pm",
                  location: "Executive Conference Center",
                  images: [
                    {
                      src: "https://images.pexels.com/photos/3992131/pexels-photo-3992131.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-2 col-span-1",
                      alt: "Corporate dessert display",
                    },
                    {
                      src: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Chocolate fountain",
                    },
                    {
                      src: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Custom logo desserts",
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: 5,
    title: "Event Planners",
    description: "Professional planners to organize your perfect event",
    services: [
      {
        id: 51,
        name: "Elite Events",
        rating: 4.9,
        specialization: "Full-Service Planning",
        price: "$2,500+/event",
        profileData: {
          id: 511,
          username: "elite_events",
          subtext: "Creating extraordinary events with meticulous attention to detail",
          profile: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
          following: 678,
          followers: 1890,
          specialties: ["Weddings", "Corporate Events", "Galas", "Luxury Celebrations", "Destination Events"],
          reviews: [
            {
              id: 5101,
              name: "Victoria Johnson",
              rating: 5.0,
              date: "2024-12-20",
              comment:
                "Elite Events planned our wedding from start to finish and exceeded all expectations. Every detail was perfect!",
              avatar:
                "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 5102,
              name: "Robert Chen",
              rating: 4.8,
              date: "2024-11-30",
              comment:
                "Our company's 25th anniversary gala was flawlessly executed. Their vendor connections and negotiation skills saved us money too.",
              avatar:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 5103,
              name: "Sophia Martinez",
              rating: 5.0,
              date: "2024-11-15",
              comment:
                "They planned our destination wedding in just three months and it was absolutely perfect. Highly recommend!",
              avatar:
                "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 5104,
              name: "James Wilson",
              rating: 4.9,
              date: "2024-10-28",
              comment:
                "Elite Events handled our charity gala with professionalism and creativity. They even helped us exceed our fundraising goal.",
              avatar:
                "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
          ],
          galleryImages: [
            {
              id: 5111,
              src: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=600",
              location: "Luxury Resort",
              date: { day: "22", month: "Jun" },
              tag: "Wedding",
              album: [
                {
                  id: 51111,
                  name: "Beachfront Destination Wedding",
                  subheading: "Luxury Celebration",
                  date: "saturday, june 22",
                  time: "4:00 pm - 11:00 pm",
                  location: "Coastal Paradise Resort",
                  images: [
                    {
                      src: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-2 col-span-1",
                      alt: "Beach wedding setup",
                    },
                    {
                      src: "https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Reception decoration",
                    },
                    {
                      src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Evening celebration",
                    },
                  ],
                },
              ],
            },
            {
              id: 5112,
              src: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600",
              location: "Grand Hotel",
              date: { day: "15", month: "Sep" },
              tag: "Corporate",
              album: [
                {
                  id: 51121,
                  name: "Annual Corporate Gala",
                  subheading: "25th Anniversary Celebration",
                  date: "friday, september 15",
                  time: "7:00 pm - 12:00 am",
                  location: "Grand Hotel Ballroom",
                  images: [
                    {
                      src: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-2 col-span-1",
                      alt: "Corporate gala setup",
                    },
                    {
                      src: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Executive presentation",
                    },
                    {
                      src: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Award ceremony",
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        id: 52,
        name: "Budget Brilliance",
        rating: 4.7,
        specialization: "Affordable Planning",
        price: "$800+/event",
        profileData: {
          id: 521,
          username: "budget_brilliance",
          subtext: "Beautiful events that don't break the bank",
          profile: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=600",
          following: 456,
          followers: 1245,
          specialties: [
            "Budget Weddings",
            "Small Events",
            "DIY Coordination",
            "Day-of Coordination",
            "Vendor Referrals",
          ],
          reviews: [
            {
              id: 5201,
              name: "Jennifer Adams",
              rating: 4.8,
              date: "2024-12-10",
              comment:
                "Budget Brilliance helped us plan our dream wedding on a tight budget. Their DIY suggestions and vendor connections saved us thousands!",
              avatar:
                "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 5202,
              name: "Michael Park",
              rating: 4.6,
              date: "2024-11-22",
              comment:
                "Their day-of coordination package was perfect for us. We did the planning but had professional help when it counted most.",
              avatar:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 5203,
              name: "Emily Johnson",
              rating: 4.9,
              date: "2024-11-05",
              comment:
                "They helped us throw an amazing graduation party without going over budget. Creative and resourceful team!",
              avatar:
                "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              id: 5204,
              name: "David Wilson",
              rating: 4.7,
              date: "2024-10-18",
              comment:
                "Budget Brilliance delivered exactly what they promised - a beautiful event that didn't empty our savings account.",
              avatar:
                "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
          ],
          galleryImages: [
            {
              id: 5211,
              src: "https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=600",
              location: "Community Center",
              date: { day: "18", month: "May" },
              tag: "Wedding",
              album: [
                {
                  id: 52111,
                  name: "Budget-Friendly Wedding",
                  subheading: "Elegant Simplicity",
                  date: "saturday, may 18",
                  time: "2:00 pm - 8:00 pm",
                  location: "Riverside Community Center",
                  images: [
                    {
                      src: "https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-2 col-span-1",
                      alt: "DIY wedding decoration",
                    },
                    {
                      src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Simple elegant reception",
                    },
                    {
                      src: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Budget-friendly setup",
                    },
                  ],
                },
              ],
            },
            {
              id: 5212,
              src: "https://images.pexels.com/photos/7942526/pexels-photo-7942526.jpeg?auto=compress&cs=tinysrgb&w=600",
              location: "Backyard",
              date: { day: "10", month: "Jun" },
              tag: "Birthday",
              album: [
                {
                  id: 52121,
                  name: "Backyard Birthday Celebration",
                  subheading: "Affordable Festivity",
                  date: "sunday, june 10",
                  time: "3:00 pm - 9:00 pm",
                  location: "Private Residence",
                  images: [
                    {
                      src: "https://images.pexels.com/photos/7942526/pexels-photo-7942526.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "row-span-2 col-span-1",
                      alt: "Backyard party setup",
                    },
                    {
                      src: "https://images.pexels.com/photos/11625530/pexels-photo-11625530.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "DIY decoration",
                    },
                    {
                      src: "https://images.pexels.com/photos/12845899/pexels-photo-12845899.jpeg?auto=compress&cs=tinysrgb&w=600",
                      gridClass: "col-span-1",
                      alt: "Budget-friendly celebration",
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    ],
  },
]

export default serviceData

