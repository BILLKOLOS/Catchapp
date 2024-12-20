import { useState } from "react";
import BottomNav from "./HomeNavBottom";
import TopNav from "./HomeNavTop";
import MainContent from "./MainContent";

const Home = () => {
    const [activeFilter, setActiveFilter] = useState("Today");

    return (
        <div>
            <TopNav activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
            <MainContent activeFilter={activeFilter} />
            <BottomNav />
        </div>
    );
};

export default Home;
