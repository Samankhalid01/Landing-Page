import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/header';
import Features from './Components/Features';
import Services from './Components/Services';
import Subscribe from './Components/Subscribe';
import Home from './pages/home';
import About from './pages/about';
import './index.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header /> {/* it will be Displayed on all pages */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/services" element={<Services />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
