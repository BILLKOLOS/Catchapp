import Home from './components/Home.jsx';
import Explore from './pages/Explore';
import Trending from './pages/Trending';
import ServiceCard from './pages/Gives';
import SocialFeed from './pages/Feed';
import PhotoProfile from './pages/GiveItem';
import ProfilePage from './pages/ProfilePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div className="text-white p-3">
                <Routes>
                    {/* Home Route */}
                    <Route path="/" element={<Home />} />

                    {/* Explore Route */}
                    <Route path="/explore" element={<Explore />}>
                        <Route path="trending" element={<Trending />} />

                        {/* Gives Route */}
                        <Route path="gives" element={<ServiceCard />} />
                        <Route path="gives/service/:id" element={<PhotoProfile />} />

                        {/* Feeds Route */}
                        <Route path="feeds" element={<SocialFeed />} />
                    </Route>
                    {/* Profile Page */}
                    <Route path="/profile" element={<ProfilePage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
