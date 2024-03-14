// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import YearSelection from './components/YearSelection';
import Branch from './components/Branch';
import Upload from './components/Upload';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/abhishek@123" element={<Upload />} />
        <Route path="/" element={<YearSelection />} />
        <Route path="/branches/:year" element={<Branch/>} />
        {/* <Route path="/links/:year/:branch" element={<Links />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
