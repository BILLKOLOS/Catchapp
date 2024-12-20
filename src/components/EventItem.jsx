const EventItem = ({ event }) => {
    return (
        <div className="border rounded-lg p-4 bg-[#D9D9D9]">
            <h3 className="font-semibold">{event.title}</h3>
            <p>Date: {event.date}</p>
            <p>Hosted by: {event.host}</p>
        </div>
    );
};

export default EventItem;