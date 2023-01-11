import React from 'react';
import Home from './pages/Home';
import Team from './pages/Team';
import Contact from './pages/Contact';
import WhatWeDo from './pages/WhatWeDo';
import Whoweare from './pages/WhoWeAre';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/whatwedo" element={<WhatWeDo />} />
        {/* <Route path="/Whoweare" element={<WhatWeDo />} /> */}
        <Route path="/Whoweare" element={<Whoweare />} />
      </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App
