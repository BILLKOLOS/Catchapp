import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Explore from './pages/Explore';
import Trending from './pages/Trending';
import ServiceCard from './pages/Gives';
import SocialFeed from './pages/Feed';
import PhotoProfile from './pages/GiveItem';
import ProfilePage from './pages/ProfilePage';
import HappeningNow from './pages/happening_now.jsx';
import LoadingSpinner from './components/LoadingSpinner';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            <div className={`relative ${isLoading ? 'blur-md' : ''} transition-all duration-300`}>
                <div className="text-white">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/explore" element={<Explore />}>
                            <Route path="trending" element={<Trending />} />
                            <Route path="gives" element={<ServiceCard />} />
                            <Route path="gives/service/:id" element={<PhotoProfile />} />
                            <Route path="feeds" element={<SocialFeed />} />
                        </Route>
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/happening-now" element={<HappeningNow />} />
                    </Routes>
                </div>
            </div>
            {isLoading && <LoadingSpinner />}
        </Router>
    );
};

export default App;