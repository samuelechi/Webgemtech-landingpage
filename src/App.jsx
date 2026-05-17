import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// We will import your pages here once we create them
import Home from './pages/Home';
import LocalBusiness from './pages/LocalBusiness';
import CustomSoftware from './pages/CustomSoftware';
import ChatWidget from './components/ChatWidget';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* If we build a global Navbar, it would go here so it shows on every page */}
        <Navbar />

        <ChatWidget />
        <Routes>
          {/* The main landing page when someone goes to webgemtech.ca */}
          <Route path="/" element={<Home />} />

          {/* The $650 packages page */}
          <Route path="/small-business" element={<LocalBusiness />} />

          {/* The $2,500+ SaaS page */}
          <Route path="/software" element={<CustomSoftware />} />

          {/* The Contact page */}
          <Route path="/contact" element={<Contact />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;