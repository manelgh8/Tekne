import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Goals from './pages/Goals';
 import Events from './pages/Events';
import Contact from './pages/Contact';
import Inscriptions from './pages/Inscriptions';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/events" element={<Events />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/inscriptions" element={<Inscriptions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;