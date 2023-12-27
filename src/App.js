import React from "react";
import Home from "./views/Home";
import About from "./views/About";
import Services from "./views/Services";
import Contact from "./views/Contact";
import Portfolio from "./views/Portfolio";
import Resume from "./views/Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
