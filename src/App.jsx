import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // 👈 THIS WAS THE MISSING LINE!
import Home from './pages/Home';
import About from './pages/About';
import Admin from './pages/Admin'; 

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin-vp-naithik-2026-secure" element={<Admin />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;