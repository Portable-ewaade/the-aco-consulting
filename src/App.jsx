import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { Services } from './pages/Services';
import { ContactUs } from './pages/ContactUs';
import Privacy from './pages/Privacy';

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/privacypolicy" element={<Privacy />} />
      </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App
