import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



// import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Branches from "./components/Branches";
import Navbar from "./components/Navbar";
import Upload from "./components/Upload"




function App() {
  
  return (
    <Router>
      
      <Navbar />

      <Routes>
        <Route path="/abhishek@123" element={<Upload />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/branches/:year" element={<Branches />} />
      </Routes>
      
    </Router>
  );
}

export default App;
