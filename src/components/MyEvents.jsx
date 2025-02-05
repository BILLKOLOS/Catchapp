import React, { useState } from "react";

const MyEvents = ({ activeFilter }) => {
  const [events] = useState([
      {
          id: 1, title: "White Party",
          date: "12th Nov", host: "Susan",
          likes: 54, attendees: '123/400',
          description: "welcome to the white party as we cut through th ages of entertainment",
          image: "https://images.pexels.com/photos/28976233/pexels-photo-28976233/free-photo-of-rustic-cheese-board-with-cold-cuts-and-bread.jpeg?auto=compress&cs=tinysrgb&w=600",
          type: "Today", profile: "https://images.pexels.com/photos/29783131/pexels-photo-29783131/free-photo-of-silhouette-of-man-in-profile-wearing-hat-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
          id: 2, title: "Graduation",
          date: "1st Dec", host: "James",
          likes: 32, attendees: '123/400',
          description: "welcome to the Graduation party as we cut through th ages of entertainment",
          image: "https://images.pexels.com/photos/7944240/pexels-photo-7944240.jpeg?auto=compress&cs=tinysrgb&w=600",
          type: "Tomorrow", profile: "https://images.pexels.com/photos/29846889/pexels-photo-29846889/free-photo-of-portrait-of-woman-by-lake-in-kaduna-nigeria.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
          id: 3, title: "Wedding Anniversary",
          date: "5th Jan", host: "Andrew",
          likes: 32, attendees: '123/400',
          description: "welcome to the wedding anniversary ceremony as we cut through th ages of entertainment",
          image: "https://images.pexels.com/photos/29816651/pexels-photo-29816651/free-photo-of-elegant-engagement-ring-in-velvet-box.jpeg?auto=compress&cs=tinysrgb&w=600",
          type: "This Year", profile: "https://images.pexels.com/photos/29846889/pexels-photo-29846889/free-photo-of-portrait-of-woman-by-lake-in-kaduna-nigeria.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
          id: 4, title: "Home Coming Ceremony",
          date: "12th Nov", host: "Ochieng",
          likes: 100, attendees: '123/400',
          description: "welcome to the Home coming ceremony as we cut through th ages of entertainment",
          image: "https://images.pexels.com/photos/5604922/pexels-photo-5604922.jpeg?auto=compress&cs=tinysrgb&w=600",
          type: "Today", profile: "https://images.pexels.com/photos/29846889/pexels-photo-29846889/free-photo-of-portrait-of-woman-by-lake-in-kaduna-nigeria.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
          id: 5, title: "Sports Day",
          date: "12th Feb", host: "Michael",
          likes: 100, attendees: '123/400',
          description: "welcome to the Sports Day as we cut through th ages of entertainment",
          image: "https://images.pexels.com/photos/29783074/pexels-photo-29783074/free-photo-of-men-practicing-soccer-on-outdoor-field.jpeg?auto=compress&cs=tinysrgb&w=600",
          type: "Next Month", profile: "https://images.pexels.com/photos/29846889/pexels-photo-29846889/free-photo-of-portrait-of-woman-by-lake-in-kaduna-nigeria.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
  ]);

  // Filter events based on the activeFilter
  const filteredEvents = events.filter(
    (event) => event.type === activeFilter
  );

  return (
    <div className="w-full px-0 md:px-4">
        <h1 className="font-bold text-[#272222] text-base md:text-lg mb-4">My Events</h1>
        <div className="w-full grid grid-cols-2  md:grid-cols-3 gap-4 md:gap-8">
            {filteredEvents.map((event) => (
                <div
                    key={event.id}
                    className="bg-[#272222] rounded-lg md:rounded-[30px] py-3 px-4 w-full max-w-[227px] mx-auto flex flex-col gap-6 md:gap-10"
                >
                    <div className="flex justify-between items-center gap-2 md:gap-4">
                        <div className="w-full">
                            <img
                                src={event.profile}
                                alt="profile"
                                className="object-cover rounded-full w-12 h-12 md:w-16 md:h-16"
                            />
                        </div>
                        <div>
                            <p className="text-white text-sm md:text-base font-semibold">{event.host}</p>
                        </div>
                    </div>
                    <h3 className="text-center text-white font-[Pacifico] text-xl md:text-2xl">
                        {event.title}
                    </h3>
                    <div className="flex justify-between items-center">
                        <p className="text-white text-sm md:text-base">{event.attendees}</p>
                        <div className="border-[1px] border-gray-100 px-1 md:px-4 py-1 rounded-[30px] bg-gray-300 bg-opacity-50 cursor-pointer">
                            <p className="text-white text-sm md:text-base">Request</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
};

export default MyEvents;
