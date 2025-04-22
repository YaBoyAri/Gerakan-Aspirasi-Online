import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LaporanPengajuanSeminarPage from "./Pages/LaporanPengajuanSeminarPage";
import LaporanKinerjaDosenPage from "./Pages/LaporanKinerjaDosenPage";
import LaporanKerusakanFasilitasPage from "./Pages/LaporanKerusakanFasilitasPage";
import LaporanKebijakanKampusPage from "./Pages/LaporanKebijakanKampusPage";
import AdminPage from "./Pages/AdminPage";
import NavbarPages from "./Component/NavbarPages";
import LaporanPage from "./Pages/LaporanPage";
import LaporanOrmawaPage from "./Pages/LaporanOrmawaPage";

const App = () => {
  return (
    <Router>
      <NavbarPages/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/laporan-pengajuan-seminar" element={<LaporanPengajuanSeminarPage />} />
        <Route path="/laporan-kinerja-dosen" element={<LaporanKinerjaDosenPage />} />
        <Route path="/laporan-kerusakan-fasilitas" element={<LaporanKerusakanFasilitasPage />} />
        <Route path="/laporan-kebijakan-kampus" element={<LaporanKebijakanKampusPage />} />
        <Route path="/laporan-ormawa" element={<LaporanOrmawaPage />} />
        <Route path="/laporan" element={<LaporanPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
};

export default App;