import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LaporanPage from "./Pages/LaporanPage";
import LaporanPengajuanSeminarPage from "./Pages/LaporanPengajuanSeminarPage";
import LaporanKinerjaDosenPage from "./Pages/LaporanKinerjaDosenPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/laporan" element={<LaporanPage />} />
        <Route path="/laporan-pengajuan-seminar" element={<LaporanPengajuanSeminarPage />} />
        <Route path="/laporan-kinerja-dosen" element={<LaporanKinerjaDosenPage />} />
      </Routes>
    </Router>
  );
};

export default App;