import { Outlet } from "react-router-dom";
import AnalyticsNav from "../components/AnalyticsNav";
import { useParams } from "react-router-dom";

// Retrieve the event id from the URL


const MyEvent = () => {

    const { id } = useParams();

    return (
        <div className="text-black">
            <AnalyticsNav id={id}/>
            
            <Outlet /> {/* This renders nested routes like /explore/trending */}
        </div>
    );
};

export default MyEvent;
