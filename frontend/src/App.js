import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Branches from "./components/Branches";
import Navbar from "./components/Navbar";
import Upload from "./components/Upload"
import Links from "./components/Links";
import Discuss from "./components/Discuss";
import Answer from "./components/Answer";
import LoginPage from "./components/Login";
import SignupPage from "./components/Signup";
import Dashboard from "./components/Dashboard";




function App() {

  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/about" element={<About />} />
        <Route path="/links/:year/:branch" element={<Links />} />
        <Route path="/" element={<Home />} />
        <Route path="/branches/:year" element={<Branches />} />
        <Route path="/Discuss" element={<Discuss />} />
        <Route path="/answer/:id" element={<Answer />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

    </Router>
  );
}

export default App;











