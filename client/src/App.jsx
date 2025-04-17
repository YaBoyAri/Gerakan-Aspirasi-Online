import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LaporanPage from "./pages/LaporanPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/laporan" element={<LaporanPage />} />
      </Routes>
    </Router>
  );
};

export default App;
