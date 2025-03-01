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
import PicsGallery from './pages/PicsGallery.jsx';
import EventPhotoAlbum from './pages/EventPhotoAlbum';
import ProfileGallery from './pages/ProfileGallery.jsx';
import ProfilePhotoAlbum from './pages/ProfilePhotoAlbum.jsx';
import EventRoute from './pages/EventRoute.jsx';
import MyOrganizerEvents from './pages/MyEventDetails.jsx';
import EditEvent from './pages/EditEvent.jsx';
import EventAnalytics from './pages/EventAnlytics.jsx';
import MyEvent from './pages/Myvent.jsx';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    const organizerId = 101;
  
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
                            <Route path="gives/service/:id" element={<PhotoProfile />}>
                                <Route path="pics" element={<PicsGallery />} />
                                <Route path="album/:eventId" element={<EventPhotoAlbum />} />
                            </Route>
                            <Route path="feeds" element={<SocialFeed />} />
                        </Route>
                        <Route path="/profile/:id" element={<ProfilePage />}>
                            <Route path="gallery" element={<ProfileGallery />} />
                            <Route path="album/:albumId" element={<ProfilePhotoAlbum />} />
                        </Route>
                        <Route path="/happening-now" element={<HappeningNow />} />
                        <Route path='/my-event' element={<MyEvent />} >
                            <Route path="details" element={<MyOrganizerEvents organizerId={organizerId} />} />
                            <Route path="analytics" element={<EventAnalytics />} />
                            {/*<Route path=":id/edit" element={<EditEvent onClose={() => navigate(-1)} />} />*/}
                        </Route>
                        <Route path='/event-route' element={<EventRoute />} />
                    </Routes>
                </div>
            </div>
            {isLoading && <LoadingSpinner />}
        </Router>
    );
};

export default App;