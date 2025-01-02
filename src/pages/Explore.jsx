import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Trending from "./Trending.jsx";

const Explore = () => {
    return (
        <div className="text-black">
            <Navbar />
            
            <Outlet /> {/* This renders nested routes like /explore/trending */}
        </div>
    );
};

export default Explore;
