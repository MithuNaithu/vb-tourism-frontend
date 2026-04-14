import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // <-- Added SEO Provider
import Home from './pages/Home';
import About from './pages/About';
import Admin from './pages/Admin'; 

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Your secure Admin route is safely back! */}
          <Route path="/admin-naithik-mithika-aryav-6j-secure" element={<Admin />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;