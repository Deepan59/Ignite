import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DomainPage from './pages/DomainPage';
import StaffPage from './pages/StaffPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/domain/:domainName" element={<DomainPage />} />
                    <Route path="/staff" element={<StaffPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
