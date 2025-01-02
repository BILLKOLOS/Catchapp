import Home from './components/Home.jsx';
import Explore from './pages/Explore';
import Trending from './pages/Trending';
import  ServiceCard from './pages/Gives';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div className="text-[#FFFFFF] p-3">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/explore" element={<Explore />}>
                        <Route path="trending" element={<Trending />} />
                        <Route path="gives" element={<ServiceCard />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
