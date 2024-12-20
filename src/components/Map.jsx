const Map = () => {
    return (
        <div className="">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15956.0827066451!2d36.9648526!3d-1.1457049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1734446134288!5m2!1sen!2ske"
                className="w-[515px] h-[348px]  bg-gray-800 rounded-[30px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default Map;
